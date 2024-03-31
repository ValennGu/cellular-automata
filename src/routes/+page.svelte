<script lang="ts">
	import Cell from '../components/cell.svelte';
	import ControlPanel from '../components/control-panel.svelte';

	import { buildMatrix } from '../services/build-matrix';
	import { calculateMatrix } from '../services/calcualte-matrix';

	let matrix = buildMatrix(100, 100);

	const changeCellState = (rowIndex: number, cellIndex: number) => {
		matrix[rowIndex][cellIndex] = !matrix[rowIndex][cellIndex];
	};

	const startInterval = () => {
		setInterval(() => {
			matrix = calculateMatrix(matrix);
		}, 50);
	};
</script>

<ControlPanel />
<div>
	{#each matrix as row, rowIndex}
		<section>
			{#each row as cell, cellIndex}
				<Cell isActive={cell} onClick={() => changeCellState(rowIndex, cellIndex)} />
			{/each}
		</section>
	{/each}
</div>
<button on:click={() => startInterval()}>Start</button>

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
