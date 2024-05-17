import adapter from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';

const mdsvexOptions = {
	extensions: ['.md'],
}

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md'],
	preprocess: mdsvex(mdsvexOptions)

};
