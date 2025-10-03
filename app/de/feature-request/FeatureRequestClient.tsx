'use client';

import { useState } from 'react';
import { Lightbulb, Settings, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  role: string;
  grade_subject: string;
  feature_title: string;
  priority: string;
  description: string;
  use_case: string;
  current_workaround: string;
  consent: boolean;
}

export default function FeatureRequestClient() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    role: '',
    grade_subject: '',
    feature_title: '',
    priority: '',
    description: '',
    use_case: '',
    current_workaround: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      const response = await fetch('/api/feature-request', {
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
        throw new Error(errorData.error || 'Failed to submit');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50/40 pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Danke! Ihre Idee ist eingegangen.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Wir melden uns, sobald wir sie geprüft haben (in der Regel innerhalb von 48 Stunden).
            </p>
            <Link
              href="/de"
              className="inline-flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Zur Startseite
            </Link>
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
            Ihre Ideen gestalten die Zukunft von Zaza Teach
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Sagen Sie uns, was Ihnen Zeit spart oder Stress reduziert. Wir nutzen Ihr Feedback, um Funktionen zu entwickeln, die Lehrkräfte wirklich brauchen.
          </p>
          <p className="text-sm text-gray-500 italic">
            Ob groß oder klein - jede Idee zählt. Viele unserer besten Funktionen begannen als Vorschläge von Lehrkräften.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl border shadow-sm p-6 sm:p-8 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Two-column fields on desktop */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
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
                  E-Mail *
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
                  Rolle *
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
                  <option value="Lehrkraft">Lehrkraft</option>
                  <option value="Schulleitung">Schulleitung</option>
                  <option value="Lehrplankoordinator">Lehrplankoordinator/in</option>
                  <option value="Pädagogische Beratung">Pädagogische Beratung</option>
                  <option value="Vertretungslehrkraft">Vertretungslehrkraft</option>
                  <option value="Sonstiges">Sonstiges</option>
                </select>
              </div>

              <div>
                <label htmlFor="grade_subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Klassenstufe / Fach
                </label>
                <input
                  type="text"
                  id="grade_subject"
                  name="grade_subject"
                  value={formData.grade_subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="z.B. 3. Klasse, Gymnasium Mathematik"
                />
              </div>
            </div>

            {/* Single-column fields */}
            <div>
              <label htmlFor="feature_title" className="block text-sm font-medium text-gray-700 mb-2">
                Feature-Titel *
              </label>
              <input
                type="text"
                id="feature_title"
                name="feature_title"
                required
                value={formData.feature_title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Kurze Beschreibung Ihrer Feature-Idee"
              />
            </div>

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
                <option value="">Wie wichtig ist das für Sie?</option>
                <option value="Low">Niedrig - Wäre schön zu haben</option>
                <option value="Medium">Mittel - Würde meinen Arbeitsablauf verbessern</option>
                <option value="High">Hoch - Würde erheblich Zeit sparen</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Detaillierte Beschreibung *
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Beschreiben Sie, was entwickelt werden soll. Was soll es tun? Wie soll es funktionieren?"
              ></textarea>
            </div>

            <div>
              <label htmlFor="use_case" className="block text-sm font-medium text-gray-700 mb-2">
                Anwendungsfall *
              </label>
              <textarea
                id="use_case"
                name="use_case"
                required
                value={formData.use_case}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Wann und wie würden Sie diese Funktion nutzen? Welches Problem löst sie?"
              ></textarea>
            </div>

            <div>
              <label htmlFor="current_workaround" className="block text-sm font-medium text-gray-700 mb-2">
                Aktuelle Lösung (Optional)
              </label>
              <textarea
                id="current_workaround"
                name="current_workaround"
                value={formData.current_workaround}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Wie handhaben Sie diese Aufgabe derzeit, falls überhaupt?"
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
                </Link>{' '}
                zu. *
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
              {isSubmitting ? 'Senden...' : 'Meine Idee senden'}
            </button>
          </form>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl border shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Was eine gute Feature-Anfrage ausmacht
              </h3>
            </div>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Seien Sie spezifisch bei dem Problem, das Sie lösen möchten</li>
              <li>• Beschreiben Sie Ihre ideale Benutzererfahrung</li>
              <li>• Erwähnen Sie den Kontext Ihrer Unterrichtssituation</li>
              <li>• Geben Sie an, wie oft Sie diese Funktion nutzen würden</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Settings className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Unser Entwicklungsprozess
              </h3>
            </div>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Ideen werden innerhalb von 48 Stunden geprüft</li>
              <li>• Beliebte Anfragen werden priorisiert</li>
              <li>• Wir erstellen Prototypen mit Lehrer-Feedback</li>
              <li>• Updates werden gesendet, wenn Features veröffentlicht werden</li>
            </ul>
          </div>
        </div>

        {/* Talk to Us CTA */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 text-center border border-indigo-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Möchten Sie Ihre Idee zuerst besprechen?
          </h3>
          <p className="text-gray-700 mb-6">
            Manchmal hilft ein kurzes Gespräch, bevor Sie eine Anfrage einreichen.
          </p>
          <Link
            href="/de/contact"
            className="inline-flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Team kontaktieren
          </Link>
        </div>
      </div>
    </div>
  );
}