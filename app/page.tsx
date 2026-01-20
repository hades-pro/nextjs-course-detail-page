import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Award, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Learn Web Development from Industry Experts
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
            Master Next.js, React, and modern full-stack development with hands-on courses designed for real-world success.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/courses">
              Browse Courses
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-12">Why Learn With Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert-Led Content</h3>
              <p className="text-muted-foreground text-sm">
                Learn from industry professionals with real-world experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Certificates</h3>
              <p className="text-muted-foreground text-sm">
                Earn recognized certificates to showcase your skills.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Active Community</h3>
              <p className="text-muted-foreground text-sm">
                Join thousands of learners and get support when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-muted-foreground mb-8">
            Explore our course catalog and find the perfect course for your goals.
          </p>
          <Button asChild>
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
