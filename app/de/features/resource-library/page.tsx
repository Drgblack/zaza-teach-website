import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ressourcen-Bibliothek | Zaza Teach - Bildungsressourcen',
  description: 'Zugang zu Tausenden von Bildungsressourcen, Arbeitsblättern und Unterrichtsmaterialien. Alle lehrplangerecht und sofort downloadbar.',
  alternates: { canonical: canonical('/de/features/resource-library') },
  openGraph: { url: canonical('/de/features/resource-library'), title: 'Ressourcen-Bibliothek | Zaza Teach' },
};

export default function ResourceLibraryPageDE() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
              📚 Ressourcen-Bibliothek
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ressourcen-Bibliothek
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Tausende von einsatzbereiten Bildungsressourcen auf Knopfdruck. Alles was Sie für effektiven Unterricht brauchen.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
        
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Was in der Bibliothek enthalten ist</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">📄</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Arbeitsblätter & Aktivitäten</h3>
                    <p className="text-gray-600">Direkt einsetzbare Arbeitsblätter und interaktive Aktivitäten für alle Fächer</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">📊</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Bewertungsraster</h3>
                    <p className="text-gray-600">Professionelle Rubrics und Bewertungshilfen für faire Benotung</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold">🎨</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Visuelle Hilfsmittel</h3>
                    <p className="text-gray-600">Poster, Diagramme und visuelle Lernhilfen für anschaulichen Unterricht</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold">🏗️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Projektideen</h3>
                    <p className="text-gray-600">Kreative Projektvorschläge für tieferes Lernen und Engagement</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schneller Zugang</h3>
              <div className="space-y-4">
                <Link href="/de/resources" className="block p-4 bg-white rounded-lg hover:shadow-md transition-all border border-blue-100">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-900">Kostenlose Ressourcen</span>
                    <span className="text-blue-600">→</span>
                  </div>
                  <p className="text-blue-700 text-sm mt-1">Sofort verfügbare Materialien</p>
                </Link>
                <Link href="/de/resources/lesson-plan-template" className="block p-4 bg-white rounded-lg hover:shadow-md transition-all border border-purple-100">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-purple-900">Unterrichtsplan-Vorlagen</span>
                    <span className="text-purple-600">→</span>
                  </div>
                  <p className="text-purple-700 text-sm mt-1">Professionelle Planungsvorlagen</p>
                </Link>
                <Link href="/de/pricing" className="block p-4 bg-white rounded-lg hover:shadow-md transition-all border border-green-100">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-green-900">Premium-Ressourcen</span>
                    <span className="text-green-600">→</span>
                  </div>
                  <p className="text-green-700 text-sm mt-1">Erweiterte Materialbibliothek</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Warum Lehrer unsere Ressourcen lieben</h2>
            <p className="text-lg text-gray-600">Von Experten kuratiert, in echten Klassenzimmern getestet</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sofort einsatzbereit</h3>
              <p className="text-gray-600">Alle Materialien sind direkt verwendbar - keine weitere Bearbeitung nötig.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lehrplan-konform</h3>
              <p className="text-gray-600">Alle Ressourcen sind an deutsche Bildungsstandards ausgerichtet.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regelmäßig aktualisiert</h3>
              <p className="text-gray-600">Neue Materialien werden wöchentlich hinzugefügt und bestehende überarbeitet.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Entdecken Sie unsere komplette Ressourcen-Bibliothek
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Tausende von hochwertigen Bildungsressourcen warten auf Sie. Starten Sie noch heute!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/de/resources"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Ressourcen durchsuchen
            </Link>
            <Link
              href="/de/pricing"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Premium freischalten
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}