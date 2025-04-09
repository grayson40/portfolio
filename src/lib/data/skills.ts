import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: 'JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: 'TypeScript is a strict syntactical superset of JavaScript that adds optional static typing to the language.',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'purple',
		description: 'Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML.',
		logo: Assets.Tailwind,
		name: 'Tailwind CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'redis',
		color: 'red',
		description: 'Redis is an open-source, in-memory data structure store, used as a database, cache, and message broker.',
		logo: Assets.Redis,
		name: 'Redis',
		category: 'database'
	}),
	defineSkill({
		slug: 'supabase',
		color: 'green',
		description: 'Supabase is an open-source Firebase alternative that provides a backend as a service, including database, authentication, and real-time capabilities.',
		logo: Assets.Supabase,
		name: 'Supabase',
		category: 'database'
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'blue',
		description: 'Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications.',
		logo: Assets.NextJs,
		name: 'Next.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'HTML is the standard markup language for documents designed to be displayed in a web browser.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: 'React.js is an open-source front-end JavaScript library for building user interfaces or UI components.',
		logo: Assets.ReactJs,
		name: 'React.js',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'go',
		color: 'cyan',
		description: 'Go is a statically typed, compiled language that is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.',
		logo: Assets.Go,
		name: 'Go',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: 'Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'c',
		color: 'blue',
		description: 'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.',
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'c++',
		color: 'blue',
		description: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'blue',
		description: 'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'firebase',
		color: 'yellow',
		description: 'Firebase is a platform developed by Google for creating mobile and web applications.',
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'db'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'blue',
		description: 'MySQL is an open-source relational database management system.',
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'django',
		color: 'green',
		description: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.',
		logo: Assets.Django,
		name: 'Django',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flask',
		color: 'white',
		description: 'Flask is a micro web framework written in Python.',
		logo: Assets.Flask,
		name: 'Flask',
		category: 'framework'
	}),
	defineSkill({
		slug: 'express',
		color: 'yellow',
		description: 'Express.js, or simply Express, is a back end web application framework for Node.js.',
		logo: Assets.ExpressJs,
		name: 'Express.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'node',
		color: 'green',
		description: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'library'
	}),
	defineSkill({
		slug: 'flutter',
		color: 'cyan',
		description: 'Flutter is an open-source UI software development kit created by Google.',
		logo: Assets.Flutter,
		name: 'Flutter',
		category: 'framework'
	}),
	defineSkill({
		slug: 'postgres',
		color: 'blue',
		description: 'PostgreSQL is a free and open-source relational database management system emphasizing extensibility and SQL compliance.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'markdown',
		color: 'purple',
		description: 'Markdown is a lightweight markup language with plain-text-formatting syntax.',
		logo: Assets.Markdown,
		name: 'Markdown',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'stripe',
		color: 'purple',
		description: 'Stripe is an American financial services and software as a service company.',
		logo: Assets.Stripe,
		name: 'Stripe',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'vercel',
		color: 'black',
		description: 'Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow.',
		logo: Assets.Vercel,
		name: 'Vercel',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'github',
		color: 'black',
		description: 'GitHub is a provider of Internet hosting for software development and version control using Git.',
		logo: Assets.GitHub,
		name: 'GitHub',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'gitlab',
		color: 'orange',
		description: 'GitLab is a web-based DevOps lifecycle tool that provides a Git repository manager providing wiki, issue-tracking and CI/CD pipeline features, using an open-source license.',
		logo: Assets.GitLab,
		name: 'GitLab',
		category: 'devtools'
	}),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
