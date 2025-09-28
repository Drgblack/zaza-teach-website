'use client';

import { useTranslations } from '@/components/LocaleProvider';
import Link from 'next/link';

export default function WhyNotChatGPTClient() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('whyNotChatgpt.pageTitle')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('whyNotChatgpt.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg mb-8">
              Es ist eine berechtigte Frage! ChatGPT und andere allgemeine KI-Tools sind beeindruckend, aber sie wurden nicht speziell für Pädagogen entwickelt. Hier ist, warum Zaza Teach etwas grundlegend Anderes bietet:
            </p>

            {/* ChatGPT Limitations */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-red-900 mb-4">
                ⚠️ {t('whyNotChatgpt.sections.chatgptLimitations.title')}
              </h3>
              <ul className="space-y-2">
                {Array.isArray(t('whyNotChatgpt.sections.chatgptLimitations.items')) && 
                  (t('whyNotChatgpt.sections.chatgptLimitations.items') as string[]).map((item: string, index: number) => (
                    <li key={index} className="text-red-700">• {item}</li>
                  ))
                }
              </ul>
            </div>

            {/* Zaza Teach Advantages */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-semibold text-green-900 mb-4">
                ✅ {t('whyNotChatgpt.sections.zazaAdvantages.title')}
              </h3>
              <ul className="space-y-2">
                {Array.isArray(t('whyNotChatgpt.sections.zazaAdvantages.items')) && 
                  (t('whyNotChatgpt.sections.zazaAdvantages.items') as string[]).map((item: string, index: number) => (
                    <li key={index} className="text-green-700">• {item}</li>
                  ))
                }
              </ul>
            </div>

            {/* Direct Comparison */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📊 {t('whyNotChatgpt.sections.comparison.title')}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">Aufgabe</th>
                      <th className="border p-3 text-left">{t('whyNotChatgpt.sections.comparison.chatgpt')}</th>
                      <th className="border p-3 text-left">{t('whyNotChatgpt.sections.comparison.zaza')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(t('whyNotChatgpt.sections.comparison.items')) && 
                      (t('whyNotChatgpt.sections.comparison.items') as any[]).map((item: any, index: number) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="border p-3 font-medium">{item.task}</td>
                          <td className="border p-3 text-red-600">{item.chatgpt}</td>
                          <td className="border p-3 text-green-600">{item.zaza}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>

            {/* Real Teacher Experience */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                💬 {t('whyNotChatgpt.sections.realTeacher.title')}
              </h3>
              <blockquote className="italic text-blue-800 mb-2">
                "{t('whyNotChatgpt.sections.realTeacher.quote')}"
              </blockquote>
              <p className="text-blue-700 text-sm">
                - {t('whyNotChatgpt.sections.realTeacher.author')}
              </p>
            </div>

            {/* CTA Section */}
            <div className="text-center p-6 bg-purple-100 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">
                {t('whyNotChatgpt.sections.cta.title')}
              </h3>
              <p className="text-purple-800 mb-4">
                {t('whyNotChatgpt.sections.cta.description')}
              </p>
              <div className="space-x-4">
                <Link 
                  href="/de"
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  {t('whyNotChatgpt.sections.cta.tryFree')}
                </Link>
                <Link 
                  href="/de/products"
                  className="inline-block bg-purple-100 text-purple-700 px-6 py-3 rounded-lg font-medium hover:bg-purple-200 transition-colors"
                >
                  {t('whyNotChatgpt.sections.cta.learnMore')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}