export const metadata = {
  title: "Support - Zaza Teach",
  description: "Get help and support for using Zaza Teach in your classroom.",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Support Center
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get help and support for using Zaza Teach in your classroom.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Getting Started
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                New to Zaza Teach? Learn the basics and get up and running quickly.
              </p>
              <a 
                href="/faqs"
                className="inline-flex items-center text-[#8A2BE2] hover:text-[#8A2BE2]/80 font-medium"
              >
                View FAQs →
              </a>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Support
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Need direct help? Our support team is here to assist you.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center text-[#8A2BE2] hover:text-[#8A2BE2]/80 font-medium"
              >
                Contact Us →
              </a>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Feature Requests
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Have an idea for a new feature? We'd love to hear from you.
              </p>
              <a 
                href="/feature-request"
                className="inline-flex items-center text-[#8A2BE2] hover:text-[#8A2BE2]/80 font-medium"
              >
                Submit Request →
              </a>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Community
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Connect with other educators using Zaza Teach.
              </p>
              <span className="text-gray-500 dark:text-gray-400">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}