<script lang="ts">
	export let isActive: boolean;
</script>

<div class={isActive ? 'active' : ''} />

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
