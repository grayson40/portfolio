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
