<script>
	import { scale } from 'svelte/transition';
</script>

<div class="experience" transition:scale={{ duration: 600 }}>
	<h2>Experience</h2>
	<p>I have over 8 years of experience working with various technologies in the industry.</p>
	<ul>
		<li>Desktop Developer at IDCSI - 5 years</li>
		<li>Full-stack Developer at IDCSI - 2 years</li>
		<li>Freelance Developer - 1 year</li>
	</ul>
</div>

<style>
	.experience {
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
            text-shadow: 2px 2px 4px rgba(255, 255, 255,  0.5);
		color: #000000;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.3rem;
		font-weight: 400;
        line-height: 1.5;
        text-shadow: 1px 1px 3px rgba(255, 255, 255,  0.4);
		color: #000000;

		max-width: 600px;
	}
	ul {
		font-size: 1.3rem;
		font-weight: 400;
        line-height: 1.5;
        text-shadow: 1px 1px 3px rgba(255, 255, 255,  0.4);
        margin-bottom: 1.5rem;
		color: #000000;
		max-width: 600px;
		text-align: left;
	}

	ul li {
		margin: 5px 0;
	}

	@media (max-width: 600px) {
	 ul, p {
		max-width: 400px;
		font-size: 0.8rem;
	}

	h2 {
		font-size: 1.2rem;
		
	}
	}


	/* li {
	list-style: none;
	} */

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
