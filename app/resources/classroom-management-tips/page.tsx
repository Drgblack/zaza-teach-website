import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Classroom Management Tips | Free Teaching Resources',
  description: 'Practical strategies for effective classroom management',
};

export default function ClassroomManagementTipsPage() {
  return (
    <div className="min-h-screen bg-white py-12 print:py-0">
      <div className="max-w-4xl mx-auto px-4 print:px-0">
        {/* Header - hidden when printing */}
        <div className="text-center mb-8 print:hidden">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Classroom Management Tips
          </h1>
          <p className="text-gray-600">
            Use Ctrl+P (Cmd+P on Mac) to print or save as PDF
          </p>
        </div>

        {/* Printable Content */}
        <div className="bg-white p-8 print:p-0">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">CLASSROOM MANAGEMENT ESSENTIALS</h1>
            <p className="text-sm text-gray-600">Practical strategies for a positive learning environment</p>
            <p className="text-xs text-gray-500 mt-1">Free resource from Zaza Teach</p>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-blue-800">🏗️ BUILDING CLASSROOM CULTURE</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">First Week Foundations</h4>
                  <ul className="space-y-1 text-sm ml-4">
                    <li>• Co-create classroom rules with students (3-5 simple, positive rules)</li>
                    <li>• Establish consistent routines for entry, transitions, and dismissal</li>
                    <li>• Teach and practice procedures explicitly (bathroom, pencil sharpener, etc.)</li>
                    <li>• Create a welcoming physical environment with student work displayed</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Building Relationships</h4>
                  <ul className="space-y-1 text-sm ml-4">
                    <li>• Learn every student's name by day 3</li>
                    <li>• Greet students individually as they enter</li>
                    <li>• Share something personal about yourself each week</li>
                    <li>• Use "2x10" strategy: 2 minutes of personal conversation for 10 days</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-green-800">⚡ PREVENTING PROBLEMS</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Environmental Strategies</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Arrange desks to minimize distractions</li>
                    <li>• Create clear pathways for movement</li>
                    <li>• Post visual schedules and expectations</li>
                    <li>• Have materials organized and accessible</li>
                    <li>• Use proximity - teach from all areas</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Instructional Strategies</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Keep lessons moving with quick pace</li>
                    <li>• Use "think-pair-share" for engagement</li>
                    <li>• Incorporate movement breaks</li>
                    <li>• Provide clear instructions and check understanding</li>
                    <li>• Have backup activities ready</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-yellow-800">🎯 POSITIVE BEHAVIOR SUPPORTS</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Recognition Systems</h4>
                  <ul className="space-y-1 text-sm ml-4">
                    <li>• Specific praise: "I love how you waited patiently for help"</li>
                    <li>• Class-wide rewards for group goals</li>
                    <li>• Individual behavior charts for struggling students</li>
                    <li>• "Caught being good" tickets</li>
                    <li>• Peer recognition opportunities</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Quick Engagement Tools</h4>
                  <ul className="space-y-1 text-sm ml-4">
                    <li>• "Give me 5" attention signal</li>
                    <li>• Call and response chants</li>
                    <li>• Hand signals for common needs</li>
                    <li>• "Brain breaks" every 15-20 minutes</li>
                    <li>• Choice boards for early finishers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-orange-800">🚨 ADDRESSING DISRUPTIONS</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">De-escalation Techniques</h4>
                  <ul className="space-y-1 text-sm ml-4">
                    <li>• Stay calm and keep voice low</li>
                    <li>• Use non-verbal cues first (eye contact, proximity)</li>
                    <li>• Give private redirect rather than public correction</li>
                    <li>• Offer choices: "You can work here quietly or move to the back table"</li>
                    <li>• Use "when/then" statements: "When you're ready, then we can continue"</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Progressive Consequences</h4>
                  <ol className="space-y-1 text-sm ml-4">
                    <li>1. Nonverbal warning (look, proximity, gesture)</li>
                    <li>2. Verbal redirect (private, quiet)</li>
                    <li>3. Choice given with consequence</li>
                    <li>4. Logical consequence implemented</li>
                    <li>5. Problem-solving conference</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-purple-800">🔄 TRANSITIONS & ROUTINES</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Smooth Transitions</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Use countdown timers (3-2-1)</li>
                    <li>• Play "transition music"</li>
                    <li>• Give specific instructions</li>
                    <li>• Practice transitions regularly</li>
                    <li>• Have materials ready to go</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Daily Routines</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Morning greeting and warm-up</li>
                    <li>• Clear dismissal procedures</li>
                    <li>• Bathroom/water procedures</li>
                    <li>• Turn-in basket systems</li>
                    <li>• End-of-day cleanup roles</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-red-800">📞 DIFFICULT SITUATIONS</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">When a Student Refuses to Work</h4>
                  <ul className="space-y-1 text-sm ml-4">
                    <li>• Don't take it personally - investigate the why</li>
                    <li>• Offer modified assignments or break tasks into smaller steps</li>
                    <li>• Check if they need help or don't understand</li>
                    <li>• Provide wait time and space</li>
                    <li>• Follow up privately later</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Parent Communication</h4>
                  <ul className="space-y-1 text-sm ml-4">
                    <li>• Call home about positive behaviors first</li>
                    <li>• Document incidents objectively</li>
                    <li>• Focus on solutions, not blame</li>
                    <li>• Involve parents in behavior plan development</li>
                    <li>• Schedule regular check-ins</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-300 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4">💡 REMEMBER</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Consistency is key:</strong> Follow through on expectations every time</li>
                <li><strong>Relationships first:</strong> Students don't care how much you know until they know how much you care</li>
                <li><strong>Reflect and adjust:</strong> What works for one class may not work for another</li>
                <li><strong>Take care of yourself:</strong> You can't pour from an empty cup</li>
                <li><strong>Ask for help:</strong> Experienced colleagues are usually happy to share strategies</li>
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