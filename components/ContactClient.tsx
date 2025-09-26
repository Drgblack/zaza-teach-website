'use client';

import { useTranslations } from './LocaleProvider';
import { usePathname } from 'next/navigation';

export default function ContactClient() {
  const t = useTranslations();
  const pathname = usePathname();
  const isGerman = pathname.startsWith('/de');
  const localePrefix = isGerman ? '/de' : '';

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('contact.pageTitle')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t('contact.form.title')}
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.firstName')} *
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder={t('contact.form.placeholders.firstName')}
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.lastName')} *
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder={t('contact.form.placeholders.lastName')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder={t('contact.form.placeholders.email')}
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.role')}
                </label>
                <select
                  id="role"
                  name="role"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">{t('contact.form.roleOptions.select')}</option>
                  <option value="teacher">{t('contact.form.roleOptions.teacher')}</option>
                  <option value="administrator">{t('contact.form.roleOptions.administrator')}</option>
                  <option value="curriculum-coordinator">{t('contact.form.roleOptions.curriculumCoordinator')}</option>
                  <option value="instructional-coach">{t('contact.form.roleOptions.instructionalCoach')}</option>
                  <option value="substitute-teacher">{t('contact.form.roleOptions.substituteTeacher')}</option>
                  <option value="parent">{t('contact.form.roleOptions.parent')}</option>
                  <option value="student">{t('contact.form.roleOptions.student')}</option>
                  <option value="researcher">{t('contact.form.roleOptions.researcher')}</option>
                  <option value="other">{t('contact.form.roleOptions.other')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.school')}
                </label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder={t('contact.form.placeholders.school')}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.subject')} *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">{t('contact.form.subjectOptions.select')}</option>
                  <option value="general-inquiry">{t('contact.form.subjectOptions.generalInquiry')}</option>
                  <option value="technical-support">{t('contact.form.subjectOptions.technicalSupport')}</option>
                  <option value="billing-question">{t('contact.form.subjectOptions.billingQuestion')}</option>
                  <option value="feature-request">{t('contact.form.subjectOptions.featureRequest')}</option>
                  <option value="partnership">{t('contact.form.subjectOptions.partnership')}</option>
                  <option value="media-inquiry">{t('contact.form.subjectOptions.mediaInquiry')}</option>
                  <option value="feedback">{t('contact.form.subjectOptions.feedback')}</option>
                  <option value="other">{t('contact.form.subjectOptions.other')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder={t('contact.form.placeholders.message')}
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="newsletter" className="ml-3 text-sm text-gray-700">
                  {t('contact.form.newsletter')}
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                {t('contact.form.sendButton')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {t('contact.info.getInTouch')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-500 text-white">
                      📧
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{t('contact.info.email.title')}</h4>
                    <p className="text-gray-600">{t('contact.info.email.address')}</p>
                    <p className="text-sm text-gray-500 mt-1">{t('contact.info.email.response')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500 text-white">
                      💬
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{t('contact.info.chat.title')}</h4>
                    <p className="text-gray-600">{t('contact.info.chat.availability')}</p>
                    <p className="text-sm text-gray-500 mt-1">{t('contact.info.chat.hours')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-500 text-white">
                      🕒
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{t('contact.info.responseTime.title')}</h4>
                    <p className="text-gray-600">{t('contact.info.responseTime.email')}</p>
                    <p className="text-gray-600">{t('contact.info.responseTime.chat')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('contact.faq.title')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('contact.faq.description')}
              </p>
              <a
                href={`${localePrefix}/faqs`}
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                {t('contact.faq.button')}
              </a>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">
                {t('contact.featureIdea.title')}
              </h3>
              <p className="text-orange-800 mb-4">
                {t('contact.featureIdea.description')}
              </p>
              <a
                href={`${localePrefix}/feature-request`}
                className="text-orange-600 hover:text-orange-800 font-medium"
              >
                {t('contact.featureIdea.button')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}