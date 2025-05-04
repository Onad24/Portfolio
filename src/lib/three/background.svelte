<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	// @ts-ignore
	import * as THREE from 'three';
	// @ts-ignore
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

	// @ts-ignore
	let { value = $bindable(), ...props } = $props();

	// @ts-ignore
	let scene, camera, renderer, backgroundPlane;
	// @ts-ignore
	let asteroids = [];
	// @ts-ignore
	const backgroundSpeed = 0.002; // Adjust for background movement speed
	// @ts-ignore
	let backgroundOffset = 0;
	const logos = ['svelte.glb', 'flutter.glb', 'csharp.glb', 'tailwind.glb', 'vbnet.glb'];
	// const logos = ['svelte.glb', 'flutter.glb', 'csharp.glb', 'tailwind.glb', 'vb.glb'];

	$effect(() => {
		if (value && value != 0) animateStars(value);
	});

	onMount(() => {
		// Set up the scene
		scene = new THREE.Scene();

		// Set up the camera
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		// @ts-ignore
		camera.position.z = 2;

		// Set up renderer
		renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(window.devicePixelRatio); // Improve quality on high-DPI screens

		document.body.appendChild(renderer.domElement);

		// const distance = camera.position.z - 15;
		// const height = 2 * Math.tan((camera.fov * Math.PI) / 360) * distance;
		// const width = height * camera.aspect;
		// const backgroundGeometry = new THREE.PlaneGeometry(width, height);

		// Load and set up the background plane with panoramic image
		const textureLoader = new THREE.TextureLoader();
		// @ts-ignore
		textureLoader.load('/assets/background2.jpg', (texture) => {
			// Set texture scaling options
			texture.flipY = false;
			texture.minFilter = THREE.LinearFilter;
			texture.magFilter = THREE.LinearFilter;

			// @ts-ignore
			const distance = camera.position.z - 10;

			// Calculate the visible height and width based on the camera's FOV and aspect ratio
			const frustumHeight =
				// @ts-ignore
				2 * Math.tan((camera.fov * Math.PI) / 360) * Math.abs(camera.position.z);
			// @ts-ignore
			const frustumWidth = frustumHeight * camera.aspect;

			// Match the background geometry to the viewport dimensions
			const imageAspect = texture.image.height / texture.image.width;

			let backgroundWidth, backgroundHeight;

			if (frustumWidth / frustumHeight < 1 / imageAspect) {
				// If the viewport is taller relative to the image
				backgroundWidth = frustumHeight / imageAspect;
				backgroundHeight = frustumHeight;
			} else {
				// If the viewport is wider relative to the image
				backgroundWidth = frustumWidth;
				backgroundHeight = frustumWidth * imageAspect;
			}

			const backgroundGeometry = new THREE.PlaneGeometry(backgroundWidth, backgroundHeight);

			const backgroundMaterial = new THREE.MeshBasicMaterial({
				map: texture
			});

			backgroundPlane = new THREE.Mesh(backgroundGeometry, backgroundMaterial);

			// @ts-ignore
			backgroundHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * distance;
			// @ts-ignore
			backgroundWidth = backgroundHeight * camera.aspect;
			// @ts-ignore
			backgroundPlane.scale.set(backgroundWidth, backgroundHeight, 1);

			// @ts-ignore
			backgroundPlane.position.y = -40; // Push it far enough back to avoid interference
			// @ts-ignore
			backgroundPlane.position.z = -20; // Push it far enough back to avoid interference
			// @ts-ignore
			scene.add(backgroundPlane);
		});

		// Lighting
		const light = new THREE.PointLight(0x696969, 1, 100);
		// @ts-ignore
		light.position.set(10, 10, 10);
		scene.add(light);

		// Add an ambient light for overall brightness
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
		scene.add(ambientLight);

		// Add a directional light to highlight the model
		const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		// @ts-ignore
		directionalLight.position.set(5, 10, 7.5);
		scene.add(directionalLight);

		// Create asteroids with programming logos
		// logos.forEach((logo, i) => createAsteroidWithLogo(logo, i * 2 - 4));
		// @ts-ignore
		Array(600).fill().forEach(addStar2);

		animate();
		window.addEventListener('resize', onWindowResize);
	});

	function animate() {
		requestAnimationFrame(animate);

		// // Move spaceship forward
		// spaceship.position.z -= 0.01;

		// Rotate and drift asteroids

		// @ts-ignore
		asteroids.forEach((asteroid) => {
			asteroid.rotation.x += 0.01;
			asteroid.rotation.y += 0.01;
			// asteroidOffset += asteroidSpeed;

			// Math.round(Math.random()) == 1
			// 	? (asteroid.position.x = asteroid.position.x + 0.007)
			// 	: (asteroid.position.x = asteroid.position.x - 0.007);
			// let drctn = Math.round(Math.random());

			// if (drctn == 1) {
			asteroid.position.x = asteroid.position.x + (Math.round(Math.random()) - 1) / 1000;
			// } else {
			// 	asteroid.position.x = asteroid.position.x - 0.007;
			// }

			asteroid.position.y = asteroid.position.y + 0.01;

			// @ts-ignore
			if (asteroid.position.z > camera.position.z) {
				asteroid.position.z = Math.random() * -10 - 3;
			}
		});

		// Animate background back and forth
		// backgroundOffset += backgroundSpeed;
		// backgroundPlane.position.x = Math.sin(backgroundOffset) * 0.001;

		// @ts-ignore
		renderer.render(scene, camera);
	}

	// @ts-ignore
	function animateStars(_distance) {
		// Example: Make each star move in random directions
		// @ts-ignore
		asteroids.forEach((asteroid) => {
			asteroid.rotation.x += 0.01;
			asteroid.rotation.y += 0.01;
			// asteroidOffset += asteroidSpeed;
			// asteroid.position.x = asteroid.position.x + Math.sin(asteroidOffset) * 0.3;

			// @ts-ignore
			if (asteroid.position.z > camera.position.z) {
				asteroid.position.z = Math.random() * -10 - 3;
			}

			// asteroid.position.x = asteroid.position.x + Math.sin(asteroidOffset) + _distance;

			gsap.to(asteroid.position, {
				y: asteroid.position.y + _distance,
				duration: 1, // Duration in seconds
				ease: 'power2.out'
			});
		});

		// @ts-ignore
		gsap.to(backgroundPlane.position, {
			// @ts-ignore
			y: backgroundPlane.position.y + _distance,
			duration: 1, // Duration in seconds
			ease: 'power2.out'
		});
		// stars.forEach((star) => {
		// 	// Set a random position offset for the star
		// 	const randomX = (Math.random() - 0.5) * 2;
		// 	const randomY = (Math.random() - 0.5) * 2;
		// 	const randomZ = (Math.random() - 0.5) * 2;

		// 	// Animate the star's position over time
		// 	gsap.to(star.position, {
		// 		x: star.position.x + randomX,
		// 		y: star.position.y + randomY,
		// 		z: star.position.z + randomZ,
		// 		duration: 1, // Duration in seconds
		// 		ease: 'power2.out'
		// 	});
		// });
	}

	// @ts-ignore
	function addStar() {
		const asteroidGeometry = new THREE.SphereGeometry(0.25, 10, 10);
		const textureLoader = new THREE.TextureLoader();
		const logoTexture = textureLoader.load(`/assets/${logos[Math.floor(Math.random() * 4.44)]}`);
		const asteroidMaterial = new THREE.MeshBasicMaterial({ map: logoTexture });
		const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
		const x = THREE.MathUtils.randFloatSpread(200);
		const y = THREE.MathUtils.randFloatSpread(20);
		const z = THREE.MathUtils.randFloatSpread(100);
		// @ts-ignore
		asteroid.position.set(x, y, z);

		setTimeout(function () {
			asteroids.push(asteroid);
			// @ts-ignore
			scene.add(asteroid);
		}, Math.random() * 1000);
	}

	function addStar2() {
		const loader = new GLTFLoader();
		loader.load(
			`/assets/glb/${logos[Math.floor(Math.random() * 4.44)]}`,
			// @ts-ignore
			(gltf) => {
				// Add the loaded model to the scene

				const x = THREE.MathUtils.randFloatSpread(50);
				const y = THREE.MathUtils.randFloatSpread(800);
				const z = THREE.MathUtils.randFloatSpread(20);

				const model = gltf.scene;
				model.position.set(x, y, z); // Position the model at the origin
				const scale = Math.random() * 0.5; // Scale between 0.5 and 1.0
				model.scale.set(scale, scale, scale);

				// Randomize rotation
				model.rotation.x = Math.random() * 2 * Math.PI; // Rotate between 0 and 360 degrees
				model.rotation.y = Math.random() * 2 * Math.PI;
				model.rotation.z = Math.random() * 2 * Math.PI;

				asteroids.push(model);
				// @ts-ignore
				scene.add(model);
			},
			// @ts-ignore
			(xhr) => {
				// Optional: Show loading progress
				console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
			},
			// @ts-ignore
			(error) => {
				// Handle errors
				console.error('An error happened', error);
			}
		);
	}

	function onWindowResize() {
		// @ts-ignore
		camera.aspect = window.innerWidth / window.innerHeight;
		// @ts-ignore
		camera.updateProjectionMatrix();
		// @ts-ignore
		renderer.setSize(window.innerWidth, window.innerHeight);

		// Recalculate background dimensions on resize
		// @ts-ignore
		const distance = camera.position.z - 10;
		// @ts-ignore
		const backgroundHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * distance;
		// @ts-ignore
		const backgroundWidth = backgroundHeight * camera.aspect;
		// @ts-ignore
		backgroundPlane.scale.set(backgroundWidth, backgroundHeight, 1);
	}
</script>

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -100;
	}
</style>
