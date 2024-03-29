<script lang="ts">
	export let isActive: boolean;
	export let onClick: () => void;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class={isActive ? 'active' : ''} on:click={onClick} />

<style>
	div {
		width: 8px;
		height: 8px;
		border: 1px solid #242424;
		background-color: #000000;
	}
	.active {
		background-color: #00ff00;
	}
</style>
