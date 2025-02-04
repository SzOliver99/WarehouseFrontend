<script>
	import { getAllOrder } from '$lib/api';
	import { onMount } from 'svelte';

	function changeDateFormat(dateString) {
		const date = new Date(dateString);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');
		const seconds = String(date.getSeconds()).padStart(2, '0');

		return `${year}. ${month}. ${day}. ${hours}:${minutes}:${seconds}`;
	}

	let orders = $state([]);
	onMount(async () => {
		orders = await getAllOrder();
	});
</script>

<div>
	<h1>Orders</h1>
	<table class="table">
		<thead class="table-dark">
			<tr>
				<th scope="col">Order ID</th>
				<th scope="col">Product</th>
				<th scope="col">Quantity</th>
				<th scope="col">Status</th>
				<th scope="col">Order Date</th>
			</tr>
		</thead>
		<tbody>
			{#each orders as order, i}
				<tr class="align-middle {i % 2 === 0 ? 'table-secondary' : 'table-light'}">
					<td>{order.orderId}</td>
					<td>{order.product.name}</td>
					<td>{order.quantity}</td>
					<td>
						<div
							class="badge {order.status === 'Shipped'
								? 'bg-success'
								: order.status === 'Pending'
									? 'bg-warning'
									: 'bg-danger'}"
						>
							{order.status}
						</div>
					</td>
					<td>{changeDateFormat(order.orderDate)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
