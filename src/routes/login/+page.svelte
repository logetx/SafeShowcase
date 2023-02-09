<script lang="ts">
	import { enhance } from "$app/forms";
</script>

<section class="w-full h-full flex flex-row">
	<div class="w-4/6 image"></div>
	<div class="w-2/6 flex flex-col items-center justify-between">
		<span></span>
		<form 
			method="post"
			use:enhance
		>
			<h1 class="text-4xl font-bold mb-2">Login</h1>
			<div class="flex flex-col">
				<label for="username">Username</label>
				<input class="bg-zinc-700 text-zinc-300 px-1" autocomplete="off" type="text" name="username" id="username" />
			</div>
			<div class="flex flex-col">
				<label for="password">Password</label>
				<input class="bg-zinc-700 text-zinc-300 px-1" autocomplete="off" type="password" name="password" id="password" />
			</div>
			<button class="mt-2 p-1 text-zinc-300 bg-zinc-700" type="submit">Submit</button>
		</form>
		<footer class="mb-4">
			Nulltech &copy; 2023
		</footer>
	</div>
</section>

<style>
	.image {
		background-image: url("img/safe_unsplash.jpg");
		background-size: cover;
		background-position: center;
	}
</style>