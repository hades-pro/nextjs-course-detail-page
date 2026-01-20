import type { CourseInstructor, CourseProvider } from '@/lib/types/course'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Building2 } from 'lucide-react'

interface CourseInstructorProps {
  instructor: CourseInstructor
  provider: CourseProvider
}

export function CourseInstructorSection({ instructor, provider }: CourseInstructorProps) {
  const initials = instructor.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <section aria-labelledby="instructor-heading" className="py-8 border-t">
      <h2 id="instructor-heading" className="text-2xl font-bold mb-6">
        Your Instructor
      </h2>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <Avatar className="w-24 h-24 text-2xl">
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h3 className="text-xl font-semibold">{instructor.name}</h3>
              <p className="text-muted-foreground mb-3">{instructor.title}</p>
              <p className="text-sm leading-relaxed">{instructor.bio}</p>

              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Building2 className="w-4 h-4" aria-hidden="true" />
                <span>
                  Provided by{' '}
                  <a
                    href={provider.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {provider.name}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
