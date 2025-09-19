import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import { BreadcrumbsJsonLd } from '@/components/SEOJsonLd';

export const metadata: Metadata = {
  title: 'About | Zaza Teach - Made by Teachers, for Teachers',
  description: 'Learn about Zaza Teach\'s mission to help teachers reclaim their time and energy through AI-powered lesson planning.',
  alternates: { canonical: canonical('/about') },
  openGraph: { url: canonical('/about'), title: 'About | Zaza Teach - Made by Teachers, for Teachers' },
  twitter: { card: 'summary_large_image' }
};

const breadcrumbs = [
  { name: 'Home', item: canonical('/') },
  { name: 'About', item: canonical('/about') }
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Zaza Teach
            </h1>
            <p className="text-xl text-gray-600">
              Made by teachers, for teachers
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Zaza Teach, we believe that teaching is one of the most important professions in the world. 
              Yet teachers are often overwhelmed by administrative tasks and lesson preparation that takes away 
              from what they do best - inspiring and educating students.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to give teachers back their time, energy, and passion for teaching by providing 
              AI-powered tools that handle the heavy lifting of lesson planning, allowing educators to focus 
              on what truly matters - their students.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Zaza Teach was founded by educators who experienced firsthand the challenges of modern teaching. 
              After countless late nights spent preparing lessons and the constant struggle to balance quality 
              education with administrative demands, we knew there had to be a better way.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By combining our deep understanding of pedagogy with cutting-edge AI technology, we created 
              tools that understand what teachers need - practical, curriculum-aligned, and easily customizable 
              lesson plans that maintain the human touch education requires.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Teacher-Centered Design</h3>
                <p className="text-gray-700">Every feature is designed with real classroom needs in mind.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Privacy First</h3>
                <p className="text-gray-700">Your lesson plans and student data remain private and secure.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality Education</h3>
                <p className="text-gray-700">AI-assisted, not AI-replaced - keeping the human element in teaching.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-gray-700">Making powerful teaching tools available to educators everywhere.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="https://raw.githubusercontent.com/Drgblack/zaza-teach-website/main/public/images/founder.jpg"
                alt="Dr. Greg Blackburn"
                className="w-32 h-32 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Greg Blackburn</h3>
                <p className="text-gray-600 mb-3">Founder & CEO</p>
                <p className="text-gray-700 leading-relaxed">
                  Dr. Blackburn brings years of classroom experience and educational technology expertise 
                  to Zaza Teach. His vision is to create technology that amplifies teacher effectiveness 
                  rather than replacing the irreplaceable human connection in education.
                </p>
                <a
                  href="/about-founder"
                  className="inline-block mt-3 text-purple-600 hover:text-purple-700 font-medium"
                >
                  Read full story →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}