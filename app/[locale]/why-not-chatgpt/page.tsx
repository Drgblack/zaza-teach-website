import { Metadata } from 'next';
import { canonical } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Why Not ChatGPT? | Zaza Teach - Built for Educators',
  description: 'Discover why Zaza Teach is purpose-built for teachers, offering curriculum alignment, educational expertise, and privacy that generic AI tools lack.',
  alternates: { canonical: canonical('/why-not-chatgpt') },
  openGraph: { url: canonical('/why-not-chatgpt'), title: 'Why Not ChatGPT? | Zaza Teach - Built for Educators' },
  twitter: { card: 'summary_large_image' }
};

export default function WhyNotChatGPTPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Why Not Just Use ChatGPT?
          </h1>
          <p className="text-xl text-gray-600">
            Understanding the difference between generic AI and purpose-built educational tools
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg mb-8">
              It's a fair question! ChatGPT and other general AI tools are impressive, but they weren't designed 
              specifically for educators. Here's why Zaza Teach offers something fundamentally different:
            </p>

            <div className="grid gap-8 mb-12">
              {/* Curriculum Alignment */}
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">🎯 Built-in Curriculum Alignment</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">With Zaza Teach:</h4>
                    <ul className="text-purple-700 space-y-1">
                      <li>• Automatically aligns to Common Core, state standards</li>
                      <li>• Grade-appropriate vocabulary and concepts</li>
                      <li>• Age-appropriate activities and assessments</li>
                      <li>• Pre-loaded with educational frameworks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">With Generic AI:</h4>
                    <ul className="text-red-700 space-y-1">
                      <li>• Requires manual prompt engineering</li>
                      <li>• No guarantee of standard alignment</li>
                      <li>• Inconsistent educational quality</li>
                      <li>• Time-consuming trial and error</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Educational Expertise */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">🧠 Educational Expertise Built-In</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Zaza Teach Understands:</h4>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Bloom's Taxonomy and learning objectives</li>
                      <li>• Differentiated instruction principles</li>
                      <li>• Assessment best practices</li>
                      <li>• Classroom management considerations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Generic AI Limitations:</h4>
                    <ul className="text-red-700 space-y-1">
                      <li>• General knowledge without pedagogical context</li>
                      <li>• No understanding of learning progressions</li>
                      <li>• May suggest inappropriate activities</li>
                      <li>• Lacks classroom reality awareness</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Time and Efficiency */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4">⏰ Time and Efficiency</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Zaza Teach Workflow:</h4>
                    <ul className="text-green-700 space-y-1">
                      <li>• 1-click lesson generation</li>
                      <li>• Consistent, reliable output</li>
                      <li>• No prompt engineering required</li>
                      <li>• Ready-to-use templates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">ChatGPT Workflow:</h4>
                    <ul className="text-red-700 space-y-1">
                      <li>• Crafting detailed prompts each time</li>
                      <li>• Multiple iterations to get quality</li>
                      <li>• Inconsistent results</li>
                      <li>• Significant time investment</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Privacy and Data */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">🔒 Privacy and Data Protection</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Zaza Teach Approach:</h4>
                    <ul className="text-orange-700 space-y-1">
                      <li>• FERPA and COPPA compliant</li>
                      <li>• Data stays within educational context</li>
                      <li>• Clear privacy policies for schools</li>
                      <li>• No training on your content</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Generic AI Concerns:</h4>
                    <ul className="text-red-700 space-y-1">
                      <li>• Data may be used for training</li>
                      <li>• Unclear privacy implications</li>
                      <li>• Not designed for educational compliance</li>
                      <li>• Potential IP and data exposure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-100 to-blue-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Real Difference: Purpose-Built vs. Generic</h3>
              <p className="text-gray-700 mb-4">
                Think of it this way: You wouldn't use a Swiss Army knife to perform surgery when you have access to 
                precision surgical instruments. While ChatGPT is an amazing general-purpose tool, Zaza Teach is the 
                precision instrument designed specifically for education.
              </p>
              <p className="text-gray-700">
                We've taken the power of AI and combined it with deep educational expertise, curriculum knowledge, 
                and an understanding of what teachers actually need in their daily practice.
              </p>
            </div>

            <div className="text-center p-6 bg-purple-100 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Ready to Experience the Difference?</h3>
              <p className="text-purple-800 mb-4">
                See for yourself why thousands of teachers choose purpose-built tools over generic AI.
              </p>
              <a 
                href="/" 
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Try Zaza Teach Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}