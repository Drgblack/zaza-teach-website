export const metadata = {
  title: "Vision & Mission - Zaza Teach",
  description: "Our vision and mission to transform education through AI-powered teaching tools.",
};

export default function MissionPage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Vision & Mission
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Transforming education through AI-powered teaching tools
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To empower every educator with AI tools that reduce administrative burden and enhance the teaching experience, 
                allowing teachers to focus on what they do best - inspiring and educating students.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We develop intelligent, teacher-first AI solutions that streamline lesson planning, grading, 
                and communication, saving educators 5+ hours per week while maintaining the personal touch that makes great teaching.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#8A2BE2] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">⏰</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Save Time</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Reduce administrative tasks and focus on teaching
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E0115F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🎯</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Enhance Quality</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Improve the quality of education through AI assistance
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#8A2BE2] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">💝</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Keep the Human Touch</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    AI that amplifies, not replaces, human connection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}