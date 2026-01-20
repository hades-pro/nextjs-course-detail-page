import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileQuestion } from 'lucide-react'

export default function CourseNotFound() {
  return (
    <main className="container mx-auto px-4 py-20 text-center">
      <FileQuestion className="w-16 h-16 mx-auto text-muted-foreground mb-6" aria-hidden="true" />
      <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        The course you are looking for does not exist or may have been removed.
      </p>
      <div className="flex justify-center gap-4">
        <Button asChild>
          <Link href="/courses">Browse Courses</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </main>
  )
}
