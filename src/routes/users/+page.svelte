<script lang="ts">
	import { enhance } from "$app/forms";
	import type { UserClass } from "$lib/form/types";
	import type { PageData } from "./$types";

    export let data: PageData;
    $: ({ users } = data);

    const rowBaseClass = "flex flex-row text-sm text-zinc-300";
    let currentSelected: string | null = null;
    let currentUser: UserClass | null = null;

    async function selectUser(hex: string) {
        if (currentSelected) {
            const row = document.getElementById(currentSelected);
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

        currentSelected = hex;
        currentUser = users.find((user) => user.hex === hex) as unknown as UserClass;
    }

    // Select all logs of the current user hex
    // $: if (currentUser) {
    //     const logs = await fetch(`?/logs/${currentUser.hex}`).then((res) => res.json());
    //     console.log(logs);
    // }

    // $: users = Array.from({ length: 100 }, (_, i) => ({
    //     hex: `hex${i}`,
    //     name: `name${i}`,
    //     security_number: `security_number${i}`,
    // }));
</script>

<section class="w-full h-full flex flex-row justify-center gap-16">
    <div class="w-5/12 bg-zinc-700 my-8 p-2">
        <h2 class="text-lg text-zinc-300">Users</h2>
        <div class="h-full w-full overflow-y-scroll border-t-[1px] border-zinc-300 select-none">
            <div class="flex flex-row text-sm text-zinc-300">
                <span class="w-1/3">Hex</span>
                <span class="w-1/3">Name</span>
                <span class="w-1/3">Security Number</span>
            </div>
            {#each users as user}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class={rowBaseClass} id={user.hex} on:click={() => selectUser(user.hex)}>
                    <span class="w-1/3">{user.hex}</span>
                    <span class="w-1/3">{user.name}</span>
                    <span class="w-1/3">{user.security_number}</span>
                </div>
            {/each}
        </div>
    </div>
    <div class="flex flex-col justify-between w-5/12 my-8 gap-8">
        <div class="w-full h-fit bg-zinc-700 text-zinc-300 text-sm p-2">
            <h1 class="text-xl">Create new user</h1>
            <form
                class="border-t-[1px] border-zinc-300"
                action="?/create"
                method="post"
                use:enhance
            >
                <div class="flex flex-col">
                    <label for="cardHex">Card ID</label>
                    <input required class="bg-zinc-300 text-zinc-700 px-1 text-base" type="text" name="hex" />
                </div>
                <div class="flex flex-row justify-between gap-2">
                    <div class="flex flex-col w-full">
                        <label for="name">Name</label>
                        <input required class="bg-zinc-300 text-zinc-700 px-1 text-base" type="text" name="name" />
                    </div>
                    <div class="flex flex-col w-full">
                        <label for="surname">Surname</label>
                        <input required class="bg-zinc-300 text-zinc-700 px-1 text-base" type="text" name="surname" />
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="email">Certificated mail</label>
                    <input required class="bg-zinc-300 text-zinc-700 px-1 text-base" type="email" name="email"/>
                </div>
                <div class="flex flex-row justify-between gap-2">
                    <div class="flex flex-col w-full">
                        <label for="phoneNumber">Phone number</label>
                        <input required class="bg-zinc-300 text-zinc-700 px-1 text-base" type="tel" name="phone_number"/>
                    </div>
                    <div class="flex flex-col w-full">
                        <label for="securityNumber">Security Number</label>
                        <input required class="bg-zinc-300 text-zinc-700 px-1 text-base" type="number" name="security_number" />
                    </div>
                </div>
                <button class="mt-2 p-1 bg-zinc-300 text-zinc-700" type="submit">Create User</button>
            </form>
        </div>
        <div class="w-full h-full bg-zinc-700 p-2">
            <h1 class="text-xl text-zinc-300">User details</h1>
            <div class="flex flex-row border-t-[1px] border-zinc-300">
                <div class="flex flex-col w-1/2 text-zinc-300 gap-1 mt-2">
                    <div class="flex flex-col">
                        <label class="text-xs font-bold">HEX</label>
                        <span class="px-1 text-sm bg-zinc-300 text-zinc-700">{currentUser?.hex || ""}</span>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold">NAME</label>
                        <span class="px-1 text-sm bg-zinc-300 text-zinc-700">{currentUser?.name || ""}</span>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold">SURNAME</label>
                        <span class="px-1 text-sm bg-zinc-300 text-zinc-700">{currentUser?.surname || ""}</span>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold">EMAIL</label>
                        <span class="px-1 text-sm bg-zinc-300 text-zinc-700">{currentUser?.email || ""}</span>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold">PHONE NUMBER</label>
                        <span class="px-1 text-sm bg-zinc-300 text-zinc-700">{currentUser?.phone_number || ""}</span>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs font-bold">SECURITY NUMBER</label>
                        <span class="px-1 text-sm bg-zinc-300 text-zinc-700">{currentUser?.security_number || ""}</span>
                    </div>
                    <form
                        class="border-t-[1px] border-zinc-300 mt-1"
                        action="?/delete" 
                        method="post"
                        use:enhance
                    >
                        <input type="hidden" name="hex" value={currentUser?.hex} />
                        {#if currentUser?.hex}
                            <button class="text-sm p-1 mt-2 bg-zinc-300 text-zinc-700" type="submit">Delete User</button>
                        {/if}
                    </form>
                </div>
                <div class="flex flex-col w-1/2">
                    <!-- {#each logs as log}
                        <div class="flex flex-row text-sm text-zinc-300">
                            <span class="w-1/3">{log.createdAt}</span>
                            <span class="w-1/3">{log.status}</span>
                        </div>
                    {/each} -->
                </div>
            </div>
        </div>
    </div>
</section>