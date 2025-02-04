<script>
	import { page } from '$app/stores';

	const links = [
		{ href: '/orders', name: 'Orders' },
		{ href: '/products', name: 'Products' },
		{ href: '/stock', name: 'Stock' },
		{ href: '/suppliers', name: 'Suppliers' }
	];
</script>

<nav class="navbar bg-primary navbar-expand-lg px-5" data-bs-theme="dark">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Warehouse Manager</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				{#each links as link}
					<li class="nav-item">
						{page.href}
						<a
							class="nav-link {link.href === $page.url.pathname ? 'active' : ''}"
							aria-current="page"
							href={link.href}>{link.name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
