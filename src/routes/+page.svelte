<script lang="ts">
	import Cell from '../components/cell.svelte';
	import ControlPanel from '../components/control-panel.svelte';
	import { active, matrix, steps } from '../stores/store';

	let interval: number;

	const startInterval = () => {
		interval = setInterval(() => {
			matrix.loop();
			steps.forward();
		}, 50);
	};

	const stopInterval = () => {
		clearInterval(interval);
	};

	/**
	 * Reactive declarations, Computed States or Reactive statements,
	 * they got recalculated once any of the parts change.
	 * When @$active change, the whole $ block gets executed.
	 */
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
