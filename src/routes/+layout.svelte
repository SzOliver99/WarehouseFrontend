<script>
	import Navbar from '$lib/components/Navbar.svelte';

	const { children } = $props();
</script>

<div>
	<header>
		<Navbar />
	</header>

	<main class="px-5 py-3">
		{@render children()}
	</main>
</div>
