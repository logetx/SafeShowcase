<script lang="ts">
	import { enhance } from "$app/forms";



</script>

<section class="w-full h-full flex flex-row justify-center gap-16">
    <div class="w-5/12 bg-zinc-700 my-8">

    </div>
    <div class="flex flex-col justify-between w-5/12 my-8 gap-16">
        <div class="w-full h-full bg-zinc-700">
            <form 
                method="post"
                use:enhance
            >
                <label for="username">Username</label>
                <input type="text" name="username" id="username" />
                <label for="password">Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Login</button>
            </form>
        </div>
        <div class="w-full h-full bg-zinc-700">

        </div>
    </div>
</section>