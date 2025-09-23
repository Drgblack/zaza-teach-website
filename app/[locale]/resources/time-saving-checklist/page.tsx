import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Time-Saving Teacher Checklist | Free Teaching Resources',
  description: 'Weekly and daily checklists to streamline your teaching workflow',
};

export default function TimeSavingChecklistPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12 print:py-0">
      <div className="max-w-4xl mx-auto px-4 print:px-0">
        {/* Header - hidden when printing */}
        <div className="text-center mb-8 print:hidden">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Time-Saving Teacher Checklist
          </h1>
          <p className="text-gray-700">
            Use Ctrl+P (Cmd+P on Mac) to print or save as PDF
          </p>
        </div>

        {/* Printable Content */}
        <div className="bg-white p-8 print:p-0">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">TIME-SAVING TEACHER CHECKLIST</h1>
            <p className="text-sm text-gray-800 mb-1">Weekly and daily workflows to reclaim your time</p>
            <p className="text-xs text-gray-700">Free resource from Zaza Teach</p>
          </div>

          <div className="space-y-8">
            <div className="border-2 border-blue-300 bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-blue-900">📅 SUNDAY PLANNING SESSION (30-45 minutes)</h3>
              
              <div className="space-y-3">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="text-gray-900 leading-relaxed">Review upcoming week's calendar and commitments</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="text-gray-900 leading-relaxed">Check curriculum scope and sequence for the week</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="text-gray-900 leading-relaxed">Generate lesson plans using Zaza Teach (5 mins each)</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="text-gray-900 leading-relaxed">Print/prepare materials for the entire week</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="text-gray-900 leading-relaxed">Set up digital resources and links</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="text-gray-900 leading-relaxed">Review IEP accommodations and differentiation needs</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="text-gray-900 leading-relaxed">Prepare assessment materials for the week</span>
                </label>
              </div>
            </div>

            <div className="border-2 border-green-300 bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-green-900">🌅 DAILY MORNING ROUTINE (10-15 minutes)</h3>
              
              <div className="space-y-3">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" />
                  <span className="text-gray-900 leading-relaxed">Review today's lesson plans and materials</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" />
                  <span className="text-gray-900 leading-relaxed">Check technology and digital resources</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" />
                  <span className="text-gray-900 leading-relaxed">Prepare materials and workspace</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" />
                  <span className="text-gray-900 leading-relaxed">Review student behavior plans or accommodations</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" />
                  <span className="text-gray-900 leading-relaxed">Set up any special activities or transitions</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" />
                  <span className="text-gray-900 leading-relaxed">Check email for urgent parent/admin communications</span>
                </label>
              </div>
            </div>

            <div className="border-2 border-orange-300 bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-orange-900">🏃‍♀️ BETWEEN CLASSES (2-3 minutes)</h3>
              
              <div className="space-y-3">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500" />
                  <span className="text-gray-900 leading-relaxed">Reset classroom materials for next group</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500" />
                  <span className="text-gray-900 leading-relaxed">Take attendance notes if needed</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500" />
                  <span className="text-gray-900 leading-relaxed">Queue up digital resources for next lesson</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500" />
                  <span className="text-gray-900 leading-relaxed">Quick mental note of lesson effectiveness</span>
                </label>
              </div>
            </div>

            <div className="border-2 border-purple-300 bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-purple-900">🌙 END-OF-DAY WRAP-UP (15-20 minutes)</h3>
              
              <div className="space-y-3">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" />
                  <span className="text-gray-900 leading-relaxed">Tidy classroom and reset for tomorrow</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" />
                  <span className="text-gray-900 leading-relaxed">Review tomorrow's lesson plans</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" />
                  <span className="text-gray-900 leading-relaxed">Handle any urgent grading (max 10 minutes)</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" />
                  <span className="text-gray-900 leading-relaxed">Send important parent communications</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" />
                  <span className="text-gray-900 leading-relaxed">Update behavior tracking or data collection</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" />
                  <span className="text-gray-900 leading-relaxed">Note any lesson plan adjustments needed</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" />
                  <span className="text-gray-900 leading-relaxed">Pack materials needed for home (if any)</span>
                </label>
              </div>
            </div>

            <div className="border-2 border-red-300 bg-red-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-red-900">🏠 WEEKLY HOME TASKS (Choose 2-3 max)</h3>
              
              <div className="space-y-3">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500" />
                  <span className="text-gray-900 leading-relaxed">Grade one major assignment using voice-to-text feedback</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500" />
                  <span className="text-gray-900 leading-relaxed">Prep materials for next week's special projects</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500" />
                  <span className="text-gray-900 leading-relaxed">Update gradebook and send progress reports</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500" />
                  <span className="text-gray-900 leading-relaxed">Plan parent conference talking points</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500" />
                  <span className="text-gray-900 leading-relaxed">Research new activities or resources (15 minutes max)</span>
                </label>
              </div>
            </div>

            <div className="border-2 border-yellow-300 bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-yellow-900">⏰ TIME-SAVING PRINCIPLES</h3>
              <ul className="space-y-2 text-gray-900">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-yellow-700 min-w-fit">Batch similar tasks:</span>
                  <span>Grade all math papers together, send all emails at once</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-yellow-700 min-w-fit">Use templates:</span>
                  <span>Create reusable parent communication templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-yellow-700 min-w-fit">Limit perfectionism:</span>
                  <span>"Good enough" is often perfect for daily tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-yellow-700 min-w-fit">Use AI tools:</span>
                  <span>Let Zaza Teach handle lesson planning heavy lifting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-yellow-700 min-w-fit">Set boundaries:</span>
                  <span>School work stays at school when possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-yellow-700 min-w-fit">Automate grading:</span>
                  <span>Use multiple choice/self-checking when appropriate</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-teal-300 bg-teal-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-teal-900">📱 DIGITAL TOOLS TO STREAMLINE</h3>
              <ul className="space-y-2 text-gray-900">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-teal-700 min-w-fit">Zaza Teach:</span>
                  <span>AI lesson planning in under 5 minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-teal-700 min-w-fit">Voice-to-text:</span>
                  <span>Record feedback instead of typing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-teal-700 min-w-fit">Google Forms:</span>
                  <span>Quick self-grading assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-teal-700 min-w-fit">Classroom timers:</span>
                  <span>Keep activities on track</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-teal-700 min-w-fit">Email templates:</span>
                  <span>Standard responses for common questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-teal-700 min-w-fit">Digital planner:</span>
                  <span>All dates and deadlines in one place</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8 text-xs text-gray-700 border-t pt-4">
            <p className="font-medium">Free resource from Zaza Teach • Visit zazateach.com to save hours on lesson planning</p>
          </div>
        </div>
      </div>
    </div>
  );
}