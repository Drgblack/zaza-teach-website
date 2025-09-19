import Link from 'next/link'
import FounderBio from '@/components/FounderBio'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About the Founder - Dr. Greg Blackburn | Zaza Teach',
  description: 'Dr. Greg Blackburn, Founder & CEO of Zaza Technologies. From Tasmanian trades to PhD at City, University of London - a career dedicated to helping teachers thrive.',
  openGraph: {
    title: 'About the Founder - Dr. Greg Blackburn | Zaza Teach',
    description: 'Education transformed Greg\'s life. Now his mission is to help teachers thrive - with empathetic, pedagogically sound AI.',
    url: 'https://zazatechnologies.com/teach/about-founder',
    siteName: 'Zaza Teach',
    type: 'website',
    images: [
      {
        url: '/images/founder/greg-blackburn-headshot.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Greg Blackburn, Founder of Zaza Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About the Founder - Dr. Greg Blackburn | Zaza Teach',
    description: 'Education transformed Greg\'s life. Now his mission is to help teachers thrive - with empathetic, pedagogically sound AI.',
    images: ['/images/founder/greg-blackburn-headshot.jpg'],
  },
  alternates: {
    canonical: 'https://zazatechnologies.com/teach/about-founder',
  },
};

export default function AboutFounderPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900">Zaza Technologies</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="/about-founder" className="text-blue-600 font-semibold">About Founder</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Founder</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Greg Blackburn brings over two decades of leadership across education, business, and technology to Zaza Technologies.
          </p>
        </div>

        {/* Founder Bio Section */}
        <section className="mb-16">
          <FounderBio variant="full" showImage={true} />
        </section>

        {/* Additional Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision for Education</h2>
            <p className="text-gray-600 mb-4">
              Dr. Blackburn's vision for Zaza Technologies stems from his deep understanding of both the challenges educators face and the transformative potential of artificial intelligence when applied thoughtfully to education.
            </p>
            <p className="text-gray-600 mb-4">
              Having spent years in classrooms, boardrooms, and research environments, he recognized that the key to meaningful educational innovation isn't just advanced technology—it's technology that truly understands and serves the needs of teachers and students.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Core Philosophy</h3>
              <p className="text-blue-800">
                "Technology should amplify human connection in education, not replace it. Our tools are designed to give teachers back their time so they can focus on what they do best—inspiring and educating students."
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Academic & Professional Journey</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-200 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Excellence</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• PhD in Professional Education, City, University of London</li>
                    <li>• MBA, University of Queensland</li>
                    <li>• First-Class Honours in Information Systems</li>
                    <li>• Published researcher in eLearning and critical thinking</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-200 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Leadership</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Chief Learning Officer at Communardo</li>
                    <li>• 6 years in corporate strategy at Telstra</li>
                    <li>• 20+ years building educational technologies</li>
                    <li>• International conference speaker</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Interested in learning more about Zaza Technologies or discussing how our tools can help your educational institution? 
              Dr. Blackburn and our team are always happy to connect with fellow educators and leaders.
            </p>
            <div className="text-center">
              <Link 
                href="/contact"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors mr-4"
              >
                Contact Us
              </Link>
              <Link 
                href="/about"
                className="inline-block px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                About Zaza Technologies
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}