<script>
	import { getAllProduct } from '$lib/api';
	import { onMount } from 'svelte';

	let products = $state([]);
	onMount(async () => {
		products = await getAllProduct();
	});
</script>

<div>
	<h1>Orders</h1>

	<table class="table">
		<thead>
			<tr class="table-dark">
				<th scope="col">Product ID</th>
				<th scope="col">Name</th>
				<th scope="col">Description</th>
				<th scope="col">Price</th>
			</tr>
		</thead>
		<tbody>
			{#each products as product, i}
				<tr class="align-middle {i % 2 === 0 ? 'table-secondary' : 'table-light'}">
					<td>{product.productId}</td>
					<td>{product.name}</td>
					<td>{product.description}</td>
					<td>{product.price}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
