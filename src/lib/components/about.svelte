<script>
	import { scale } from 'svelte/transition';
</script>

<div class="about" transition:scale={{ duration: 600 }}>
	<h2>About Me</h2>
	<p>
		I'm Ronald Christian Malate, a Software Developer with a knack for building responsive, user-friendly applications. With an eight years of experience in software development, I specialize in JavaScript, Sveltekit, Flutter and VB.Net. I love turning complex problems into elegant solutions, whether I'm designing a sleek front-end interface or optimizing a back-end API. My projects reflect my commitment to clean code and collaboration, honed through years of work and curiosity.
	</p>
	<p>Outside of coding, I spend my time watching shows (historical documentaries, animes and new tech stuffs). And when I'm not feeling introverted, I spend most of my time playing with my niece and nephew. I’m driven by a curiosity to learn and a desire to create tools that make a difference. Currently, I’m exploring Artificial Intelligence which is the curent trend and looking for exciting projects to tackle. Let’s connect to build something amazing together!
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
		font-size: 3rem;font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
		color: #000000;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.3rem;
		font-weight: 500;
        line-height: 1.5;
        text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.4);
        margin-bottom: 1.5rem;
		color: #000000;
		max-width: 700px;
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
