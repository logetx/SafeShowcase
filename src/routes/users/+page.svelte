<script lang="ts">
	import { enhance } from "$app/forms";
</script>

<section class="w-full h-full flex flex-row justify-center gap-16">
    <div class="w-5/12 bg-zinc-700 my-8 p-2">
        <h2 class="text-lg text-zinc-300">Users</h2>
        <div class="h-full w-full">

        </div>
    </div>
    <div class="flex flex-col justify-between w-5/12 my-8 gap-8">
        <div class="w-full h-fit bg-zinc-700 text-zinc-300 text-sm p-2">
            <h1 class="text-xl">Create new user</h1>
            <form
                method="post"
                action="?/create"
                use:enhance
            >
                <div class="flex flex-col">
                    <label for="cardHex">Card ID</label>
                    <input class="bg-zinc-300 text-zinc-700 px-1 text-base" type="text" name="cardHex" id="cardHex">
                </div>
                <div class="flex flex-row justify-between">
                    <div class="flex flex-col">
                        <label for="name">Name</label>
                        <input class="bg-zinc-300 text-zinc-700 px-1 text-base" type="text" name="name" id="name"/>
                    </div>
                    <div class="flex flex-col">
                        <label for="surname">Surname</label>
                        <input class="bg-zinc-300 text-zinc-700 px-1 text-base" type="text" name="surname" id="surname" />
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="email">Certificated mail</label>
                    <input class="bg-zinc-300 text-zinc-700 px-1 text-base" type="email" name="email" id="email">
                </div>
                <div class="flex flex-row justify-between">
                    <div class="flex flex-col">
                        <label for="phoneNumber">Phone number</label>
                        <input class="bg-zinc-300 text-zinc-700 px-1 text-base" type="tel" name="phoneNumber" id="phoneNumber">
                    </div>
                    <div class="flex flex-col">
                        <label for="securityNumber">Security Number</label>
                        <input class="bg-zinc-300 text-zinc-700 px-1 text-base" type="text" name="securityNumber" id="securityNumber">
                    </div>
                </div>
                <button class="mt-2 p-1 bg-zinc-300 text-zinc-700" type="submit">Create User</button>
            </form>
        </div>
        <div class="w-full h-full bg-zinc-700">

        </div>
    </div>
</section>