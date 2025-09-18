import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import { BreadcrumbsJsonLd } from '@/components/SEOJsonLd';

export const metadata: Metadata = {
  title: 'Blog | Zaza Teach - Teaching Tips & AI Education Insights',
  description: 'Discover teaching strategies, AI education insights, lesson planning tips, and classroom management advice from Zaza Teach.',
  alternates: { canonical: canonical('/blog') },
  openGraph: { url: canonical('/blog'), title: 'Blog | Zaza Teach - Teaching Tips & AI Education Insights' },
  twitter: { card: 'summary_large_image' }
};

const breadcrumbs = [
  { name: 'Home', item: canonical('/') },
  { name: 'Blog', item: canonical('/blog') }
];

const blogPosts = [
  {
    title: 'How AI Can Transform Your Lesson Planning',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way teachers create and customize lesson plans.',
    date: 'January 15, 2025',
    readTime: '5 min read',
    category: 'AI in Education',
    slug: 'ai-transform-lesson-planning'
  },
  {
    title: '5 Time-Saving Tips for Busy Teachers',
    excerpt: 'Practical strategies to reclaim your time and reduce the stress of lesson preparation.',
    date: 'January 10, 2025',
    readTime: '4 min read',
    category: 'Teaching Tips',
    slug: 'time-saving-tips-busy-teachers'
  },
  {
    title: 'Creating Engaging Activities for Different Learning Styles',
    excerpt: 'Learn how to design activities that cater to visual, auditory, and kinesthetic learners.',
    date: 'January 5, 2025',
    readTime: '6 min read',
    category: 'Classroom Strategies',
    slug: 'engaging-activities-learning-styles'
  },
  {
    title: 'The Future of Education Technology',
    excerpt: 'Exploring emerging trends in EdTech and what they mean for teachers and students.',
    date: 'December 30, 2024',
    readTime: '7 min read',
    category: 'EdTech Trends',
    slug: 'future-education-technology'
  },
  {
    title: 'Building Student Engagement in Digital Classrooms',
    excerpt: 'Strategies for maintaining student attention and participation in online and hybrid learning environments.',
    date: 'December 25, 2024',
    readTime: '5 min read',
    category: 'Digital Learning',
    slug: 'student-engagement-digital-classrooms'
  },
  {
    title: 'Assessment Strategies That Actually Work',
    excerpt: 'Move beyond traditional testing with these innovative assessment approaches that benefit both teachers and students.',
    date: 'December 20, 2024',
    readTime: '6 min read',
    category: 'Assessment',
    slug: 'assessment-strategies-that-work'
  }
];

const categories = ['All', 'AI in Education', 'Teaching Tips', 'Classroom Strategies', 'EdTech Trends', 'Digital Learning', 'Assessment'];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Teaching Insights & Tips
            </h1>
            <p className="text-xl text-gray-600">
              Expert advice, teaching strategies, and insights into the future of education
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="text-center mt-16 p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              More Content Coming Soon
            </h3>
            <p className="text-gray-600 mb-6">
              We're working on bringing you more valuable insights and teaching resources. 
              Individual blog posts will be available soon!
            </p>
            <a
              href="/resources"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
            >
              Explore Resources
            </a>
          </div>
        </div>
      </div>
    </>
  );
}