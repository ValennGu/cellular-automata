<slot />

<style>
	@font-face {
		font-family: 'Dogica';
		src: url('../fonts/dogica.ttf');
	}

	:global(body) {
		background-color: #000000;
		color: #00ff00;
		margin: 0;
		font-family: 'Dogica';
		font-size: 12px;
	}
	:global(button) {
		font-family: 'Dogica';
		font-size: 12px;
	}

	:global(p) {
		color: #00ff00;
		margin: 0;
		padding: 5px;
		border: 1px solid transparent;
		&:hover {
			border: 1px solid #00ff00;
			cursor: pointer;
		}
	}
</style>
