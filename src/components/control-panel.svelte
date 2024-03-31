<script>
	import Button from './button.svelte';
</script>

<div class="wrapper">
	<span>| Control Panel</span>
	<p>* Empty menu item</p>
	<p>* Empty menu item</p>
	<p>* Empty menu item</p>
	<p>* Empty menu item</p>
	<p>* Empty menu item</p>
	<p>* Empty menu item</p>
	<p>* Empty menu item</p>
	<p>* Empty menu item</p>
	<p>* Empty menu item</p>
	<p>* Empty menu item</p>
	<p>* Empty menu item</p>
	<p>* Empty menu item</p>
	<p>* Empty menu item</p>
	<p>* Empty menu item</p>
	<p>* Empty menu item</p>
	<p>* Empty menu item</p>
	<section>
		<Button text="Start" onClick={() => console.log('Start Cliked!')} />
		<Button text="Stop" onClick={() => console.log('Stop Cliked!')} disabled={true} />
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
