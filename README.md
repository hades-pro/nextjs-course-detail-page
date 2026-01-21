# Next.js Course Detail Page - SEO Optimized

A high-performance, SEO-optimized Course Detail page built with Next.js 15 App Router, featuring Server-Side Rendering (SSR), dynamic metadata, and JSON-LD structured data for rich snippets.

## Project Overview

This project demonstrates best practices for building SEO-friendly course pages that achieve green scores (90+) in Core Web Vitals (Lighthouse) for both Performance and SEO metrics.

## Features

### Dynamic Metadata Generation
- Dynamic `<title>` and `<meta description>` based on course data
- Open Graph (OG) tags for social media sharing
- Twitter Card support
- Canonical URLs and robots directives

### JSON-LD Structured Data
- Schema.org `Course` markup for Google rich snippets
- Includes: name, description, provider, instructor, pricing
- `AggregateRating` for course reviews
- `ItemList` for curriculum/syllabus

### Performance Optimizations
- Server-Side Rendering (SSR) with Next.js App Router
- `generateStaticParams()` for static generation of known routes
- Server Components throughout (minimal client-side JavaScript)
- Efficient component architecture

### Accessibility & Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic HTML elements (`<main>`, `<section>`, `<article>`, `<nav>`)
- ARIA labels and landmarks
- Breadcrumb navigation with structured data

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with base metadata
│   ├── page.tsx                # Homepage with featured courses
│   └── courses/
│       ├── page.tsx            # Courses listing page
│       └── [slug]/
│           ├── page.tsx        # Dynamic course detail page (SSR)
│           └── not-found.tsx   # 404 handling for courses
├── components/
│   └── course/
│       ├── course-json-ld.tsx  # JSON-LD structured data component
│       ├── course-header.tsx   # Course title, rating, meta info
│       ├── course-sidebar.tsx  # Pricing, enrollment CTA
│       ├── course-curriculum.tsx # Expandable syllabus
│       ├── course-instructor.tsx # Instructor profile
│       └── course-outcomes.tsx # Learning outcomes list
└── lib/
    ├── types/
    │   └── course.ts           # TypeScript interfaces
    └── data/
        └── courses.ts          # Mock data & data fetching functions
```

## Key Implementation Details

### Dynamic Metadata (SSR)

```typescript
// app/courses/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const course = await getCourseBySlug(params.slug);
  
  return {
    title: course.title,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      type: 'website',
      images: [{ url: course.thumbnail }],
    },
  };
}
```

### JSON-LD Structured Data

```typescript
// components/course/course-json-ld.tsx
const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: course.title,
  description: course.description,
  provider: {
    '@type': 'Organization',
    name: course.provider.name,
    sameAs: course.provider.url,
  },
  // ... additional schema properties
};
```

### Static Generation for Known Routes

```typescript
// app/courses/[slug]/page.tsx
export async function generateStaticParams() {
  const courses = await getAllCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nextjs-course-detail-page.git

# Navigate to the project
cd nextjs-course-detail-page

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with featured courses |
| `/courses` | All courses listing |
| `/courses/[slug]` | Individual course detail page |

### Example Course URLs

- `/courses/nextjs-fullstack-development`
- `/courses/react-fundamentals`
- `/courses/typescript-mastery`

## Lighthouse Scores

The page is optimized to achieve:

| Metric | Target | Status |
|--------|--------|--------|
| Performance | 90+ | ✅ |
| SEO | 90+ | ✅ |
| Accessibility | 90+ | ✅ |
| Best Practices | 90+ | ✅ |

## SEO Checklist

- [x] Dynamic page titles
- [x] Meta descriptions
- [x] Open Graph tags
- [x] Twitter Cards
- [x] JSON-LD Course schema
- [x] JSON-LD BreadcrumbList
- [x] Canonical URLs
- [x] Semantic HTML structure
- [x] Proper heading hierarchy
- [x] Alt text for images
- [x] Mobile-friendly responsive design

## Extending the Project

### Adding a Real Database

Replace the mock data functions in `/lib/data/courses.ts` with actual database queries:

```typescript
export async function getCourseBySlug(slug: string): Promise<Course | null> {
  // Replace with your database query
  // e.g., Prisma, Drizzle, or direct SQL
  const course = await db.course.findUnique({
    where: { slug },
    include: { instructor: true, modules: true },
  });
  return course;
}
```

### Adding More Schema Types

The JSON-LD component can be extended to support additional schema types:
- `VideoObject` for video courses
- `Review` for individual reviews
- `FAQPage` for course FAQs

## License

MIT License - feel free to use this project as a reference or starting point.

## Author

Built as a technical assessment demonstrating Next.js SSR, SEO optimization, and structured data implementation.
