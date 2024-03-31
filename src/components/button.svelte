<script lang="ts">
	export let text: string;
	export let disabled: boolean = false;
	export let onClick: () => void;
</script>

<button on:click={onClick} {disabled}>{text}</button>

<style>
	button {
		display: block;
		width: 100%;
		padding: 10px;
		background-color: transparent;
		border: 1px solid #00ff00;
		font-size: 12px;
		color: #00ff00;
		&:hover:enabled {
			background-color: #00ff00;
			color: #000000;
			cursor: pointer;
		}
		&:disabled {
			cursor: not-allowed;
			opacity: 0.5;
		}
	}
</style>
