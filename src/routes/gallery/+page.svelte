<script lang="ts">
    import { activities, title, description, type LifestyleActivity } from '@data/lifestyle';
    import CommonPage from '$lib/components/CommonPage.svelte';
    import UIcon from '$lib/components/Icon/UIcon.svelte';
    import { base } from '$app/paths';
    
    let selectedActivity = activities[0];
    let showLightbox = false;
    let currentImage = '';
    
    function selectActivity(activity: LifestyleActivity): void {
        selectedActivity = activity;
    }
    
    function openLightbox(imageSrc: string): void {
        currentImage = `${base}${imageSrc}`;
        showLightbox = true;
    }
    
    function closeLightbox(): void {
        showLightbox = false;
    }
</script>

<CommonPage {title}>
    <div class="lifestyle-gallery-container">
        <p class="description text-center mb-10 text-[var(--tertiary-text)] font-light text-lg max-w-3xl mx-auto">
            {description}
        </p>
        
        <!-- Category Navigation -->
        <div class="category-nav">
            {#each activities as activity}
                <button 
                    class="category-button {selectedActivity.name === activity.name ? 'active' : ''}"
                    on:click={() => selectActivity(activity)}
                >
                    <UIcon icon={activity.icon} classes="text-1.5em" />
                    <span>{activity.name}</span>
                </button>
            {/each}
        </div>
        
        <!-- Selected Category Header -->
        <div class="category-header">
            <UIcon icon={selectedActivity.icon} classes="text-2.5em text-[var(--accent-text)]" />
            <h2 class="text-2xl font-bold">{selectedActivity.name}</h2>
        </div>
        
        <!-- Photo Gallery -->
        <div class="photo-gallery">
            {#each selectedActivity.images as image}
                <div 
                    class="gallery-item" 
                    on:click={() => openLightbox(image)}
                    on:keydown={(e) => e.key === 'Enter' && openLightbox(image)}
                    tabindex="0"
                    role="button"
                    aria-label="View larger image"
                >
                    <img src="{base}{image}" alt={`${selectedActivity.name} photo`} />
                    <div class="gallery-item-overlay">
                        <UIcon icon="i-carbon-zoom-in" classes="text-2em" />
                    </div>
                </div>
            {/each}
        </div>
    </div>
    
    <!-- Lightbox for enlarged view -->
    {#if showLightbox}
        <button 
            class="lightbox" 
            on:click={closeLightbox}
            on:keydown={(e) => e.key === 'Escape' && closeLightbox()}
            aria-label="Close image lightbox"
        >
            <button 
                class="lightbox-content" 
                on:click|stopPropagation={() => {}}
                on:keydown|stopPropagation={() => {}}
                aria-label="Image container"
            >
                <button class="lightbox-close">
                    <UIcon icon="i-carbon-close" classes="text-2em" />
                </button>
                <img src={currentImage} alt="Enlarged view" />
            </button>
        </button>
    {/if}
</CommonPage>

<style lang="scss">
    .lifestyle-gallery-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .category-nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
        margin-bottom: 2rem;
        
        @media (min-width: 768px) {
            gap: 1rem;
        }
    }
    
    .category-button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        background-color: var(--main);
        border: 1px solid var(--border);
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.9rem;
        
        @media (min-width: 768px) {
            font-size: 1rem;
            padding: 0.75rem 1.25rem;
        }
        
        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        &.active {
            background-color: var(--main-hover);
            border-color: var(--accent-text);
            font-weight: 500;
        }
    }
    
    .category-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--border);
    }
    
    .photo-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
    }
    
    .gallery-item {
        position: relative;
        border-radius: 0.5rem;
        overflow: hidden;
        aspect-ratio: 4/3;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        
        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.15);
            
            img {
                transform: scale(1.05);
            }
            
            .gallery-item-overlay {
                opacity: 1;
            }
        }
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
    }
    
    .gallery-item-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        color: white;
    }
    
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        border: none;
        padding: 0;
        cursor: pointer;
        
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 85vh;
            background: transparent;
            border: none;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: default;
            
            img {
                max-width: 100%;
                max-height: 85vh;
                border-radius: 0.5rem;
                box-shadow: 0 0 20px rgba(0,0,0,0.5);
                pointer-events: none;
            }
        }
        
        .lightbox-close {
            position: absolute;
            top: -2rem;
            right: 0;
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0.5rem;
            z-index: 1001;
            
            &:hover {
                transform: scale(1.1);
            }
        }
    }
</style>