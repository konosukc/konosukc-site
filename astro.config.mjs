// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '@konosukc',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/konosukc' }],
			plugins: [
				starlightObsidian({
					vault: 'src/content/konosukc-site',
				}),
			],
			sidebar: [
				obsidianSidebarGroup,
			],
		}),
	],
});
