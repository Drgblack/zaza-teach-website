export const metadata = {
  title: "Why not ChatGPT for lesson planning",
  description: "ChatGPT is great, but Zaza adds curriculum alignment, structure, privacy options, and measurable time savings for schools.",
};

export default function WhyNotChatGPTPage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why not just use ChatGPT
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ChatGPT is powerful, but schools need guardrails. Zaza is built for teaching - and it shows.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              What teachers need that generic chat does not
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Curriculum alignment
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Start with objectives and outcomes. Plans, activities, and assessments are generated to match your targets.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Structure by default
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Outputs arrive in a teacher friendly format - sections, timings, materials, and differentiation prompts. No copying back and forth.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Time savings you can measure
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Most teachers finish a solid lesson in about five minutes. Reuse it next week - adapt it in seconds.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  School privacy and controls
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Practical guardrails and clear data handling. Admin options for sign in, retention, and sharing.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Classroom language options
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  English, German, French, Spanish, Italian - switch as needed.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom line */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#8A2BE2] to-[#E0115F] rounded-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">
                Bottom line
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Generic chat gives you raw power. Zaza gives teachers a workflow that is fast, safe, and reliable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-white text-[#8A2BE2] font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Try Zaza Teach Free
                </a>
                <a 
                  href="/products"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                >
                  Compare All Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}