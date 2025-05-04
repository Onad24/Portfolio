<script>
// @ts-nocheck

	import { onMount } from 'svelte';

	import { scale } from 'svelte/transition';
	// const token = ;
	// const owner = 'Onad24';

	const languageIcons = {
				JavaScript: '/assets/js.png',
				PHP: '/assets/php.png',
				CSS: '/assets/css.png',
				TailwindCSS: '/assets/tailwind.png',
				Flutter: '/assets/flutter.png',
				SvelteKit: '/assets/svelte.png',
				'C#': '/assets/csharp.png',
				'VB.Net': '/assets/vb.png',
				ReactNative: '/assets/reactnative.png',
			};

	const repos = [
		{name: "MTO Ticketing System", langs: ["Flutter"]},
		{name: "MTO Queueing System", langs: ["SvelteKit", "JavaScript", "Flutter"]},
		{name: "DWH EMR", langs: ['SvelteKit', "TailwindCSS"]},
		{name: "Food Blog App", langs: ["PHP","JavaScript","TailwindCSS"]},
		{name: "EKonsulta Consultation Form App", langs: ["ReactNative","CSS"]},
		{name: "UPS Global Monitoring and Reports System", langs: ['VB.Net']},
		{name: "UPS Matching Tracking System", langs: ['VB.Net']},
		{name: "Kantar Compare, QC and Reformat", langs: ['VB.Net']},
		{name: "CreditSafe US Batching", langs: ['VB.Net']},
	];

	// async function getRepoLanguages(repo) {
	// 	try {
	// 		const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`, {
	// 		headers: {
	// 			Authorization: `Bearer ${token}`,
	// 			Accept: 'application/vnd.github+json'
	// 		}
	// 		});
	// 		const data = await response.json();


	// 		console.log(data);
	// 		return data;

	// 		// Example output: { "JavaScript": 1300078, "CSS": 71202, "Shell": 2513 }
	// 	} catch (error) {
	// 		console.error('Error fetching languages:', error);
	// 	}
	// 	}

	// let projects = [];

	// onMount(async()=>{
	// 		for(let repo of repos){
	// 			let languages = await getRepoLanguages(repo);
	// 			projects = [...projects, {repo, languages}];
	// 		}
	// 		console.log(projects[0]);
			
	// 	// let tempProjects = [];
	// 	// 	for(let repo of repos){
	// 	// 		let languages = await getRepoLanguages(repo);
	// 	// 		tempProjects.push({repo, languages});
	// 	// 	}
	// 	// 	console.log(projects[0]);
	// 	// 	projects = tempProjects
	// 	});
</script>

<div class="projects" transition:scale={{ duration: 600 }}>
	<h2>Projects</h2>
	<ul>
	{#if repos && repos.length > 0}
		{#each repos as repo}
			<li >
			<span>
			{repo.name}
			</span>
			<span>
				{#each repo.langs as lang}
					<img src={languageIcons[lang]} alt={lang} title={lang} width="25" height="25" />
				{/each}
			</span>
			</li>
		{/each}
	{:else}
  		<li>Loading projects...</li>
	{/if}
	</ul>
</div>

<style>
	.projects {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1rem;
	}
	img {
		padding: 4px;
		vertical-align: middle;

	}

	h2 {
		font-size: 3rem;font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
		color: #000000;
		text-shadow: 2px 2px 4px rgba(255, 255, 255,  0.5);
            margin-bottom: 1rem;
	}

	ul {
		font-size: 1.3rem;
		font-weight: 400;
        line-height: 1.5;
        text-shadow: 1px 1px 3px rgba(255, 255, 255,  0.4);
        margin-bottom: 1.5rem;
		color: #000000;
		max-width: 800px;
		width: 100%;
		text-align: left;
	}

	ul li {
		margin: 5px 0;
	}

	li {
	list-style: none;
	display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
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
		transition: background-color 0.4s;
	}

	.next-button:hover {
		background-color: #1c75d8;
	}
</style>
