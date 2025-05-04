<script>
	import { scale } from 'svelte/transition';
	import SendMail from '$lib/modals/sendMail.svelte';

	let showModal = false;
</script>

<div class="contact" transition:scale={{ duration: 600 }}>
	<h2>Contact Me</h2>
	<p>If you’d like to work together or just say hello, feel free to reach out!</p>


	<button class="next-button" on:click={() => showModal = true}>Get in Touch</button>

	<SendMail open={showModal} onClose={() => showModal = false}/>
</div>	  
	  <style>
	.contact {
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
		color: #000000;
		text-shadow: 2px 2px 4px rgba(255, 255, 255,  0.5);
            margin-bottom: 1rem;
	}

	p {
		font-size: 1.3rem;
		font-weight: 400;
        line-height: 1.5;
        text-shadow: 1px 1px 3px rgba(255, 255, 255,  0.4);
        margin-bottom: 1.5rem;
		color: #000000;

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
