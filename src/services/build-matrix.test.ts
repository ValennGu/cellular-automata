import { describe, it, expect } from 'vitest';
import { buildMatrix } from './build-matrix';

describe('Build Matrix', () => {
	it.each`
		size   | rows   | columns
		${75}  | ${75}  | ${75}
		${100} | ${100} | ${100}
		${125} | ${125} | ${125}
		${150} | ${150} | ${150}
		${150} | ${150} | ${150}
	`('should build a matrix of $size x $size', ({ size, rows, columns }) => {
		const matrix = buildMatrix(size);

		expect(matrix.length).toBe(rows);
		expect(matrix[0].length).toBe(columns);
	});
});
