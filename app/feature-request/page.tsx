export const metadata = {
  title: "Feature Request - Zaza Teach",
  description: "Submit feature requests and help shape the future of Zaza Teach.",
};

export default function FeatureRequestPage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Feature Request
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Help us build the features you need. Submit your ideas and shape the future of Zaza Teach.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Feature Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8A2BE2] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Brief title for your feature request"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8A2BE2] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Describe the feature you'd like to see..."
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="use-case" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Use Case
                </label>
                <textarea
                  id="use-case"
                  name="use-case"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8A2BE2] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="How would this feature help you in your teaching?"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Priority Level
                </label>
                <select
                  id="priority"
                  name="priority"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8A2BE2] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">Select priority level</option>
                  <option value="low">Low - Nice to have</option>
                  <option value="medium">Medium - Would be helpful</option>
                  <option value="high">High - Really need this</option>
                  <option value="critical">Critical - Blocking my workflow</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Email (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8A2BE2] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="your@email.com (for updates on your request)"
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white font-medium rounded-lg transition-colors"
              >
                Submit Feature Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}