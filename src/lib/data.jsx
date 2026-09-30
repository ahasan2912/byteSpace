import logo1 from '../assets/svg/logo-1.svg';
import logo2 from '../assets/svg/logo-2.svg';
import logo3 from '../assets/svg/logo-3.svg';
import logo4 from '../assets/svg/logo-4.svg';
import logo5 from '../assets/svg/logo-5.svg';
import client1 from '../assets/client_1.png';
import client2 from '../assets/client_2.png';
import client3 from '../assets/client_3.png';
import learningIcon1 from '../assets/svg/path_1.svg';
import learningIcon2 from '../assets/svg/path_2.svg';
import learningIcon3 from '../assets/svg/path_3.svg';
import learningIcon4 from '../assets/svg/path_4.svg';
import learningIcon5 from '../assets/svg/path_5.svg';
import learningIcon6 from '../assets/svg/path_6.svg';
import skillIcon1 from '../assets/skill_1.avif';
import skillIcon2 from '../assets/skill_2.avif';
import skillIcon3 from '../assets/skill_3.avif';
import skillIcon4 from '../assets/skill_4.avif';
import skillIcon5 from '../assets/skill_5.avif';
import skillIcon6 from '../assets/skill_6.png';

export const logos = [
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

export const categories = [
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

export const allCourses = [
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
    image: skillIcon1,
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
    image: skillIcon2,
    avatars: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 3,
    title: 'The Power of Big Data',
    author: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: 25,
    category: 'Data Science',
    isFeatured: true,
    image: skillIcon3,
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
    image: skillIcon4,
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
    image: skillIcon5,
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
    image: skillIcon6,
    avatars: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: client1,
    avatarBg: 'bg-[#EAB308]', // Vibrant yellow background for Sarah
    quote: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."'
  },
  {
    id: 2,
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: client2,
    avatarBg: 'bg-slate-300',
    quote: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."'
  },
  {
    id: 3,
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: client3,
    avatarBg: 'bg-slate-200',
    quote: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."'
  }
];

export const learningCategories = [
  {
    id: 1,
    title: 'Design',
    icon: learningIcon1,
  },
  {
    id: 2,
    title: 'Development',
    icon: learningIcon2,
  },
  {
    id: 3,
    title: 'IT & Software',
    icon: learningIcon3,
  },
  {
    id: 4,
    title: 'Business',
    icon: learningIcon4,
  },
  {
    id: 5,
    title: 'Marketing',
    icon: learningIcon5,
  },
  {
    id: 6,
    title: 'Photography',
    icon: learningIcon6,
  },
]; 