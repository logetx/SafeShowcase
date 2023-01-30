<script lang="ts">
	import { enhance } from "$app/forms";

    export let adminUsername: string;
</script>

<div class="flex flex-col bg-zinc-700 w-48">
    <div class="h-20 flex justify-center items-center">
        LOGO
    </div>
    <div class="flex flex-row justify-between border-t-zinc-300 border-y-[1px] m-2 p-2 ">
        <div class="flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="stroke-zinc-300 w-5 h-5" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <span class="text-zinc-300 ml-1">
                {adminUsername}
            </span>
        </div>
        <form
            method="post"
            action="/logout"
            use:enhance
        >
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="stroke-zinc-300 w-5 h-5" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>										  
            </button>
        </form>
    </div>
    <div class="flex flex-col gap-2 mx-2">
        <a class="w-full text-center text-zinc-300 hover:bg-zinc-300 hover:text-zinc-700" href="reports">Reports</a>
        <a class="w-full text-center text-zinc-300 hover:bg-zinc-300 hover:text-zinc-700" href="users">Users</a>
    </div>
</div>