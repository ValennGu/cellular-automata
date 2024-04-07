import { writable } from 'svelte/store';
import { buildMatrix } from '../services/build-matrix';
import { calculateMatrix } from '../services/calcualte-matrix';
import { generateAutomata } from '../services/generate-automata';

const createActive = () => {
	const { subscribe, set } = writable(false);

	return {
		subscribe,
		enable: () => set(true),
		disable: () => set(false)
	};
};

const createMatrix = (size: number) => {
	const { subscribe, update } = writable(buildMatrix(size));

	return {
		subscribe,
		loop: () => update((matrix) => calculateMatrix(matrix)),
		back: () => {},
		reset: () => update(() => buildMatrix(size)),
		generateAutomata: () => update((matrix) => generateAutomata(matrix))
	};
};

const createSteps = () => {
	const { subscribe, update, set } = writable(0);

	return {
		subscribe,
		forward: () => update((steps) => steps + 1),
		backward: () => update((steps) => steps - 1),
		reset: () => set(0)
	};
};

export const active = createActive();
export const matrix = createMatrix(75);
export const steps = createSteps();
