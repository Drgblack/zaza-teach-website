import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import WhyNotChatGPTClient from './WhyNotChatGPTClient';

export const metadata: Metadata = {
  title: 'Why Teachers Trust Zaza Teach Over Generic AI | Zaza Teach',
  description: 'Generic AI tools weren\'t designed for classrooms. Discover why teachers choose Zaza Teach with its safeguards, standards, and educational expertise.',
  alternates: { canonical: canonical('/why-not-chatgpt') },
  openGraph: { url: canonical('/why-not-chatgpt'), title: 'Why Teachers Trust Zaza Teach Over Generic AI | Zaza Teach' },
  twitter: { card: 'summary_large_image' }
};

export default function WhyNotChatGPTPage() {
  return <WhyNotChatGPTClient />;
}