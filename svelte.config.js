import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

// Use /portfolio for GitHub Pages, but no base path for Vercel
const dev = process.env.NODE_ENV === 'development';
const base = process.env.DEPLOY_TARGET === 'github' ? '/portfolio' : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	vitePlugin: {
		inspector: {
			showToggleButton: 'always'
		}
	},
	kit: {
		adapter: adapter({ 
			fallback: 'index.html',
			precompress: false, 
		}),
		alias: {
			$lib: './src/lib',
			'@data': './src/lib/data',
			'@components': './src/lib/components',
			'@md': './src/lib/md',
			'@stores': './src/lib/stores',
			'@utils': './src/lib/utils'
		},
		paths: {
			base: dev ? '' : base
		},
		prerender: {
			entries: [] // Disable prerendering completely
		}
	}
};

export default config;
