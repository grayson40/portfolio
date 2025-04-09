<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title, skills, interests, aboutMe } from '@data/home';
	import { items as skillsItems } from '@data/skills';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatfromIcon } from '$lib/utils';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	
	// For animation on scroll
	let isHeroVisible = true;
	let isAboutVisible = false;
	let isInterestsVisible = false;
	let isGalleryVisible = false;
	
	onMount(() => {
		// Observe sections for animation on scroll
		const observerOptions = {
			threshold: 0.2,
			rootMargin: '0px'
		};
		
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.target.id === 'about-section' && entry.isIntersecting) {
					isAboutVisible = true;
				} else if (entry.target.id === 'interests-section' && entry.isIntersecting) {
					isInterestsVisible = true;
				} else if (entry.target.id === 'gallery-section' && entry.isIntersecting) {
					isGalleryVisible = true;
				}
			});
		}, observerOptions);
		
		const aboutSection = document.getElementById('about-section');
		const interestsSection = document.getElementById('interests-section');
		const gallerySection = document.getElementById('gallery-section');
		
		if (aboutSection) observer.observe(aboutSection);
		if (interestsSection) observer.observe(interestsSection);
		if (gallerySection) observer.observe(gallerySection);
		
		return () => {
			observer.disconnect();
		};
	});

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
	<script src="https://cdn.amplitude.com/libs/analytics-browser-2.6.2-min.js.gz"></script><script src="https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.1.6-min.js.gz"></script><script src="https://cdn.amplitude.com/libs/plugin-default-event-tracking-advanced-browser-0.8.0-min.js.gz"></script><script>window.amplitude.init('fc9990505e12f9cd00141c1784fd344e');window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1}));window.amplitude.add(window.amplitudeDefaultEventTrackingAdvancedPlugin.plugin());</script>
</svelte:head>

<!-- Hero Section -->
<div class="hero-section py-8 md:py-12 relative overflow-hidden">
	<div class="hero-bg-pattern"></div>
	<div class="container mx-auto px-4 relative z-10">
		<div class="flex flex-col md:flex-row items-center justify-between gap-8">
			<div class="text-center md:text-left md:w-1/2 fade-in-left {isHeroVisible ? 'visible' : ''}">
				<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow">{name} {lastName},</h1>
				<div class="description-wrapper">
					<p class="text-[var(--tertiary-text)] text-[1.2em] font-extralight max-w-2xl mb-6 description-fade-in">
						{description}
					</p>
				</div>
				<div class="flex justify-center md:justify-start gap-5 mb-8 social-links">
					{#each links as link, i}
						<a
							class="decoration-none hover:scale-110 transition-transform social-icon"
							style="animation-delay: {i * 0.1}s"
							href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
							target="_blank"
							rel="noreferrer"
						>
							<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'26px'} />
						</a>
					{/each}
				</div>
				<div class="scroll-indicator">
					<div class="scroll-arrow"></div>
					<div class="scroll-text">Scroll to explore</div>
				</div>
			</div>
			<div class="md:w-1/2 fade-in-right {isHeroVisible ? 'visible' : ''}">
				<div class="skills-carousel-wrapper">
					<Carrousel items={skills ?? skillsItems} />
				</div>
			</div>
		</div>
	</div>
</div>

<!-- About Me Section -->
<div class="about-me-section py-16 bg-[var(--main)]" id="about-section">
	<div class="container mx-auto px-4">
		<h2 class="text-2xl md:text-3xl font-bold mb-12 text-center text-[var(--accent-text)] section-title fade-up {isAboutVisible ? 'visible' : ''}">
			About Me
		</h2>
		<div class="md:flex items-center gap-12 max-w-5xl mx-auto">
			<div class="md:w-2/5 mb-8 md:mb-0 fade-in-left {isAboutVisible ? 'visible' : ''}">
				<div class="profile-image-container">
					<div class="profile-image-frame">
						<img 
							src="{base}/about-me.jpg" 
							alt="Profile Photo" 
							class="profile-image"
						/>
					</div>
				</div>
			</div>
			<div class="md:w-3/5 fade-in-right {isAboutVisible ? 'visible' : ''}">
				<p class="text-[var(--tertiary-text)] font-light leading-relaxed text-lg">
					{aboutMe}
				</p>
			</div>
		</div>
	</div>
</div>

<!-- Lifestyle & Interests Section -->
<div class="lifestyle-section py-16 bg-[var(--secondary)]" id="interests-section">
	<div class="container mx-auto px-4">
		<h2 class="text-2xl md:text-3xl font-bold mb-12 text-center text-[var(--accent-text)] section-title fade-up {isInterestsVisible ? 'visible' : ''}">
			Interests
		</h2>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-2">
			{#each interests as interest, i}
				<div 
					class="interest-card bg-[var(--main)] rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:translate-y-[-8px] fade-in {isInterestsVisible ? 'visible' : ''}"
					style="animation-delay: {i * 0.1}s"
				>
					<div class="flex items-center p-6 pb-3">
						<UIcon icon={interest.icon} classes="text-2.5em text-[var(--accent-text)]" />
						<h3 class="text-xl ml-3 font-medium">{interest.name}</h3>
					</div>
					<p class="text-[var(--tertiary-text)] font-light leading-relaxed px-6 pb-6">{interest.description}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- Featured Gallery -->
<div class="gallery-section py-16 bg-[var(--main)]" id="gallery-section">
	<div class="container mx-auto px-4">
		<h2 class="text-2xl md:text-3xl font-bold mb-12 text-center text-[var(--accent-text)] section-title fade-up {isGalleryVisible ? 'visible' : ''}">
			Adventures
		</h2>
		
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
			<div class="gallery-item fade-in {isGalleryVisible ? 'visible' : ''}" style="animation-delay: 0.1s">
				<img src="{base}/gallery/jaco.jpg" alt="Jaco" />
				<div class="gallery-item-caption">
					<h3>Jaco Falls</h3>
					<p>Jaco, Costa Rica</p>
				</div>
			</div>
			<div class="gallery-item fade-in {isGalleryVisible ? 'visible' : ''}" style="animation-delay: 0.1s">
				<img src="{base}/gallery/nosara.jpg" alt="Nosara" />
				<div class="gallery-item-caption">
					<h3>Nosara</h3>
					<p>Nosara, Costa Rica</p>
				</div>
			</div>
			<div class="gallery-item fade-in {isGalleryVisible ? 'visible' : ''}" style="animation-delay: 0.1s">
				<img src="{base}/gallery/mission-beach.jpg" alt="Mission Beach" />
				<div class="gallery-item-caption">
					<h3>Mission Beach</h3>
					<p>Mission Beach, California</p>
				</div>
			</div>
		
		</div>
		
		<div class="text-center mt-10 fade-up {isGalleryVisible ? 'visible' : ''}">
			<a href="{base}/gallery" class="gallery-button">
				View All Photos
				<UIcon icon="i-carbon-arrow-right" classes="ml-2" />
			</a>
		</div>
	</div>
</div>

<style lang="scss">
	// Hero section enhancements
	.hero-section {
		min-height: 85vh;
		display: flex;
		align-items: center;
		
		.hero-bg-pattern {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: 
				radial-gradient(circle at 25% 25%, rgba(var(--accent-rgb), 0.03) 0%, transparent 50%),
				radial-gradient(circle at 75% 75%, rgba(var(--accent-rgb), 0.03) 0%, transparent 50%);
			opacity: 0.7;
		}
	}
	
	.text-glow {
		text-shadow: 0 0 10px rgba(var(--accent-rgb), 0.2);
	}
	
	.description-wrapper {
		min-height: 3.6em;
	}
	
	.description-fade-in {
		animation: fadeIn 1s ease-out forwards;
		opacity: 0;
	}
	
	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	
	.skills-carousel-wrapper {
		padding: 1.5rem;
		border-radius: 12px;
		background: linear-gradient(to bottom right, rgba(var(--accent-rgb), 0.05), transparent);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(4px);
		transform: translateY(0);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		
		&:hover {
			transform: translateY(-5px);
			box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
		}
	}
	
	.social-links {
		.social-icon {
			opacity: 0;
			animation: fadeInUp 0.5s forwards ease-out;
		}
	}
	
	.scroll-indicator {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		opacity: 0.7;
		
		.scroll-arrow {
			width: 20px;
			height: 20px;
			border-right: 2px solid var(--accent-text);
			border-bottom: 2px solid var(--accent-text);
			transform: rotate(45deg);
			animation: scrollBounce 2s infinite;
		}
		
		.scroll-text {
			margin-top: 0.5rem;
			font-size: 0.8rem;
			color: var(--tertiary-text);
		}
	}
	
	@keyframes scrollBounce {
		0%, 20%, 50%, 80%, 100% { transform: translateY(0) rotate(45deg); }
		40% { transform: translateY(-10px) rotate(45deg); }
		60% { transform: translateY(-5px) rotate(45deg); }
	}
	
	// About section enhancements
	.profile-image-container {
		position: relative;
		padding: 1rem;
		
		.profile-image-frame {
			position: relative;
			border-radius: 16px;
			overflow: hidden;
			box-shadow: 
				0 16px 32px rgba(0, 0, 0, 0.2),
				0 0 0 8px rgba(var(--accent-rgb), 0.1);
			transform: rotate(-2deg);
			transition: transform 0.5s ease;
			
			&:hover {
				transform: rotate(0deg);
			}
			
			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.2), transparent 50%);
				z-index: 1;
			}
			
			.profile-image {
				width: 100%;
				height: auto;
				display: block;
				transform: scale(1);
				transition: transform 0.5s ease;
				
				&:hover {
					transform: scale(1.05);
				}
			}
		}
	}
	
	// Animation classes
	.fade-in-left {
		opacity: 0;
		transform: translateX(-30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
		
		&.visible {
			opacity: 1;
			transform: translateX(0);
		}
	}
	
	.fade-in-right {
		opacity: 0;
		transform: translateX(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
		
		&.visible {
			opacity: 1;
			transform: translateX(0);
		}
	}
	
	.fade-up {
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.8s ease, transform 0.8s ease;
		
		&.visible {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	.fade-in {
		opacity: 0;
		transform: scale(0.95);
		transition: opacity 0.5s ease, transform 0.5s ease;
		
		&.visible {
			opacity: 1;
			transform: scale(1);
		}
	}
	
	// Section titles with decorative elements
	.section-title {
		position: relative;
		display: inline-block;
		padding: 0 3rem;
		margin: 0 auto 3rem;
		
		&::before, &::after {
			content: '';
			position: absolute;
			top: 50%;
			width: 30px;
			height: 2px;
			background-color: var(--accent-text);
		}
		
		&::before {
			left: 0;
		}
		
		&::after {
			right: 0;
		}
	}
	
	// Gallery improvements
	.gallery-item {
		position: relative;
		overflow: hidden;
		border-radius: 0.5rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		aspect-ratio: 4/3;
		transform: translateY(0);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		
		&:hover {
			transform: translateY(-8px);
			box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
			
			img {
				transform: scale(1.08);
			}
			
			.gallery-item-caption {
				opacity: 1;
				transform: translateY(0);
			}
		}
		
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: transform 0.5s ease;
		}
		
		.gallery-item-caption {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			padding: 1rem;
			background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
			color: white;
			opacity: 0;
			transform: translateY(20px);
			transition: opacity 0.3s ease, transform 0.3s ease;
			
			h3 {
				font-size: 1.1rem;
				font-weight: 600;
				margin-bottom: 0.25rem;
			}
			
			p {
				font-size: 0.9rem;
				opacity: 0.9;
			}
		}
	}
	
	.gallery-button {
		display: inline-flex;
		align-items: center;
		background-color: var(--accent-text);
		color: var(--main);
		padding: 0.75rem 1.5rem;
		border-radius: 0.5rem;
		font-weight: 500;
		transition: all 0.3s ease;
		box-shadow: 0 4px 8px rgba(var(--accent-rgb), 0.3);
		
		&:hover {
			transform: translateY(-3px);
			box-shadow: 0 6px 12px rgba(var(--accent-rgb), 0.4);
		}
	}
	
	// Interest cards
	.interest-card {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		backdrop-filter: blur(5px);
		border: 1px solid rgba(var(--accent-rgb), 0.1);
		
		p {
			flex-grow: 1;
		}
	}
	
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
