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
          <p className="text-gray-600">
            Use Ctrl+P (Cmd+P on Mac) to print or save as PDF
          </p>
        </div>

        {/* Printable Content */}
        <div className="bg-white p-8 print:p-0">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">TIME-SAVING TEACHER CHECKLIST</h1>
            <p className="text-sm text-gray-600">Weekly and daily workflows to reclaim your time</p>
            <p className="text-xs text-gray-500 mt-1">Free resource from Zaza Teach</p>
          </div>

          <div className="space-y-8">
            <div className="border-2 border-blue-500 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-blue-700">📅 SUNDAY PLANNING SESSION (30-45 minutes)</h3>
              
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Review upcoming week's calendar and commitments</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Check curriculum scope and sequence for the week</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Generate lesson plans using Zaza Teach (5 mins each)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Print/prepare materials for the entire week</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Set up digital resources and links</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Review IEP accommodations and differentiation needs</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Prepare assessment materials for the week</span>
                </label>
              </div>
            </div>

            <div className="border-2 border-green-500 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-green-700">🌅 DAILY MORNING ROUTINE (10-15 minutes)</h3>
              
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Review today's lesson plans and materials</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Check technology and digital resources</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Prepare materials and workspace</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Review student behavior plans or accommodations</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Set up any special activities or transitions</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Check email for urgent parent/admin communications</span>
                </label>
              </div>
            </div>

            <div className="border-2 border-orange-500 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-orange-700">🏃‍♀️ BETWEEN CLASSES (2-3 minutes)</h3>
              
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Reset classroom materials for next group</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Take attendance notes if needed</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Queue up digital resources for next lesson</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Quick mental note of lesson effectiveness</span>
                </label>
              </div>
            </div>

            <div className="border-2 border-purple-500 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-purple-700">🌙 END-OF-DAY WRAP-UP (15-20 minutes)</h3>
              
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Tidy classroom and reset for tomorrow</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Review tomorrow's lesson plans</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Handle any urgent grading (max 10 minutes)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Send important parent communications</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Update behavior tracking or data collection</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Note any lesson plan adjustments needed</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Pack materials needed for home (if any)</span>
                </label>
              </div>
            </div>

            <div className="border-2 border-red-500 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-red-700">🏠 WEEKLY HOME TASKS (Choose 2-3 max)</h3>
              
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Grade one major assignment using voice-to-text feedback</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Prep materials for next week's special projects</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Update gradebook and send progress reports</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Plan parent conference talking points</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Research new activities or resources (15 minutes max)</span>
                </label>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">⏰ TIME-SAVING PRINCIPLES</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Batch similar tasks:</strong> Grade all math papers together, send all emails at once</li>
                <li><strong>Use templates:</strong> Create reusable parent communication templates</li>
                <li><strong>Limit perfectionism:</strong> "Good enough" is often perfect for daily tasks</li>
                <li><strong>Use AI tools:</strong> Let Zaza Teach handle lesson planning heavy lifting</li>
                <li><strong>Set boundaries:</strong> School work stays at school when possible</li>
                <li><strong>Automate grading:</strong> Use multiple choice/self-checking when appropriate</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">📱 DIGITAL TOOLS TO STREAMLINE</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Zaza Teach:</strong> AI lesson planning in under 5 minutes</li>
                <li><strong>Voice-to-text:</strong> Record feedback instead of typing</li>
                <li><strong>Google Forms:</strong> Quick self-grading assessments</li>
                <li><strong>Classroom timers:</strong> Keep activities on track</li>
                <li><strong>Email templates:</strong> Standard responses for common questions</li>
                <li><strong>Digital planner:</strong> All dates and deadlines in one place</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8 text-xs text-gray-500">
            <p>Free resource from Zaza Teach • Visit zazateach.com to save hours on lesson planning</p>
          </div>
        </div>
      </div>
    </div>
  );
}