import type { Course } from '@/lib/types/course'

interface CourseJsonLdProps {
  course: Course
  url: string
}

export function CourseJsonLd({ course, url }: CourseJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: course.provider.name,
      url: course.provider.url,
    },
    instructor: {
      '@type': 'Person',
      name: course.instructor.name,
      jobTitle: course.instructor.title,
      description: course.instructor.bio,
    },
    offers: {
      '@type': 'Offer',
      price: course.price,
      priceCurrency: course.currency,
      availability: 'https://schema.org/InStock',
      url: url,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: course.rating,
      reviewCount: course.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    educationalLevel: course.level,
    inLanguage: course.language,
    coursePrerequisites: course.prerequisites.join(', '),
    timeRequired: `PT${course.duration.replace(' hours', 'H').replace(' ', '')}`,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Online',
      courseWorkload: course.duration,
    },
    about: course.tags.map((tag) => ({
      '@type': 'Thing',
      name: tag,
    })),
    teaches: course.learningOutcomes.join('; '),
    numberOfCredits: course.curriculum.length,
    syllabusSections: course.curriculum.map((section) => ({
      '@type': 'Syllabus',
      name: section.title,
      timeRequired: section.duration,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
