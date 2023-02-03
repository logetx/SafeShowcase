<script lang="ts">
	import type { PageData } from './$types';
    import * as Icons from '$lib/components/icons';

    export let data: PageData;
    $: ({ logs } = data);

    const rowBaseClass = "flex flex-row text-sm text-zinc-300";
    let currentLog: any = null;

    async function selectLog(hex: string) {
        if (currentLog) {
            const row = document.getElementById(currentLog.card_hex);
            if (row) {
                row.classList.toggle("bg-zinc-300");
                row.classList.toggle("!text-zinc-700");
            }
        }

        const row = document.getElementById(hex);
        if (row) {
            row.classList.toggle("bg-zinc-300");
            row.classList.toggle("!text-zinc-700");
        }

        currentLog = logs.find((log) => log.card_hex === hex);
    }
</script>

<section class="w-full h-full flex items-center justify-center">
    <div class="w-5/6 h-full flex flex-col py-8 gap-8">
        <div class="w-full h-1/2 flex flex-col bg-zinc-700 p-2">
            <h2 class="h-[9%] text-lg text-zinc-300">Access Logs</h2>
            <div class="w-full border-t-[1px] border-zinc-300 select-none max-h-[91%] overflow-y-auto">
                <div class="sticky top-0 flex flex-row text-sm font-bold text-zinc-300 backdrop-blur">
                    <span class="w-1/5">ID</span>
                    <span class="w-1/5">Time</span>
                    <span class="w-1/5">Hex</span>
                    <span class="w-1/5">action</span>
                    <span class="w-1/5">status</span>
                </div>
                <div class="w-full">
                    {#each logs as log}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div class={rowBaseClass} id={log.card_hex} on:click={() => selectLog(log.card_hex)}>
                            <span class="w-1/5">{log.id}</span>
                            <span class="w-1/5">{log.createdAt}</span>
                            <span class="w-1/5">{log.card_hex}</span>
                            <span class="w-1/5">{log.action}</span>
                            <span class="w-1/5">{log.status}</span>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
        <div class="w-full h-1/2 flex flex-col bg-zinc-700 p-2">
            <h2 class="h-[9%] text-lg text-zinc-300">Details</h2>
            <div class="w-full min-h-[91%] flex flex-row border-t-[1px] border-zinc-300">
                <div class="w-2/4">
                    <div class="w-full flex flex-col justify-between text-zinc-300 mt-1">
                        <div class="flex flex-col">
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <label class="text-xs font-bold">ID</label>
                            <span class="h-5 px-1 text-sm bg-zinc-300 text-zinc-700">{currentLog?.id || ""}</span>
                        </div>
                        <div class="flex flex-col">
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <label class="text-xs font-bold">TIME OF CREATION</label>
                            <span class="h-5 px-1 text-sm bg-zinc-300 text-zinc-700">{currentLog?.createdAt || ""}</span>
                        </div>
                        <div class="flex flex-col">
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <label class="text-xs font-bold">HEX</label>
                            <span class="h-5 px-1 text-sm bg-zinc-300 text-zinc-700">{currentLog?.card_hex || ""}</span>
                        </div>
                        <div class="flex flex-col">
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <label class="text-xs font-bold">ACTION</label>
                            <span class="h-5 px-1 text-sm bg-zinc-300 text-zinc-700">{currentLog?.action || ""}</span>
                        </div>
                        <div class="flex flex-col">
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <label class="text-xs font-bold">STATUS</label>
                            <span class="h-5 px-1 text-sm bg-zinc-300 text-zinc-700">{currentLog?.status || ""}</span>
                        </div>
                    </div>
                </div>
                <div class="w-2/4 p-4 flex flex-col flex-grow flex-shrink justify-center items-center">
                    <Icons.photo svgClass="stroke-zinc-300 w-5 h-5"/>
                    <span class="font-bold text-zinc-300">No Image Available</span>
                </div>
            </div>
        </div>
    </div>
</section>