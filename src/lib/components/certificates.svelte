<script>
	import { scale } from 'svelte/transition';
</script>

<div class="certificates" transition:scale={{ duration: 600 }}>
	<h2>Certificates</h2>
	<ul>
		<li>Full Stack Web Development - XYZ Institute</li>
		<li>JavaScript Specialist - ABC Academy</li>
		<li>Best Programmer Award - 2023</li>
	</ul>
</div>

<style>
	.certificates {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1rem;
	}

	h2 {
		font-size: 2.5rem;
		color: #f5f5f5;
	}

	ul {
		color: #ccc;
		max-width: 600px;
		font-size: 1rem;
		text-align: left;
	}

	ul li {
		margin: 5px 0;
	}

	.next-button {
		margin-top: 20px;
		padding: 10px 20px;
		font-size: 1rem;
		background-color: #1e90ff;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.next-button:hover {
		background-color: #1c75d8;
	}
</style>
