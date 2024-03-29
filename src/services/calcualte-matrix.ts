export const calculateMatrix = (matrix: boolean[][]): boolean[][] => {
	const newMatrix: boolean[][] = [];

	for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
		const newRow: boolean[] = [...matrix[rowIndex]];
		newMatrix.push(newRow);
	}

	for (let rowIndex = 0; rowIndex < newMatrix.length; rowIndex++) {
		for (let cellIndex = 0; cellIndex < newMatrix[rowIndex].length; cellIndex++) {
			let activeNeighbors = 0;

			const previousRowIndex = rowIndex == 0 ? newMatrix.length - 1 : rowIndex - 1;
			const previousCellIndex = cellIndex == 0 ? newMatrix[0].length - 1 : cellIndex - 1;
			const nextRowIndex = rowIndex == newMatrix.length - 1 ? 0 : rowIndex + 1;
			const nextCellIndex = cellIndex == newMatrix[0].length - 1 ? 0 : cellIndex + 1;

			if (matrix[previousRowIndex][previousCellIndex]) {
				activeNeighbors++;
			}
			if (matrix[previousRowIndex][cellIndex]) {
				activeNeighbors++;
			}
			if (matrix[previousRowIndex][nextCellIndex]) {
				activeNeighbors++;
			}
			if (matrix[rowIndex][previousCellIndex]) {
				activeNeighbors++;
			}
			if (matrix[rowIndex][nextCellIndex]) {
				activeNeighbors++;
			}
			if (matrix[nextRowIndex][previousCellIndex]) {
				activeNeighbors++;
			}
			if (matrix[nextRowIndex][cellIndex]) {
				activeNeighbors++;
			}
			if (matrix[nextRowIndex][nextCellIndex]) {
				activeNeighbors++;
			}

			if (matrix[rowIndex][cellIndex] && activeNeighbors <= 1) {
				newMatrix[rowIndex][cellIndex] = false;
			}
			if (matrix[rowIndex][cellIndex] && activeNeighbors >= 4) {
				newMatrix[rowIndex][cellIndex] = false;
			}
			if (!matrix[rowIndex][cellIndex] && activeNeighbors == 3) {
				newMatrix[rowIndex][cellIndex] = true;
			}
		}
	}

	return newMatrix;
};
