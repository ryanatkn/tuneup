import {RealmDef} from '$lib/earbetter/realm';
import {LevelDef, DEFAULT_NOTE_MIN} from '$lib/earbetter/level';
import {create_project_id, ProjectDef} from '$lib/earbetter/project';

// TODO more - modes, particular intervals, scales, chromatic, ...?
// what's best for learning and understanding and covering the landscape?

const def = (): ProjectDef =>
	ProjectDef.parse({
		id: create_project_id(),
		realm_defs: [
			{
				name: 'major pentatonic',
				level_defs: [
					{
						name: 'perfect fourth vs perfect octave',
						intervals: [5, 12],
						sequence_length: 2,
					},
					{
						name: 'major third vs major sixth',
						intervals: [4, 9],
						sequence_length: 2,
					},
					{
						name: 'major second vs major third',
						intervals: [2, 4],
						sequence_length: 2,
					},
					{
						name: 'major third vs perfect fifth',
						intervals: [4, 7],
						sequence_length: 2,
					},
					{
						name: 'major third vs perfect fourth',
						intervals: [4, 5],
						sequence_length: 2,
					},
					{
						name: 'major third vs perfect fourth vs perfect fifth',
						intervals: [4, 5, 7],
						sequence_length: 2,
					},
					{
						name: 'one octave',
						intervals: [2, 4, 7, 9],
						sequence_length: 2,
					},
					{
						name: 'two octaves',
						intervals: [2, 4, 7, 9, 12, -10, -8, -5, -3, -12],
						sequence_length: 2,
					},
					{
						name: 'three octaves',
						intervals: [2, 4, 7, 9, 12, -10, -8, -5, -3, -12, 14, 16, 19, 21, 24],
						sequence_length: 2,
					},
					{
						name: 'one octave (4 notes)',
						intervals: [2, 4, 7, 9],
						sequence_length: 4,
					},
					{
						name: 'two octaves (4 notes)',
						intervals: [2, 4, 7, 9, 12, -10, -8, -5, -3, -12],
						sequence_length: 4,
					},
					{
						name: 'three octaves (4 notes)',
						intervals: [2, 4, 7, 9, 12, -10, -8, -5, -3, -12, 14, 16, 19, 21, 24],
						sequence_length: 4,
					},
					{
						name: 'one octave (8 notes)',
						intervals: [2, 4, 7, 9],
						sequence_length: 8,
					},
					{
						name: 'two octaves (8 notes)',
						intervals: [2, 4, 7, 9, 12, -10, -8, -5, -3, -12],
						sequence_length: 8,
					},
					{
						name: 'three octaves (8 notes)',
						intervals: [2, 4, 7, 9, 12, -10, -8, -5, -3, -12, 14, 16, 19, 21, 24],
						sequence_length: 8,
					},
				].map((v) => LevelDef.parse(v)),
			},
			{
				name: 'major third vs perfect fourth',
				level_defs: [
					{
						name: 'one octave',
						sequence_length: 2,
						intervals: [4, 5],
					},
					{
						name: 'two octaves',
						sequence_length: 2,
						intervals: [4, 5, -8, -7],
					},
					{
						name: 'three octaves',
						sequence_length: 2,
						intervals: [4, 5, -8, -7, 16, 17],
					},
					{
						name: 'four octaves',
						sequence_length: 2,
						intervals: [4, 5, -8, -7, 16, 17, -20, -19],
						note_min: DEFAULT_NOTE_MIN - 12,
					},
					{
						name: 'two long octaves',
						intervals: [4, 5, -8, -7],
						sequence_length: 8,
					},
					{
						name: 'three long octaves',
						intervals: [4, 5, -8, -7, 16, 17],
						sequence_length: 8,
					},
					{
						name: 'four long octaves',
						intervals: [4, 5, -8, -7, 16, 17, -20, -19],
						sequence_length: 8,
					},
				].map((v) => LevelDef.parse(v)),
			},
		].map((v) => RealmDef.parse(v)),
	});

export default def;
