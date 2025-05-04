import adapter from '@sveltejs/adapter-vercel';
import {sveltePreprocess} from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
	  adapter: adapter(),
	  // Optional: enable SSR (usually on by default)
	  ssr: true,
	}
};

export default config;
