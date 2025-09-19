import { Metadata } from 'next'
import AboutFounderContent from './AboutFounderContent'

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
        url: '/images/founder.jpg',
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
    images: ['/images/founder.jpg'],
  },
  alternates: {
    canonical: 'https://zazatechnologies.com/teach/about-founder',
  },
};

export default function AboutFounderPage() {
  return <AboutFounderContent />
}