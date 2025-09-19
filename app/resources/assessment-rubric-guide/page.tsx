import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Assessment Rubric Guide | Free Teaching Resources',
  description: 'Guidelines for creating effective assessment rubrics',
};

export default function AssessmentRubricGuidePage() {
  return (
    <div className="min-h-screen bg-white py-12 print:py-0">
      <div className="max-w-4xl mx-auto px-4 print:px-0">
        {/* Header - hidden when printing */}
        <div className="text-center mb-8 print:hidden">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Assessment Rubric Guide
          </h1>
          <p className="text-gray-600">
            Use Ctrl+P (Cmd+P on Mac) to print or save as PDF
          </p>
        </div>

        {/* Printable Content */}
        <div className="bg-white p-8 print:p-0">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2 text-gray-900">ASSESSMENT RUBRIC GUIDE</h1>
            <p className="text-sm text-gray-600">Templates and best practices for effective assessment</p>
            <p className="text-xs text-gray-500 mt-1">Free resource from Zaza Teach</p>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-blue-800">📈 RUBRIC ESSENTIALS</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Key Components of Effective Rubrics</h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• <strong>Criteria:</strong> Specific skills or knowledge being assessed</li>
                    <li>• <strong>Performance Levels:</strong> Clear descriptions of quality (4-3-2-1 or similar)</li>
                    <li>• <strong>Descriptors:</strong> Observable behaviors for each level</li>
                    <li>• <strong>Point Values:</strong> Consistent scoring system</li>
                    <li>• <strong>Student-Friendly Language:</strong> Clear, accessible terminology</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-green-800">📝 GENERAL PURPOSE RUBRIC TEMPLATE</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left text-sm font-semibold text-gray-900">Criteria</th>
                      <th className="border border-gray-300 p-3 text-center text-sm font-semibold text-gray-900">Exemplary (4)</th>
                      <th className="border border-gray-300 p-3 text-center text-sm font-semibold text-gray-900">Proficient (3)</th>
                      <th className="border border-gray-300 p-3 text-center text-sm font-semibold text-gray-900">Developing (2)</th>
                      <th className="border border-gray-300 p-3 text-center text-sm font-semibold text-gray-900">Beginning (1)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold text-sm text-gray-900">Content Knowledge</td>
                      <td className="border border-gray-300 p-3 text-xs text-gray-700">Shows complete understanding of concepts with insightful connections</td>
                      <td className="border border-gray-300 p-3 text-xs text-gray-700">Shows substantial understanding of concepts</td>
                      <td className="border border-gray-300 p-3 text-xs text-gray-700">Shows some understanding with minor misconceptions</td>
                      <td className="border border-gray-300 p-3 text-xs text-gray-700">Shows little understanding with major misconceptions</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold text-sm text-gray-900">Organization</td>
                      <td className="border border-gray-300 p-3 text-xs text-gray-700">Exceptionally clear, logical flow with smooth transitions</td>
                      <td className="border border-gray-300 p-3 text-xs text-gray-700">Clear organization with good transitions</td>
                      <td className="border border-gray-300 p-3 text-xs text-gray-700">Some organization with unclear transitions</td>
                      <td className="border border-gray-300 p-3 text-xs text-gray-700">Little to no clear organization</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold text-sm text-gray-900">Evidence/Support</td>
                      <td className="border border-gray-300 p-3 text-xs text-gray-700">Extensive, relevant evidence that strongly supports claims</td>
                      <td className="border border-gray-300 p-3 text-xs text-gray-700">Good evidence that supports most claims</td>
                      <td className="border border-gray-300 p-3 text-xs text-gray-700">Some evidence with limited support</td>
                      <td className="border border-gray-300 p-3 text-xs text-gray-700">Little to no evidence provided</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-yellow-800">🎯 SPECIFIC RUBRIC EXAMPLES</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Writing Assignment Rubric</h4>
                  <div className="bg-white p-4 rounded border border-yellow-200">
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Ideas & Content (25%):</strong></p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• 4: Original ideas with deep insight</li>
                        <li>• 3: Clear main idea with good support</li>
                        <li>• 2: Basic idea present but needs development</li>
                        <li>• 1: Unclear or missing main idea</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Oral Presentation Rubric</h4>
                  <div className="bg-white p-4 rounded border border-yellow-200">
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Delivery (25%):</strong></p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• 4: Confident, clear voice, excellent eye contact</li>
                        <li>• 3: Good voice projection, frequent eye contact</li>
                        <li>• 2: Some clarity issues, limited eye contact</li>
                        <li>• 1: Difficult to hear, no eye contact</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-purple-800">🌟 STUDENT-FRIENDLY RUBRICS</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Elementary Example: Story Writing</h4>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="bg-green-100 p-2 rounded text-center">
                      <span className="text-2xl">🌟🌟🌟</span>
                      <p className="font-semibold text-gray-900 mt-1">Super Star!</p>
                      <p className="text-gray-700">My story has a beginning, middle, and end with lots of details</p>
                    </div>
                    <div className="bg-blue-100 p-2 rounded text-center">
                      <span className="text-2xl">🌟🌟</span>
                      <p className="font-semibold text-gray-900 mt-1">Star!</p>
                      <p className="text-gray-700">My story has all parts with some details</p>
                    </div>
                    <div className="bg-yellow-100 p-2 rounded text-center">
                      <span className="text-2xl">🌟</span>
                      <p className="font-semibold text-gray-900 mt-1">Growing!</p>
                      <p className="text-gray-700">My story is missing some parts</p>
                    </div>
                    <div className="bg-orange-100 p-2 rounded text-center">
                      <span className="text-2xl">🌱</span>
                      <p className="font-semibold text-gray-900 mt-1">Just Starting</p>
                      <p className="text-gray-700">I need help organizing my story</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-orange-800">🛠️ RUBRIC DESIGN TIPS</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Best Practices</h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• <strong>Start with standards:</strong> Align criteria to learning objectives</li>
                    <li>• <strong>Use parallel language:</strong> Keep descriptors consistent across levels</li>
                    <li>• <strong>Avoid negative language:</strong> Focus on what students CAN do</li>
                    <li>• <strong>Test your rubric:</strong> Use with sample work before finalizing</li>
                    <li>• <strong>Involve students:</strong> Co-create rubrics for ownership</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Common Pitfalls to Avoid</h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• Vague descriptors ("good," "excellent" without specifics)</li>
                    <li>• Too many criteria (aim for 3-6 main areas)</li>
                    <li>• Overlapping categories</li>
                    <li>• Unequal point distributions</li>
                    <li>• Language too complex for grade level</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-red-800">🔄 SELF-ASSESSMENT RUBRIC</h3>
              
              <div className="bg-white p-4 rounded border border-red-200">
                <h4 className="font-semibold mb-3 text-gray-900">Student Reflection Checklist</h4>
                <div className="space-y-2 text-sm">
                  <label className="flex items-start space-x-2">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-gray-700">I completed all required parts of the assignment</span>
                  </label>
                  <label className="flex items-start space-x-2">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-gray-700">I checked my work for accuracy</span>
                  </label>
                  <label className="flex items-start space-x-2">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-gray-700">I used evidence to support my ideas</span>
                  </label>
                  <label className="flex items-start space-x-2">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-gray-700">I organized my work clearly</span>
                  </label>
                  <label className="flex items-start space-x-2">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-gray-700">I'm proud of my effort on this assignment</span>
                  </label>
                </div>
                <div className="mt-4 pt-4 border-t border-red-200">
                  <p className="text-sm font-semibold text-gray-900">My goal for next time:</p>
                  <div className="h-8 border-b border-gray-300 mt-2"></div>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-300 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-gray-900">💡 USING RUBRICS EFFECTIVELY</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Before the assignment:</strong> Share rubric to set clear expectations</li>
                <li><strong>During the work:</strong> Students self-assess progress</li>
                <li><strong>Peer review:</strong> Use rubric for structured feedback</li>
                <li><strong>Final assessment:</strong> Highlight strengths and growth areas</li>
                <li><strong>Reflection:</strong> Students compare self-assessment to teacher assessment</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8 text-xs text-gray-500">
            <p>Free resource from Zaza Teach • Visit zazateach.com for more teaching resources</p>
          </div>
        </div>
      </div>
    </div>
  );
}