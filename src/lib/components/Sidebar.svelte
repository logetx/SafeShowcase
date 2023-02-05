<script lang="ts">
	import { enhance } from "$app/forms";
    import * as Icons from "$lib/components/icons";

    export let adminUsername: string;
</script>

<div class="flex flex-col bg-zinc-700 min-w-[12rem]">
    <div class="h-20 flex justify-center items-center">
        LOGO
    </div>
    <div class="flex flex-row justify-between border-t-zinc-300 border-y-[1px] m-2 p-2 ">
        <div class="flex flex-row items-center">
            <Icons.user svgClass="stroke-zinc-300 w-5 h-5"/>
            <span class="text-zinc-300 ml-1">
                {adminUsername}
            </span>
        </div>
        <form
            method="post"
            action="/logout"
            use:enhance
            class="flex items-center"
        >
            <button type="submit">
                <Icons.logout svgClass="stroke-zinc-300 hover:bg-zinc-300 hover:stroke-zinc-700 w-5 h-5" />
            </button>
        </form>
    </div>
    <div class="flex flex-col gap-2 mx-2">
        <a class="w-full flex flex-row items-center justify-center text-zinc-300 stroke-zinc-300 hover:bg-zinc-300 hover:text-zinc-700 hover:stroke-zinc-700" href="/">
            <Icons.home svgClass="stroke-inherit w-5 h-5 mr-1" />
            Dashboard
        </a>
        <a class="w-full flex flex-row items-center justify-center text-zinc-300 stroke-zinc-300 hover:bg-zinc-300 hover:text-zinc-700 hover:stroke-zinc-700" href="reports">
            <Icons.archiveBox svgClass="stroke-inherit w-5 h-5 mr-1" />
            Reports
        </a>
        <a class="w-full flex flex-row items-center justify-center text-zinc-300 stroke-zinc-300 hover:bg-zinc-300 hover:text-zinc-700 hover:stroke-zinc-700" href="users">
            <Icons.users svgClass="stroke-inherit w-5 h-5 mr-1" />
            Users
        </a>
    </div>
</div>