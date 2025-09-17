export const metadata = {
  title: "Terms of Service - Zaza Teach",
  description: "Terms of service for using Zaza Teach platform and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Terms and conditions for using Zaza Teach
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              By using Zaza Teach, you agree to these terms of service. Please read them carefully.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              By accessing and using our service, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Use of Service</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              You may use our service for lawful purposes only. You agree not to use the service in any way that could damage, disable, or impair the service.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Intellectual Property</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The service and its original content, features, and functionality are owned by Zaza Technologies and are protected by copyright and other intellectual property laws.
            </p>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}