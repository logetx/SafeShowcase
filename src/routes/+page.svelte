<script lang="ts">
	import { enhance } from "$app/forms";
</script>

<section class="w-full h-full flex flex-row">
	<div class="flex flex-col justify-between bg-zinc-700 w-48">
		<div class="flex flex-col gap-6">
			<div>
				LOGO
			</div>
			<div class="flex flex-col gap-2 mx-2">
				<a class="w-full text-center text-zinc-300 hover:bg-zinc-300 hover:text-zinc-700" href="reports">Reports</a>
				<a class="w-full text-center text-zinc-300 hover:bg-zinc-300 hover:text-zinc-700" href="users">Users</a>
			</div>
		</div>
			<div class="flex flex-row border-t-zinc-300 border-t-[1px] mx-2">
			<span>
				USERNAME
			</span>
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
	</div>
	<div>

	</div>
</section>
