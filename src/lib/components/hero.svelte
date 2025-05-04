<script>
	import { scale } from 'svelte/transition';
</script>

<div class="hero" transition:scale={{ duration: 600 }}>
	<h1>Welcome to My Portfolio</h1>
	<p>
		Hi, I'm Ronald, a Software Developer crafting seamless software applications with a focus on performance and user experience.</p><p>Check out my projects to see my code in action!
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
		font-size: 3rem;font-weight: 700;
         text-transform: uppercase;
		color: #000000;
		letter-spacing: 2px;
        text-shadow: 2px 2px 4px rgba(255, 255, 255,  0.5);
        margin-bottom: 1rem;
	}

	p {
		font-size: 1.3rem;
		font-weight: 600;
        line-height: 1.5;
        text-shadow: 1px 1px 3px rgba(255, 255, 255,  0.4);
        margin-bottom: 1.5rem;
		color: #000000;
		max-width: 500px;
	}

	@media (max-width: 600px) {
	 p {
		max-width: 400px;
		font-size: 1rem;
	}

	h1 {
		font-size: 1.3rem;
		
	}
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
