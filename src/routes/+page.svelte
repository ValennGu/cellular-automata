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
</script>

<ControlPanel
	{loopActive}
	onClickStart={() => {
		loopActive = true;
		startInterval();
	}}
	onClickStop={() => {
		loopActive = false;
		clearInterval(interval);
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
