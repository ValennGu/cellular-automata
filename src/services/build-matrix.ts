export const buildMatrix = (rows: number, columns: number): boolean[][] => {
	const matrix: boolean[][] = [];

	for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
		const newRow: boolean[] = [];
		for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
			const newColumn = false;
			newRow.push(newColumn);
		}
		matrix.push(newRow);
	}

	return matrix;
};
