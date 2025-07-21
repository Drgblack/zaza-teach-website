
export const metadata = {
  title: 'Zaza Teach | AI Lesson Planning for Educators',
  description: 'Plan lessons faster with Zaza Teach, the AI-powered tool for teachers. Create, customize, and share curriculum-aligned lessons in minutes.',
  openGraph: {
    title: 'Zaza Teach | AI Lesson Planning for Educators',
    description: 'Plan lessons faster with Zaza Teach, the AI-powered tool for teachers. Create, customize, and share curriculum-aligned lessons in minutes.',
    url: 'https://zazatechnologies.com/teach',
    siteName: 'Zaza Technologies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaza Teach | AI Lesson Planning for Educators',
    description: 'Plan lessons faster with Zaza Teach, the AI-powered tool for teachers. Create, customize, and share curriculum-aligned lessons in minutes.',
  },
  alternates: {
    canonical: 'https://zazatechnologies.com/teach',
  },
};

import dynamic from 'next/dynamic';
const HomePage = dynamic(() => import('./../components/HomePage'), { ssr: false });

export default function Page() {
  return <HomePage />;
}
