import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Grayson';

export const lastName = 'Crozier';

export const description =
	'A detail-oriented Software Developer with experience in full-stack development and embedded software. As a dedicated researcher and learner, I am passionate about solving complex software challenges and eager to contribute to innovative technology solutions.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/grayson40' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/grayson-crozier-1925411a6/'
	},
	{
		platform: Platform.Email,
		link: 'graysoncrozier40@gmail.com'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com/channel/UCJBq-gm5H8zwfqcER6anDZw'
	},
];

export const skills = getSkills('go', 'python', 'js', 'ts', 'reactjs', 'django', 'docker', 'mysql', 'firebase', 'node', 'svelte', 'express', 'java', 'html', 'c', 'c++');

export const aboutMe = 
	"Beyond coding, I'm passionate about living a balanced lifestyle that keeps me connected to nature and helps me maintain perspective. Whether I'm catching waves, finding my flow in yoga, or enjoying the patience of fishing, I bring the same mindset of focus and continuous improvement to both my personal and professional life. I believe that my diverse interests make me a more creative problem-solver and a more well-rounded person.";

export type Interest = {
	name: string;
	icon: `i-${string}-${string}`;
	description: string;
};

export const interests: Interest[] = [
	{
		name: 'Yoga',
		icon: 'i-carbon-sun',
		description: 'I practice yoga to maintain balance, flexibility, and mental clarity. My regular practice helps me approach challenges with a calm and focused mind.'
	},
	{
		name: 'Surfing',
		icon: 'i-carbon-tsunami',
		description: 'There\'s nothing like catching waves at sunrise. Surfing teaches me patience, timing, and how to flow with challenges rather than fight against them.'
	},
	{
		name: 'Golf',
		icon: 'i-carbon-tennis-ball',
		description: 'Golf is my meditation in motion. I enjoy the precision, strategy, and constant improvement that comes with the game.'
	},
	{
		name: 'Fishing',
		icon: 'i-carbon-fish',
		description: 'Fishing connects me to nature and teaches patience. I enjoy both freshwater and saltwater fishing whenever I can escape to the water.'
	},
	{
		name: 'Cooking',
		icon: 'i-carbon-restaurant',
		description: 'I love experimenting with fresh ingredients and creating healthy, delicious meals. Cooking is my creative outlet.'
	},
	{
		name: 'Travel',
		icon: 'i-carbon-globe',
		description: 'Exploring new places gives me perspective and inspiration. Costa Rica and San Diego are among my favorite destinations for their perfect blend of nature and vibrant culture.'
	}
];
