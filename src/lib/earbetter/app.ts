import {goto} from '$app/navigation';
import {z} from 'zod';
import {signal, type Signal, computed, effect} from '@preact/signals-core';
import {getContext, setContext} from 'svelte';

import {to_play_level_url, type LevelDef, type LevelId} from '$lib/earbetter/level';
import {create_project_def, ProjectDef, ProjectId, ProjectName} from '$lib/earbetter/project';
import {create_level_stats} from '$lib/earbetter/level_stats';
import {load_from_storage, set_in_storage} from '$lib/util/storage';

// TODO refactor all storage calls, and rethink in signals instead of all top-level orchestration (that's less reusable)

export const AppData = z.object({
	projects: z.array(z.object({id: ProjectId, name: ProjectName})),
});
export type AppData = z.infer<typeof AppData>;

export const DEFAULT_APP_DATA: AppData = {projects: []};

const APP_KEY = Symbol('app');
export const get_app = (): App => getContext(APP_KEY);
export const set_app = (store: App): App => setContext(APP_KEY, store);

export class App {
	app_data: Signal<AppData>; // TODO BLOCK wheres the source of truth? currently need to keep these in sync at 3 levels -- mixing serialization concerns with runtime representations

	project_defs: Signal<ProjectDef[]> = signal([]);

	selected_project_def: Signal<ProjectDef | null> = signal(null);
	level_defs = computed(() => this.selected_project_def.value?.level_defs || null);
	editing_project: Signal<boolean> = signal(false); // TODO BLOCK can this be removed for `editing_project_def`?
	editing_project_def: Signal<ProjectDef | null> = signal(null);

	active_level_def: Signal<LevelDef | null> = signal(null);
	editing_level_def: Signal<LevelDef | null> = signal(null);

	level_stats = create_level_stats();

	constructor(public readonly get_ac: () => AudioContext, public readonly storage_key = 'app') {
		// TODO BLOCK refactor
		// TODO BLOCK maybe `new App(App.load())` ?
		this.app_data = signal(this.load());
		this.saved = this.app_data.peek(); // hacky, but enables the following effect without waste
		effect(() => this.save());
		console.log(`app_data`, this.app_data.peek());
		this.load_project(this.app_data.peek().projects[0]?.id || null);
		// TODO refactor
		if (this.project_defs.peek().length) {
			this.selected_project_def.value = this.project_defs.peek()[0];
		}
	}

	// returns a stable reference to data that's immutable by convention
	toJSON(): AppData {
		return this.app_data.value;
	}

	load(): AppData {
		const loaded = load_from_storage(this.storage_key, DEFAULT_APP_DATA, AppData.parse);
		let ids_to_delete: ProjectId[] | null = null;
		for (const p of loaded.projects) {
			if (localStorage.getItem(p.id) === null) {
				console.warn('deleting unknown id', p);
				(ids_to_delete || (ids_to_delete = [])).push(p.id);
			}
		}
		if (ids_to_delete) {
			loaded.projects = loaded.projects.filter((p) => !ids_to_delete!.includes(p.id));
		}
		return loaded;
	}

	private saved: AppData; // immutable, used to avoid waste

	save(): void {
		const data = this.toJSON();
		if (data === this.saved) return;
		console.log('App.save', data);
		set_in_storage(this.storage_key, data);
		this.saved = data;
	}

	save_project = (id: ProjectId): void => {
		console.log('save_project', id);
		const project_def = this.project_defs.peek().find((p) => p.id === id);
		set_in_storage(id, project_def); // correctly deletes the storage key if `undefined`
		const app_data = this.app_data.peek();
		const {projects} = app_data;
		if (project_def) {
			if (!projects.some((p) => p.id === id)) {
				this.app_data.value = {projects: projects.concat({id, name: project_def.name})};
				this.save(); // TODO should this be an effect?
			}
		} else {
			if (projects.some((p) => p.id === id)) {
				this.app_data.value = {projects: projects.filter((p) => p.id !== id)};
				this.save(); // TODO should this be an effect?
			}
		}
	};

	load_project = (id: ProjectId | null): ProjectDef | null => {
		console.log('load_project', id);
		const loaded = id ? load_from_storage(id, null, ProjectDef.parse) : null;
		console.log(`loaded`, loaded);
		if (loaded) {
			// TODO batch if this code stays imperative like this
			this.project_defs.value = this.project_defs.peek().concat(loaded);
			return loaded;
		} else {
			console.log(`load_project failed, creating new`, id);
			const def = create_project_def();
			this.create_project(def);
			return def;
		}
	};

	select_project = (id: ProjectId | null): void => {
		console.log('select_project', id);
		if (!id) {
			this.selected_project_def.value = null;
			return;
		}
		const def = this.project_defs.peek().find((d) => d.id === id) || this.load_project(id);
		this.selected_project_def.value = def;
		this.editing_project_def.value = def;
	};

	edit_project = (project_def: ProjectDef | null): void => {
		console.log('edit_project', project_def);
		this.editing_project.value = !!project_def;
		this.editing_project_def.value = project_def;
		if (project_def) this.selected_project_def.value = project_def;
	};

	remove_project = (id: ProjectId): void => {
		console.log('remove_project', id);
		const project_defs = this.project_defs.peek();
		const existing = project_defs.find((d) => d.id === id);
		if (!existing) return;
		if (this.selected_project_def.peek()?.id === id) {
			this.selected_project_def.value = null;
		}
		this.project_defs.value = project_defs.filter((d) => d !== existing);
		this.save_project(id);
	};

	create_project = (project_def: ProjectDef): void => {
		console.log('create_project', project_def);
		const project_defs = this.project_defs.peek();
		const {id} = project_def;
		const existing = project_defs.find((d) => d.id === id);
		if (existing) {
			console.log('project already exists', project_def, existing);
			return;
		}
		this.app_data.value = {
			...this.app_data.peek(),
			projects: this.app_data.peek().projects.concat({id, name: project_def.name}),
		};
		this.project_defs.value = project_defs.concat(project_def);
		this.selected_project_def.value = project_def;
		this.save_project(id);
	};

	update_project = (project_def: ProjectDef): void => {
		console.log('update_project', project_def);
		const project_defs = this.project_defs.peek();
		const {id} = project_def;
		const index = project_defs.findIndex((p) => p.id === id);
		if (index === -1) {
			console.error('cannot find project_def to update', id, project_defs);
			return; // no active project
		}
		const updated = project_defs.slice();
		updated[index] = project_def;
		this.project_defs.value = updated;
		if (this.selected_project_def.peek()?.id === id) {
			this.selected_project_def.value = project_def;
		}
		this.save_project(id);
	};

	play_level_def = async (id: LevelId): Promise<void> => {
		console.log('play_level_def', id);
		const level_def = this.level_defs.peek()?.find((d) => d.id === id);
		if (!level_def) {
			console.error('cannot find level_def with id', id);
			return;
		}
		void this.get_ac().resume(); // TODO where's the best place for this? needs to be synchronous with a click or similar, so this breaks if `play_level_def` is called without a user action
		await goto(to_play_level_url(level_def));
	};

	edit_level_def = (level_def: LevelDef | null): void => {
		console.log('edit_level_def', level_def);
		this.editing_level_def.value = level_def;
	};

	remove_level_def = (id: LevelId): void => {
		console.log('remove_level_def', id);
		const project_def = this.selected_project_def.peek();
		if (!project_def) {
			console.error('cannot remove level_def without a project', project_def, id);
			return; // no active project
		}
		const {level_defs} = project_def;
		const level_def = level_defs.find((d) => d.id === id);
		if (!level_def) {
			console.error('cannot find level_def with id', id);
			return;
		}
		if (id === this.editing_level_def.value?.id) {
			this.editing_level_def.value = null;
		}
		this.update_project({
			...project_def,
			level_defs: level_defs.filter((d) => d !== level_def),
		});
	};

	create_level_def = (level_def: LevelDef): void => {
		console.log('create_level_def', level_def);
		const project_def = this.selected_project_def.peek();
		if (!project_def) {
			console.error('cannot update level_def without a project', project_def, level_def);
			return; // no active project
		}
		const {level_defs} = project_def;
		// TODO is it weird that these access both `this.level_defs` and the source of truth `project_def`,
		// or would it be better to always go through the `project_def`?
		const existing = level_defs.find((d) => d.id === level_def.id);
		if (existing) {
			console.log('level_def already exists', level_def, existing);
			return;
		}

		this.update_project({...project_def, level_defs: level_defs.concat(level_def)});
		this.editing_level_def.value = level_def;
	};

	update_level_def = (level_def: LevelDef): void => {
		console.log('update_level_def', level_def);
		const project_def = this.selected_project_def.peek();
		if (!project_def) {
			console.error('cannot update level_def without a project', project_def, level_def);
			return; // no active project
		}
		const {level_defs} = project_def;
		const {id} = level_def;
		const index = level_defs.findIndex((d) => d.id === id);
		if (index === -1) {
			console.error('cannot find level_def to update', id, level_defs);
			return;
		}
		const updated = level_defs.slice();
		updated[index] = level_def;
		this.update_project({...project_def, level_defs: updated});
		this.editing_level_def.value = level_def;
	};

	exit_level_to_map = async (success = false): Promise<void> => {
		console.log('exit_level_to_map', success);
		const $active_level_def = this.active_level_def.peek();
		if (!$active_level_def) return;
		if (success) {
			this.level_stats.register_success($active_level_def.id);
		}
		this.active_level_def.value = null;
		await goto('#');
	};
}
