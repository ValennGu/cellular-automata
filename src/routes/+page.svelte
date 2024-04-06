<script lang="ts">
	import Cell from '../components/cell.svelte';
	import ControlPanel from '../components/control-panel.svelte';
	import { active, matrix } from '../stores/store';

	let interval: number;

	const startInterval = () => {
		interval = setInterval(() => {
			matrix.loop();
		}, 50);
	};

	const stopInterval = () => {
		clearInterval(interval);
	};

	$: if ($active) {
		startInterval();
	}
	$: if (!$active) {
		stopInterval();
	}
</script>

<ControlPanel />

<div>
	{#each $matrix as row}
		<section>
			{#each row as cell}
				<Cell isActive={cell} />
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
