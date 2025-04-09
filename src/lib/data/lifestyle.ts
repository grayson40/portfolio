export const title = 'Gallery';

export const description = 
  'When I\'m not coding, you\'ll find me enjoying life\'s adventures. My passion for an active lifestyle keeps me energized, creative, and brings balance to my life.';

export type LifestyleActivity = {
  name: string;
  icon: `i-${string}-${string}`;
  images: string[];
};

export const activities: LifestyleActivity[] = [
  {
    name: 'Surfing',
    icon: 'i-carbon-tsunami',
    images: ['/gallery/surf-1.jpg', '/gallery/surf-2.jpg', '/gallery/surf-3.jpg']
  },
  {
    name: 'Fishing',
    icon: 'i-carbon-fish',
    images: ['/gallery/fish-1.jpg', '/gallery/fish-2.jpg', '/gallery/fish-3.jpg', '/gallery/fish-4.jpg', '/gallery/fish-5.jpg']
  },
  // {
  //   name: 'Cooking',
  //   icon: 'i-carbon-restaurant',
  //   images: ['/gallery/food-1.jpg', '/gallery/food-2.jpg']
  // },
  {
    name: 'Travel',
    icon: 'i-carbon-globe',
    images: ['/gallery/nosara.jpg', '/gallery/jaco.jpg', '/gallery/mission-beach.jpg']
  }
]; 