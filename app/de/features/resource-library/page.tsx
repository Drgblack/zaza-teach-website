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
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ressourcen-Bibliothek</h1>
          <p className="text-xl text-gray-600">Tausende von einsatzbereiten Bildungsressourcen auf Knopfdruck</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📖 Was enthalten ist</h2>
            <ul className="space-y-3">
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Arbeitsblätter & Aktivitäten</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Bewertungsraster</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Visuelle Hilfsmittel & Poster</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Projektideen</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Hausaufgaben-Vorlagen</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">🎯 Schneller Zugang</h2>
            <div className="space-y-3">
              <Link href="/de/resources" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <span className="font-medium text-blue-900">Kostenlose Ressourcen durchsuchen →</span>
              </Link>
              <Link href="/de/resources/lesson-plan-template" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <span className="font-medium text-purple-900">Unterrichtsplan-Vorlagen →</span>
              </Link>
              <Link href="/de/pricing" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <span className="font-medium text-green-900">Premium-Ressourcen →</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/de/resources" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
            Ressourcen-Bibliothek erkunden
          </Link>
        </div>
      </div>
    </div>
  );
}