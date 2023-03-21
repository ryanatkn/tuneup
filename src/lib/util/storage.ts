import {browser} from '$app/environment';

// TODO copypasted from dealt

/**
 * Loads `key` and falls back to `defaultValue`.
 * If `validate` is provided and throws, it removes the `key` and returns `undefined`.
 * @param key
 * @param defaultValue
 * @param validate
 * @returns
 */
export const load_from_storage = <T>(
	key: string,
	to_default_value: () => T,
	parse: (value: unknown) => T,
): T => {
	console.log(`load_from_storage key`, key);
	if (!browser) return to_default_value();
	const stored = localStorage.getItem(key);
	if (!stored) return to_default_value();
	try {
		return parse(JSON.parse(stored));
	} catch (err) {
		localStorage.removeItem(key);
		return to_default_value();
	}
};

/**
 * Sets `value` at `key`.
 * Importantly, if `value` is `undefined` the `key` is removed,
 * but a `value` of `null` is stored.
 * @param key
 * @param value
 */
export const set_in_storage = (key: string, value: any): void => {
	if (!browser) return;
	if (value === undefined) {
		localStorage.removeItem(key);
	} else {
		console.log(`set_in_storage`, key, value);
		localStorage.setItem(key, JSON.stringify(value));
	}
};