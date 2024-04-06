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
		reset: () => update(() => buildMatrix(size)),
		generateAutomata: () => update((matrix) => generateAutomata(matrix))
	};
};

export const active = createActive();
export const matrix = createMatrix(75);
