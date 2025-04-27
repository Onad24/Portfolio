<script>
	import { scale } from 'svelte/transition';
</script>

<div class="about" transition:scale={{ duration: 600 }}>
	<h2>About Me</h2>
	<p>
		I have a deep love for coding and problem-solving, specializing in frontend development with a
		strong focus on clean, maintainable code.
	</p>
</div>

<style>
	.about {
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

	p {
		font-size: 1.1rem;
		color: #ccc;
		max-width: 600px;
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
