'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import Link from 'next/link';
import Head from 'next/head';
import { MessageCircle, HelpCircle, Mail, Clock, CheckCircle2, ExternalLink } from 'lucide-react';

const metadata: Metadata = {
  title: 'Kontaktieren Sie uns | Zaza Teach - Kontakt aufnehmen',
  description: 'Kontaktieren Sie das Zaza Teach Team. Erhalten Sie Support, stellen Sie Fragen oder teilen Sie Feedback zu unseren KI-gestützten Lehrtools mit.',
  alternates: { canonical: canonical('/de/contact') },
  openGraph: { url: canonical('/de/contact'), title: 'Kontaktieren Sie uns | Zaza Teach - Kontakt aufnehmen' },
  twitter: { card: 'summary_large_image' }
};

interface ContactFormData {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  school: string;
  topic: string;
  priority: string;
  message: string;
  consent: boolean;
  marketing_opt_in: boolean;
  locale: string;
}

// Inject ContactPage JSON-LD schema
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Zaza Teach - Kontakt",
  "url": "https://zazateach.com/de/contact",
  "inLanguage": "de",
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "email": "help@zazatechnologies.com",
    "availableLanguage": ["en", "de"]
  }]
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    first_name: '',
    last_name: '',
    email: '',
    role: '',
    school: '',
    topic: '',
    priority: '',
    message: '',
    consent: false,
    marketing_opt_in: false,
    locale: 'de'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showFeatureRequestNote, setShowFeatureRequestNote] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      
      // Show feature request note if topic is Feature Request
      if (name === 'topic' && value === 'Funktionsanfrage') {
        setShowFeatureRequestNote(true);
      } else if (name === 'topic') {
        setShowFeatureRequestNote(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Fire GA4 event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'contact_form_submitted', {
          topic: formData.topic,
          priority: formData.priority,
          locale: formData.locale,
          marketing_opt_in: formData.marketing_opt_in
        });
      }

      const response = await fetch('/api/support-ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.first_name} ${formData.last_name}`,
          email: formData.email,
          role: formData.role,
          school: formData.school,
          topic: formData.topic,
          priority: formData.priority,
          message: formData.message,
          consent: formData.consent,
          marketing_opt_in: formData.marketing_opt_in,
          locale: formData.locale
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Übermittlung fehlgeschlagen');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Etwas ist schiefgelaufen');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
          />
        </Head>
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50/40 pt-24 pb-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Danke! Wir haben Ihre Nachricht erhalten und werden innerhalb von 24 Stunden antworten.
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Falls Sie sofortige Hilfe benötigen, versuchen Sie unseren Live-Chat während der Geschäftszeiten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Zurück zum Kontakt
                </button>
                <Link
                  href="/de"
                  className="inline-flex items-center justify-center bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Zur Startseite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50/40 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
              Kontakt
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Wir antworten innerhalb von 24 Stunden. Echte Menschen, klare Antworten.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
            {/* Contact Form */}
            <div className="rounded-2xl border bg-card shadow-sm p-6 sm:p-8 bg-white">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Nachricht senden
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      required
                      value={formData.first_name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Max"
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      required
                      value={formData.last_name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Mustermann"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="max.mustermann@schule.de"
                  />
                </div>

                {/* Role and School */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      Ihre Rolle *
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Wählen Sie Ihre Rolle</option>
                      <option value="Grundschullehrer/in">Grundschullehrer/in</option>
                      <option value="Weiterführende/r Lehrer/in">Weiterführende/r Lehrer/in</option>
                      <option value="Sonderpädagoge/in">Sonderpädagoge/in</option>
                      <option value="Fachbereichsleiter/in">Fachbereichsleiter/in</option>
                      <option value="Schulleitung / Administrator/in">Schulleitung / Administrator/in</option>
                      <option value="IT / Admin">IT / Admin</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                      Schule/Organisation (optional)
                    </label>
                    <input
                      type="text"
                      id="school"
                      name="school"
                      value={formData.school}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Grundschule Musterstadt"
                    />
                  </div>
                </div>

                {/* Topic */}
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                    Thema *
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    required
                    value={formData.topic}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Wobei benötigen Sie Hilfe?</option>
                    <option value="Konto & Abrechnung">Konto & Abrechnung</option>
                    <option value="Technisches Problem">Technisches Problem</option>
                    <option value="Hilfe zur Unterrichtsplanung">Hilfe zur Unterrichtsplanung</option>
                    <option value="Vertrieb & Partnerschaften">Vertrieb & Partnerschaften</option>
                    <option value="Presse & Medien">Presse & Medien</option>
                    <option value="Daten & Datenschutz">Daten & Datenschutz</option>
                    <option value="Funktionsanfrage">Funktionsanfrage</option>
                  </select>
                  
                  {showFeatureRequestNote && (
                    <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-700">
                        💡 <Link 
                          href="/de/feature-request" 
                          className="text-blue-600 hover:text-blue-800 underline font-medium"
                        >
                          Stattdessen eine Funktionsidee einreichen
                        </Link> - unser spezielles Funktionsanfrage-Formular ist gezielt für Funktionsideen und Verbesserungen entwickelt.
                      </p>
                    </div>
                  )}
                </div>

                {/* Priority */}
                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                    Priorität *
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    required
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Wie dringend ist dies?</option>
                    <option value="Niedrig">Niedrig - Allgemeine Frage</option>
                    <option value="Normal">Normal - Brauche Hilfe, aber nicht dringend</option>
                    <option value="Hoch">Hoch - Blockiert meine Arbeit</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Beschreiben Sie, wie wir Ihnen helfen können..."
                  ></textarea>
                </div>

                {/* Consent and Marketing Opt-in */}
                <div className="space-y-3">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="ml-3 text-sm text-gray-700">
                      Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                      <Link href="/de/privacy" className="text-purple-600 hover:text-purple-700 underline">
                        Datenschutzerklärung
                      </Link>
                      {' '}zu. *
                    </label>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="marketing_opt_in"
                      name="marketing_opt_in"
                      checked={formData.marketing_opt_in}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="marketing_opt_in" className="ml-3 text-sm text-gray-700">
                      Ich möchte gelegentlich Updates zu neuen Funktionen und Materialien erhalten.
                    </label>
                  </div>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>
              </form>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Get in Touch */}
              <div className="rounded-2xl border bg-card shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-white" style={{ transition: 'transform 200ms ease, box-shadow 200ms ease' }}>
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontakt aufnehmen</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">E-Mail</p>
                    <a 
                      href="mailto:help@zazatechnologies.com?subject=Zaza%20Teach%20Support"
                      className="text-purple-600 hover:text-purple-700 text-sm underline"
                    >
                      help@zazatechnologies.com
                    </a>
                    <p className="text-xs text-gray-500 mt-1">Wir antworten innerhalb von 24 Stunden.</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Live-Chat</p>
                    <p className="text-xs text-gray-500">Auf unserer Website verfügbar</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Reaktionszeit</p>
                    <p className="text-xs text-gray-500">E-Mail: innerhalb von 24 Stunden</p>
                    <p className="text-xs text-gray-500">Chat: sofort während der Geschäftszeiten</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="rounded-2xl border bg-card shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-white" style={{ transition: 'transform 200ms ease, box-shadow 200ms ease' }}>
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Häufig gestellte Fragen</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Bevor Sie uns schreiben, finden Sie die Antwort vielleicht in unseren FAQs.
                    </p>
                    <Link
                      href="/de/faqs"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Zu den FAQs
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Feature Request */}
              <div className="rounded-2xl border bg-card shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-white" style={{ transition: 'transform 200ms ease, box-shadow 200ms ease' }}>
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Sie haben eine Funktionsidee?</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Helfen Sie uns, Zaza Teach zu verbessern, indem Sie Ihre Funktionswünsche und Vorschläge teilen.
                    </p>
                    <Link
                      href="/de/feature-request"
                      className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium"
                    >
                      Funktionsanfrage senden
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}