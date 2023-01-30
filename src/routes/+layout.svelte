<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Sidebar from '$lib/components/Sidebar.svelte';

	// $: console.log($page.url.pathname); TODO - usefull data for new components
</script>

<div class="w-screen h-screen">
	{#if $page.data.currentAdmin}
		<main class="w-full h-full flex flex-row">
			<Sidebar adminUsername={$page.data.currentAdmin.username}/>
			<slot />
		</main>
	{:else}
		<main class="w-full h-full">
			<slot />
		</main>
	{/if}
</div>
