<script lang="ts">
	import Button from './button.svelte';

	export let loopActive: boolean;
	export let onClickStart: () => void;
	export let onClickStop: () => void;

	console.log('Rendering Control panel');
</script>

<div class="wrapper">
	<span>| Control Panel</span>
	<div class="info">
		<p>* Sim. Running</p>
		<p>{loopActive.toString().toUpperCase()}</p>
	</div>
	<section>
		<Button text="Start" onClick={onClickStart} disabled={loopActive} />
		<Button text="Stop" onClick={onClickStop} disabled={!loopActive} />
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

	.info {
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
