export const metadata = {
  title: "Zaza products - tools that save teachers time",
  description: "Zaza Teach, Zaza Promptly, Teach Resources Library, Teach Assess, plus RealtyClose and Close Suite.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Zaza products
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Zaza builds practical AI for teachers and schools. Clear tools, clean data, predictable results.
            </p>
          </div>

          {/* For schools and teachers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              For schools and teachers
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div id="zaza-teach" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Zaza Teach
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  One place to plan lessons in minutes, not hours. Structured plans, activities, assessments, and export to Word or PDF.
                </p>
              </div>

              <div id="zaza-promptly" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Zaza Promptly
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Prompt templates and reusable snippets for classrooms. Make better prompts - get better outputs.
                </p>
              </div>

              <div id="teach-resources-library" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Teach Resources Library
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Ready to use activities, rubrics, and exemplars. Search, adapt, and share with your team.
                </p>
              </div>

              <div id="teach-assess" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Teach Assess
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Quickly generate checks for understanding and printable quizzes that match your lesson objectives.
                </p>
              </div>
            </div>
          </div>

          {/* Also from Zaza */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Also from Zaza
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div id="realtyclose" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  RealtyClose
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Transaction automation for real estate pros - signatures, checklists, and docs in one place.
                </p>
              </div>

              <div id="close-suite" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Close Suite
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  A bundle that connects RealtyClose with email, docs, and simple automations.
                </p>
              </div>
            </div>
          </div>

          {/* Teach vs Promptly comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Teach vs Promptly - what to choose
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">Zaza Teach</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">Zaza Promptly</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Guided lesson planner</td>
                      <td className="px-6 py-4 text-center text-green-600">✓</td>
                      <td className="px-6 py-4 text-center"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Prompt templates</td>
                      <td className="px-6 py-4 text-center text-green-600">✓</td>
                      <td className="px-6 py-4 text-center text-green-600">✓</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Export to Word or PDF</td>
                      <td className="px-6 py-4 text-center text-green-600">✓</td>
                      <td className="px-6 py-4 text-center"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Team sharing</td>
                      <td className="px-6 py-4 text-center text-green-600">✓</td>
                      <td className="px-6 py-4 text-center text-green-600">✓</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Price</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-300">Free plan - Pro from 19.99</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-300">Free plan - Pro from 9.99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Roadmap */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Roadmap - what is coming next
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#8A2BE2] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">Curriculum packs aligned to common standards.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#8A2BE2] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">Shared unit plans for departments.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#8A2BE2] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">Safer student mode with audit logs.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#8A2BE2] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">Deeper export to Google Docs and Slides.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#8A2BE2] to-[#E0115F] rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Get started free
              </h2>
              <p className="text-lg mb-6 text-white/90">
                Try Zaza Teach today and see how AI can transform your lesson planning.
              </p>
              <a 
                href="/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#8A2BE2] font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}