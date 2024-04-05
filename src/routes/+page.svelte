<script lang="ts">
	import Cell from '../components/cell.svelte';
	import ControlPanel from '../components/control-panel.svelte';
	import { buildMatrix } from '../services/build-matrix';
	import { calculateMatrix } from '../services/calcualte-matrix';

	const matrixSize = 75;
	let matrix = buildMatrix(matrixSize, matrixSize);
	let loopActive = false;
	let interval: number;

	const changeCellState = (rowIndex: number, cellIndex: number) => {
		matrix[rowIndex][cellIndex] = !matrix[rowIndex][cellIndex];
	};

	const startInterval = () => {
		interval = setInterval(() => {
			matrix = calculateMatrix(matrix);
		}, 50);
	};

	const stopInterval = () => {
		clearInterval(interval);
	};

	const generateAutomata = () => {
		matrix[0][1] = true;
		matrix[1][2] = true;
		matrix[2][0] = true;
		matrix[2][1] = true;
		matrix[2][2] = true;
	};

	const resetMatrix = () => {
		stopInterval();
		matrix = buildMatrix(matrixSize, matrixSize);
		loopActive = false;
	};
</script>

<ControlPanel
	{loopActive}
	on:generateAutomata={generateAutomata}
	on:resetMatrix={resetMatrix}
	on:start={() => {
		loopActive = true;
		startInterval();
	}}
	on:stop={() => {
		loopActive = false;
		stopInterval();
	}}
/>

<div>
	{#each matrix as row, rowIndex}
		<section>
			{#each row as cell, cellIndex}
				<Cell isActive={cell} onClick={() => changeCellState(rowIndex, cellIndex)} />
			{/each}
		</section>
	{/each}
</div>

<style>
	div {
		height: 100vh;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	section {
		display: flex;
	}
</style>
