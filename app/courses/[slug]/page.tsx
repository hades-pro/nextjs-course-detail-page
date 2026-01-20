import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCourseBySlug, getAllCourseSlugs } from '@/lib/data/courses'
import { CourseJsonLd } from '@/components/course/course-json-ld'
import { CourseHeader } from '@/components/course/course-header'
import { CourseSidebar } from '@/components/course/course-sidebar'
import { CourseCurriculumSection } from '@/components/course/course-curriculum'
import { CourseInstructorSection } from '@/components/course/course-instructor'
import { CourseOutcomes } from '@/components/course/course-outcomes'
import { Badge } from '@/components/ui/badge'

interface CoursePageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for better performance
export async function generateStaticParams() {
  const slugs = await getAllCourseSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Dynamic metadata generation for SEO
export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params
  const course = await getCourseBySlug(slug)

  if (!course) {
    return {
      title: 'Course Not Found',
      description: 'The requested course could not be found.',
    }
  }

  const url = `https://starthub.academy/courses/${course.slug}`

  return {
    title: `${course.name} | ${course.provider.name}`,
    description: course.description,
    keywords: course.tags.join(', '),
    authors: [{ name: course.instructor.name }],
    openGraph: {
      type: 'website',
      title: course.name,
      description: course.description,
      url: url,
      siteName: course.provider.name,
      images: [
        {
          url: course.image,
          width: 1200,
          height: 630,
          alt: course.name,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: course.name,
      description: course.description,
      images: [course.image],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params
  const course = await getCourseBySlug(slug)

  if (!course) {
    notFound()
  }

  const courseUrl = `https://starthub.academy/courses/${course.slug}`

  return (
    <>
      <CourseJsonLd course={course} url={courseUrl} />

      <main>
        <CourseHeader course={course} />

        <div className="container mx-auto px-4 max-w-6xl py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <section aria-labelledby="about-heading" className="pb-8">
                <h2 id="about-heading" className="text-2xl font-bold mb-4">
                  About This Course
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {course.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mt-6" role="list" aria-label="Course tags">
                  {course.tags.map((tag) => (
                    <Badge key={tag} variant="outline" role="listitem">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </section>

              {/* Learning Outcomes & Prerequisites */}
              <CourseOutcomes
                learningOutcomes={course.learningOutcomes}
                prerequisites={course.prerequisites}
              />

              {/* Curriculum */}
              <CourseCurriculumSection curriculum={course.curriculum} />

              {/* Instructor */}
              <CourseInstructorSection
                instructor={course.instructor}
                provider={course.provider}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <CourseSidebar course={course} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
