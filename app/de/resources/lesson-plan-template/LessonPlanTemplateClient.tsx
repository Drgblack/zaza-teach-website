'use client';

import { useTranslations } from '@/components/LocaleProvider';

export default function LessonPlanTemplateClient() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 print:py-0">
      <div className="max-w-4xl mx-auto px-4 print:px-0">
        {/* Header - hidden when printing */}
        <div className="text-center mb-8 print:hidden">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('lessonPlanTemplate.header.title')}
          </h1>
          <p className="text-gray-700">
            {t('lessonPlanTemplate.header.instruction')}
          </p>
        </div>

        {/* Printable Content */}
        <div className="bg-white p-8 print:p-0">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{t('lessonPlanTemplate.template.title')}</h1>
            <p className="text-sm text-gray-700">{t('lessonPlanTemplate.template.subtitle')}</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-gray-300 p-4 rounded-lg bg-gray-50">
                <strong className="text-gray-900">{t('lessonPlanTemplate.template.fields.subject')}</strong> <span className="text-gray-800">___________________________</span>
              </div>
              <div className="border-2 border-gray-300 p-4 rounded-lg bg-gray-50">
                <strong className="text-gray-900">{t('lessonPlanTemplate.template.fields.gradeLevel')}</strong> <span className="text-gray-800">_____________________</span>
              </div>
              <div className="border-2 border-gray-300 p-4 rounded-lg bg-gray-50">
                <strong className="text-gray-900">{t('lessonPlanTemplate.template.fields.date')}</strong> <span className="text-gray-800">_____________________________</span>
              </div>
              <div className="border-2 border-gray-300 p-4 rounded-lg bg-gray-50">
                <strong className="text-gray-900">{t('lessonPlanTemplate.template.fields.duration')}</strong> <span className="text-gray-800">________________________</span>
              </div>
            </div>

            <div className="border-2 border-blue-300 p-6 rounded-lg bg-blue-50">
              <h3 className="font-bold mb-3 text-blue-900 text-lg">{t('lessonPlanTemplate.template.sections.objectives.title')}</h3>
              <p className="text-sm text-blue-800 mb-3 italic">{t('lessonPlanTemplate.template.sections.objectives.subtitle')}</p>
              <div className="space-y-3 text-gray-900">
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-blue-700">1.</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">_________________________________________________</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-blue-700">2.</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">_________________________________________________</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-blue-700">3.</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">_________________________________________________</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-green-300 p-6 rounded-lg bg-green-50">
              <h3 className="font-bold mb-3 text-green-900 text-lg">{t('lessonPlanTemplate.template.sections.materials.title')}</h3>
              <ul className="space-y-2 text-gray-900">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">_________________________________________________</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">_________________________________________________</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">_________________________________________________</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">_________________________________________________</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-purple-300 p-6 rounded-lg bg-purple-50">
              <h3 className="font-bold mb-4 text-purple-900 text-lg">{t('lessonPlanTemplate.template.sections.structure.title')}</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-purple-800 mb-3 text-base">{t('lessonPlanTemplate.template.sections.structure.opening.title')}</h4>
                <div className="ml-4 space-y-2 text-gray-900">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span className="text-sm font-medium text-purple-700">{t('lessonPlanTemplate.template.sections.structure.opening.hook')}</span>
                    <span className="flex-1 border-b border-dotted border-gray-400 pb-1">_________________________________</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span className="text-sm font-medium text-purple-700">{t('lessonPlanTemplate.template.sections.structure.opening.review')}</span>
                    <span className="flex-1 border-b border-dotted border-gray-400 pb-1">______________________</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-purple-800 mb-3 text-base">{t('lessonPlanTemplate.template.sections.structure.mainActivity.title')}</h4>
                <div className="ml-4 space-y-2 text-gray-900">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span className="text-sm font-medium text-purple-700">{t('lessonPlanTemplate.template.sections.structure.mainActivity.instruction')}</span>
                    <span className="flex-1 border-b border-dotted border-gray-400 pb-1">____________________________</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span className="text-sm font-medium text-purple-700">{t('lessonPlanTemplate.template.sections.structure.mainActivity.guided')}</span>
                    <span className="flex-1 border-b border-dotted border-gray-400 pb-1">_______________________________</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span className="text-sm font-medium text-purple-700">{t('lessonPlanTemplate.template.sections.structure.mainActivity.independent')}</span>
                    <span className="flex-1 border-b border-dotted border-gray-400 pb-1">______________________________</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-purple-800 mb-3 text-base">{t('lessonPlanTemplate.template.sections.structure.closing.title')}</h4>
                <div className="ml-4 space-y-2 text-gray-900">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span className="text-sm font-medium text-purple-700">{t('lessonPlanTemplate.template.sections.structure.closing.summary')}</span>
                    <span className="flex-1 border-b border-dotted border-gray-400 pb-1">________________________________</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span className="text-sm font-medium text-purple-700">{t('lessonPlanTemplate.template.sections.structure.closing.exitTicket')}</span>
                    <span className="flex-1 border-b border-dotted border-gray-400 pb-1">___________________________________</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-orange-300 p-6 rounded-lg bg-orange-50">
              <h3 className="font-bold mb-3 text-orange-900 text-lg">{t('lessonPlanTemplate.template.sections.assessment.title')}</h3>
              <div className="space-y-3 text-gray-900">
                <div className="flex items-start gap-2">
                  <span className="text-sm font-semibold text-orange-700 min-w-[80px]">{t('lessonPlanTemplate.template.sections.assessment.formative')}</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">_____________________________________</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm font-semibold text-orange-700 min-w-[80px]">{t('lessonPlanTemplate.template.sections.assessment.summative')}</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">____________________________________</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-teal-300 p-6 rounded-lg bg-teal-50">
              <h3 className="font-bold mb-3 text-teal-900 text-lg">{t('lessonPlanTemplate.template.sections.differentiation.title')}</h3>
              <div className="space-y-3 text-gray-900">
                <div className="flex items-start gap-2">
                  <span className="text-sm font-semibold text-teal-700 min-w-[140px]">{t('lessonPlanTemplate.template.sections.differentiation.struggling')}</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">________________________</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm font-semibold text-teal-700 min-w-[140px]">{t('lessonPlanTemplate.template.sections.differentiation.advanced')}</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">___________________________</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm font-semibold text-teal-700 min-w-[140px]">{t('lessonPlanTemplate.template.sections.differentiation.ell')}</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">________________________________</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-indigo-300 p-6 rounded-lg bg-indigo-50">
              <h3 className="font-bold mb-3 text-indigo-900 text-lg">{t('lessonPlanTemplate.template.sections.homework.title')}</h3>
              <div className="space-y-3 text-gray-900">
                <div className="border-b border-dotted border-gray-400 pb-1">_________________________________________________</div>
                <div className="border-b border-dotted border-gray-400 pb-1">_________________________________________________</div>
                <div className="border-b border-dotted border-gray-400 pb-1">_________________________________________________</div>
              </div>
            </div>

            <div className="border-2 border-pink-300 p-6 rounded-lg bg-pink-50">
              <h3 className="font-bold mb-3 text-pink-900 text-lg">{t('lessonPlanTemplate.template.sections.reflection.title')}</h3>
              <div className="space-y-3 text-gray-900">
                <div className="flex items-start gap-2">
                  <span className="text-sm font-semibold text-pink-700 min-w-[120px]">{t('lessonPlanTemplate.template.sections.reflection.worked')}</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">_______________________________</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm font-semibold text-pink-700 min-w-[120px]">{t('lessonPlanTemplate.template.sections.reflection.improve')}</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">________________________________</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm font-semibold text-pink-700 min-w-[120px]">{t('lessonPlanTemplate.template.sections.reflection.engagement')}</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">_____________________________</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-xs text-gray-700 border-t pt-4">
            <p className="font-medium">{t('lessonPlanTemplate.template.footer')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}