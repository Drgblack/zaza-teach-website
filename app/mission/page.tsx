import { Metadata } from 'next';
import { canonical } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Our Mission | Zaza Teach - Empowering Educators',
  description: 'Learn about Zaza Teach\'s mission to transform education through AI-powered tools that help teachers reclaim their time and passion.',
  alternates: { canonical: canonical('/mission') },
  openGraph: { url: canonical('/mission'), title: 'Our Mission | Zaza Teach - Empowering Educators' },
  twitter: { card: 'summary_large_image' }
};

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Mission
          </h1>
          <p className="text-xl text-gray-600">
            Empowering educators to focus on what matters most - inspiring students
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Transforming Education Through Technology
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              At Zaza Teach, we believe that teaching is one of the most important and challenging professions in the world. 
              Yet teachers are often overwhelmed by administrative tasks, endless lesson preparation, and the constant pressure 
              to balance quality education with time constraints.
            </p>

            <p className="mb-6">
              Our mission is simple but powerful: <strong>to give teachers back their time, energy, and passion for teaching</strong> 
              by providing AI-powered tools that handle the heavy lifting of lesson planning, allowing educators to focus on 
              what they do best - inspiring and educating students.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Stand For</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-3">Teacher-Centered Design</h4>
                <p className="text-purple-800">Every feature we build is designed with real classroom needs in mind, 
                informed by actual teachers and educational best practices.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">Quality Education</h4>
                <p className="text-blue-800">AI-assisted, not AI-replaced. We enhance human creativity and pedagogical 
                expertise rather than replacing the irreplaceable human connection in education.</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-3">Privacy & Security</h4>
                <p className="text-green-800">Your lesson plans, student data, and teaching methods remain private and secure. 
                We prioritize data protection and give you control over your information.</p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-3">Accessibility for All</h4>
                <p className="text-orange-800">Making powerful teaching tools available to educators everywhere, 
                regardless of school budget or technical expertise.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision for the Future</h3>
            
            <p className="mb-6">
              We envision a world where teachers can spend less time on administrative tasks and more time doing what they love: 
              teaching, mentoring, and inspiring the next generation. Where lesson planning becomes a creative collaboration 
              between human expertise and AI capabilities.
            </p>

            <p className="mb-6">
              Through Zaza Teach, we're not just creating software - we're building a movement that recognizes and supports 
              the incredible work that teachers do every day. Because when teachers thrive, students flourish, and our entire 
              society benefits.
            </p>

            <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg mt-8">
              <h4 className="font-semibold text-gray-900 mb-3">Join Our Mission</h4>
              <p className="text-gray-700 mb-4">
                Whether you're a teacher looking to reclaim your time, an administrator seeking to support your staff, 
                or an education advocate who believes in the power of technology to transform learning - we invite you 
                to join our mission.
              </p>
              <p className="text-gray-700">
                Together, we can create a future where every teacher has the tools they need to succeed, 
                and every student benefits from inspired, engaged educators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}