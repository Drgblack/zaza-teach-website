'use client';

import PageShell from "@/components/PageShell";
import { useTranslations } from "../LocaleProvider";

export default function TermsClient() {
  const t = useTranslations();

  // Helper to safely get translation array
  const getTranslationArray = (key: string, fallback: string[] = []): string[] => {
    const result = t(key);
    return Array.isArray(result) ? result : fallback;
  };

  return (
    <PageShell title={t('legal.terms.pageTitle')}>
      <p><em>{t('legal.terms.lastUpdated')}</em></p>

      <h2>{t('legal.terms.overview.title')}</h2>
      <p>{t('legal.terms.overview.content')}</p>

      <h2>{t('legal.terms.acceptance.title')}</h2>
      <p>{t('legal.terms.acceptance.content')}</p>

      <h2>{t('legal.terms.serviceDescription')}</h2>
      <p>{t('legal.terms.serviceDescriptionText')}</p>

      <h2>{t('legal.terms.userAccount')}</h2>
      <p>{t('legal.terms.userAccountText')}</p>

      <h2>{t('legal.terms.acceptableUse')}</h2>
      <p>{t('legal.terms.acceptableUseText')}</p>
      <ul>
        {getTranslationArray('legal.terms.acceptableUseItems').map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>{t('legal.terms.intellectualProperty')}</h2>
      <p>{t('legal.terms.intellectualPropertyText')}</p>

      <h2>{t('legal.terms.termination')}</h2>
      <p>{t('legal.terms.terminationText')}</p>

      <h2>{t('legal.terms.contact')}</h2>
      <p>
        {t('legal.terms.contactText')} <a href="mailto:support@zazateach.com">support@zazateach.com</a>
      </p>
    </PageShell>
  );
}