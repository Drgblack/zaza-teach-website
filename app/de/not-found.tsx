'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Home, Book, Users, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="text-8xl font-bold text-blue-200 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. But don't worry, 
            there's plenty of great content to explore!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-600" />
                Popular Resources
              </CardTitle>
              <CardDescription>
                Check out our most popular teaching resources
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link 
                href="/resources/lesson-plan-template" 
                className="block p-2 rounded hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-blue-600 hover:text-blue-800">
                  → Lesson Plan Templates
                </div>
                <div className="text-sm text-gray-600">
                  Ready-to-use templates for any subject
                </div>
              </Link>
              <Link 
                href="/resources/ai-teaching-prompts" 
                className="block p-2 rounded hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-blue-600 hover:text-blue-800">
                  → AI Teaching Prompts
                </div>
                <div className="text-sm text-gray-600">
                  Smart prompts for educational AI tools
                </div>
              </Link>
              <Link 
                href="/resources/assessment-rubric-guide" 
                className="block p-2 rounded hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-blue-600 hover:text-blue-800">
                  → Assessment Rubrics
                </div>
                <div className="text-sm text-gray-600">
                  Fair and comprehensive grading guides
                </div>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="w-5 h-5 text-green-600" />
                Latest Blog Posts
              </CardTitle>
              <CardDescription>
                Discover insights and tips from our blog
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link 
                href="/blog" 
                className="block p-2 rounded hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-green-600 hover:text-green-800">
                  → Teaching Blog
                </div>
                <div className="text-sm text-gray-600">
                  Latest articles on modern teaching methods
                </div>
              </Link>
              <Link 
                href="/about" 
                className="block p-2 rounded hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-green-600 hover:text-green-800">
                  → About Our Mission
                </div>
                <div className="text-sm text-gray-600">
                  Learn how we're revolutionizing education
                </div>
              </Link>
              <Link 
                href="/quote-wall" 
                className="block p-2 rounded hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-green-600 hover:text-green-800">
                  → Teacher Success Stories
                </div>
                <div className="text-sm text-gray-600">
                  Inspiring quotes from our community
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/resources">
                <Book className="w-4 h-4 mr-2" />
                Browse Resources
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <Users className="w-4 h-4 mr-2" />
                Contact Support
              </Link>
            </Button>
          </div>
          
          <div className="pt-4">
            <Button variant="ghost" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p className="text-sm">
            Looking for something specific? Try our{' '}
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline">
              search feature
            </Link>{' '}
            or{' '}
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
              get in touch
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
}