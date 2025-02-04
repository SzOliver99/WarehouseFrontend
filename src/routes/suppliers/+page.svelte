<script>
	import { getAllSupplier } from '$lib/api';
	import { onMount } from 'svelte';

	let suppliers = $state([]);
	onMount(async () => {
		suppliers = await getAllSupplier();
	});
</script>

<div>
	<h1>suppliers</h1>

	<table class="table">
		<thead>
			<tr class="table-dark">
				<th scope="col">Supplier ID</th>
				<th scope="col">Name</th>
				<th scope="col">Contact Info</th>
				<th scope="col">Country</th>
			</tr>
		</thead>
		<tbody>
			{#each suppliers as supplier, i}
				<tr class="align-middle {i % 2 === 0 ? 'table-secondary' : 'table-light'}">
					<td>{supplier.supplierId}</td>
					<td>{supplier.name}</td>
					<td>{supplier.contactInfo}</td>
					<td>{supplier.country}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
