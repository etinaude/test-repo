import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],

	build: {
		target: 'esnext'
	},
	esbuild: {
		supported: {
			'top-level-await': true
		}
	}
});
