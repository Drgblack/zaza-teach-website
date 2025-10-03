'use client';

import { useState } from 'react';
import { useTranslations } from '@/components/LocaleProvider';
import Link from 'next/link';
import { MessageCircle, HelpCircle, Search, Lightbulb, Settings, Users, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

interface SupportFormData {
  name: string;
  email: string;
  role: string;
  school: string;
  topic: string;
  priority: string;
  message: string;
  consent: boolean;
}

export default function SupportClient() {
  const t = useTranslations();
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState<SupportFormData>({
    name: '',
    email: '',
    role: '',
    school: '',
    topic: '',
    priority: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/support-ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          locale: 'de'
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Übermittlung fehlgeschlagen');
      }

      setIsSubmitted(true);
      setShowContactForm(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Etwas ist schiefgelaufen');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqItems = [
    {
      question: "Wie fange ich mit Zaza Teach an?",
      answer: "Besuchen Sie einfach unsere Startseite und klicken Sie auf 'Zaza Teach kostenlos testen'. Sie können sofort mit der Erstellung von Unterrichtsplänen beginnen, ohne dass eine Einrichtung erforderlich ist."
    },
    {
      question: "Sind meine Unterrichtsplandaten sicher und privat?",
      answer: "Ja, absolut. Wir sind FERPA- und COPPA-konform. Ihre Unterrichtspläne und Daten bleiben privat und werden niemals zur Schulung unserer KI-Modelle verwendet."
    },
    {
      question: "Kann ich meine Unterrichtspläne exportieren?",
      answer: "Ja! Sie können Ihre Unterrichtspläne als Word-Dokumente oder PDF-Dateien exportieren, um sie einfach zu drucken und mit Kollegen zu teilen."
    },
    {
      question: "Welche Lehrplanstandards unterstützt Zaza Teach?",
      answer: "Wir unterstützen Common Core State Standards, staatsspezifische Standards und internationale Lehrpläne. Unsere KI richtet Unterrichtsstunden automatisch an Ihren ausgewählten Standards aus."
    },
    {
      question: "Was kostet Zaza Teach?",
      answer: "Wir bieten eine kostenlose Stufe für den Einstieg, mit Premium-Funktionen über unsere Abonnement-Pläne. Besuchen Sie unsere Preisseite für detaillierte Informationen."
    }
  ];

  const filteredFaqItems = faqItems.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const supportCategories = [
    {
      title: "Erste Schritte",
      icon: Lightbulb,
      description: "Neu bei Zaza Teach? Lernen Sie die Grundlagen",
      links: [
        { name: "Schnellstart-Anleitung", href: "/de/blog" },
        { name: "Video-Tutorials", href: "/de/blog" },
        { name: "Konto-Einrichtung", href: "/de/contact" }
      ]
    },
    {
      title: "Unterrichtsplanung",
      icon: Settings,
      description: "Meistern Sie die KI-gestützte Planung",
      links: [
        { name: "Ihre erste Unterrichtsstunde erstellen", href: "/de/blog" },
        { name: "Lehrplan-Ausrichtung", href: "/de/blog" },
        { name: "Anpassungstipps", href: "/de/blog" }
      ]
    },
    {
      title: "Technische Hilfe",
      icon: Settings,
      description: "Fehlerbehebung und technische Probleme",
      links: [
        { name: "Browser-Anforderungen", href: "/de/blog" },
        { name: "Export-Probleme", href: "/de/contact" },
        { name: "Performance-Tipps", href: "/de/blog" }
      ]
    },
    {
      title: "Konto & Abrechnung",
      icon: Users,
      description: "Verwalten Sie Ihr Konto und Abonnement",
      links: [
        { name: "Rechnungsinformationen", href: "/de/pricing" },
        { name: "Upgrade/Downgrade", href: "/de/pricing" },
        { name: "Kontoeinstellungen", href: "/de/contact" }
      ]
    },
    {
      title: "Systemstatus",
      icon: Settings,
      description: "Service-Status und Updates prüfen",
      links: [
        { name: "Aktueller Status", href: "https://status.zazateach.com" },
        { name: "Incident-Verlauf", href: "https://status.zazateach.com" },
        { name: "Wartungsplan", href: "https://status.zazateach.com" }
      ]
    },
    {
      title: "Daten & Datenschutz",
      icon: Users,
      description: "Datenschutz und Datenschutzkontrollen",
      links: [
        { name: "Datenschutzerklärung", href: "/de/privacy" },
        { name: "Betroffenenrechte", href: "/de/privacy" },
        { name: "Datenschutz-Team kontaktieren", href: "/de/contact" }
      ]
    }
  ];

  if (isSubmitted) {
    return (
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
                Zurück zum Support
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
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50/40 pt-24 pb-12">
      <div className="max-w-3xl md:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            Support Center
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Schnelle Hilfe von echten Menschen. Die meisten E-Mails werden innerhalb von 24 Stunden beantwortet.
          </p>
        </div>

        {/* Action Bar */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 mb-12 border border-indigo-100">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowContactForm(!showContactForm)}
                className="inline-flex items-center justify-center bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Support kontaktieren
              </button>
              <button
                className="inline-flex items-center justify-center border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                disabled={!process.env.NEXT_PUBLIC_CHAT_ENABLED}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Live Chat
              </button>
              <Link
                href="/de/faqs"
                className="inline-flex items-center justify-center text-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                Alle FAQs durchsuchen
              </Link>
            </div>
          </div>
        </div>

        {/* Inline Contact Form */}
        {showContactForm && (
          <div className="bg-white rounded-2xl border shadow-sm p-6 sm:p-8 mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Support kontaktieren</h2>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                {showContactForm ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Two-column fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ihr Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

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
                    placeholder="ihre.email@schule.de"
                  />
                </div>
              </div>

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
                    Schule (optional)
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Name Ihrer Schule"
                  />
                </div>
              </div>

              {/* Single-column fields */}
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
                  <option value="Hilfe bei der Unterrichtsplanung">Hilfe bei der Unterrichtsplanung</option>
                  <option value="Feature-Anfrage">Feature-Anfrage</option>
                  <option value="Daten & Datenschutz">Daten & Datenschutz</option>
                </select>
              </div>

              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                  Priorität / Dringlichkeit *
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
                  placeholder="Bitte beschreiben Sie Ihr Problem oder Ihre Frage ausführlich..."
                ></textarea>
              </div>

              {/* Consent Checkbox */}
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
        )}

        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {supportCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white rounded-2xl border shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-indigo-600" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-purple-600 hover:text-purple-800 text-sm transition-colors"
                      >
                        {link.name} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl border shadow-sm p-6 sm:p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Häufig gestellte Fragen
          </h2>
          
          {/* Search Input */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Support-Themen oder FAQs durchsuchen…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-6">
            {filteredFaqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
          
          {filteredFaqItems.length === 0 && searchQuery && (
            <div className="text-center py-8">
              <p className="text-gray-500">Keine FAQs gefunden, die Ihrer Suche entsprechen.</p>
            </div>
          )}
          
          <div className="text-center mt-8">
            <Link
              href="/de/faqs"
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              Alle FAQs anzeigen →
            </Link>
          </div>
        </div>

        {/* Support Hours */}
        <div className="bg-white rounded-2xl border shadow-sm p-6 sm:p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Support-Zeiten
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">E-Mail</p>
              <p className="text-gray-700">24/7 Annahme, Antworten innerhalb von 24 Stunden.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">Live Chat</p>
              <p className="text-gray-700">Montag–Freitag, 9–18 Uhr (Ihre Zeitzone).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}