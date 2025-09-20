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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Lesson Plan Template
          </h1>
          <p className="text-gray-600">
            Use Ctrl+P (Cmd+P on Mac) to print or save as PDF
          </p>
        </div>

        {/* Printable Content */}
        <div className="bg-white p-8 print:p-0">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">LESSON PLAN TEMPLATE</h1>
            <p className="text-sm text-gray-600">Free resource from Zaza Teach</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border p-3">
                <strong>Subject:</strong> ___________________________
              </div>
              <div className="border p-3">
                <strong>Grade Level:</strong> _____________________
              </div>
              <div className="border p-3">
                <strong>Date:</strong> _____________________________
              </div>
              <div className="border p-3">
                <strong>Duration:</strong> ________________________
              </div>
            </div>

            <div className="border p-4">
              <h3 className="font-bold mb-2">LEARNING OBJECTIVES</h3>
              <p className="text-sm text-gray-600 mb-2">Students will be able to...</p>
              <div className="space-y-2">
                <div>1. _________________________________________________</div>
                <div>2. _________________________________________________</div>
                <div>3. _________________________________________________</div>
              </div>
            </div>

            <div className="border p-4">
              <h3 className="font-bold mb-2">MATERIALS NEEDED</h3>
              <ul className="space-y-1">
                <li>• _________________________________________________</li>
                <li>• _________________________________________________</li>
                <li>• _________________________________________________</li>
                <li>• _________________________________________________</li>
              </ul>
            </div>

            <div className="border p-4">
              <h3 className="font-bold mb-2">LESSON STRUCTURE</h3>
              
              <div className="mb-4">
                <h4 className="font-semibold">Opening (5-10 minutes)</h4>
                <div className="ml-4 space-y-1">
                  <div>• Hook/Warm-up: _________________________________</div>
                  <div>• Review previous learning: ______________________</div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold">Main Activity (20-30 minutes)</h4>
                <div className="ml-4 space-y-1">
                  <div>• Direct instruction: ____________________________</div>
                  <div>• Guided practice: _______________________________</div>
                  <div>• Independent work: ______________________________</div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold">Closing (5-10 minutes)</h4>
                <div className="ml-4 space-y-1">
                  <div>• Summary/Review: ________________________________</div>
                  <div>• Exit ticket: ___________________________________</div>
                </div>
              </div>
            </div>

            <div className="border p-4">
              <h3 className="font-bold mb-2">ASSESSMENT</h3>
              <div className="space-y-2">
                <div>Formative: _____________________________________</div>
                <div>Summative: ____________________________________</div>
              </div>
            </div>

            <div className="border p-4">
              <h3 className="font-bold mb-2">DIFFERENTIATION</h3>
              <div className="space-y-2">
                <div>For struggling learners: ________________________</div>
                <div>For advanced learners: ___________________________</div>
                <div>For ELL students: ________________________________</div>
              </div>
            </div>

            <div className="border p-4">
              <h3 className="font-bold mb-2">HOMEWORK/EXTENSION</h3>
              <div className="space-y-2">
                <div>_________________________________________________</div>
                <div>_________________________________________________</div>
              </div>
            </div>

            <div className="border p-4">
              <h3 className="font-bold mb-2">REFLECTION NOTES</h3>
              <div className="space-y-2">
                <div>What worked well: _______________________________</div>
                <div>What to improve: ________________________________</div>
                <div>Student engagement: _____________________________</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-xs text-gray-500">
            <p>Free resource from Zaza Teach • Visit zazateach.com for more resources</p>
          </div>
        </div>
      </div>
    </div>
  );
}