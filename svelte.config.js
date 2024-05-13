import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

const mdsvexOptions = {
	extensions: ['.md']
}

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	},
	extensions: ['.svelte', '.md'],
	preprocess: mdsvex(mdsvexOptions)

};
