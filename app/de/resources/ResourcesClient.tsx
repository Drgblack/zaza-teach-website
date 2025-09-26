'use client';

import { useTranslations } from '@/components/LocaleProvider';
import { FileText, CheckSquare, Users, BookOpen, Zap, Clock } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function ResourcesClient() {
  const t = useTranslations();
  const pathname = usePathname();
  const isGerman = pathname.startsWith('/de');
  const localePrefix = isGerman ? '/de' : '';

  const resources = [
    {
      title: t('resources.items.lessonPlan.title'),
      description: t('resources.items.lessonPlan.description'),
      viewUrl: `${localePrefix}/resources/lesson-plan-template`,
      icon: FileText,
      category: t('resources.categories.planning'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: t('resources.items.assessmentRubric.title'),
      description: t('resources.items.assessmentRubric.description'),
      viewUrl: `${localePrefix}/resources/assessment-rubric-guide`,
      icon: CheckSquare,
      category: t('resources.categories.assessment'),
      color: 'from-green-500 to-green-600'
    },
    {
      title: t('resources.items.classroomManagement.title'),
      description: t('resources.items.classroomManagement.description'),
      viewUrl: `${localePrefix}/resources/classroom-management-tips`,
      icon: Users,
      category: t('resources.categories.management'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: t('resources.items.studentEngagement.title'),
      description: t('resources.items.studentEngagement.description'),
      viewUrl: `${localePrefix}/resources/student-engagement-activities`,
      icon: BookOpen,
      category: t('resources.categories.activities'),
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: t('resources.items.aiPrompts.title'),
      description: t('resources.items.aiPrompts.description'),
      viewUrl: `${localePrefix}/resources/ai-teaching-prompts`,
      icon: Zap,
      category: t('resources.categories.aiTools'),
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: t('resources.items.timeSaving.title'),
      description: t('resources.items.timeSaving.description'),
      viewUrl: `${localePrefix}/resources/time-saving-checklist`,
      icon: Clock,
      category: t('resources.categories.productivity'),
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            {t('resources.hero.badge')}
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {t('resources.hero.title')}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            {t('resources.hero.subtitle')}
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg px-4 py-3 text-blue-800 dark:text-blue-200">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium">
              {t('resources.hero.note')}
            </span>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 overflow-hidden"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Category badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {resource.category}
                    </span>
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${resource.color} shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 line-clamp-3">
                    {resource.description}
                  </p>

                  {/* Action button */}
                  <a
                    href={resource.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${resource.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 group-hover:shadow-xl`}
                  >
                    <FileText className="w-4 h-4" />
                    {t('resources.viewPrint')}
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('resources.bottomCta.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            {t('resources.bottomCta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${localePrefix}/pricing`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Zap className="w-4 h-4" />
              {t('resources.bottomCta.startTrial')}
            </a>
            <a
              href={`${localePrefix}/contact`}
              className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 px-8 py-3 rounded-xl font-semibold transition-colors duration-200"
            >
              {t('resources.bottomCta.contactUs')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}