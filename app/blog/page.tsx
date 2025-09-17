export const metadata = {
  title: "Blog - Zaza Teach",
  description: "Latest insights, tips, and resources for educators using AI in the classroom.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Zaza Teach Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Latest insights, tips, and resources for educators using AI in the classroom.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're working on bringing you valuable content and resources. Check back soon for the latest updates!
            </p>
            <a 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white font-medium rounded-lg transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}