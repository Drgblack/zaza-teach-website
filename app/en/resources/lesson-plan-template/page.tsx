import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lesson Plan Template | Free Teaching Resources',
  description: 'Downloadable lesson plan template for teachers',
};

export default function LessonPlanTemplatePage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12 print:py-0">
      <div className="max-w-4xl mx-auto px-4 print:px-0">
        {/* Header - hidden when printing */}
        <div className="text-center mb-8 print:hidden">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Lesson Plan Template
          </h1>
          <p className="text-slate-700">
            Use Ctrl+P (Cmd+P on Mac) to print or save as PDF
          </p>
        </div>

        {/* Printable Content */}
        <div className="bg-white p-8 print:p-0">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">LESSON PLAN TEMPLATE</h1>
            <p className="text-sm text-slate-700">Free resource from Zaza Teach</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-gray-300 p-4 rounded-lg bg-gray-50">
                <strong className="text-slate-900">Subject:</strong> <span className="text-slate-800">___________________________</span>
              </div>
              <div className="border-2 border-gray-300 p-4 rounded-lg bg-gray-50">
                <strong className="text-slate-900">Grade Level:</strong> <span className="text-slate-800">_____________________</span>
              </div>
              <div className="border-2 border-gray-300 p-4 rounded-lg bg-gray-50">
                <strong className="text-slate-900">Date:</strong> <span className="text-slate-800">_____________________________</span>
              </div>
              <div className="border-2 border-gray-300 p-4 rounded-lg bg-gray-50">
                <strong className="text-slate-900">Duration:</strong> <span className="text-slate-800">________________________</span>
              </div>
            </div>

            <div className="border-2 border-blue-300 p-6 rounded-lg bg-blue-50">
              <h3 className="font-bold mb-3 text-blue-900 text-lg">LEARNING OBJECTIVES</h3>
              <p className="text-sm text-blue-800 mb-3 italic">Students will be able to...</p>
              <div className="space-y-3 text-slate-900">
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
              <h3 className="font-bold mb-3 text-green-900 text-lg">MATERIALS NEEDED</h3>
              <ul className="space-y-2 text-slate-900">
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
              <h3 className="font-bold mb-4 text-purple-900 text-lg">LESSON STRUCTURE</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-purple-800 mb-3 text-base">Opening (5-10 minutes)</h4>
                <div className="ml-4 space-y-2 text-slate-900">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span className="text-sm font-medium text-purple-700">Hook/Warm-up:</span>
                    <span className="flex-1 border-b border-dotted border-gray-400 pb-1">_________________________________</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span className="text-sm font-medium text-purple-700">Review previous learning:</span>
                    <span className="flex-1 border-b border-dotted border-gray-400 pb-1">______________________</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-purple-800 mb-3 text-base">Main Activity (20-30 minutes)</h4>
                <div className="ml-4 space-y-2 text-slate-900">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span className="text-sm font-medium text-purple-700">Direct instruction:</span>
                    <span className="flex-1 border-b border-dotted border-gray-400 pb-1">____________________________</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span className="text-sm font-medium text-purple-700">Guided practice:</span>
                    <span className="flex-1 border-b border-dotted border-gray-400 pb-1">_______________________________</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span className="text-sm font-medium text-purple-700">Independent work:</span>
                    <span className="flex-1 border-b border-dotted border-gray-400 pb-1">______________________________</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-purple-800 mb-3 text-base">Closing (5-10 minutes)</h4>
                <div className="ml-4 space-y-2 text-slate-900">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span className="text-sm font-medium text-purple-700">Summary/Review:</span>
                    <span className="flex-1 border-b border-dotted border-gray-400 pb-1">________________________________</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span className="text-sm font-medium text-purple-700">Exit ticket:</span>
                    <span className="flex-1 border-b border-dotted border-gray-400 pb-1">___________________________________</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-orange-300 p-6 rounded-lg bg-orange-50">
              <h3 className="font-bold mb-3 text-orange-900 text-lg">ASSESSMENT</h3>
              <div className="space-y-3 text-slate-900">
                <div className="flex items-start gap-2">
                  <span className="text-sm font-semibold text-orange-700 min-w-[80px]">Formative:</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">_____________________________________</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm font-semibold text-orange-700 min-w-[80px]">Summative:</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">____________________________________</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-teal-300 p-6 rounded-lg bg-teal-50">
              <h3 className="font-bold mb-3 text-teal-900 text-lg">DIFFERENTIATION</h3>
              <div className="space-y-3 text-slate-900">
                <div className="flex items-start gap-2">
                  <span className="text-sm font-semibold text-teal-700 min-w-[140px]">For struggling learners:</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">________________________</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm font-semibold text-teal-700 min-w-[140px]">For advanced learners:</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">___________________________</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm font-semibold text-teal-700 min-w-[140px]">For ELL students:</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">________________________________</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-indigo-300 p-6 rounded-lg bg-indigo-50">
              <h3 className="font-bold mb-3 text-indigo-900 text-lg">HOMEWORK/EXTENSION</h3>
              <div className="space-y-3 text-slate-900">
                <div className="border-b border-dotted border-gray-400 pb-1">_________________________________________________</div>
                <div className="border-b border-dotted border-gray-400 pb-1">_________________________________________________</div>
                <div className="border-b border-dotted border-gray-400 pb-1">_________________________________________________</div>
              </div>
            </div>

            <div className="border-2 border-pink-300 p-6 rounded-lg bg-pink-50">
              <h3 className="font-bold mb-3 text-pink-900 text-lg">REFLECTION NOTES</h3>
              <div className="space-y-3 text-slate-900">
                <div className="flex items-start gap-2">
                  <span className="text-sm font-semibold text-pink-700 min-w-[120px]">What worked well:</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">_______________________________</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm font-semibold text-pink-700 min-w-[120px]">What to improve:</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">________________________________</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm font-semibold text-pink-700 min-w-[120px]">Student engagement:</span>
                  <span className="flex-1 border-b border-dotted border-gray-400 pb-1">_____________________________</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-xs text-slate-700 border-t pt-4">
            <p className="font-medium">Free resource from Zaza Teach • Visit zazateach.com for more resources</p>
          </div>
        </div>
      </div>
    </div>
  );
}