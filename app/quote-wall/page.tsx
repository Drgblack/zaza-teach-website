export const metadata = {
  title: "Quote Wall - Zaza Teach",
  description: "Inspiring quotes and testimonials from educators using Zaza Teach.",
};

export default function QuoteWallPage() {
  const quotes = [
    {
      text: "Zaza Teach has saved me hours every week. I can focus on what I love most - teaching my students.",
      author: "Sarah M.",
      role: "Elementary Teacher",
      school: "Lincoln Elementary"
    },
    {
      text: "The lesson planning features are incredible. It's like having a teaching assistant that never sleeps.",
      author: "Mike R.",
      role: "High School Science Teacher",
      school: "Roosevelt High"
    },
    {
      text: "Parent communication has never been easier. The AI suggestions are spot-on and save me so much time.",
      author: "Jennifer L.",
      role: "Middle School Math Teacher",
      school: "Washington Middle"
    },
    {
      text: "Finally, an AI tool built specifically for teachers. It understands our needs and challenges.",
      author: "David K.",
      role: "Special Education Teacher",
      school: "Maple Elementary"
    },
    {
      text: "Grading assistance that actually makes sense. It helps me provide better feedback faster.",
      author: "Lisa Chen",
      role: "English Teacher",
      school: "Central High"
    },
    {
      text: "I wish I had this tool 10 years ago. It would have prevented so many late nights planning lessons.",
      author: "Robert T.",
      role: "Social Studies Teacher",
      school: "Oak Valley Middle"
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Zaza Quote Wall
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hear from educators who are transforming their teaching experience with Zaza Teach.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quotes.map((quote, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-[#8A2BE2] mb-2" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-1.1.9-2 2-2h2V8h-4zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-4c0-1.1.9-2 2-2h2V8h-4z"/>
                  </svg>
                  <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                    "{quote.text}"
                  </p>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {quote.author}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {quote.role}
                  </div>
                  <div className="text-sm text-[#8A2BE2]">
                    {quote.school}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-[#8A2BE2] to-[#E0115F] rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Share Your Experience
              </h2>
              <p className="text-lg mb-6 text-white/90">
                Are you using Zaza Teach? We'd love to hear about your experience!
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-[#8A2BE2] font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Share Your Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}