<script>
	import Hero from '$lib/components/hero.svelte';
	import About from '$lib/components/about.svelte';
	import Projects from '$lib/components/projects.svelte';
	import Experience from '$lib/components/experience.svelte';
	import Certificates from '$lib/components/certificates.svelte';
	import Contact from '$lib/components/contact.svelte';
	import Background from '$lib/three/background.svelte';

	let sections = [Hero, About, Projects, Experience, Certificates, Contact];
	let currentSectionIndex = 0;
	let isTransitioning = false;
	let moveTo = 0;
	// Function to move to the next section
	function scrollNext() {
		if (!isTransitioning && currentSectionIndex < sections.length - 1) {
			currentSectionIndex += 1;
			moveTo = 0;
			moveTo = 15;
			triggerTransition();
		}
	}

	// Function to move to the previous section
	function scrollPrev() {
		if (!isTransitioning && currentSectionIndex > 0) {
			currentSectionIndex -= 1;
			moveTo = 0;
			moveTo = -15;
			triggerTransition();
		}
	}

	// Trigger transition effect
	function triggerTransition() {
		isTransitioning = true;
		setTimeout(() => {
			isTransitioning = false;
		}, 600); // Match with CSS transition duration
	}

	// Capture scroll event and determine direction
	// @ts-ignore
	function handleScroll(event) {
		if (isTransitioning) return;

		if (event.deltaY > 0) {
			scrollNext();
		} else {
			scrollPrev();
		}
	}

	// @ts-ignore
	function handleKey(event) {
    if (event.key === 'ArrowUp') {
		scrollPrev();
    } else if (event.key === 'ArrowDown') {
		scrollNext();
    }
  }

  let touchStartY = 0;

	// @ts-ignore
	function handleTouchStart(event) {
	touchStartY = event.touches[0].clientY;
}

	// @ts-ignore
	function handleTouchMove(event) {
	const touchEndY = event.touches[0].clientY;
	const deltaY = touchStartY - touchEndY;

	if (Math.abs(deltaY) < 30 || isTransitioning) return; // small movement ignored

	if (deltaY > 0) {
		scrollNext(); // swipe up → next section
	} else {
		scrollPrev(); // swipe down → previous section
	}
}
</script>

<!-- Detect scroll events -->
<svelte:window on:wheel={handleScroll} on:keydown={handleKey} 
on:touchstart={handleTouchStart}
on:touchmove={handleTouchMove}/>

<!-- Display the current section -->
<Background bind:value={moveTo} />

<div class="section-wrapper">
	{#each sections as Section, index}
		{#if index === currentSectionIndex}
			<div class="section active">
				<Section />
			</div>
		{:else}
			<div class="section hidden">
				<Section />
			</div>
		{/if}
	{/each}
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Arial', sans-serif;
		overflow: hidden;
		color: #f5f5f5;
		text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
	}

	.section-wrapper {
		position: absolute;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background-color: rgba(10, 10, 10, 0.3);
	}

	.section {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition:
			opacity 0.6s ease,
			transform 0.6s ease;
	}

	.active {
		opacity: 1;
		transform: translateX(0);
		z-index: 2;
	}

	.hidden {
		opacity: 0;
		transform: translateY(100%);
		z-index: 1;
	}
</style>
