import logo1 from '../assets/svg/logo-1.svg';
import logo2 from '../assets/svg/logo-2.svg';
import logo3 from '../assets/svg/logo-3.svg';
import logo4 from '../assets/svg/logo-4.svg';
import logo5 from '../assets/svg/logo-5.svg';

export const Logos = [
    // 1. Globe / Waves Circle
    {
        id: 1,
        name: 'Logoipsum',
        icon: logo1,
    },
    // 2. Sunburst / Radiant Circle
    {
        id: 2,
        name: 'Logoipsum',
        icon: logo2,
    },
    // 3. Lightning Bolt Circle
    {
        id: 3,
        name: 'Logoipsum',
        icon: logo3,
    },
    // 4. Four Petal / Clover Flower Circle
    {
        id: 4,
        name: 'Logoipsum',
        icon: logo4,
    },
    // 5. Concentric Circles / Spiral Target
    {
        id: 5,
        name: 'Logoipsum',
        icon: logo5,
    },
];

export const customStyles = `
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 35s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
`;

export const CATEGORIES = [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
    'Digital Illustration',
    'Film & Video',
    'Crafts',
    'Freelance & Entrepreneurship',
    'Graphic Design',
    'Photography',
    'Productivity',
    'Web Development',
    'Data Science',
    'Cooking',
];

export const ALL_COURSES = [
  {
    id: 1,
    title: 'Learn Figma from Basic',
    author: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: 25,
    category: 'UI/UX Design',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
    avatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 2,
    title: 'Build Digital Asset',
    author: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: 25,
    category: 'Graphic Design',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    avatars: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 3,
    title: 'the Power of Big Data',
    author: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: 25,
    category: 'Data Science',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    avatars: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 4,
    title: 'Balancing Productivity an...',
    author: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: 25,
    category: 'Productivity',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    avatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 5,
    title: 'Mastering Money Manage...',
    author: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: 25,
    category: 'Freelance & Entrepreneurship',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    avatars: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 6,
    title: 'From Idea to Startup Succ...',
    author: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: 25,
    category: 'Freelance & Entrepreneurship',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    avatars: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    ],
  },
];