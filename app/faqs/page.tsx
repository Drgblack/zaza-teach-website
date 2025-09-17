export const metadata = {
  title: "FAQs - Zaza Teach",
  description: "Frequently asked questions about Zaza Teach and how AI can transform your teaching experience.",
};

export default function FAQsPage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about Zaza Teach and how AI can transform your teaching experience.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              FAQ Section Coming Soon
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're compiling the most common questions from educators to provide you with comprehensive answers about using AI in teaching.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white font-medium rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}