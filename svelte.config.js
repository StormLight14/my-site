import adapter from '@sveltejs/adapter-node';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { getHighlighter } from 'shiki';

const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const theme = 'github-dark-default';

			const highlighter = await getHighlighter({
				themes: [theme],
				langs: ['html', 'css', 'javascript', 'rust', 'python']
			});
			await highlighter.loadLanguage('html', 'css', 'javascript', 'rust', 'python');
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
			return `{@html \`${html}\`}`
		}
	}
}

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md'],
	preprocess: mdsvex(mdsvexOptions)

};
