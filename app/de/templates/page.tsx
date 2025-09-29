import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Unterrichtsvorlagen | Zaza Teach - Einsatzbereite Vorlagen',
  description: 'Durchsuchen Sie unsere Sammlung professioneller Unterrichtsvorlagen. Anpassbare Vorlagen für alle Fächer und Klassenstufen.',
  alternates: { canonical: canonical('/de/templates') },
  openGraph: { url: canonical('/de/templates'), title: 'Unterrichtsvorlagen | Zaza Teach' },
};

export default function TemplatesPageDE() {
  const templateCategories = [
    {
      title: "Grundschule (1-4)",
      description: "Altersgerechte Vorlagen für junge Lernende",
      templates: [
        { name: "Mathematik Problemlösung", subject: "Mathematik", time: "45 min", level: "1-2" },
        { name: "Leseverständnis", subject: "Deutsch", time: "30 min", level: "3-4" },
        { name: "Naturwissenschaft Entdeckung", subject: "Sachkunde", time: "60 min", level: "1-4" },
        { name: "Heimatkunde Gemeinschaft", subject: "Sachkunde", time: "45 min", level: "1-3" }
      ]
    },
    {
      title: "Sekundarstufe I (5-10)",
      description: "Ansprechende Vorlagen für heranwachsende Schüler",
      templates: [
        { name: "Algebra Grundlagen", subject: "Mathematik", time: "50 min", level: "6-8" },
        { name: "Kreatives Schreiben", subject: "Deutsch", time: "45 min", level: "6-8" },
        { name: "Biologie Labor", subject: "Biologie", time: "90 min", level: "7-8" },
        { name: "Weltkulturen", subject: "Geschichte", time: "55 min", level: "6-8" }
      ]
    },
    {
      title: "Sekundarstufe II (11-13)",
      description: "Fortgeschrittene Vorlagen für kritisches Denken",
      templates: [
        { name: "Analysis Mathematik", subject: "Mathematik", time: "55 min", level: "11-12" },
        { name: "Literaturanalyse", subject: "Deutsch", time: "50 min", level: "9-12" },
        { name: "Chemie Labor", subject: "Chemie", time: "90 min", level: "11-12" },
        { name: "Politik & Gesellschaft", subject: "Sozialkunde", time: "50 min", level: "9-12" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
              📚 Unterrichtsvorlagen
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Einsatzbereite Vorlagen
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Professionelle Unterrichtsvorlagen, die von Pädagogen für Pädagogen entwickelt wurden. Sparen Sie Zeit und sorgen Sie für Konsistenz in all Ihren Stunden.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/de/pricing" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Premium-Vorlagen erhalten
              </Link>
              <Link href="/de/contact" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Individuelle Vorlage anfordern
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {templateCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-lg text-gray-600">{category.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.templates.map((template, templateIndex) => (
                  <div key={templateIndex} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{template.name}</h3>
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {template.subject}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Dauer:</span>
                        <span className="font-medium">{template.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Klassenstufe:</span>
                        <span className="font-medium">{template.level}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Link 
                        href="/de/pricing" 
                        className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                      >
                        Vorlage ansehen
                      </Link>
                      <button className="w-full text-purple-600 text-center py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                        In Bibliothek speichern
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Warum Lehrer unsere Vorlagen lieben</h2>
            <p className="text-lg text-gray-600">Von Pädagogen entwickelt, in echten Klassenzimmern getestet</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Zeitsparend</h3>
              <p className="text-gray-600">Reduzieren Sie die Unterrichtsplanungszeit um 75% mit vorstrukturierten Vorlagen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Standards-gerecht</h3>
              <p className="text-gray-600">Jede Vorlage ist an Lehrplanstandards und Lernzielen ausgerichtet</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vollständig anpassbar</h3>
              <p className="text-gray-600">Passen Sie jede Vorlage an Ihren Unterrichtsstil und Ihre Schülerbedürfnisse an</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bereit, Stunden an Planungszeit zu sparen?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Greifen Sie auf unsere komplette Bibliothek von Unterrichtsvorlagen zu und starten Sie noch heute intelligenter zu unterrichten.
          </p>
          <Link
            href="/de/pricing"
            className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Alle Vorlagen erhalten
          </Link>
        </div>
      </div>
    </div>
  );
}