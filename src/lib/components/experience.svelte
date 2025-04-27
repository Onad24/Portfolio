<script>
	import { scale } from 'svelte/transition';
</script>

<div class="experience" transition:scale={{ duration: 600 }}>
	<h2>Experience</h2>
	<p>I have over 5 years of experience working with various technologies in the industry.</p>
	<ul>
		<li>Frontend Developer at XYZ Corp - 3 years</li>
		<li>Backend Developer at ABC Inc. - 2 years</li>
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
		font-size: 2.5rem;
		color: #f5f5f5;
	}

	p {
		font-size: 1.1rem;
		color: #ccc;
		max-width: 600px;
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
