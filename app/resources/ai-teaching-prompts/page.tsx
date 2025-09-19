import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Teaching Prompts Pack | Free Teaching Resources',
  description: 'Ready-to-use AI prompts for lesson planning and assessment',
};

export default function AITeachingPromptsPage() {
  return (
    <div className="min-h-screen bg-white py-12 print:py-0">
      <div className="max-w-4xl mx-auto px-4 print:px-0">
        {/* Header - hidden when printing */}
        <div className="text-center mb-8 print:hidden">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            AI Teaching Prompts Pack
          </h1>
          <p className="text-gray-600">
            Use Ctrl+P (Cmd+P on Mac) to print or save as PDF
          </p>
        </div>

        {/* Printable Content */}
        <div className="bg-white p-8 print:p-0">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">AI TEACHING PROMPTS PACK</h1>
            <p className="text-sm text-gray-600">Ready-to-use prompts for ChatGPT, Claude, and other AI tools</p>
            <p className="text-xs text-gray-500 mt-1">Free resource from Zaza Teach</p>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-lg mb-3">📝 LESSON PLANNING PROMPTS</h3>
              
              <div className="mb-4 bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Basic Lesson Plan Generator</h4>
                <p className="text-sm font-mono bg-white p-3 border rounded">
                  "Create a detailed lesson plan for [SUBJECT] for [GRADE LEVEL] students on the topic of [TOPIC]. Include learning objectives, materials needed, step-by-step activities, assessment methods, and differentiation strategies. The lesson should be [DURATION] minutes long."
                </p>
              </div>

              <div className="mb-4 bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Standards-Aligned Planning</h4>
                <p className="text-sm font-mono bg-white p-3 border rounded">
                  "Design a lesson plan that aligns with [SPECIFIC STANDARD/CURRICULUM] for [GRADE] students. The lesson should cover [TOPIC] and include measurable learning objectives, engaging activities, formative assessments, and accommodations for diverse learners."
                </p>
              </div>

              <div className="mb-4 bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Project-Based Learning</h4>
                <p className="text-sm font-mono bg-white p-3 border rounded">
                  "Create a [DURATION] project-based learning unit for [SUBJECT] focusing on [TOPIC]. Include the driving question, project phases, student roles, assessment rubric, and real-world connections. Make it appropriate for [GRADE LEVEL]."
                </p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-lg mb-3">🔍 ASSESSMENT PROMPTS</h3>
              
              <div className="mb-4 bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Quiz Creator</h4>
                <p className="text-sm font-mono bg-white p-3 border rounded">
                  "Create a 10-question quiz for [GRADE LEVEL] students on [TOPIC]. Include a mix of multiple choice (4), short answer (3), and essay questions (3). Provide an answer key with explanations."
                </p>
              </div>

              <div className="mb-4 bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Rubric Generator</h4>
                <p className="text-sm font-mono bg-white p-3 border rounded">
                  "Design a detailed rubric for assessing [ASSIGNMENT TYPE] in [SUBJECT]. Use a 4-point scale (Exemplary, Proficient, Developing, Beginning) and include criteria for [SPECIFIC SKILLS/KNOWLEDGE]. Make it clear and student-friendly."
                </p>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-lg mb-3">🎯 ENGAGEMENT PROMPTS</h3>
              
              <div className="mb-4 bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Hook Activities</h4>
                <p className="text-sm font-mono bg-white p-3 border rounded">
                  "Suggest 5 creative hook activities to introduce [TOPIC] to [GRADE LEVEL] students. Each should be 5-10 minutes, require minimal materials, and connect to students' prior knowledge or interests."
                </p>
              </div>

              <div className="mb-4 bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Interactive Activities</h4>
                <p className="text-sm font-mono bg-white p-3 border rounded">
                  "Design 3 hands-on, interactive activities for teaching [TOPIC] to [GRADE] students. Include materials needed, step-by-step instructions, and how each activity reinforces the learning objectives."
                </p>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold text-lg mb-3">💬 COMMUNICATION PROMPTS</h3>
              
              <div className="mb-4 bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Parent Email Template</h4>
                <p className="text-sm font-mono bg-white p-3 border rounded">
                  "Write a professional email to parents about [SPECIFIC SITUATION/CONCERN]. Keep the tone positive and solution-focused. Include specific examples and actionable next steps."
                </p>
              </div>

              <div className="mb-4 bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Student Feedback</h4>
                <p className="text-sm font-mono bg-white p-3 border rounded">
                  "Generate specific, constructive feedback for a [GRADE LEVEL] student's [ASSIGNMENT TYPE]. Focus on strengths, areas for improvement, and specific next steps. Use encouraging, growth-mindset language."
                </p>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-lg mb-3">🔧 DIFFERENTIATION PROMPTS</h3>
              
              <div className="mb-4 bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Learning Style Adaptations</h4>
                <p className="text-sm font-mono bg-white p-3 border rounded">
                  "Adapt this lesson on [TOPIC] for different learning styles. Provide specific modifications for visual, auditory, kinesthetic, and reading/writing learners in [GRADE LEVEL]."
                </p>
              </div>

              <div className="mb-4 bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Support for Struggling Learners</h4>
                <p className="text-sm font-mono bg-white p-3 border rounded">
                  "Suggest 5 specific strategies to support struggling learners in [SUBJECT] when learning [TOPIC]. Include scaffolding techniques, modified assignments, and alternative assessment options."
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-8">
              <h3 className="font-bold mb-2">💡 Tips for Using These Prompts</h3>
              <ul className="text-sm space-y-1">
                <li>• Replace bracketed placeholders with your specific information</li>
                <li>• Be as specific as possible for better results</li>
                <li>• Always review and adapt AI-generated content for your students</li>
                <li>• Use follow-up prompts to refine and improve responses</li>
                <li>• Test activities with a small group before full implementation</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8 text-xs text-gray-500">
            <p>Free resource from Zaza Teach • Visit zazateach.com for AI-powered lesson planning</p>
          </div>
        </div>
      </div>
    </div>
  );
}