// Creator data for Lumen project
// Note: Replace placeholder text and links with final content from CONTENT.md

import type { Creator } from '../types';

export const creators: Creator[] = [
  {
    id: 'dan',
    name: 'Daniel',
    handle: '@dan_ai',
    niche: 'Technology & Productivity',
    tagline: 'Systems that work while you sleep.',
    bio: 'AI expert turning chaos into structured processes. Helps automate routine and focus on strategic tasks.',
    portrait: '/img/daniel/portrait.webp',
    focus: 'center 20%',
    accent: '#3B82F6',
    surface: '#1E293B',
    telegram: {
      url: 'https://t.me/lmn_ai_bot',
      kind: 'bot'
    },
    greeting: 'Hi! I\'m Daniel. Ready to optimize your day?',
    qa: [
      { 
        chip: 'How to start automating?', 
        answer: 'Start with an audit: list 3 tasks you do daily. I\'ll help you find tools to automate them.' 
      },
      { 
        chip: 'Top 3 tools?', 
        answer: 'Notion for knowledge base, Make.com for integrations, and Telegram bots for quick notifications.' 
      },
      { 
        chip: 'How to avoid burnout?', 
        answer: '80/20 rule: automate 80% of routine to leave 20% for creativity that gives you energy.' 
      }
    ],
    fallback: 'Interesting question. Let\'s dive deeper into this on my Telegram channel.',
    posts: [
      {
        id: 'd1',
        type: 'image',
        image: '/img/daniel/feed-1.webp',
        caption: 'My productivity stack for this year. Save it so you don\'t lose it.',
        likes: 1240,
        comments: 89,
        time: '2h',
        alt: 'Screenshot of productivity tools notes'
      },
      {
        id: 'd2',
        type: 'text',
        text: '3 mistakes when setting up an AI assistant:\n1. Too general prompts.\n2. No feedback loop.\n3. Trying to automate everything at once.\nStart small.',
        likes: 856,
        comments: 42,
        time: '1d'
      },
      {
        id: 'd3',
        type: 'image',
        image: '/img/daniel/feed-2.webp',
        caption: 'Result of report automation: instead of 2 hours — 2 minutes.',
        likes: 2100,
        comments: 115,
        time: '3d',
        alt: 'Chart comparing time before and after automation'
      }
    ]
  },
  {
    id: 'leo',
    name: 'Leo',
    handle: '@leo_travels',
    niche: 'Lifestyle & Travel',
    tagline: 'The world is too big to sit still.',
    bio: 'Digital nomad sharing verified routes, travel hacks, and the aesthetics of slow living.',
    portrait: '/img/leo/portrait.webp',
    focus: 'center 30%',
    accent: '#F59E0B',
    surface: '#451A03',
    telegram: {
      url: 'https://t.me/lmn_ai_bot',
      kind: 'channel'
    },
    greeting: 'Hey! I\'m Leo. Where are we going next week?',
    qa: [
      { 
        chip: 'Budget-friendly countries?', 
        answer: 'Vietnam, Georgia, and Portugal are ideal right now for price/quality of life ratio.' 
      },
      { 
        chip: 'How to work on the road?', 
        answer: 'The key is stable internet and discipline. I always check WiFi speed on Airbnb before booking.' 
      },
      { 
        chip: 'Top 5 things in my backpack?', 
        answer: 'Power bank, universal adapter, noise-canceling headphones, light jacket, and Kindle.' 
      }
    ],
    fallback: 'Great question! I share more details and photos on my Telegram channel.',
    posts: [
      {
        id: 'l1',
        type: 'image',
        image: '/img/leo/feed-1.webp',
        caption: 'Morning in Bali. Coffee, surfing, and no calls until noon.',
        likes: 3400,
        comments: 156,
        time: '5h',
        alt: 'Surfer on a wave at sunrise'
      },
      {
        id: 'l2',
        type: 'text',
        text: 'Don\'t book first-line hotels if you want to sleep. Look for "second line" or remote villas — 30% cheaper and much quieter.',
        likes: 1205,
        comments: 78,
        time: '2d'
      },
      {
        id: 'l3',
        type: 'image',
        image: '/img/leo/feed-2.webp',
        caption: 'My work setup today. The view is worth a million.',
        likes: 2890,
        comments: 201,
        time: '4d',
        alt: 'Laptop on a desk with ocean view'
      }
    ]
  },
  {
    id: 'mina',
    name: 'Mina',
    handle: '@mina_design',
    niche: 'Design & Creativity',
    tagline: 'Design is not what it looks like. It\'s how it works.',
    bio: 'UI/UX designer simplifying complex interfaces. Shares processes, tutorials, and inspiration for creative people.',
    portrait: '/img/mina/portrait.webp',
    focus: 'center 25%',
    accent: '#EC4899',
    surface: '#831843',
    telegram: {
      url: 'https://t.me/lmn_ai_bot',
      kind: 'bot'
    },
    greeting: 'Hi! I\'m Mina. Let\'s make something beautiful.',
    qa: [
      { 
        chip: 'How to start in UI/UX?', 
        answer: 'Learn typography and color basics. Tools (Figma) change, but principles stay.' 
      },
      { 
        chip: 'How to find inspiration?', 
        answer: 'Don\'t just look at Dribbble. Study architecture, nature, and good print magazines.' 
      },
      { 
        chip: 'Your favorite Figma plugin?', 
        answer: 'Auto Layout is the base. Also Unsplash and Iconify for quick prototyping.' 
      }
    ],
    fallback: 'That\'s a great topic for discussion! Join my Telegram for exclusive tutorials.',
    posts: [
      {
        id: 'm1',
        type: 'image',
        image: '/img/mina/feed-1.webp',
        caption: 'Login screen redesign. Minimum fields, maximum conversion.',
        likes: 1890,
        comments: 94,
        time: '1h',
        alt: 'Before and after login form redesign'
      },
      {
        id: 'm2',
        type: 'text',
        text: '60-30-10 color rule:\n60% — primary color (background)\n30% — secondary (cards, panels)\n10% — accent (buttons, links)\nWorks every time.',
        likes: 2100,
        comments: 112,
        time: '1d'
      },
      {
        id: 'm3',
        type: 'image',
        image: '/img/mina/feed-2.webp',
        caption: 'My palette for this week. Save it for your projects.',
        likes: 3150,
        comments: 187,
        time: '5d',
        alt: 'Color palette set for web design'
      }
    ]
  },
  {
    id: 'sofia',
    name: 'Sofia',
    handle: '@sofia_finance',
    niche: 'Finance & Business',
    tagline: 'Money loves silence, but respects a plan.',
    bio: 'Financial consultant for freelancers and small businesses. Helps organize taxes, investments, and personal budgets.',
    portrait: '/img/sofia/portrait.webp',
    focus: 'center 15%',
    accent: '#10B981',
    surface: '#064E3B',
    telegram: {
      url: 'https://t.me/lmn_ai_bot',
      kind: 'channel'
    },
    greeting: 'Welcome! I\'m Sofia. Time to make your finances transparent.',
    qa: [
      { 
        chip: 'How to budget?', 
        answer: '50/30/20 method: 50% needs, 30% wants, 20% savings and investments.' 
      },
      { 
        chip: 'Where to invest as a beginner?', 
        answer: 'Start with index funds (S&P 500) and build a 3-6 month emergency fund first.' 
      },
      { 
        chip: 'How to optimize taxes?', 
        answer: 'Use legal tools: sole proprietorship, tax deductions, and professional consultations.' 
      }
    ],
    fallback: 'Important topic. I covered it in detail on my Telegram channel with specific numbers.',
    posts: [
      {
        id: 's1',
        type: 'image',
        image: '/img/sofia/feed-1.webp',
        caption: 'Financial safety checklist for 2024. Take a screenshot.',
        likes: 4100,
        comments: 230,
        time: '3h',
        alt: 'Infographic with financial safety steps'
      },
      {
        id: 's2',
        type: 'text',
        text: 'Don\'t invest money you might need within the next year. Investing is a long game. Emergency fund first.',
        likes: 1560,
        comments: 88,
        time: '1d'
      },
      {
        id: 's3',
        type: 'image',
        image: '/img/sofia/feed-2.webp',
        caption: 'Compound interest comparison: starting at 25 vs 35. The difference is striking.',
        likes: 5200,
        comments: 310,
        time: '4d',
        alt: 'Capital growth chart over time'
      }
    ]
  }
];