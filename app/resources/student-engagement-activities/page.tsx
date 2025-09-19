import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Engagement Activities | Free Teaching Resources',
  description: 'Creative activities to boost student participation',
};

export default function StudentEngagementActivitiesPage() {
  return (
    <div className="min-h-screen bg-white py-12 print:py-0">
      <div className="max-w-4xl mx-auto px-4 print:px-0">
        {/* Header - hidden when printing */}
        <div className="text-center mb-8 print:hidden">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Student Engagement Activities
          </h1>
          <p className="text-gray-600">
            Use Ctrl+P (Cmd+P on Mac) to print or save as PDF
          </p>
        </div>

        {/* Printable Content */}
        <div className="bg-white p-8 print:p-0">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2 text-gray-900">STUDENT ENGAGEMENT ACTIVITIES</h1>
            <p className="text-sm text-gray-600">50+ activities to boost participation and learning</p>
            <p className="text-xs text-gray-500 mt-1">Free resource from Zaza Teach</p>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-blue-800">🎯 QUICK ENGAGEMENT (2-5 minutes)</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Think-Pair-Share Variations</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Think-Write-Pair-Share</li>
                    <li>• Stand-and-Share (physical movement)</li>
                    <li>• Speed Dating discussions</li>
                    <li>• Silent Conversation (written)</li>
                    <li>• Gallery Walk responses</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Quick Polls & Checks</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Fist-to-Five understanding</li>
                    <li>• Four Corners opinion</li>
                    <li>• Human Bar Graph</li>
                    <li>• Emoji check-ins</li>
                    <li>• Exit Ticket questions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-green-800">🎮 GAME-BASED LEARNING (10-20 minutes)</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Review Games</h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• Vocabulary Bingo with student-created cards</li>
                    <li>• Jeopardy-style review (team competition)</li>
                    <li>• Kahoot or digital quiz games</li>
                    <li>• Scavenger Hunt for key concepts</li>
                    <li>• Escape Room challenges</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Movement Games</h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• Musical Chairs with content questions</li>
                    <li>• Relay Races with problem-solving</li>
                    <li>• Snowball Fight (crumpled paper Q&A)</li>
                    <li>• Human Knot while discussing topics</li>
                    <li>• Simon Says with academic content</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-yellow-800">🎨 CREATIVE EXPRESSION (15-30 minutes)</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Visual Activities</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Sketch-to-Stretch concepts</li>
                    <li>• Mind Map creation</li>
                    <li>• Comic Strip summaries</li>
                    <li>• Infographic design</li>
                    <li>• One-Pager projects</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Performance Activities</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Role-play scenarios</li>
                    <li>• Tableau (frozen scenes)</li>
                    <li>• Rap/Song creation</li>
                    <li>• News Report presentations</li>
                    <li>• TikTok-style videos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-purple-800">🤝 COLLABORATIVE LEARNING (20-45 minutes)</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Structured Collaboration</h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• Jigsaw Method (expert groups)</li>
                    <li>• Numbered Heads Together</li>
                    <li>• Round Robin brainstorming</li>
                    <li>• Fishbowl discussions</li>
                    <li>• Socratic Seminars</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Project-Based Activities</h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• Design Challenge competitions</li>
                    <li>• Mock Trial or Debate</li>
                    <li>• Create a Museum Exhibit</li>
                    <li>• Podcast production</li>
                    <li>• Community Problem-Solving</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-orange-800">💻 TECH-ENHANCED ENGAGEMENT</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Digital Tools</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Padlet collaboration walls</li>
                    <li>• Mentimeter live polling</li>
                    <li>• Flipgrid video responses</li>
                    <li>• Nearpod interactive lessons</li>
                    <li>• Virtual Field Trips</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Blended Activities</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• QR Code scavenger hunts</li>
                    <li>• Digital Breakout rooms</li>
                    <li>• Online collaboration docs</li>
                    <li>• Virtual Reality exploration</li>
                    <li>• Augmented Reality lessons</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-red-800">🧠 CRITICAL THINKING ACTIVITIES</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Analysis Activities</h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• Case Study analysis</li>
                    <li>• Mystery Box investigations</li>
                    <li>• What Would You Do? scenarios</li>
                    <li>• Compare/Contrast matrices</li>
                    <li>• Cause and Effect chains</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Problem-Solving</h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• STEM challenges with limited materials</li>
                    <li>• Logic puzzles related to content</li>
                    <li>• Real-world problem scenarios</li>
                    <li>• Design Thinking process</li>
                    <li>• Shark Tank pitch projects</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-300 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-gray-900">✨ ENGAGEMENT TIPS</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Choice:</strong> Let students select from 2-3 activity options</li>
                <li><strong>Relevance:</strong> Connect activities to student interests and real life</li>
                <li><strong>Variety:</strong> Rotate between individual, pair, and group work</li>
                <li><strong>Movement:</strong> Include physical activity every 20-30 minutes</li>
                <li><strong>Challenge:</strong> Provide tiered difficulty levels</li>
                <li><strong>Celebration:</strong> Recognize effort and creative thinking</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8 text-xs text-gray-500">
            <p>Free resource from Zaza Teach • Visit zazateach.com for more teaching resources</p>
          </div>
        </div>
      </div>
    </div>
  );
}