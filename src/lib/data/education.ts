import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelors of Science, Computer Science',
		description: '',
		location: 'Orlando, FL',
		logo: Assets.UCF,
		name: '',
		organization: 'UCF',
		period: { from: new Date(2021, 0, 1), to: new Date(2024, 7, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'C++', 'Python', 'Java', 'Haskell', 'Go', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 'SQL', 'Docker', 'Kubernetes', 'CI/CD', 'Cloud Platforms', 'Embedded Systems', 'RTOS', 'Assembly', 'IoT', 'Computer Architecture', 'Algorithms and Data Structures']
	},
];

export const title = 'Education';
