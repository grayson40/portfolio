import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'rsr-developer-ii',
		company: 'RSR Group, Inc.',
		description: "At RSR, I work as a full-stack developer where I am responsible for creating and maintaining a variety of software. These include an internal Customer Relationship Management (CRM) system and a Labor Management System (LMS), both of which are essential for the company's daily operations. I also contribute to the development of a fully-featured e-commerce website that serves as the main point of interaction for our customers. My work involves a mix of front-end and back-end technologies, and requires a deep understanding of our proprietary software systems and business operations.",
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Winter Park, FL',
		period: { from: new Date(2023, 0, 1) },
		skills: getSkills('python', 'django', 'js', 'reactjs', 'docker', 'mysql', 'gitlab', 'markdown'),
		name: 'Software Developer II',
		color: 'red',
		links: [],
		logo: Assets.RSR,
		shortDescription: 'Full-stack developer working on internal CRM and LMS tools, as well as a comprehensive e-commerce website.'
	},
	{
		slug: 'flir-intern',
		company: 'Teledyne FLR',
		description: "At FLIR, I worked on two key projects. The first involved developing software for a FreeRTOS system to interact with a cryocooling module for a Long-Wave Infrared (LWIR) camera. This required a deep understanding of FreeRTOS and precision control systems to ensure optimal performance and longevity of the camera. The second project was creating an auto white balancing software for an Electro-Optical (EO) camera. This software played a crucial role in maintaining the quality and accuracy of the camera's output under varying lighting conditions.",
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Orlando, FL',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 11, 1) },
		skills: getSkills('c', 'c++', 'python', 'github'),
		name: 'Software Engineering Intern',
		color: 'white',
		links: [],
		logo: Assets.FLIR,
		shortDescription: 'Developed software for a gimbal system used in infrared imaging.'
	},
	{
		slug: 'icon-intern',
		company: 'Icon Systems, Inc.',
		description: 'At Icon, I contributed to the development of an emerging IoT product line focused on bathroom products, including urinals, lavatory caps, sinks, and soap dispensers. My work involved building features that leveraged proprietary flushing algorithms, which interacted directly with hardware components placed inside the valve. This role required a blend of software development skills and a deep understanding of the hardware-software interface.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Oviedo, FL',
		period: { from: new Date(2021, 10, 1), to: new Date(2022, 4, 1) },
		skills: getSkills('c', 'python', 'github', 'markdown'),
		name: 'Embedded Software Intern',
		color: 'blue',
		links: [],
		logo: Assets.ICON,
		shortDescription: 'Contributed to an emerging IoT product line running a proprietary OS.'
	},
];

export const title = 'Experience';
