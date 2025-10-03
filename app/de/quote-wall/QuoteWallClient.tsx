'use client';

import { Quote, Users } from 'lucide-react';
import Link from 'next/link';

const QuoteCard = ({ quote, isHero = false }: { quote: any; isHero?: boolean }) => {
  const cardClasses = isHero 
    ? "bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 p-6 sm:p-8 md:col-span-2 border border-gray-100"
    : "bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 p-6 sm:p-8 border border-gray-100";

  return (
    <div className={cardClasses}>
      <div className="mb-4">
        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
          <Quote className="w-5 h-5 text-indigo-600" aria-hidden="true" />
        </div>
        <p className={`text-gray-700 italic leading-relaxed ${isHero ? 'text-xl' : 'text-lg'}`}>
          „{quote.text}"
        </p>
      </div>
      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold text-gray-900">{quote.author}</p>
        <p className="text-sm text-purple-600">{quote.role}</p>
        {quote.school && <p className="text-sm text-gray-500">{quote.school}</p>}
      </div>
    </div>
  );
};

export default function QuoteWallClient() {
  const heroQuote = {
    text: "Zum ersten Mal seit Jahren konnte ich am Sonntagabend mit meiner Familie essen, anstatt Unterrichtsstunden vorzubereiten. Zaza Teach hat mir meine Wochenenden zurückgegeben.",
    author: "Sarah M.",
    role: "Lehrerin, 6. Klasse",
    school: ""
  };

  const quotes = [
    {
      text: "Ich habe endlich das Gefühl, dass Unterrichten wieder nachhaltig ist. Ich kann mich auf meine Schülerinnen und Schüler konzentrieren, ohne ständig von Büroarbeit erdrückt zu werden.",
      author: "David Thompson",
      role: "Lehrerin an einer weiterführenden Schule",
      school: "Westfield Academy"
    },
    {
      text: "Zaza Teach hat meinen Ansatz zur Unterrichtsplanung völlig verändert. Was früher Stunden gedauert hat, dauert jetzt nur noch Minuten, und die Qualität ist durchgängig hervorragend.",
      author: "Sarah Johnson",
      role: "Lehrerin 5. Klasse",
      school: "Lincoln Grundschule"
    },
    {
      text: "Die Lehrplan-Ausrichtungsfunktion ist bahnbrechend. Ich weiß, dass jede Unterrichtsstunde die staatlichen Standards erfüllt, ohne alles manuell überprüfen zu müssen.",
      author: "Michael Chen",
      role: "Gymnasiallehrer für Naturwissenschaften",
      school: "Roosevelt Gymnasium"
    },
    {
      text: "Als neue Lehrerin gab mir Zaza Teach Vertrauen in meine Unterrichtsplanung. Die KI versteht pädagogische Best Practices besser als erwartet.",
      author: "Emily Rodriguez",
      role: "Lehrerin 2. Klasse",
      school: "Maple Valley Grundschule"
    },
    {
      text: "Die differenzierten Unterrichtsoptionen haben mir geholfen, jeden Schüler in meinem vielfältigen Klassenzimmer zu erreichen. Zaza Teach versteht wirklich Bildung.",
      author: "Lisa Patel",
      role: "Sonderpädagogin",
      school: "Harmony Inklusive Akademie"
    },
    {
      text: "Ich war skeptisch gegenüber KI in der Bildung, aber Zaza Teach hat mich eines Besseren belehrt. Es verstärkt mein Unterrichten, anstatt meine Expertise zu ersetzen.",
      author: "Robert Martinez",
      role: "Geschichtslehrer",
      school: "Jefferson Gymnasium"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50/40 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            Lehrerinnen und Lehrer sparen jede Woche Stunden mit Zaza Teach
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Echte Geschichten von Pädagoginnen und Pädagogen, die Stress reduziert, ihr Gleichgewicht zurückgewonnen und wieder mehr Freude am Unterrichten gefunden haben.
          </p>
        </div>

        {/* Hero Quote */}
        <div className="mb-12">
          <QuoteCard quote={heroQuote} isHero={true} />
        </div>

        {/* Regular Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {quotes.map((quote, index) => (
            <QuoteCard key={index} quote={quote} />
          ))}
        </div>

        {/* Community CTA */}
        <div className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-2xl p-8 sm:p-12 text-center border border-purple-200/50">
          <div className="flex justify-center mb-6">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Schließen Sie sich über 1.000 Pädagoginnen und Pädagogen an, die mit Zaza Teach bereits erfolgreich sind
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Bereit, jede Woche Stunden zu sparen und mehr Freude am Unterrichten zu finden? Schließen Sie sich Tausenden von Pädagogen an, die ihre Unterrichtsplanung bereits transformiert haben.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/de"
              className="inline-flex items-center justify-center bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              data-analytics="quote_wall_try_free"
            >
              Zaza Teach kostenlos testen
            </Link>
            <Link
              href="/de/contact"
              className="inline-flex items-center justify-center bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              data-analytics="quote_wall_share_story"
            >
              Eigene Erfahrung teilen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}