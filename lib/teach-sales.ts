import { BillingInterval, CheckoutPlan, CurrencyCode } from '@/lib/pricing';

export const TEACH_SALES_ENABLED =
  process.env.NEXT_PUBLIC_TEACH_SALES_ENABLED === 'true';

export type MarketingLocale = 'en' | 'de';

export type EarlyAccessContext = {
  currency: CurrencyCode;
  interval: BillingInterval;
  locale: MarketingLocale;
  plan: CheckoutPlan;
  source?: string;
};

export function getEarlyAccessLabel(locale: MarketingLocale) {
  return locale === 'de' ? 'Early Access beitreten' : 'Join Early Access';
}

export function getEarlyAccessCopy(locale: MarketingLocale) {
  if (locale === 'de') {
    return {
      description:
        'Zaza Teach startet bald. Melde dich fuer den Early Access an, um als Erste:r dabei zu sein.',
      emailLabel: 'E-Mail',
      emailPlaceholder: 'deine@email.de',
      errorMessage:
        'Die Anmeldung zum Early Access konnte nicht gespeichert werden. Bitte versuche es erneut.',
      nameLabel: 'Name',
      namePlaceholder: 'Dein Name',
      reassurance:
        'Keine Zahlung noetig. Wir sagen dir Bescheid, sobald Zaza Teach bereit ist.',
      submitLabel: 'Early Access beitreten',
      submittingLabel: 'Wird gesendet...',
      successBody:
        'Danke. Wir melden uns, sobald Zaza Teach fuer Early Access bereit ist.',
      successTitle: 'Du stehst auf der Liste',
      title: 'Early Access beitreten',
    };
  }

  return {
    description:
      'Zaza Teach launches soon. Join early access to be the first to try it.',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    errorMessage:
      'We could not save your early access request. Please try again.',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    reassurance:
      'No payment needed. We’ll let you know as soon as Zaza Teach is ready.',
    submitLabel: 'Join Early Access',
    submittingLabel: 'Submitting...',
    successBody:
      'Thanks. We will reach out as soon as Zaza Teach is ready for early access.',
    successTitle: "You're on the list",
    title: 'Join Early Access',
  };
}
