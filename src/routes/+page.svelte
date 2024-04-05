<script lang="ts">
	import Cell from '../components/cell.svelte';
	import ControlPanel from '../components/control-panel.svelte';
	import { buildMatrix } from '../services/build-matrix';
	import { calculateMatrix } from '../services/calcualte-matrix';

	let matrix = buildMatrix(100, 100);
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
		matrix = buildMatrix(100, 100);
		loopActive = false;
	};
</script>

<ControlPanel
	{loopActive}
	onGenerateAutomata={() => generateAutomata()}
	onResetMatrix={() => resetMatrix()}
	onStart={() => {
		loopActive = true;
		startInterval();
	}}
	onStop={() => {
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
