<script>
	import { getAllStock } from '$lib/api';
	import { onMount } from 'svelte';

	let stocks = $state([]);
	onMount(async () => {
		stocks = await getAllStock();
	});
</script>

<div>
	<h1>stocks</h1>

	<table class="table">
		<thead>
			<tr class="table-dark">
				<th scope="col">Stock ID</th>
				<th scope="col">Product</th>
				<th scope="col">Quantity</th>
				<th scope="col">Location</th>
			</tr>
		</thead>
		<tbody>
			{#each stocks as stock, i}
				<tr class="align-middle {i % 2 === 0 ? 'table-secondary' : 'table-light'}">
					<td>{stock.stockId}</td>
					<td>{stock.product.name}</td>
					<td>{stock.quantity}</td>
					<td>{stock.location}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
