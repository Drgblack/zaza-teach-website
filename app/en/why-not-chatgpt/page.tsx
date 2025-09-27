import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import WhyNotChatGPTClient from './WhyNotChatGPTClient';

export const metadata: Metadata = {
  title: 'Why Not ChatGPT? | Zaza Teach - Built for Educators',
  description: 'Discover why Zaza Teach is purpose-built for teachers, offering curriculum alignment, educational expertise, and privacy that generic AI tools lack.',
  alternates: { canonical: canonical('/why-not-chatgpt') },
  openGraph: { url: canonical('/why-not-chatgpt'), title: 'Why Not ChatGPT? | Zaza Teach - Built for Educators' },
  twitter: { card: 'summary_large_image' }
};

export default function WhyNotChatGPTPage() {
  return <WhyNotChatGPTClient />;
}