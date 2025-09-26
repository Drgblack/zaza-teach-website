'use client';

import PageShell from "@/components/PageShell";
import { useTranslations } from "../LocaleProvider";

export default function CookiesClient() {
  const t = useTranslations();

  return (
    <PageShell title={t('legal.cookies.pageTitle')}>
      <p><em>{t('legal.cookies.lastUpdated')}</em></p>

      <h2>{t('legal.cookies.overview.title')}</h2>
      <p>{t('legal.cookies.overview.content')}</p>

      <h2>{t('legal.cookies.whatAreCookies.title')}</h2>
      <p>{t('legal.cookies.whatAreCookies.content')}</p>

      <h2>{t('legal.cookies.essentialCookies')}</h2>
      <p>{t('legal.cookies.essentialCookiesText')}</p>
      <ul>
        <li>Authentifizierung: Benutzer-Login-Sitzungen, sichere Tokens</li>
        <li>Sicherheit: CSRF-Schutz, Anfrage-Validierung</li>
        <li>Präferenzen: Sprachauswahl, Theme-Einstellungen</li>
        <li>Session-Verwaltung: Warenkorb, Formulardaten-Persistenz</li>
      </ul>

      <h2>{t('legal.cookies.analyticsCookies')}</h2>
      <p>{t('legal.cookies.analyticsCookiesText')}</p>
      <ul>
        <li>Google Analytics: Anonyme Nutzungsstatistiken</li>
        <li>Performance-Monitoring: Seitenladezeiten, Fehlerverfolgung</li>
        <li>Feature-Nutzung: Welche Tools für Lehrer am wertvollsten sind</li>
      </ul>

      <h2>{t('legal.cookies.marketingCookies')}</h2>
      <p>{t('legal.cookies.marketingCookiesText')}</p>
      <ul>
        <li>Social Media Integrationen: Facebook, Twitter, LinkedIn</li>
        <li>Werbeverfolgung: Kampagnen-Performance, Conversion-Raten</li>
        <li>Personalisierung: Maßgeschneiderte Inhaltsempfehlungen</li>
      </ul>

      <h2>{t('legal.cookies.cookieManagement')}</h2>
      <p>{t('legal.cookies.cookieManagementText')}</p>
      <ul>
        <li>Essentielle Cookies können nicht deaktiviert werden, da sie für das Funktionieren der Website erforderlich sind</li>
        <li>Analyse- und Marketing-Cookies können ohne Beeinträchtigung der Kernfunktionalität deaktiviert werden</li>
        <li>Ihre Präferenzen werden lokal gespeichert und sitzungsübergreifend respektiert</li>
      </ul>

      <h2>{t('legal.cookies.thirdPartyCookies')}</h2>
      <p>{t('legal.cookies.thirdPartyCookiesText')}</p>
      <ul>
        <li>Google Analytics für Nutzungseinblicke</li>
        <li>Stripe für Zahlungsabwicklung</li>
        <li>Bildungsplattform-Integrationen (Google Classroom, etc.)</li>
      </ul>

      <h2>{t('legal.cookies.policyUpdates')}</h2>
      <p>{t('legal.cookies.policyUpdatesText')}</p>

      <h2>{t('legal.cookies.contactUs')}</h2>
      <p>
        {t('legal.cookies.contactUsText')} <a href="mailto:support@zazateach.com">support@zazateach.com</a>
      </p>
    </PageShell>
  );
}