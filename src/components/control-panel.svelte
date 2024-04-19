<script lang="ts">
	import Button from './button.svelte';
	import { active, matrix, steps } from '../stores/store';

	let rows: number = 0;
	let columns: number = 0;

	$: innerWidth = 0;
	$: innerHeight = 0;

	$: {
		rows = Math.round(innerHeight / 10) - 1;
		columns = Math.round(innerWidth / 10) - 1;

		matrix.build(rows, columns);
		steps.reset();
		active.disable();
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<div class="wrapper">
	<span>| Control Panel</span>
	<div class="menu-item">
		<p>* Sim. Running</p>
		<p>{$active.toString().toUpperCase()}</p>
	</div>
	<div class="menu-item">
		<p>* Inner Width</p>
		<p>{innerWidth}</p>
	</div>
	<div class="menu-item">
		<p>* Inner Height</p>
		<p>{innerHeight}</p>
	</div>
	<div class="menu-item">
		<p>* Matrix Rows</p>
		<p>{rows}</p>
	</div>
	<div class="menu-item">
		<p>* Matrix Columns</p>
		<p>{columns}</p>
	</div>
	<div class="menu-item">
		<p>* Steps</p>
		<p>{$steps}</p>
	</div>
	<Button text="Generate automata" on:click={matrix.generateAutomata} />
	<Button
		text="Reset matrix"
		on:click={() => {
			active.disable();
			matrix.build(rows, columns);
			steps.reset();
		}}
	/>
	<section>
		<Button
			text="<<< (WIP)"
			on:click={() => {
				matrix.loop();
				steps.backward();
			}}
			disabled={true}
		/>
		<Button
			text=">>>"
			on:click={() => {
				matrix.loop();
				steps.forward();
			}}
			disabled={$active}
		/>
	</section>
	<section>
		<Button text="Start" on:click={active.enable} disabled={$active} />
		<Button text="Stop" on:click={active.disable} disabled={!$active} />
	</section>
</div>

<style>
	.wrapper {
		border: 1px solid #00ff00;
		width: 278px;
		position: absolute;
		left: 20px;
		top: 20px;
		padding: 10px;
		display: block;
	}

	.menu-item {
		display: flex;
		justify-content: space-between;
		color: #00ff00;
		margin: 0;
		padding: 5px;
		border: 1px solid transparent;
		&:hover {
			border: 1px solid #00ff00;
			cursor: pointer;
		}
	}

	span {
		background-color: #00ff00;
		color: #000000;
		display: block;
		padding: 10px;
		margin-bottom: 10px;
	}

	section {
		display: flex;
		justify-content: space-between;
		gap: 10px;
		width: 100%;
	}
</style>
