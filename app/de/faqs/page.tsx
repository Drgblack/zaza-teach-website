import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import { FAQJsonLd } from '@/components/SEOJsonLd';
import FAQClient from '@/components/FAQClient';

export const metadata: Metadata = {
  title: 'Häufig gestellte Fragen | Zaza Teach',
  description: 'Finden Sie Antworten auf häufige Fragen zu Zaza Teach, unserem KI-gestützten Unterrichtsplanungs-Tool für Pädagogen.',
  alternates: { canonical: canonical('/de/faqs') },
  openGraph: { url: canonical('/de/faqs'), title: 'Häufig gestellte Fragen | Zaza Teach' },
  twitter: { card: 'summary_large_image' }
};

// German FAQ data for JSON-LD
const faqCategories = [
  {
    category: 'Erste Schritte',
    faqs: [
      {
        q: 'Was ist Zaza Teach?',
        a: 'Zaza Teach ist ein KI-gestütztes Unterrichtsplanungs-Tool, das Lehrern hilft, lehrplangerechte Lektionen in Minuten zu erstellen, mit Export-Optionen zu Word und PDF.'
      },
      {
        q: 'Wie funktioniert Zaza Teach?',
        a: 'Geben Sie einfach Ihre Lernziele, Klassenstufe und das Fachgebiet ein. Unsere KI generiert einen vollständigen Unterrichtsplan, den Sie anpassen und exportieren können.'
      },
      {
        q: 'Ist Zaza Teach kostenlos nutzbar?',
        a: 'Ja, Zaza Teach bietet eine kostenlose Version mit grundlegenden Unterrichtsplanungsfunktionen. Premium-Funktionen sind mit unseren kostenpflichtigen Plänen verfügbar.'
      },
      {
        q: 'Benötige ich spezielle Software für Zaza Teach?',
        a: 'Nein, Zaza Teach ist eine webbasierte Anwendung, die in jedem modernen Browser funktioniert. Keine Downloads oder Installationen erforderlich.'
      }
    ]
  },
  {
    category: 'Funktionen & Features',
    faqs: [
      {
        q: 'Welche Klassenstufen unterstützt Zaza Teach?',
        a: 'Zaza Teach unterstützt alle Klassenstufen von der Grundschule bis zur Oberstufe, mit für jede Altersgruppe angepassten Inhalten.'
      },
      {
        q: 'Kann ich meine Unterrichtspläne exportieren?',
        a: 'Ja, Sie können Ihre Unterrichtspläne als Word-Dokumente oder PDF-Dateien exportieren für einfaches Drucken und Teilen.'
      },
      {
        q: 'Welche Fächer deckt Zaza Teach ab?',
        a: 'Zaza Teach deckt alle Hauptfächer ab, einschließlich Mathematik, Naturwissenschaften, Deutsch, Sozialwissenschaften und mehr.'
      },
      {
        q: 'Kann ich die generierten Unterrichtspläne anpassen?',
        a: 'Absolut! Alle Unterrichtspläne sind vollständig anpassbar, sodass Sie Inhalte, Aktivitäten und Bewertungen nach Bedarf ändern können.'
      },
      {
        q: 'Wie genau sind die KI-generierten Unterrichtspläne?',
        a: 'Unsere KI ist auf bewährte pädagogische Praktiken und Lehrplanstandards trainiert, um hochwertige, genaue Unterrichtspläne zu gewährleisten.'
      },
      {
        q: 'Welche Sprachen unterstützt Zaza Teach?',
        a: 'Zaza Teach ist auf Englisch, Deutsch, Französisch, Spanisch und Italienisch verfügbar, weitere Sprachen folgen bald.'
      }
    ]
  },
  {
    category: 'Zusammenarbeit & Support',
    faqs: [
      {
        q: 'Kann ich mit anderen Lehrern zusammenarbeiten?',
        a: 'Ja, Zaza Teach bietet Kollaborationsfunktionen, mit denen Sie Unterrichtspläne teilen und mit Kollegen zusammenarbeiten können.'
      },
      {
        q: 'Kann ich Zaza Teach für Homeschooling verwenden?',
        a: 'Ja, Zaza Teach ist perfekt für Homeschool-Pädagogen, die strukturierte, lehrplangerechte Unterrichtspläne möchten.'
      },
      {
        q: 'Welcher Support ist verfügbar, wenn ich Hilfe brauche?',
        a: 'Wir bieten umfassenden Support einschließlich Dokumentation, Video-Tutorials und direkten Kundensupport über unser Hilfe-Center.'
      },
      {
        q: 'Kann ich Zaza Teach in das LMS meiner Schule integrieren?',
        a: 'Wir arbeiten an Integrationen mit beliebten Lernmanagementsystemen. Kontaktieren Sie uns für aktuelle Integrationsoptionen.'
      }
    ]
  },
  {
    category: 'Sicherheit & Datenschutz',
    faqs: [
      {
        q: 'Sind meine Daten bei Zaza Teach sicher?',
        a: 'Absolut. Wir priorisieren Datensicherheit und Datenschutz mit robusten Verschlüsselungs- und strengen Datenschutzrichtlinien.'
      },
      {
        q: 'Wie oft wird Zaza Teach aktualisiert?',
        a: 'Wir verbessern Zaza Teach kontinuierlich mit regelmäßigen Updates, neuen Funktionen und erweiterten KI-Fähigkeiten basierend auf Nutzerfeedback.'
      }
    ]
  },
  {
    category: 'Über Zaza & den Gründer',
    faqs: [
      {
        q: 'Wer steckt hinter Zaza Teach - und warum können Lehrkräfte der Lösung vertrauen?',
        a: 'Zaza Teach wird von Dr. Greg Blackburn geleitet, einem Spezialisten für Bildung und Learning Technologies mit über 20 Jahren Erfahrung. Greg hat einen PhD in Professional Education (City, University of London), einen MBA (University of Queensland) und einen Bachelor of Information Systems (Honours) (University of Tasmania). Er hat zu kritischem Denken und lernendenzentriertem E-Learning publiziert und ist derzeit Chief Learning Officer bei Communardo in Deutschland. Zaza folgt einem Didaktik-zuerst-Ansatz: datenschutzfreundliches Design, human-in-the-loop-Kontrollen, transparente AI-Prompts und lehrplan-konforme Ergebnisse. Unser Ziel ist klar - Lehrkräften Zeit zurückgeben, ohne die professionelle Qualität zu gefährden.'
      }
    ]
  }
];

export default function FAQsPage() {
  // Flatten all FAQs for JSON-LD
  const allFaqs = faqCategories.flatMap(category => category.faqs);

  return (
    <>
      <FAQJsonLd faqs={allFaqs} />
      <FAQClient />
    </>
  );
}