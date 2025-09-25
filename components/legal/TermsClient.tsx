'use client';

import PageShell from "@/components/PageShell";
import { useTranslations } from "../LocaleProvider";

export default function TermsClient() {
  const t = useTranslations();

  return (
    <PageShell title={t('legal.terms.pageTitle')}>
      <p><em>{t('legal.terms.lastUpdated')}</em></p>

      <h2>{t('legal.terms.overview.title')}</h2>
      <p>{t('legal.terms.overview.content')}</p>

      <h2>{t('legal.terms.acceptance.title')}</h2>
      <p>{t('legal.terms.acceptance.content')}</p>

      <h2>Service Description</h2>
      <p>
        Zaza Teach provides AI-powered lesson planning tools and educational resources for teachers and
        educational institutions. Our service includes lesson plan generation, curriculum alignment,
        and educational content management.
      </p>

      <h2>User Account</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account credentials and for all
        activities that occur under your account. Notify us immediately of any unauthorized use.
      </p>

      <h2>Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the service for any unlawful purpose or in violation of these Terms</li>
        <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
        <li>Interfere with or disrupt the service or servers connected to the service</li>
        <li>Upload content that infringes intellectual property rights</li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>
        You retain ownership of content you create. We retain rights to our platform, algorithms,
        and generated content templates. You grant us license to use your content to provide the service.
      </p>

      <h2>Termination</h2>
      <p>
        Either party may terminate this agreement at any time. Upon termination, your access will cease
        but these Terms will continue to apply to your prior use of the service.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about these terms, contact us at: <a href="mailto:support@zazateach.com">support@zazateach.com</a>
      </p>
    </PageShell>
  );
}