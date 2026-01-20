export interface CourseProvider {
  name: string
  url: string
  logo?: string
}

export interface CourseInstructor {
  name: string
  title: string
  bio: string
  image?: string
}

export interface CourseCurriculum {
  title: string
  duration: string
  lessons: string[]
}

export interface Course {
  id: string
  slug: string
  name: string
  description: string
  longDescription: string
  provider: CourseProvider
  instructor: CourseInstructor
  price: number
  currency: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  language: string
  category: string
  tags: string[]
  rating: number
  reviewCount: number
  enrollmentCount: number
  lastUpdated: string
  curriculum: CourseCurriculum[]
  learningOutcomes: string[]
  prerequisites: string[]
  image: string
}
