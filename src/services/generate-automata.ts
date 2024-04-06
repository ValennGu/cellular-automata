export const generateAutomata = (matrix: boolean[][]): boolean[][] => {
	const newMatrix: boolean[][] = [];

	for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
		const newRow: boolean[] = [...matrix[rowIndex]];
		newMatrix.push(newRow);
	}

	newMatrix[0][1] = true;
	newMatrix[1][2] = true;
	newMatrix[2][0] = true;
	newMatrix[2][1] = true;
	newMatrix[2][2] = true;

	return newMatrix;
};
