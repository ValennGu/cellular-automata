import { derived, readable } from 'svelte/store';

export const date = readable(new Date(), (set) => {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return () => {
		clearInterval(interval);
	};
});

const startDate = new Date();

export const session = derived(date, ($date) => {
	return Math.round(($date - startDate) / 1000);
});
