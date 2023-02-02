<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="w-full h-full flex flex-row">
	<div class="w-full h-20 flex flex-row items-center m-6 gap-4">
		<h1 class="w-4/12 text-2xl text-zinc-700">Welcome, {$page.data.currentAdmin.username}</h1>
		<div class="w-full h-full image"></div>
	</div>

</section>

<style>
	.image {
		background-image: url("/armored_vehicles.png");
		background-size: cover;
		background-position: center;
	}
</style>