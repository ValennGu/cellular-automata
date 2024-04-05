<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from './button.svelte';

	export let loopActive: boolean = false;
	const dispatch = createEventDispatcher();
</script>

<div class="wrapper">
	<span>| Control Panel</span>
	<div class="menu-item">
		<p>* Sim. Running</p>
		<p>{loopActive.toString().toUpperCase()}</p>
	</div>
	<section>
		<Button text="Generate automata" on:click={() => dispatch('generateAutomata')} />
	</section>
	<section>
		<Button text="Reset matrix" on:click={() => dispatch('resetMatrix')} />
	</section>
	<section>
		<Button text="Start" on:click={() => dispatch('start')} disabled={loopActive} />
		<Button text="Stop" on:click={() => dispatch('stop')} disabled={!loopActive} />
	</section>
</div>

<style>
	.wrapper {
		border: 1px solid #00ff00;
		width: 278px;
		position: absolute;
		right: 20px;
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
		margin-top: 10px;
	}
</style>
