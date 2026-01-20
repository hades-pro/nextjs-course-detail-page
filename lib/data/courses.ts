import type { Course } from '@/lib/types/course'

export const courses: Course[] = [
  {
    id: '1',
    slug: 'nextjs-fullstack-development',
    name: 'Next.js Full-Stack Development Masterclass',
    description: 'Master Next.js 15 with App Router, Server Components, and modern full-stack development patterns.',
    longDescription: 'This comprehensive course takes you from Next.js fundamentals to advanced full-stack development. Learn Server Components, Server Actions, streaming, caching strategies, and how to build production-ready applications with authentication, databases, and deployment best practices.',
    provider: {
      name: 'StartHub Academy',
      url: 'https://starthub.academy',
    },
    instructor: {
      name: 'Sarah Chen',
      title: 'Senior Full-Stack Engineer',
      bio: 'Sarah has 10+ years of experience building scalable web applications. Previously at Vercel and Meta, she specializes in React and Next.js architecture.',
    },
    price: 199,
    currency: 'USD',
    duration: '40 hours',
    level: 'Intermediate',
    language: 'English',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'TypeScript', 'Full-Stack', 'Server Components'],
    rating: 4.9,
    reviewCount: 2847,
    enrollmentCount: 15420,
    lastUpdated: '2026-01-15',
    curriculum: [
      {
        title: 'Getting Started with Next.js 15',
        duration: '3 hours',
        lessons: [
          'Introduction to Next.js and its ecosystem',
          'Setting up your development environment',
          'Understanding the App Router architecture',
          'Your first Next.js application',
        ],
      },
      {
        title: 'Server Components Deep Dive',
        duration: '6 hours',
        lessons: [
          'Server vs Client Components',
          'Data fetching patterns',
          'Streaming and Suspense',
          'Error handling and loading states',
        ],
      },
      {
        title: 'Server Actions and Forms',
        duration: '5 hours',
        lessons: [
          'Introduction to Server Actions',
          'Form handling and validation',
          'Optimistic updates',
          'Revalidation strategies',
        ],
      },
      {
        title: 'Authentication and Authorization',
        duration: '6 hours',
        lessons: [
          'Authentication patterns in Next.js',
          'Implementing OAuth providers',
          'Session management',
          'Protected routes and middleware',
        ],
      },
      {
        title: 'Database Integration',
        duration: '8 hours',
        lessons: [
          'Choosing the right database',
          'Prisma ORM setup and usage',
          'Database migrations',
          'Query optimization',
        ],
      },
      {
        title: 'Performance and Optimization',
        duration: '6 hours',
        lessons: [
          'Core Web Vitals optimization',
          'Image and font optimization',
          'Caching strategies',
          'Bundle analysis and code splitting',
        ],
      },
      {
        title: 'Deployment and Production',
        duration: '6 hours',
        lessons: [
          'Deploying to Vercel',
          'Environment variables and secrets',
          'Monitoring and analytics',
          'CI/CD pipelines',
        ],
      },
    ],
    learningOutcomes: [
      'Build production-ready Next.js applications with confidence',
      'Master Server Components and Server Actions patterns',
      'Implement secure authentication and authorization',
      'Optimize applications for Core Web Vitals',
      'Deploy and maintain Next.js apps at scale',
    ],
    prerequisites: [
      'Basic knowledge of React and JavaScript',
      'Familiarity with HTML and CSS',
      'Understanding of HTTP and REST APIs',
    ],
    image: '/courses/nextjs-masterclass.jpg',
  },
  {
    id: '2',
    slug: 'react-fundamentals',
    name: 'React Fundamentals: From Zero to Hero',
    description: 'Learn React from scratch with hands-on projects and modern best practices.',
    longDescription: 'Start your React journey with this beginner-friendly course. You will learn component-based architecture, hooks, state management, and build real-world projects that you can add to your portfolio.',
    provider: {
      name: 'StartHub Academy',
      url: 'https://starthub.academy',
    },
    instructor: {
      name: 'Marcus Johnson',
      title: 'React Developer Advocate',
      bio: 'Marcus is a passionate educator with 8 years of React experience. He has taught over 50,000 students worldwide.',
    },
    price: 149,
    currency: 'USD',
    duration: '25 hours',
    level: 'Beginner',
    language: 'English',
    category: 'Web Development',
    tags: ['React', 'JavaScript', 'Frontend', 'Hooks', 'Components'],
    rating: 4.8,
    reviewCount: 5231,
    enrollmentCount: 32150,
    lastUpdated: '2026-01-10',
    curriculum: [
      {
        title: 'React Basics',
        duration: '5 hours',
        lessons: [
          'What is React and why use it',
          'JSX fundamentals',
          'Components and props',
          'Rendering lists and conditionals',
        ],
      },
      {
        title: 'State and Hooks',
        duration: '7 hours',
        lessons: [
          'Understanding useState',
          'useEffect and side effects',
          'Custom hooks',
          'useReducer for complex state',
        ],
      },
      {
        title: 'Building Real Projects',
        duration: '13 hours',
        lessons: [
          'Todo application',
          'Weather dashboard',
          'E-commerce cart',
          'Social media feed',
        ],
      },
    ],
    learningOutcomes: [
      'Understand React core concepts thoroughly',
      'Build interactive user interfaces',
      'Manage application state effectively',
      'Create reusable components',
    ],
    prerequisites: [
      'Basic HTML and CSS knowledge',
      'JavaScript fundamentals',
    ],
    image: '/courses/react-fundamentals.jpg',
  },
]

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  // Simulate async data fetch
  await new Promise((resolve) => setTimeout(resolve, 0))
  return courses.find((course) => course.slug === slug) || null
}

export async function getAllCourses(): Promise<Course[]> {
  await new Promise((resolve) => setTimeout(resolve, 0))
  return courses
}

export async function getAllCourseSlugs(): Promise<string[]> {
  await new Promise((resolve) => setTimeout(resolve, 0))
  return courses.map((course) => course.slug)
}
