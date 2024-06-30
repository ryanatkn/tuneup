import {random_item, random_int} from '@ryanatkn/belt/random.js';
import {z} from 'zod';
import type {Flavored} from '@ryanatkn/belt/types.js';
import {signal, batch, Signal} from '@preact/signals-core';
import {base} from '$app/paths';

import {Midi, Intervals} from '$lib/music.js';
import {play_note} from '$lib/play_note.js';
import type {Instrument, Milliseconds, Volume} from '$lib/helpers.js';
import {serialize_to_hash} from '$lib/url.js';
import {to_random_id} from '$lib/id.js';
import type {Get_Audio_Context} from '$lib/audio_context.js';

// TODO this isn't idiomatic signals code yet, uses `peek` too much

export const DEFAULT_NOTE_DURATION: Milliseconds = 333; // TODO adjust this to make more challenging levels
export const DEFAULT_NOTE_DURATION_2: Milliseconds = 500; // TODO adjust this to make more challenging levels
export const DEFAULT_NOTE_DURATION_FAILED: Milliseconds = 67;
export const DEFAULT_FEEDBACK_DURATION: Milliseconds = 1000; // TODO configurable
export const DEFAULT_SEQUENCE_LENGTH = 2;
export const DEFAULT_TRIAL_COUNT = 5;
export const DEFAULT_LEVEL_NAME = 'new level';
export const DEFAULT_INTERVALS: Intervals = [5, 7];
export const DEFAULT_TONICS: Midi[] | null = null;
export const DEFAULT_MIN_NOTE: Midi = 48;
export const DEFAULT_MAX_NOTE: Midi = 84;

export const Level_Id = z.string();
export type Level_Id = Flavored<z.infer<typeof Level_Id>, 'Level_Id'>; // TODO @multiple this doesn't work when used as a schema, use z.brand() instead? or are the egonomics too bad?
export const create_level_id = (): Level_Id => to_random_id();

export const Level_Name = z.string().min(1).max(1000);
export type Level_Name = Flavored<z.infer<typeof Level_Name>, 'Level_Name'>; // TODO @multiple this doesn't work when used as a schema, use z.brand() instead? or are the egonomics too bad?

export const Level_Data = z.object({
	id: Level_Id.default(create_level_id),
	name: Level_Name.default(DEFAULT_LEVEL_NAME),
	intervals: Intervals.default(DEFAULT_INTERVALS),
	tonics: z.array(Midi).nullable().default(DEFAULT_TONICS),
	trial_count: z.number().default(DEFAULT_TRIAL_COUNT),
	sequence_length: z.number().default(DEFAULT_SEQUENCE_LENGTH),
	min_note: Midi.default(DEFAULT_MIN_NOTE),
	max_note: Midi.default(DEFAULT_MAX_NOTE),
});
export type Level_Data = z.infer<typeof Level_Data>;

export const Level_Hash_Data = z.object({
	level: Level_Data,
});
export type Level_Hash_Data = z.infer<typeof Level_Hash_Data>;

export type Status =
	| 'initial'
	| 'presenting_prompt'
	| 'waiting_for_input'
	| 'showing_success_feedback'
	| 'showing_failure_feedback'
	| 'complete';

// TODO extract into its own module? decompose into signals?
export interface Trial {
	index: number;
	valid_notes: Set<Midi>;
	sequence: Midi[];
	presenting_index: number | null; // index of interval being presented
	guessing_index: number | null; // index of interval being guessed
	retry_count: number;
}

const DEFAULT_STATUS: Status = 'initial';
const DEFAULT_TRIAL: Trial | null = null;

export class Level {
	seq_id = 0; // used to track the async note playing sequence for cancellation

	constructor(
		public readonly level_data: Level_Data, // TODO maybe make optional?
		public readonly ac: Get_Audio_Context,
		public readonly volume: Signal<Volume>,
		public readonly instrument: Signal<Instrument>,
		protected register_success: (id: Level_Id, mistake_count: number) => void,
	) {}

	status: Signal<Status> = signal(DEFAULT_STATUS);
	mistakes: Signal<number> = signal(0);
	trial: Signal<Trial | null> = signal(DEFAULT_TRIAL);
	trials: Signal<Trial[]> = signal([]);
	last_guess: Signal<Midi | null> = signal(null);

	reset = (): void => {
		batch(() => {
			this.trial.value = DEFAULT_TRIAL;
			this.trials.value = [];
			this.update_status(DEFAULT_STATUS);
			this.start();
		});
	};

	start = (): void => {
		console.log('start level');
		if (this.status.peek() !== 'initial') return;
		this.next_trial();
	};

	dispose = (): void => {
		this.seq_id++; // cancels anything that's playing
	};

	update_status(value: Status): void {
		console.log(`update_status`, value);
		this.status.value = value;
		// TODO maybe a wait a tick here or refactor? is dependent on being called after changes to e.g. `this.trial`
		if (value === 'presenting_prompt') {
			void this.present_trial_prompt();
		} else if (value === 'complete') {
			this.register_success(this.level_data.id, this.mistakes.peek());
		}
	}

	present_trial_prompt = async (): Promise<void> => {
		const $trial = this.trial.peek();
		if (!$trial) return;
		console.log('present_trial_prompt', $trial.sequence);
		this.trial.value = {...$trial, guessing_index: 0};
		const current_seq_id = ++this.seq_id;
		const sequence_length = $trial.sequence.length;
		for (let i = 0; i < sequence_length; i++) {
			const note = $trial.sequence[i];
			this.trial.value = {
				...this.trial.peek()!,
				presenting_index: i,
			};
			const duration =
				sequence_length < DEFAULT_SEQUENCE_LENGTH ? DEFAULT_NOTE_DURATION_2 : DEFAULT_NOTE_DURATION; // TODO refactor, see elsewhere
			await play_note(this.ac(), note, this.volume.peek(), duration, this.instrument.peek()); // eslint-disable-line no-await-in-loop
			if (current_seq_id !== this.seq_id || !this.trial.peek()) return; // cancel
		}
		batch(() => {
			this.trial.value = {
				...this.trial.peek()!,
				presenting_index: null,
			};
			this.update_status('waiting_for_input');
		});
	};

	// TODO helpful to have a return value?
	guess = (note: Midi): void => {
		if (this.status.peek() !== 'waiting_for_input') return;
		const $trial = this.trial.peek();
		const guessing_index = $trial?.guessing_index;
		if (!$trial || guessing_index == null) return;
		batch(() => {
			const actual = get_correct_guess_for_trial($trial);
			console.log('guess', guessing_index, note, actual);

			this.last_guess.value = note;

			// if incorrect -> FAILURE -> showing_failure_feedback -> REPROMPT
			if (actual !== note) {
				console.log('guess incorrect');
				void play_note(
					this.ac(),
					note,
					this.volume.peek(),
					DEFAULT_NOTE_DURATION_FAILED,
					this.instrument.peek(),
				);
				if (guessing_index === 0 || !$trial.valid_notes.has(note)) {
					return; // no penalty or delay if this is the first one
				}
				// TODO should this be "on enter showing_failure_feedback state" logic?
				this.mistakes.value = this.mistakes.peek() + 1;
				this.update_status('showing_failure_feedback');
				setTimeout(() => this.retry_trial(), DEFAULT_FEEDBACK_DURATION);
				return;
			}

			// guess is correct
			const sequence_length = $trial.sequence.length;
			const duration =
				sequence_length < DEFAULT_SEQUENCE_LENGTH ? DEFAULT_NOTE_DURATION_2 : DEFAULT_NOTE_DURATION; // TODO refactor, see elsewhere
			void play_note(this.ac(), note, this.volume.peek(), duration, this.instrument.peek());

			if (guessing_index >= sequence_length - 1) {
				// if more -> update current response index
				this.update_status('showing_success_feedback');
				// TODO should this be "on enter showing_success_feedback state" logic?
				if ($trial.index < this.level_data.trial_count - 1) {
					console.log('guess correct and done with trial');
					setTimeout(() => this.next_trial(), DEFAULT_FEEDBACK_DURATION);
				} else {
					console.log('guess correct and done with all trials!');
					setTimeout(() => this.complete_level(), DEFAULT_FEEDBACK_DURATION); // TODO hacky, the single status mixes completion status and success feedback, seems like this should set complete immediately
				}
			} else {
				// SUCCESS -> no status change because we show no visible positive feedback to users until the end
				console.log('guess correct but not done');
				this.trial.value = {
					...$trial,
					guessing_index: guessing_index + 1,
				};
			}
		});
	};

	retry_trial = (): void => {
		const $status = this.status.peek();
		if (
			$status !== 'waiting_for_input' &&
			$status !== 'showing_success_feedback' &&
			$status !== 'showing_failure_feedback'
		) {
			return;
		}
		const $trial = this.trial.peek();
		if (!$trial) return;
		batch(() => {
			// TODO should this be "on enter presenting_prompt state" logic?
			this.trial.value = {
				...$trial,
				retry_count: $trial.retry_count + 1,
			};
			this.update_status('presenting_prompt');
		});
	};

	next_trial = (): void => {
		if (this.status.peek() === 'complete') {
			return;
		}
		batch(() => {
			const next_trial = create_next_trial(this.level_data, this.trial.peek());
			console.log('next trial', next_trial);
			// TODO should this be "on enter presenting_prompt state" logic?
			const $trials = this.trials.peek();
			if ($trials.length === 0) this.mistakes.value = 0;
			this.trial.value = next_trial;
			this.trials.value = [...$trials, next_trial];
			this.update_status('presenting_prompt');
		});
	};

	complete_level = (): void => {
		if (this.status.peek() === 'complete') {
			return;
		}
		batch(() => {
			this.trial.value = null;
			this.update_status('complete');
		});
	};

	// dev and debug methods
	win = (): void => {
		this.complete_level();
	};

	guess_correctly = (): void => {
		if (this.status.peek() !== 'waiting_for_input') return;
		const note = get_correct_guess_for_trial(this.trial.peek());
		if (note === null) return;
		this.guess(note);
	};

	guess_incorrectly = (): void => {
		if (this.status.peek() !== 'waiting_for_input') return;
		const note = get_incorrect_guess_for_trial(this.trial.peek());
		if (note === null) return;
		this.guess(note);
	};

	get_correct_guess = (): void => {
		get_correct_guess_for_trial(this.trial.peek());
	};
}

const get_correct_guess_for_trial = (trial: Trial | null): Midi | null => {
	if (trial?.guessing_index == null) return null;
	return trial.sequence[trial.guessing_index];
};

const get_incorrect_guess_for_trial = (trial: Trial | null): Midi | null => {
	if (!trial) return null;
	const correct_guess = get_correct_guess_for_trial(trial);
	if (correct_guess === null) return null;
	const incorrect_notes = Array.from(trial.valid_notes).filter((n) => n !== correct_guess);
	if (!incorrect_notes.length) return null;
	return random_item(incorrect_notes);
};

const create_next_trial = (def: Level_Data, current_trial: Trial | null): Trial => {
	const tonic = to_random_tonic(def);
	const sequence: Midi[] = [tonic];

	const valid_notes = create_valid_notes(tonic, def.min_note, def.max_note, def.intervals);

	// create the random sequence of notes
	for (let i = 0; i < def.sequence_length - 1; i++) {
		let next_note: Midi;
		do {
			next_note = random_item(valid_notes);
		} while (next_note === sequence.at(-1)); // disallow sequential repeats
		sequence.push(next_note);
	}

	return {
		index: (current_trial && current_trial.index + 1) || 0,
		valid_notes: new Set(valid_notes),
		sequence,
		presenting_index: null,
		guessing_index: null,
		retry_count: 0,
	};
};

/**
 * Computes the set of notes that can be selected in a trial
 * for a given tonic, note range, and intervals.
 * A trial's sequence of notes can be constructed from these.
 */
const create_valid_notes = (
	tonic: Midi,
	min_note: Midi,
	max_note: Midi,
	intervals: Intervals,
): Midi[] => {
	const valid_intervals = new Set([0, ...intervals]); // allow tonic to repeat
	const valid_notes: Midi[] = [];
	for (let i = min_note; i <= max_note; i++) {
		const interval = i - tonic;
		if (valid_intervals.has(interval)) {
			valid_notes.push(i);
		}
	}

	// TODO how to handle this? upstream validation that `intervals.length >= 1`?
	if (valid_notes.length < 2) throw Error('invalid notes');
	return valid_notes;
};

const to_random_tonic = (def: Level_Data): Midi => {
	const {tonics} = def;
	if (tonics?.length) return random_item(tonics);
	const {min_note, max_note} = def;
	const interval_max = def.intervals.reduce((max, v) => Math.max(max, v));
	const interval_min = def.intervals.reduce((max, v) => Math.min(max, v));
	const tonic_max = Math.min(max_note - interval_max, max_note);
	const tonic_min = Math.max(min_note - interval_min, min_note);
	return tonic_min < tonic_max
		? random_int(tonic_min, tonic_max)
		: to_fallback_tonic(min_note, max_note);
};

const to_fallback_tonic = (min_note: Midi, max_note: Midi): Midi => {
	const offset = ((max_note - min_note) / 4) | 0;
	return random_int(min_note + offset, max_note - offset);
};

export const to_level_url = (level_data: Level_Data): string => {
	const data: Level_Hash_Data = {level: level_data};
	return `${base}/trainer/level` + serialize_to_hash(data);
};

export const Mistakes_Level_Stats = z.record(Level_Id, z.array(z.number()));
export type Mistakes_Level_Stats = z.infer<typeof Mistakes_Level_Stats>;

export const Level_Stats = z.object({
	mistakes: Mistakes_Level_Stats,
	// TODO BLOCK implement these
	run_count_total: z.number(),
	run_count_by_level: z.record(Level_Id, z.array(z.number())),
});
export type Level_Stats = z.infer<typeof Level_Stats>;

// TODO BLOCK use `LevelStats.parse({})` for this instead
export const DEFAULT_LEVEL_STATS: Level_Stats = {
	mistakes: {},
	run_count_total: 0,
	run_count_by_level: {},
};

export const add_mistakes_to_level_stats = (
	level_stats: Level_Stats,
	id: Level_Id,
	mistakes: number,
): Level_Stats => {
	const s = {...level_stats};
	s.mistakes = {...s.mistakes}; // preserves key order
	s.mistakes[id] = add_mistakes(s.mistakes[id], mistakes);
	return s;
};

// TODO refactor - parameter?
export const MISTAKE_HISTORY_LENGTH = 4;

const add_mistakes = (data: number[] | undefined, mistakes: number): number[] => {
	const updated = data?.slice() || [];
	if (updated.length >= MISTAKE_HISTORY_LENGTH) {
		updated.sort((a, b) => a - b).length = MISTAKE_HISTORY_LENGTH;
		if (mistakes < updated.at(-1)!) {
			updated[updated.length - 1] = mistakes;
		}
	} else {
		updated.push(mistakes);
	}
	return updated;
};
