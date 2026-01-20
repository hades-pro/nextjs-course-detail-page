import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllCourses } from '@/lib/data/courses'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'All Courses | StartHub Academy',
  description: 'Browse our comprehensive catalog of web development courses. Learn Next.js, React, TypeScript, and more from industry experts.',
  openGraph: {
    title: 'All Courses | StartHub Academy',
    description: 'Browse our comprehensive catalog of web development courses.',
    type: 'website',
  },
}

export default async function CoursesPage() {
  const courses = await getAllCourses()

  return (
    <main className="container mx-auto px-4 max-w-6xl py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">All Courses</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Explore our catalog of expertly crafted courses designed to take your development skills to the next level.
        </p>
      </header>

      <section aria-label="Course catalog">
        <ul className="grid md:grid-cols-2 gap-6 list-none p-0">
          {courses.map((course) => (
            <li key={course.id}>
              <Link href={`/courses/${course.slug}`} className="block h-full">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex gap-2 mb-2">
                      <Badge variant="secondary">{course.level}</Badge>
                      <Badge variant="outline">{course.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{course.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {course.description}
                    </p>
                    <p className="text-sm mt-3 text-muted-foreground">
                      by {course.instructor.name}
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                        {course.rating}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" aria-hidden="true" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Users className="w-4 h-4" aria-hidden="true" />
                        {course.enrollmentCount.toLocaleString()}
                      </span>
                    </div>
                    <span className="font-bold">${course.price}</span>
                  </CardFooter>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
