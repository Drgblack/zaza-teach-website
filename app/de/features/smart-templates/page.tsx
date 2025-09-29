import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Intelligente Vorlagen | Zaza Teach - Anpassbare Unterrichtsvorlagen',
  description: 'Zugang zu Hunderten von professionell gestalteten, lehrplangerechten Unterrichtsvorlagen. Für jedes Fach und jede Klassenstufe anpassbar.',
  alternates: { canonical: canonical('/de/features/smart-templates') },
  openGraph: { url: canonical('/de/features/smart-templates'), title: 'Intelligente Vorlagen | Zaza Teach' },
};

export default function SmartTemplatesPageDE() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Intelligente Vorlagen</h1>
          <p className="text-xl text-gray-600">Professionelle Unterrichtsvorlagen, die sich an Ihren Unterrichtsstil anpassen</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Vorlagen-Bibliothek</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Fachspezifisch</h3>
              <p className="text-gray-600 text-sm">Mathematik, Naturwissenschaften, Deutsch, Sachkunde Vorlagen</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Klassenstufen-optimiert</h3>
              <p className="text-gray-600 text-sm">Vorlagen für alle Klassenstufen, entwicklungsstufengerecht</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Lehrplan-gerecht</h3>
              <p className="text-gray-600 text-sm">Standardbasierte Vorlagen für einfache Compliance</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/de/templates" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
            Vorlagen erkunden
          </Link>
        </div>
      </div>
    </div>
  );
}