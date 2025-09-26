'use client';

import { useTranslations } from '@/components/LocaleProvider';
import Link from 'next/link';

export default function SupportClient() {
  const t = useTranslations();

  const supportCategories = [
    {
      title: t('support.categories.gettingStarted.title'),
      icon: "🚀",
      description: t('support.categories.gettingStarted.description'),
      links: [
        { name: t('support.categories.gettingStarted.links.quickStart'), href: "/de/blog" },
        { name: t('support.categories.gettingStarted.links.videoTutorials'), href: "/de/blog" },
        { name: t('support.categories.gettingStarted.links.accountSetup'), href: "/de/blog" }
      ]
    },
    {
      title: t('support.categories.lessonPlanning.title'),
      icon: "📚",
      description: t('support.categories.lessonPlanning.description'),
      links: [
        { name: t('support.categories.lessonPlanning.links.firstLesson'), href: "/de/blog" },
        { name: t('support.categories.lessonPlanning.links.curriculumAlignment'), href: "/de/blog" },
        { name: t('support.categories.lessonPlanning.links.customizationTips'), href: "/de/blog" }
      ]
    },
    {
      title: t('support.categories.technicalHelp.title'),
      icon: "🔧",
      description: t('support.categories.technicalHelp.description'),
      links: [
        { name: t('support.categories.technicalHelp.links.browserRequirements'), href: "/de/blog" },
        { name: t('support.categories.technicalHelp.links.exportIssues'), href: "/de/blog" },
        { name: t('support.categories.technicalHelp.links.performanceTips'), href: "/de/blog" }
      ]
    },
    {
      title: t('support.categories.accountBilling.title'),
      icon: "💳",
      description: t('support.categories.accountBilling.description'),
      links: [
        { name: t('support.categories.accountBilling.links.billingInfo'), href: "/de/blog" },
        { name: t('support.categories.accountBilling.links.upgradeDowngrade'), href: "/de/blog" },
        { name: t('support.categories.accountBilling.links.accountSettings'), href: "/de/blog" }
      ]
    }
  ];

  const faqItems = [
    {
      question: t('support.faq.questions.gettingStarted.question'),
      answer: t('support.faq.questions.gettingStarted.answer')
    },
    {
      question: t('support.faq.questions.dataSecurity.question'),
      answer: t('support.faq.questions.dataSecurity.answer')
    },
    {
      question: t('support.faq.questions.export.question'),
      answer: t('support.faq.questions.export.answer')
    },
    {
      question: t('support.faq.questions.curriculum.question'),
      answer: t('support.faq.questions.curriculum.answer')
    },
    {
      question: t('support.faq.questions.pricing.question'),
      answer: t('support.faq.questions.pricing.answer')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('support.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('support.subtitle')}
          </p>
        </div>

        {/* Quick Help Section */}
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('support.immediateHelp.title')}
            </h2>
            <p className="text-gray-700 mb-6">
              {t('support.immediateHelp.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/de/contact"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                {t('support.immediateHelp.contactSupport')}
              </Link>
              <Link
                href="/de/faqs"
                className="bg-white text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors"
              >
                {t('support.immediateHelp.browseFaqs')}
              </Link>
            </div>
          </div>
        </div>

        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-purple-600 hover:text-purple-800 text-sm transition-colors"
                    >
                      {link.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t('support.faq.title')}
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/de/faqs"
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              {t('support.faq.viewAll')} →
            </Link>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              📧 {t('support.contactOptions.email.title')}
            </h3>
            <p className="text-blue-800 mb-4">
              {t('support.contactOptions.email.description')}
            </p>
            <Link
              href="/de/contact"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              {t('support.contactOptions.email.cta')} →
            </Link>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-3">
              💬 {t('support.contactOptions.liveChat.title')}
            </h3>
            <p className="text-green-800 mb-4">
              {t('support.contactOptions.liveChat.description')}
            </p>
            <button className="text-green-600 hover:text-green-800 font-medium">
              {t('support.contactOptions.liveChat.cta')} →
            </button>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">
              🚀 {t('support.contactOptions.featureRequest.title')}
            </h3>
            <p className="text-purple-800 mb-4">
              {t('support.contactOptions.featureRequest.description')}
            </p>
            <Link
              href="/de/feature-request"
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              {t('support.contactOptions.featureRequest.cta')} →
            </Link>
          </div>
        </div>

        {/* Support Hours */}
        <div className="mt-12 bg-gray-100 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {t('support.supportHours.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-medium">{t('support.supportHours.email.title')}</p>
              <p>{t('support.supportHours.email.hours')}</p>
            </div>
            <div>
              <p className="font-medium">{t('support.supportHours.chat.title')}</p>
              <p>{t('support.supportHours.chat.hours')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}