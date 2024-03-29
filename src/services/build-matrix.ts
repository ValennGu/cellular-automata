export const buildMatrix = (height: number, width: number): boolean[][] => {
	const matrix: boolean[][] = [];

	for (let rowIndex = 0; rowIndex < height; rowIndex++) {
		const newRow: boolean[] = [];
		for (let columnIndex = 0; columnIndex < width; columnIndex++) {
			const newColumn = false;
			newRow.push(newColumn);
		}
		matrix.push(newRow);
	}

	return matrix;
};
