'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Home, Book, Users, ArrowLeft } from 'lucide-react';
import { useTranslations } from '@/components/LocaleProvider';

export default function NotFound() {
  const t = useTranslations();
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="text-8xl font-bold text-blue-200 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('notFound.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('notFound.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-600" />
                {t('notFound.popularResources.title')}
              </CardTitle>
              <CardDescription>
                {t('notFound.popularResources.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link 
                href="/resources/lesson-plan-template" 
                className="block p-2 rounded hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-blue-600 hover:text-blue-800">
                  {t('notFound.popularResources.lessonPlanTemplates.title')}
                </div>
                <div className="text-sm text-gray-600">
                  {t('notFound.popularResources.lessonPlanTemplates.description')}
                </div>
              </Link>
              <Link 
                href="/resources/ai-teaching-prompts" 
                className="block p-2 rounded hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-blue-600 hover:text-blue-800">
                  {t('notFound.popularResources.aiTeachingPrompts.title')}
                </div>
                <div className="text-sm text-gray-600">
                  {t('notFound.popularResources.aiTeachingPrompts.description')}
                </div>
              </Link>
              <Link 
                href="/resources/assessment-rubric-guide" 
                className="block p-2 rounded hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-blue-600 hover:text-blue-800">
                  {t('notFound.popularResources.assessmentRubrics.title')}
                </div>
                <div className="text-sm text-gray-600">
                  {t('notFound.popularResources.assessmentRubrics.description')}
                </div>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="w-5 h-5 text-green-600" />
                {t('notFound.latestBlogPosts.title')}
              </CardTitle>
              <CardDescription>
                {t('notFound.latestBlogPosts.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link 
                href="/blog" 
                className="block p-2 rounded hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-green-600 hover:text-green-800">
                  {t('notFound.latestBlogPosts.teachingBlog.title')}
                </div>
                <div className="text-sm text-gray-600">
                  {t('notFound.latestBlogPosts.teachingBlog.description')}
                </div>
              </Link>
              <Link 
                href="/about" 
                className="block p-2 rounded hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-green-600 hover:text-green-800">
                  {t('notFound.latestBlogPosts.aboutMission.title')}
                </div>
                <div className="text-sm text-gray-600">
                  {t('notFound.latestBlogPosts.aboutMission.description')}
                </div>
              </Link>
              <Link 
                href="/quote-wall" 
                className="block p-2 rounded hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-green-600 hover:text-green-800">
                  {t('notFound.latestBlogPosts.teacherSuccessStories.title')}
                </div>
                <div className="text-sm text-gray-600">
                  {t('notFound.latestBlogPosts.teacherSuccessStories.description')}
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
                {t('notFound.buttons.goHome')}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/resources">
                <Book className="w-4 h-4 mr-2" />
                {t('notFound.buttons.browseResources')}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <Users className="w-4 h-4 mr-2" />
                {t('notFound.buttons.contactSupport')}
              </Link>
            </Button>
          </div>
          
          <div className="pt-4">
            <Button variant="ghost" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('notFound.buttons.goBack')}
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p className="text-sm">
            {t('notFound.searchMessage')}{' '}
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline">
              {t('notFound.searchFeature')}
            </Link>{' '}
            {t('notFound.or')}{' '}
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
              {t('notFound.getInTouch')}
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
}