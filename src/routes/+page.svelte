<script lang="ts">
	import type { PageData } from './$types';
	import * as Icons from '$lib/components/icons';
	import ClipboardDocument from '$lib/components/icons/clipboardDocument.svelte';
	
	export let data: PageData;
    $: ({ admin, lastLogs } = data);

	const carouselConfig = {
		class: "carousel-item w-full items-end bg-cover bg-center",
		items: [
			{
				id: 1,
				imageCSS: "bg-[url('armored_vehicles.jpg')]"
			},
			{
				id: 2,
				imageCSS: "bg-[url('cameras_unsplash.jpg')]"
			},
			{
				id: 3,
				imageCSS: "bg-[url('police_unsplash.jpg')]"
			},
			{
				id: 4,
				imageCSS: "bg-[url('security_unsplash.jpg')]"
			}
		]
	};

	async function copyToClipboard(text: string | undefined) {
		if (!text) return;
		await navigator.clipboard.writeText(text);
	}
</script>

<section class="w-full h-full flex justify-center items-center">
	<div class="w-11/12 h-full flex flex-col">
		<div class="w-full h-32 flex flex-row items-center my-4">
			<h1 class="w-3/12 text-2xl text-zinc-700">Welcome, {admin?.username}</h1>
			<div class="w-9/12 h-full flex flex-col items-center">
				<div class="carousel w-full h-full">
					{#each carouselConfig.items as item}
						<div id={`${item.id}`} class={`${carouselConfig.class} ${item.imageCSS}`}></div>
					{/each}
				</div>
				<div class="mt-1 flex flex-row gap-1">
					{#each carouselConfig.items as item}
						<a href={`#${item.id}`} class="inline-flex justify-center items-center bg-zinc-700 text-zinc-300 text-xs font-bold w-4 h-4">{item.id}</a> 
					{/each}
				</div>
			</div>
		</div>
		<div class="w-full h-[16.0625rem] bg-zinc-700 hidden"> <!-- Hour access chart -->
			<!-- Not implemented -->
		</div>
		<div class="w-full h-[16.0625rem] flex flex-row gap-4"> <!-- Current Data -->
			<div class="w-4/6 h-full bg-zinc-700 p-2"> <!-- Last logs -->
				<h2 class="text-lg text-zinc-300 h-[11%]">Last Logs</h2>
				<div class="w-full border-t-[1px] border-zinc-300 select-none max-h-[89%] overflow-y-auto">
					<div class="sticky top-0 flex flex-row text-sm font-bold text-zinc-300 backdrop-blur">
                        <span class="w-1/4">Time</span>
                        <span class="w-1/4">Hex</span>
                        <span class="w-1/4">status</span>
                        <span class="w-1/4">User</span>
                    </div>
					<div class="w-full">
                        {#each lastLogs as log}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <div class="flex flex-row text-sm text-zinc-300">
                                <span class="w-1/4">{log.createdAt.toUTCString()}</span>
                                <span class="w-1/4">{log.card_hex}</span>
                                <span class="w-1/4">{log.status}</span>
								<span class="w-1/4">{log.users ? log.users.security_number : "unknown"}</span>
                            </div>
                        {/each}
                    </div>
				</div>
			</div>
			<div class="w-2/6 h-full bg-zinc-700 text-zinc-300 p-2"> <!-- Api data -->
				<h2 class="text-lg text-zinc-300 h-[11%]">API Key</h2>
				<div class="w-full flex flex-row border-t-[1px] border-zinc-300 gap-1 pt-2 truncate">
					<span class="w-[20vw] h-6 px-2 bg-zinc-300 text-zinc-700 whitespace-nowrap select-none">{admin?.api_key}</span>
					<button class="flex items-center justify-center w-6 h-6 bg-zinc-300 text-zinc-700" on:click={() => copyToClipboard(admin?.api_key)}>
						<Icons.clipboardDocument svgClass="stroke-zinc-700 w-5 h-5" />
					</button>
				</div>
			</div>
		</div>
	</div>
</section>