export const buildMatrix = (size: number): boolean[][] => {
	const matrix: boolean[][] = [];

	for (let rowIndex = 0; rowIndex < size; rowIndex++) {
		const newRow: boolean[] = [];
		for (let columnIndex = 0; columnIndex < size; columnIndex++) {
			const newColumn = false;
			newRow.push(newColumn);
		}
		matrix.push(newRow);
	}

	return matrix;
};
