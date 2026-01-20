import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, AlertCircle } from 'lucide-react'

interface CourseOutcomesProps {
  learningOutcomes: string[]
  prerequisites: string[]
}

export function CourseOutcomes({ learningOutcomes, prerequisites }: CourseOutcomesProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
            What You Will Learn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {learningOutcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-3 text-sm">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" aria-hidden="true" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-600" aria-hidden="true" />
            Prerequisites
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {prerequisites.map((prereq, index) => (
              <li key={index} className="flex items-start gap-3 text-sm">
                <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
                <span>{prereq}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
