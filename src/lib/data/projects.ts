import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import daw from '../md/daw-cli.md?raw';
import tpg from '../md/tpg-studios.md?raw';
import api from '../md/daw-api.md?raw';
import dawhub from '../md/dawhub.md?raw';
import toro from '../md/toro.md?raw'
import pet from '../md/pet-portrait-app.md?raw'
import airseek from '../md/airseek.md?raw'

export const items: Array<Project> = [
	{
		slug: 'tpg-studios',
		color: '#ff3e00',
		description: tpg,
		shortDescription:
			'An e-commerce platform offering seamless shopping experiences, real-time updates, and secure payments.',
		links: [{ to: 'https://tpgstudios.art', label: 'Website' }, { to: 'https://github.com/grayson40/tpgstudios.art', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'TPG Studios',
		period: {
			from: new Date(2024, 2, 1),
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'postgres', 'stripe', 'vercel'),
		type: 'E-commerce Website'
	},
	{
		slug: 'pet-portrait',
		color: '#5e95e3',
		description: pet,
		shortDescription:
			'An AI-powered mobile app for pet owners to capture perfect photos, featuring intelligent sound systems and photo management.',
		links: [{ to: 'https://pet-portrait.com', label: 'Website' }, { to: 'https://github.com/grayson40/pet-portrait', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'Pet Portrait',
		period: {
			from: new Date(2025, 1, 1),
		},
		skills: getSkills('reactjs', 'ts', 'tailwind', 'supabase', 'express', 'redis', 'node'),
		type: 'Mobile App'
	},
	{
		slug: 'toro-eats',
		color: '#5e95e3',
		description: toro,
		shortDescription:
			'A mobile app landing page that doubles as an admin panel, offering a seamless user experience for food rating and management.',
		links: [{ to: 'https://toroeats.com', label: 'Website' }, { to: 'https://github.com/Gray-Bay-Solutions/toro-frontend', label: 'GitHub' }],
		logo: Assets.NextJs,
		name: 'Toro Eats',
		period: {
			from: new Date(2024, 7, 1),
			to: new Date(2025, 0, 31)
		},
		skills: getSkills('reactjs', 'ts', 'tailwind', 'firebase', 'nextjs', 'vercel'),
		type: 'Admin Dashboard'
	},
	{
		slug: 'airseek',
		color: '#5e95e3',
		description: airseek,
		shortDescription:
			'AirSeek is a price comparison platform designed specifically for airsoft products. It aggregates prices from major retailers, enabling users to find the best deals effortlessly.',
		links: [{ to: 'https://airseek.com', label: 'Website' }, { to: 'https://github.com/grayson40/airseek', label: 'GitHub' }],
		logo: Assets.NextJs,
		name: 'AirSeek',
		period: {
			from: new Date(2025, 0, 30),
		},
		skills: getSkills('nextjs', 'reactjs', 'ts', 'tailwind', 'supabase', 'vercel', 'redis', 'express', 'node'),
		type: 'Web Application'
	},
	{
		slug: 'daw-version-control',
		color: '#5e95e3',
		description: daw,
		shortDescription:
			'A simple CLI tool built to efficiently handle versioning in Digital Audio Workstation (DAW) projects.',
		links: [{ to: 'https://github.com/grayson40/daw-cli', label: 'GitHub' }],
		logo: Assets.Go,
		name: 'DAW Version Control',
		period: {
			from: new Date(2022, 11, 1),
		},
		skills: getSkills('go'),
		type: 'CLI Tool',
		screenshots: [
			{
				label: 'CLI Tool',
				src: '/src/lib/assets/daw-cli.png'
			},
		]
	},
	{
		slug: 'daw-api',
		color: '#5e95e3',
		description: api,
		shortDescription:
			'Go API designed to process requests originating from both a command-line interface tool and a web application.',
		links: [{ to: 'https://github.com/grayson40/daw-api', label: 'GitHub' }],
		logo: Assets.Go,
		name: 'DAW API',
		period: {
			from: new Date(2022, 11, 1)
		},
		skills: getSkills('go', 'docker', 'mysql'),
		type: 'API'
	},
	{
		slug: 'dawhub',
		color: '#ff3e00',
		description: dawhub,
		shortDescription:
			'A collaborative version control platform designed specifically for Digital Audio Workstation (DAW) projects.',
		links: [{ to: 'https://dawhub-io.vercel.app', label: 'Website' }, { to: 'https://github.com/grayson40/dawhub.io', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'DawHub',
		period: {
			from: new Date(2022, 11, 1),
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'vercel'),
		type: 'Web Application'
	},
	// {
	// 	slug: 'slick-portfolio-svelte',
	// 	color: '#ff3e00',
	// 	description:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	shortDescription:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
	// 	logo: Assets.Svelte,
	// 	name: 'Slick Portfolio',
	// 	period: {
	// 		from: new Date()
	// 	},
	// 	skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
	// 	type: 'Website',
	// 	screenshots: [
	// 		{
	// 			label: 'screen 1',
	// 			src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '2',
	// 			src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '3',
	// 			src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '4',
	// 			src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '5',
	// 			src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '6',
	// 			src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		}
	// 	]
	// }
];

export const title = 'Projects';
