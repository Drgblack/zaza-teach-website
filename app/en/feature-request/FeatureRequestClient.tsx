'use client';

import { useTranslations } from '@/components/LocaleProvider';
import Link from 'next/link';

export default function FeatureRequestClient() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('featureRequest.pageTitle')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('featureRequest.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t('featureRequest.form.title')}
          </h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                {t('featureRequest.form.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder={t('featureRequest.form.namePlaceholder')}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t('featureRequest.form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder={t('featureRequest.form.emailPlaceholder')}
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                {t('featureRequest.form.role')}
              </label>
              <select
                id="role"
                name="role"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">{t('featureRequest.form.roleOptions.select')}</option>
                <option value="teacher">{t('featureRequest.form.roleOptions.teacher')}</option>
                <option value="administrator">{t('featureRequest.form.roleOptions.administrator')}</option>
                <option value="curriculum-coordinator">{t('featureRequest.form.roleOptions.curriculumCoordinator')}</option>
                <option value="instructional-coach">{t('featureRequest.form.roleOptions.instructionalCoach')}</option>
                <option value="substitute-teacher">{t('featureRequest.form.roleOptions.substituteTeacher')}</option>
                <option value="other">{t('featureRequest.form.roleOptions.other')}</option>
              </select>
            </div>

            <div>
              <label htmlFor="grade-level" className="block text-sm font-medium text-gray-700 mb-2">
                {t('featureRequest.form.gradeLevel')}
              </label>
              <input
                type="text"
                id="grade-level"
                name="grade-level"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder={t('featureRequest.form.gradeLevelPlaceholder')}
              />
            </div>

            <div>
              <label htmlFor="feature-title" className="block text-sm font-medium text-gray-700 mb-2">
                {t('featureRequest.form.featureTitle')}
              </label>
              <input
                type="text"
                id="feature-title"
                name="feature-title"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder={t('featureRequest.form.featureTitlePlaceholder')}
              />
            </div>

            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                {t('featureRequest.form.priority')}
              </label>
              <select
                id="priority"
                name="priority"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">{t('featureRequest.form.priorityOptions.select')}</option>
                <option value="low">{t('featureRequest.form.priorityOptions.low')}</option>
                <option value="medium">{t('featureRequest.form.priorityOptions.medium')}</option>
                <option value="high">{t('featureRequest.form.priorityOptions.high')}</option>
                <option value="critical">{t('featureRequest.form.priorityOptions.critical')}</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                {t('featureRequest.form.description')}
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder={t('featureRequest.form.descriptionPlaceholder')}
              ></textarea>
            </div>

            <div>
              <label htmlFor="use-case" className="block text-sm font-medium text-gray-700 mb-2">
                {t('featureRequest.form.useCase')}
              </label>
              <textarea
                id="use-case"
                name="use-case"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder={t('featureRequest.form.useCasePlaceholder')}
              ></textarea>
            </div>

            <div>
              <label htmlFor="current-workaround" className="block text-sm font-medium text-gray-700 mb-2">
                {t('featureRequest.form.currentWorkaround')}
              </label>
              <textarea
                id="current-workaround"
                name="current-workaround"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder={t('featureRequest.form.currentWorkaroundPlaceholder')}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              {t('featureRequest.form.submit')}
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              🎯 {t('featureRequest.guidelines.title')}
            </h3>
            <ul className="text-blue-800 space-y-2">
              <li>• {t('featureRequest.guidelines.items.0')}</li>
              <li>• {t('featureRequest.guidelines.items.1')}</li>
              <li>• {t('featureRequest.guidelines.items.2')}</li>
              <li>• {t('featureRequest.guidelines.items.3')}</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">
              🚀 {t('featureRequest.process.title')}
            </h3>
            <ul className="text-purple-800 space-y-2">
              <li>• {t('featureRequest.process.items.0')}</li>
              <li>• {t('featureRequest.process.items.1')}</li>
              <li>• {t('featureRequest.process.items.2')}</li>
              <li>• {t('featureRequest.process.items.3')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-gray-100 to-purple-100 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t('featureRequest.discuss.title')}
          </h3>
          <p className="text-gray-700 mb-4">
            {t('featureRequest.discuss.description')}
          </p>
          <Link
            href="/en/contact"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            {t('featureRequest.discuss.cta')}
          </Link>
        </div>
      </div>
    </div>
  );
}