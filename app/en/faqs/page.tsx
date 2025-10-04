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


export default async function FAQsPage() {
  // Get FAQ data from i18n messages for JSON-LD
  const messages = (await import('../../../src/i18n/messages/en.json')).default;
  
  const faqCategories = [
    {
      category: messages.faq.categories.gettingStarted.title,
      faqs: messages.faq.categories.gettingStarted.faqs
    },
    {
      category: messages.faq.categories.featuresAndFunctionality.title,
      faqs: messages.faq.categories.featuresAndFunctionality.faqs
    },
    {
      category: messages.faq.categories.collaborationAndSupport.title,
      faqs: messages.faq.categories.collaborationAndSupport.faqs
    },
    {
      category: messages.faq.categories.securityAndPrivacy.title,
      faqs: messages.faq.categories.securityAndPrivacy.faqs
    }
  ];

  // Flatten all FAQs for JSON-LD
  const allFaqs = faqCategories.flatMap(category => category.faqs);

  return (
    <>
      <FAQJsonLd faqs={allFaqs} />
      <FAQClient />
    </>
  );
}