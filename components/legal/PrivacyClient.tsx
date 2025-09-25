'use client';

import PageShell from "@/components/PageShell";
import { useTranslations } from "../LocaleProvider";

export default function PrivacyClient() {
  const t = useTranslations();

  // Helper to safely get translation array
  const getTranslationArray = (key: string, fallback: string[] = []): string[] => {
    const result = t(key);
    return Array.isArray(result) ? result : fallback;
  };

  return (
    <PageShell title={t('legal.privacy.pageTitle')}>
      <p><em>{t('legal.privacy.lastUpdated')}</em></p>

      <h2>{t('legal.privacy.overview.title')}</h2>
      <p>{t('legal.privacy.overview.content')}</p>

      <h2>{t('legal.privacy.accountInfo.title')}</h2>
      <p>{t('legal.privacy.accountInfo.content')}</p>

      <h2>{t('legal.privacy.usageData.title')}</h2>
      <p>{t('legal.privacy.usageData.content')}</p>

      <h2>{t('legal.privacy.studentData.title')}</h2>
      <p>{t('legal.privacy.studentData.content')}</p>

      <h2>{t('legal.privacy.communication.title')}</h2>
      <p>{t('legal.privacy.communication.content')}</p>

      <h2>{t('legal.privacy.dataStorage.title')}</h2>
      <ul>
        {getTranslationArray('legal.privacy.dataStorage.items').map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>{t('legal.privacy.cookies.title')}</h2>
      <p>{t('legal.privacy.cookies.content')}</p>

      <h2>{t('legal.privacy.thirdParty.title')}</h2>
      <p>{t('legal.privacy.thirdParty.content')}</p>

      <h2>{t('legal.privacy.dataRetention.title')}</h2>
      <ul>
        {getTranslationArray('legal.privacy.dataRetention.items').map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>{t('legal.privacy.yourRights.title')}</h2>
      <p>{t('legal.privacy.yourRights.intro')}</p>
      <ul>
        {getTranslationArray('legal.privacy.yourRights.items').map((item, index) => (
          <li key={index}><strong>{item}</strong></li>
        ))}
      </ul>

      <h2>{t('legal.privacy.internationalTransfers.title')}</h2>
      <p>{t('legal.privacy.internationalTransfers.content')}</p>

      <h2>{t('legal.privacy.childrensPrivacy.title')}</h2>
      <p>{t('legal.privacy.childrensPrivacy.content')}</p>

      <h2>{t('legal.privacy.policyChanges.title')}</h2>
      <p>{t('legal.privacy.policyChanges.content')}</p>

      <h2>{t('legal.privacy.contact.title')}</h2>
      <p>{t('legal.privacy.contact.intro')}</p>
      <ul>
        <li>Email: <a href={`mailto:${t('legal.privacy.contact.email')}`}>{t('legal.privacy.contact.email')}</a></li>
        <li>Address: {t('legal.privacy.contact.address')}</li>
      </ul>

      <h2>{t('legal.privacy.dataController.title')}</h2>
      <p>
        {t('legal.privacy.dataController.company')}<br/>
        {t('legal.privacy.dataController.address')}
      </p>
    </PageShell>
  );
}