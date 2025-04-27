<script>
	import { scale } from 'svelte/transition';
</script>

<div class="hero" transition:scale={{ duration: 600 }}>
	<h1>Welcome to My Portfolio</h1>
	<p>
		I’m a passionate developer with experience in building responsive and dynamic web applications.
	</p>
</div>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1rem;
	}

	h1 {
		font-size: 3rem;
		color: #f5f5f5;
	}

	p {
		font-size: 1.2rem;
		color: #ccc;
		max-width: 500px;
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
