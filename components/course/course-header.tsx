import type { Course } from '@/lib/types/course'
import { Badge } from '@/components/ui/badge'
import { Star, Users, Clock, Globe, Calendar } from 'lucide-react'

interface CourseHeaderProps {
  course: Course
}

export function CourseHeader({ course }: CourseHeaderProps) {
  return (
    <header className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <li>
              <a href="/" className="hover:text-primary-foreground transition-colors">
                Home
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <a href="/courses" className="hover:text-primary-foreground transition-colors">
                Courses
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-primary-foreground font-medium">
              {course.name}
            </li>
          </ol>
        </nav>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">{course.category}</Badge>
          <Badge variant="secondary">{course.level}</Badge>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
          {course.name}
        </h1>

        <p className="text-lg text-primary-foreground/90 mb-6 max-w-3xl text-pretty">
          {course.description}
        </p>

        <div className="flex flex-wrap items-center gap-6 text-sm">
          <div className="flex items-center gap-1.5">
            <Star className="w-5 h-5 fill-current text-yellow-400" aria-hidden="true" />
            <span className="font-semibold">{course.rating}</span>
            <span className="text-primary-foreground/80">
              ({course.reviewCount.toLocaleString()} reviews)
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Users className="w-5 h-5" aria-hidden="true" />
            <span>{course.enrollmentCount.toLocaleString()} students</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Clock className="w-5 h-5" aria-hidden="true" />
            <span>{course.duration}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Globe className="w-5 h-5" aria-hidden="true" />
            <span>{course.language}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Calendar className="w-5 h-5" aria-hidden="true" />
            <span>Updated {new Date(course.lastUpdated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
