import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lehrplan-Alignment | Zaza Teach - Standardbasierte Planung',
  description: 'Stellen Sie sicher, dass jede Lektion den Lehrplanstandards entspricht mit automatischem Alignment zu Bildungsstandards und internationalen Rahmenwerken.',
  alternates: { canonical: canonical('/de/features/curriculum-alignment') },
  openGraph: { url: canonical('/de/features/curriculum-alignment'), title: 'Lehrplan-Alignment | Zaza Teach' },
};

export default function CurriculumAlignmentPageDE() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Lehrplan-Alignment</h1>
          <p className="text-xl text-gray-600">Automatische Standards-Anpassung für jede Lektion, die Sie erstellen</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Deutsche Bildungsstandards</h3>
            <p className="text-gray-600 text-sm">Automatische Anpassung an deutsche Bildungsstandards für alle Fächer</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Länder-Standards</h3>
            <p className="text-gray-600 text-sm">Unterstützt alle 16 Bundesländer-Lehrpläne und -Rahmenwerke</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">🌍</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">International</h3>
            <p className="text-gray-600 text-sm">IB, Cambridge und andere internationale Lehrplan-Unterstützung</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Warum Standards wichtig sind</h2>
          <p className="text-blue-800 mb-6">Lehrplan-Alignment stellt sicher, dass Ihre Lektionen Bildungsanforderungen erfüllen und gleichzeitig akademische Strenge und Konsistenz in Ihrem Klassenzimmer bewahren.</p>
          <Link href="/de/faqs" className="text-blue-600 hover:text-blue-800 font-medium">Erfahren Sie mehr über unsere Standards →</Link>
        </div>

        <div className="text-center">
          <Link href="/de/standards" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
            Standards-Alignment testen
          </Link>
        </div>
      </div>
    </div>
  );
}