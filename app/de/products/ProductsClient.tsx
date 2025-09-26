'use client';

import { useTranslations } from '@/components/LocaleProvider';
import Link from 'next/link';

export default function ProductsClient() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('products.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Zaza Teach */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('products.zazaTeach.title')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('products.zazaTeach.description')}
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>• {t('products.zazaTeach.features.aiGeneration')}</li>
              <li>• {t('products.zazaTeach.features.curriculumAlignment')}</li>
              <li>• {t('products.zazaTeach.features.export')}</li>
              <li>• {t('products.zazaTeach.features.multiLanguage')}</li>
              <li>• {t('products.zazaTeach.features.privacy')}</li>
            </ul>
            <Link
              href="/de"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
            >
              {t('products.zazaTeach.cta')}
            </Link>
          </div>

          {/* Zaza Promptly */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('products.zazaPromptly.title')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('products.zazaPromptly.description')}
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>• {t('products.zazaPromptly.features.customPrompts')}</li>
              <li>• {t('products.zazaPromptly.features.templateLibrary')}</li>
              <li>• {t('products.zazaPromptly.features.advancedAi')}</li>
              <li>• {t('products.zazaPromptly.features.educatorFocus')}</li>
              <li>• {t('products.zazaPromptly.features.integration')}</li>
            </ul>
            <span className="inline-block bg-gray-400 text-white px-6 py-3 rounded-md">
              {t('products.zazaPromptly.comingSoon')}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Teach Resources Library */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('products.resourcesLibrary.title')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('products.resourcesLibrary.description')}
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>• {t('products.resourcesLibrary.features.lessonTemplates')}</li>
              <li>• {t('products.resourcesLibrary.features.assessmentTools')}</li>
              <li>• {t('products.resourcesLibrary.features.classroomActivities')}</li>
              <li>• {t('products.resourcesLibrary.features.worksheets')}</li>
              <li>• {t('products.resourcesLibrary.features.bestPractices')}</li>
            </ul>
            <Link
              href="/de/resources"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
            >
              {t('products.resourcesLibrary.cta')}
            </Link>
          </div>

          {/* Teach Assess */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('products.teachAssess.title')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('products.teachAssess.description')}
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>• {t('products.teachAssess.features.autoQuizzes')}</li>
              <li>• {t('products.teachAssess.features.rubricCreation')}</li>
              <li>• {t('products.teachAssess.features.questionBank')}</li>
              <li>• {t('products.teachAssess.features.objectiveAlignment')}</li>
              <li>• {t('products.teachAssess.features.analytics')}</li>
            </ul>
            <span className="inline-block bg-gray-400 text-white px-6 py-3 rounded-md">
              {t('products.teachAssess.comingSoon')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}