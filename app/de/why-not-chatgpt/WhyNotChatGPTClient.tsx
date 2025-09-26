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
            {t('whyNotChatgpt.heroTitle')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('whyNotChatgpt.heroSubtitle')}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg mb-8">
              {t('whyNotChatgpt.intro')}
            </p>

            <div className="grid gap-8 mb-12">
              {/* Curriculum Alignment */}
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">
                  🎯 {t('whyNotChatgpt.curriculumAlignment.title')}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">
                      {t('whyNotChatgpt.curriculumAlignment.zazaTeach.title')}
                    </h4>
                    <ul className="text-purple-700 space-y-1">
                      <li>• {t('whyNotChatgpt.curriculumAlignment.zazaTeach.points.standards')}</li>
                      <li>• {t('whyNotChatgpt.curriculumAlignment.zazaTeach.points.vocabulary')}</li>
                      <li>• {t('whyNotChatgpt.curriculumAlignment.zazaTeach.points.activities')}</li>
                      <li>• {t('whyNotChatgpt.curriculumAlignment.zazaTeach.points.frameworks')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">
                      {t('whyNotChatgpt.curriculumAlignment.genericAI.title')}
                    </h4>
                    <ul className="text-red-700 space-y-1">
                      <li>• {t('whyNotChatgpt.curriculumAlignment.genericAI.points.prompts')}</li>
                      <li>• {t('whyNotChatgpt.curriculumAlignment.genericAI.points.alignment')}</li>
                      <li>• {t('whyNotChatgpt.curriculumAlignment.genericAI.points.quality')}</li>
                      <li>• {t('whyNotChatgpt.curriculumAlignment.genericAI.points.timeConsuming')}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Educational Expertise */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  🧠 {t('whyNotChatgpt.educationalExpertise.title')}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">
                      {t('whyNotChatgpt.educationalExpertise.zazaTeach.title')}
                    </h4>
                    <ul className="text-blue-700 space-y-1">
                      <li>• {t('whyNotChatgpt.educationalExpertise.zazaTeach.points.blooms')}</li>
                      <li>• {t('whyNotChatgpt.educationalExpertise.zazaTeach.points.differentiated')}</li>
                      <li>• {t('whyNotChatgpt.educationalExpertise.zazaTeach.points.assessment')}</li>
                      <li>• {t('whyNotChatgpt.educationalExpertise.zazaTeach.points.classroom')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">
                      {t('whyNotChatgpt.educationalExpertise.genericAI.title')}
                    </h4>
                    <ul className="text-red-700 space-y-1">
                      <li>• {t('whyNotChatgpt.educationalExpertise.genericAI.points.general')}</li>
                      <li>• {t('whyNotChatgpt.educationalExpertise.genericAI.points.progressions')}</li>
                      <li>• {t('whyNotChatgpt.educationalExpertise.genericAI.points.inappropriate')}</li>
                      <li>• {t('whyNotChatgpt.educationalExpertise.genericAI.points.reality')}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Time and Efficiency */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4">
                  ⏰ {t('whyNotChatgpt.timeEfficiency.title')}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">
                      {t('whyNotChatgpt.timeEfficiency.zazaTeach.title')}
                    </h4>
                    <ul className="text-green-700 space-y-1">
                      <li>• {t('whyNotChatgpt.timeEfficiency.zazaTeach.points.oneClick')}</li>
                      <li>• {t('whyNotChatgpt.timeEfficiency.zazaTeach.points.consistent')}</li>
                      <li>• {t('whyNotChatgpt.timeEfficiency.zazaTeach.points.noPrompts')}</li>
                      <li>• {t('whyNotChatgpt.timeEfficiency.zazaTeach.points.templates')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">
                      {t('whyNotChatgpt.timeEfficiency.chatgpt.title')}
                    </h4>
                    <ul className="text-red-700 space-y-1">
                      <li>• {t('whyNotChatgpt.timeEfficiency.chatgpt.points.crafting')}</li>
                      <li>• {t('whyNotChatgpt.timeEfficiency.chatgpt.points.iterations')}</li>
                      <li>• {t('whyNotChatgpt.timeEfficiency.chatgpt.points.inconsistent')}</li>
                      <li>• {t('whyNotChatgpt.timeEfficiency.chatgpt.points.timeInvestment')}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Privacy and Data */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">
                  🔒 {t('whyNotChatgpt.privacyData.title')}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">
                      {t('whyNotChatgpt.privacyData.zazaTeach.title')}
                    </h4>
                    <ul className="text-orange-700 space-y-1">
                      <li>• {t('whyNotChatgpt.privacyData.zazaTeach.points.ferpa')}</li>
                      <li>• {t('whyNotChatgpt.privacyData.zazaTeach.points.educational')}</li>
                      <li>• {t('whyNotChatgpt.privacyData.zazaTeach.points.policies')}</li>
                      <li>• {t('whyNotChatgpt.privacyData.zazaTeach.points.noTraining')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">
                      {t('whyNotChatgpt.privacyData.genericAI.title')}
                    </h4>
                    <ul className="text-red-700 space-y-1">
                      <li>• {t('whyNotChatgpt.privacyData.genericAI.points.training')}</li>
                      <li>• {t('whyNotChatgpt.privacyData.genericAI.points.unclear')}</li>
                      <li>• {t('whyNotChatgpt.privacyData.genericAI.points.compliance')}</li>
                      <li>• {t('whyNotChatgpt.privacyData.genericAI.points.exposure')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-100 to-blue-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('whyNotChatgpt.realDifference.title')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('whyNotChatgpt.realDifference.analogy')}
              </p>
              <p className="text-gray-700">
                {t('whyNotChatgpt.realDifference.explanation')}
              </p>
            </div>

            <div className="text-center p-6 bg-purple-100 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">
                {t('whyNotChatgpt.cta.title')}
              </h3>
              <p className="text-purple-800 mb-4">
                {t('whyNotChatgpt.cta.description')}
              </p>
              <Link 
                href="/de"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                {t('whyNotChatgpt.cta.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}