import type { CourseCurriculum } from '@/lib/types/course'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CheckCircle, Clock } from 'lucide-react'

interface CourseCurriculumProps {
  curriculum: CourseCurriculum[]
}

export function CourseCurriculumSection({ curriculum }: CourseCurriculumProps) {
  const totalLessons = curriculum.reduce((acc, section) => acc + section.lessons.length, 0)

  return (
    <section aria-labelledby="curriculum-heading" className="py-8">
      <h2 id="curriculum-heading" className="text-2xl font-bold mb-2">
        Course Curriculum
      </h2>
      <p className="text-muted-foreground mb-6">
        {curriculum.length} sections • {totalLessons} lessons
      </p>

      <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
        {curriculum.map((section, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              <div className="flex flex-col items-start gap-1">
                <span className="font-semibold">{section.title}</span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {section.duration} • {section.lessons.length} lessons
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 pt-2">
                {section.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
