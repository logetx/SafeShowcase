<script lang="ts">
	import { enhance } from "$app/forms";
	import type { UserClass } from "$lib/form/types";
	import type { PageData } from "./$types";

    export let data: PageData;
    $: ({ users } = data);

    const rowBaseClass = "flex flex-row text-sm text-zinc-300";
    let currentSelected: string | null = null;
    let currentUser: UserClass | null = null;
    let userLogs: any[] = [];

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
        userLogs = await getUserLogs(hex);
    }

    async function getUserLogs(hex: string) {
        const response = await fetch(`/api/log/${hex}`, {method: 'POST'});
        return await response.json();
    }

    // $: users = Array.from({ length: 100 }, (_, i) => ({
    //     hex: `hex${i}`,
    //     name: `name${i}`,
    //     security_number: `security_number${i}`,
    // }));
</script>

<section class="w-full h-full flex items-center justify-center">
    <div class="w-5/6 h-full flex flex-col gap-8 py-8"> <!-- Center Box -->
        <div class="w-full flex flex-row gap-8"> <!-- Top Box -->
            <div class="w-full h-[16.0625rem] bg-zinc-700 p-2"> <!-- User List Box -->
                <h2 class="text-lg text-zinc-300 h-[11%]">Users</h2>
                <div class="w-full border-t-[1px] border-zinc-300 select-none max-h-[89%] overflow-y-auto">
                    <div class="sticky top-0 flex flex-row text-sm font-bold text-zinc-300 backdrop-blur">
                        <span class="w-1/3">Hex</span>
                        <span class="w-1/3">Name</span>
                        <span class="w-1/3">Security Number</span>
                    </div>
                    <div class="w-full">
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
            </div>
            <div class="w-full h-fit bg-zinc-700 text-zinc-300 text-sm p-2"> <!-- Create User Box -->
                <h2 class="text-xl">Create new user</h2>
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
        </div>
        <div class="w-full h-fit bg-zinc-700 p-2"> <!-- Bottom Box  -  User Info Box -->
            <h1 class="text-xl text-zinc-300">User details</h1>
            <div class="flex flex-row border-t-[1px] border-zinc-300"> <!-- User Info Box -->
                <div class="w-full flex flex-col justify-between text-zinc-300 mt-1">
                    <div class="flex flex-col">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="text-xs font-bold">HEX</label>
                        <span class="h-5 px-1 text-sm bg-zinc-300 text-zinc-700">{currentUser?.hex || ""}</span>
                    </div>
                    <div class="flex flex-col">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="text-xs font-bold">NAME</label>
                        <span class="h-5 px-1 text-sm bg-zinc-300 text-zinc-700">{currentUser?.name || ""}</span>
                    </div>
                    <div class="flex flex-col">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="text-xs font-bold">SURNAME</label>
                        <span class="h-5 px-1 text-sm bg-zinc-300 text-zinc-700">{currentUser?.surname || ""}</span>
                    </div>
                    <div class="flex flex-col">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="text-xs font-bold">EMAIL</label>
                        <span class="h-5 px-1 text-sm bg-zinc-300 text-zinc-700">{currentUser?.email || ""}</span>
                    </div>
                    <div class="flex flex-col">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="text-xs font-bold">PHONE NUMBER</label>
                        <span class="h-5 px-1 text-sm bg-zinc-300 text-zinc-700">{currentUser?.phone_number || ""}</span>
                    </div>
                    <div class="flex flex-col">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="text-xs font-bold">SECURITY NUMBER</label>
                        <span class="h-5 px-1 text-sm bg-zinc-300 text-zinc-700">{currentUser?.security_number || ""}</span>
                    </div>
                </div>
                <div class="w-full h-full flex flex-col mx-4 mt-1"> <!-- User Logs Box -->
                    <div class="flex flex-row text-xs font-bold text-zinc-300">
                        <span class="w-1/2">Last Log</span>
                        <span class="w-1/2">Status</span>
                    </div>
                    <div class="max-h-[12.5rem] overflow-y-scroll">
                        {#each userLogs as log}
                            <div class="flex flex-row text-sm text-zinc-300">
                                <span class="w-1/2">{log.createdAt}</span>
                                <span class="w-1/2">{log.status}</span>
                            </div>
                        {/each}
                    </div>
                </div>
                <div class="w-2/12 flex flex-col"> <!-- User Buttons -->
                    <form
                        action="?/delete" 
                        method="post"
                        use:enhance
                    >
                        <input type="hidden" name="hex" value={currentUser?.hex} />
                        {#if currentUser?.hex}
                            <button class="w-full text-sm p-1 mt-1 bg-zinc-300 text-zinc-700" type="submit">Delete</button>
                        {/if}
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>