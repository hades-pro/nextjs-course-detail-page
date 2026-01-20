import type { Course } from '@/lib/types/course'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { CheckCircle, Share2, Heart } from 'lucide-react'

interface CourseSidebarProps {
  course: Course
}

export function CourseSidebar({ course }: CourseSidebarProps) {
  return (
    <aside aria-label="Course enrollment">
      <Card className="sticky top-6">
        <CardHeader className="pb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">
              ${course.price}
            </span>
            <span className="text-muted-foreground">{course.currency}</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <Button className="w-full" size="lg">
            Enroll Now
          </Button>

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1 bg-transparent" size="sm">
              <Heart className="w-4 h-4 mr-2" aria-hidden="true" />
              <span>Wishlist</span>
            </Button>
            <Button variant="outline" className="flex-1 bg-transparent" size="sm">
              <Share2 className="w-4 h-4 mr-2" aria-hidden="true" />
              <span>Share</span>
            </Button>
          </div>

          <p className="text-sm text-center text-muted-foreground">
            30-day money-back guarantee
          </p>
        </CardContent>

        <CardFooter className="flex-col items-start pt-4 border-t">
          <h3 className="font-semibold mb-3">This course includes:</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" aria-hidden="true" />
              <span>{course.duration} of video content</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" aria-hidden="true" />
              <span>{course.curriculum.length} comprehensive sections</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" aria-hidden="true" />
              <span>Certificate of completion</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" aria-hidden="true" />
              <span>Lifetime access</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" aria-hidden="true" />
              <span>Access on mobile and TV</span>
            </li>
          </ul>
        </CardFooter>
      </Card>
    </aside>
  )
}
