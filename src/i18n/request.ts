import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Import messages statically for better Vercel compatibility
import enMessages from './messages/en.json';
import deMessages from './messages/de.json';

const messages = {
  en: enMessages,
  de: deMessages
};

// Can be imported from a shared config
const locales = ['en', 'de'] as const;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: messages[locale as keyof typeof messages] || messages.en
  };
});