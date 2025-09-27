import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import { FAQJsonLd } from '@/components/SEOJsonLd';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Zaza Teach',
  description: 'Find answers to common questions about Zaza Teach, our AI lesson planning tool for educators.',
  alternates: { canonical: canonical('/faqs') },
  openGraph: { url: canonical('/faqs'), title: 'Frequently Asked Questions | Zaza Teach' },
  twitter: { card: 'summary_large_image' }
};

const faqCategories = [
  {
    category: 'Getting Started',
    icon: 'Book',
    color: 'purple',
    faqs: [
      {
        q: 'What is Zaza Teach?',
        a: 'Zaza Teach is an AI-powered lesson planning tool that helps teachers create curriculum-aligned lessons in minutes, with export options to Word and PDF.'
      },
      {
        q: 'How does Zaza Teach work?',
        a: 'Simply input your learning objectives, grade level, and subject area. Our AI will generate a complete lesson plan that you can customize and export.'
      },
      {
        q: 'Is Zaza Teach free to use?',
        a: 'Yes, Zaza Teach offers a free tier that includes basic lesson planning features. Premium features are available with our paid plans.'
      },
      {
        q: 'Do I need special software to use Zaza Teach?',
        a: 'No, Zaza Teach is a web-based application that works in any modern browser. No downloads or installations required.'
      }
    ]
  },
  {
    category: 'Features & Functionality',
    icon: 'MessageCircle',
    color: 'blue',
    faqs: [
      {
        q: 'What grade levels does Zaza Teach support?',
        a: 'Zaza Teach supports all grade levels from elementary through high school, with content adapted for each age group.'
      },
      {
        q: 'Can I export my lesson plans?',
        a: 'Yes, you can export your lesson plans to Word documents or PDF files for easy printing and sharing.'
      },
      {
        q: 'What subjects does Zaza Teach cover?',
        a: 'Zaza Teach covers all major subjects including Math, Science, English Language Arts, Social Studies, and more.'
      },
      {
        q: 'Can I customize the generated lesson plans?',
        a: 'Absolutely! All lesson plans are fully customizable, allowing you to modify content, activities, and assessments as needed.'
      },
      {
        q: 'How accurate are the AI-generated lesson plans?',
        a: 'Our AI is trained on educational best practices and curriculum standards to ensure high-quality, accurate lesson plans.'
      },
      {
        q: 'What languages does Zaza Teach support?',
        a: 'Zaza Teach is available in English, German, French, Spanish, and Italian, with more languages coming soon.'
      }
    ]
  },
  {
    category: 'Collaboration & Support',
    icon: 'Users',
    color: 'green',
    faqs: [
      {
        q: 'Can I collaborate with other teachers?',
        a: 'Yes, Zaza Teach includes collaboration features that allow you to share lesson plans and work together with colleagues.'
      },
      {
        q: 'Can I use Zaza Teach for homeschooling?',
        a: 'Yes, Zaza Teach is perfect for homeschool educators who want structured, curriculum-aligned lesson plans.'
      },
      {
        q: 'What support is available if I need help?',
        a: 'We offer comprehensive support including documentation, video tutorials, and direct customer support through our help center.'
      },
      {
        q: 'Can I integrate Zaza Teach with my school\'s LMS?',
        a: 'We are working on integrations with popular Learning Management Systems. Contact us for current integration options.'
      }
    ]
  },
  {
    category: 'Security & Privacy',
    icon: 'Shield',
    color: 'orange',
    faqs: [
      {
        q: 'Is my data secure with Zaza Teach?',
        a: 'Absolutely. We prioritize data security and privacy, with robust encryption and strict data protection policies.'
      },
      {
        q: 'How often is Zaza Teach updated?',
        a: 'We continuously improve Zaza Teach with regular updates, new features, and enhanced AI capabilities based on user feedback.'
      }
    ]
  },
  {
    category: 'About Zaza & the Founder',
    icon: 'UserCheck',
    color: 'purple',
    faqs: [
      {
        q: 'Who is behind Zaza Teach, and why should educators trust it?',
        a: 'Zaza Teach is led by <strong>Dr. Greg Blackburn</strong>, an education and learning-technology specialist with over 20 years\' experience. Greg holds a PhD in Professional Education (City, University of London), an MBA (University of Queensland), and a Bachelor of Information Systems (Honours) (University of Tasmania). He has published research on critical thinking and student-centred e-learning and currently serves as Chief Learning Officer at Communardo in Germany.<br><br>Zaza is built on a pedagogy-first approach: privacy-respecting design, human-in-the-loop controls, transparent AI prompts, and curriculum-aligned outputs. Our goal is simple-help teachers thrive by saving time without compromising professional quality.<br><br>Learn more on our <a href="/about">About page</a> and see how we handle data on our <a href="/privacy">Privacy page</a>.'
      }
    ]
  }
];

export default function FAQsPage() {
  // Flatten all FAQs for JSON-LD
  const allFaqs = faqCategories.flatMap(category => category.faqs);

  return (
    <>
      <FAQJsonLd faqs={allFaqs} />
      <FAQClient faqCategories={faqCategories} />
    </>
  );
}