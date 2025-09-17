export const metadata = {
  title: "Impressum - Zaza Teach",
  description: "Legal information and company details for Zaza Teach.",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Impressum
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Legal information and company details
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Company Information</h2>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Company Name</h3>
                  <p>Zaza Technologies</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Contact</h3>
                  <p>Email: hello@zazateach.com</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Responsible for Content</h3>
                  <p>Zaza Technologies Team</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">Disclaimer</h2>
              <p className="text-gray-600 dark:text-gray-300">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this company excludes all representations, warranties, and conditions relating to this website and the use of this website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}