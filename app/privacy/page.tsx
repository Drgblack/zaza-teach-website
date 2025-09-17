export const metadata = {
  title: "Privacy Policy - Zaza Teach",
  description: "Privacy policy for Zaza Teach - how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              How we collect, use, and protect your data
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At Zaza Teach, we take your privacy seriously. This privacy policy explains how we collect, use, and protect your personal information.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We use your information to provide, maintain, and improve our services, communicate with you, and ensure the security of our platform.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Protection</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We implement appropriate security measures to protect your personal information and comply with applicable data protection laws.
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