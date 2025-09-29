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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6">
              ✨ KI-gestützte Unterrichtsplanung
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              KI-Unterrichtsplaner
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Transformieren Sie Ihren Unterricht mit intelligenter Unterrichtsplanung, die Stunden an Vorbereitungszeit spart und ansprechende, lehrplangerechte Inhalte erstellt
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Intelligente Planungsfunktionen
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Lehrplan-Alignment</h3>
                    <p className="text-gray-600">Automatische Anpassung an deutsche Bildungsstandards und internationale Lehrpläne</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">🧠</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Differenziertes Lernen</h3>
                    <p className="text-gray-600">Erstellt Aktivitäten für verschiedene Lernstile und Fähigkeitsniveaus</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">📊</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Bewertungsintegration</h3>
                    <p className="text-gray-600">Enthält formative und summative Bewertungen mit detaillierten Rubrics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold">📚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ressourcenvorschläge</h3>
                    <p className="text-gray-600">Empfiehlt passende Materialien, Bücher und digitale Ressourcen</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfekt für jeden Lehrer</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2">Berufsanfänger</h4>
                  <p className="text-blue-700 text-sm">Professionelle Unterrichtspläne vom ersten Tag an</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100">
                  <h4 className="font-semibold text-green-900 mb-2">Erfahrene Pädagogen</h4>
                  <p className="text-green-700 text-sm">Bereichern Sie bestehende Lektionen mit frischen Ideen</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-100">
                  <h4 className="font-semibold text-purple-900 mb-2">Vertretungslehrer</h4>
                  <p className="text-purple-700 text-sm">Schnelle, einsatzbereite Unterrichtspläne für jedes Fach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Warum Lehrer Zaza Teach lieben</h2>
            <p className="text-lg text-gray-600">Erleben Sie den Unterschied mit KI-gestützter Unterrichtsplanung</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Zeit sparen</h3>
              <p className="text-gray-600">Reduzieren Sie die Planungszeit um bis zu 75% und verbringen Sie mehr Zeit mit dem, was wirklich zählt - dem Unterrichten.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Qualität verbessern</h3>
              <p className="text-gray-600">Erstellen Sie ansprechendere, differenziertere Lektionen, die alle Schüler zum Lernen motivieren.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Standards erfüllen</h3>
              <p className="text-gray-600">Stellen Sie sicher, dass jede Lektion die Lehrplanstandards erfüllt und compliance-ready ist.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bereit, Ihre Unterrichtsplanung zu transformieren?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schließen Sie sich Tausenden von Lehrern an, die jede Woche Stunden mit KI-gestützter Unterrichtsplanung sparen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/de/pricing"
              className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Kostenlose Testversion starten
            </Link>
            <Link
              href="/de/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Demo vereinbaren
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}