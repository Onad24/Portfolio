<script>
	import { scale } from 'svelte/transition';
</script>

<div class="projects" transition:scale={{ duration: 600 }}>
	<h2>Projects</h2>
	<ul>
		<li>Project A - A full-stack web application for managing tasks.</li>
		<li>Project B - A mobile app that integrates real-time data processing.</li>
		<li>Project C - A responsive e-commerce platform with payment gateway integration.</li>
	</ul>
</div>

<style>
	.projects {
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
		transition: background-color 0.4s;
	}

	.next-button:hover {
		background-color: #1c75d8;
	}
</style>
