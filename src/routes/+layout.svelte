<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

<div class="w-screen h-screen">
	<main class="h-full">
		{#if $page.data.currentAdmin}
			<slot />
		{:else}
			<slot />
		{/if}
	</main>
</div>
