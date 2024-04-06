<script lang="ts">
	import Button from './button.svelte';
	import { active, matrix } from '../stores/store';
</script>

<div class="wrapper">
	<span>| Control Panel</span>
	<div class="menu-item">
		<p>* Sim. Running</p>
		<p>{$active.toString().toUpperCase()}</p>
	</div>
	<Button text="Generate automata" on:click={matrix.generateAutomata} />
	<Button
		text="Reset matrix"
		on:click={() => {
			active.disable();
			matrix.reset();
		}}
	/>
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
