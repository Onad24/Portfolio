<script>
	import { scale } from 'svelte/transition';
</script>

<div class="certificates" transition:scale={{ duration: 600 }}>
	<h2>Certificates</h2>
	<ul>
		<li>Software Development - ICOTP ICT 2017</li>
		<li>Best Programmer Award - ICOTP ICT 2017</li>
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
		font-size: 3rem;font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
			text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);

		color: #000000;
		margin-bottom: 1rem;
	}

	ul {
		font-size: 1.3rem;
		font-weight: 400;
        line-height: 1.5;
		text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
        margin-bottom: 1.5rem;
		color: #000000;

		max-width: 700px;
		text-align: left;
	}

	ul li {
		margin: 5px 0;
	}

	li {
	list-style: none;
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
