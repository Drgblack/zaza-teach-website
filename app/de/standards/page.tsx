import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bildungsstandards | Zaza Teach - Unterstützte Lehrplanstandards',
  description: 'Umfassende Liste der von Zaza Teach unterstützten Bildungsstandards. Von deutschen Bildungsstandards bis zu internationalen Lehrplänen.',
  alternates: { canonical: canonical('/de/standards') },
  openGraph: { url: canonical('/de/standards'), title: 'Bildungsstandards | Zaza Teach' },
};

export default function StandardsPageDE() {
  const standardsCategories = [
    {
      title: "Deutsche Standards",
      standards: [
        {
          name: "Bildungsstandards der KMK",
          subjects: ["Mathematik", "Deutsch", "Naturwissenschaften"],
          description: "Bundesweite Standards für Mathematik, Deutsch und naturwissenschaftliche Fächer.",
          coverage: "Vollständige Abdeckung"
        },
        {
          name: "Kerncurricula der Länder",
          subjects: ["Alle Fächer"],
          description: "Lehrpläne und Kerncurricula aller 16 Bundesländer.",
          coverage: "Vollständige Abdeckung"
        },
        {
          name: "Rahmenlehrpläne",
          subjects: ["Berufliche Bildung"],
          description: "Standards für die berufliche Ausbildung und Weiterbildung.",
          coverage: "Vollständige Abdeckung"
        }
      ]
    },
    {
      title: "Internationale Standards",
      standards: [
        {
          name: "International Baccalaureate (IB)",
          subjects: ["Alle Programme"],
          description: "Primary Years, Middle Years und Diploma Programme Standards.",
          coverage: "Vollständige Abdeckung"
        },
        {
          name: "Cambridge International Curriculum",
          subjects: ["Alle Fächer"],
          description: "Cambridge Primary, Lower Secondary und Upper Secondary Programme.",
          coverage: "Vollständige Abdeckung"
        },
        {
          name: "Österreichischer Lehrplan",
          subjects: ["Alle Fächer"],
          description: "Lehrplan für österreichische Schulen vom Kindergarten bis zur Matura.",
          coverage: "Vollständige Abdeckung"
        },
        {
          name: "Schweizer Lehrplan 21",
          subjects: ["Alle Fachbereiche"],
          description: "Harmonisierter Lehrplan für die deutsche und rätoromanische Schweiz.",
          coverage: "Vollständige Abdeckung"
        }
      ]
    }
  ];

  const features = [
    {
      icon: "🎯",
      title: "Automatische Ausrichtung",
      description: "Jeder Unterrichtsplan wird automatisch an Ihre gewählten Standards mit spezifischen Standardcodes und Beschreibungen ausgerichtet."
    },
    {
      icon: "📊",
      title: "Standards-Tracking",
      description: "Verfolgen Sie, welche Standards Sie im Laufe des Jahres abgedeckt haben, mit umfassenden Berichten und Analysen."
    },
    {
      icon: "🔄",
      title: "Multi-Standard-Unterstützung",
      description: "Richten Sie Lektionen gleichzeitig an mehreren Standards aus für umfassende Abdeckung und fächerübergreifende Verbindungen."
    },
    {
      icon: "📋",
      title: "Compliance-Berichte",
      description: "Erstellen Sie detaillierte Berichte über die Standardabdeckung für administrative Überprüfungen und Lehrplanaudits."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-teal-50 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6">
              📚 Bildungsstandards
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Unterstützte Standards
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Umfassende Unterstützung für Bildungsstandards weltweit. Von deutschen Bildungsstandards bis hin zu internationalen Lehrplänen - sorgen Sie dafür, dass Ihre Lektionen alle Anforderungen mit automatischer Ausrichtung und Verfolgung erfüllen.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>50+ Standards unterstützt</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Automatische Ausrichtung</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>Echtzeit-Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Standards-Ausrichtungsfunktionen</h2>
            <p className="text-lg text-gray-600">Leistungsstarke Tools zur Gewährleistung der Lehrplan-Compliance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Standards List */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Umfassende Standards-Abdeckung</h2>
            <p className="text-lg text-gray-600">Unterstützung von Pädagogen weltweit mit lokalen und internationalen Standards</p>
          </div>
          
          {standardsCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{category.title}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {category.standards.map((standard, standardIndex) => (
                  <div key={standardIndex} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{standard.name}</h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {standard.subjects.map((subject, subjectIndex) => (
                            <span key={subjectIndex} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                        {standard.coverage}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{standard.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wie Standards-Ausrichtung funktioniert</h2>
            <p className="text-lg text-gray-600">Einfach, automatisch und umfassend</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Standards auswählen</h3>
              <p className="text-gray-600">Wählen Sie aus unserer umfassenden Liste unterstützter Bildungsstandards für Ihre Region und Klassenstufe.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lektion erstellen</h3>
              <p className="text-gray-600">Nutzen Sie unseren KI-Unterrichtsplaner, um ansprechende, lehrreiche Inhalte zu erstellen, die auf Ihre Unterrichtsziele zugeschnitten sind.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Automatische Ausrichtung</h3>
              <p className="text-gray-600">Ihre Lektion wird automatisch an relevante Standards mit spezifischen Codes und detaillierten Erklärungen ausgerichtet.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Request Standards */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ihre Standards nicht dabei?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Wir fügen ständig Unterstützung für neue Bildungsstandards hinzu. Lassen Sie uns wissen, welche Standards Sie benötigen, und wir werden sie priorisiert zu unserer Plattform hinzufügen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/de/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Standards anfordern
            </Link>
            <Link
              href="/de/features/curriculum-alignment"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Mehr über Ausrichtung erfahren
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Beginnen Sie mit der Erstellung standards-konformer Lektionen
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schließen Sie sich Tausenden von Pädagogen an, die Zaza Teach für Lehrplan-Compliance und pädagogische Exzellenz vertrauen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/de/pricing"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Standards-Ausrichtung testen
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