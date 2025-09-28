import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'KI-Unterrichtsplaner | Zaza Teach - Intelligente Unterrichtsplanung',
  description: 'Erstellen Sie lehrplangerechte Unterrichtspläne in Minuten mit unserem KI-gestützten Unterrichtsplaner. Automatische Generierung von Aktivitäten, Bewertungen und Materialien.',
  alternates: { canonical: canonical('/de/features/ai-lesson-planner') },
  openGraph: { url: canonical('/de/features/ai-lesson-planner'), title: 'KI-Unterrichtsplaner | Zaza Teach' },
};

export default function AILessonPlannerPageDE() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">KI-Unterrichtsplaner</h1>
          <p className="text-xl text-gray-600">Transformieren Sie Ihren Unterricht mit intelligenter Unterrichtsplanung, die Stunden an Vorbereitungszeit spart</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 Intelligente Planungsfunktionen</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">✓</span>
                <div>
                  <strong>Lehrplan-Alignment:</strong> Automatische Anpassung an Bildungsstandards und internationale Lehrpläne
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">✓</span>
                <div>
                  <strong>Differenziertes Lernen:</strong> Erstellt Aktivitäten für verschiedene Lernstile und Fähigkeitsniveaus
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">✓</span>
                <div>
                  <strong>Bewertungsintegration:</strong> Enthält formative und summative Bewertungen mit Rubrics
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">✓</span>
                <div>
                  <strong>Ressourcenvorschläge:</strong> Empfiehlt Materialien, Bücher und digitale Ressourcen
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Perfekt für jeden Lehrer</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-900">Berufsanfänger</h4>
                <p className="text-blue-700 text-sm">Professionelle Unterrichtspläne vom ersten Tag an</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-900">Erfahrene Pädagogen</h4>
                <p className="text-green-700 text-sm">Bereichern Sie bestehende Lektionen mit frischen Ideen</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-purple-900">Vertretungslehrer</h4>
                <p className="text-purple-700 text-sm">Schnelle, einsatzbereite Unterrichtspläne für jedes Fach</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bereit, Ihre Unterrichtsplanung zu transformieren?</h2>
          <p className="text-gray-700 mb-6">Schließen Sie sich Tausenden von Lehrern an, die jede Woche Stunden mit KI-gestützter Unterrichtsplanung sparen</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/de/pricing" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              Kostenlose Testversion starten
            </Link>
            <Link href="/de/contact" className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors">
              Demo vereinbaren
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}