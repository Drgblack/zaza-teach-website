'use client';

import { useTranslations } from '@/components/LocaleProvider';
import Link from 'next/link';
import { Clock, BookOpen, Shield, FileText, AlertTriangle, Target, CheckCircle, Users } from 'lucide-react';

export default function WhyNotChatGPTClient() {
  const t = useTranslations();

  const zazaAdvantages = [
    {
      icon: Clock,
      title: 'Zeit sparen',
      description: 'In Minuten unterrichtsfertig, ohne Prompt-Trickserei',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: BookOpen,
      title: 'Lehrplan-Ausrichtung',
      description: 'Automatisch an Standards ausgerichtet',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Sicherheit',
      description: 'Schultsichere Schutzmaßnahmen, keine Überraschungen',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileText,
      title: 'Professionelle Ausgabe',
      description: 'Polierte Formate für echte Klassenzimmer',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const genericLimitations = [
    'Erfordert ständige Anpassungen und manuelle Bearbeitungen',
    'Keine integrierten Lehrpläne oder Pädagogik',
    'Risiko von Ungenauigkeiten oder unsicheren Ausgaben',
    'Nicht auf Schulen oder Lehrkräfte zugeschnitten'
  ];

  const comparisonData = [
    {
      task: 'Unterricht erstellen',
      generic: '30+ Min. Bearbeitung',
      zaza: '2-3 Min., unterrichtsfertig'
    },
    {
      task: 'Standards-Ausrichtung',
      generic: 'Manueller Aufwand',
      zaza: 'Automatisch ausgerichtet'
    },
    {
      task: 'Ausgabe',
      generic: 'Einfacher Text, riskant',
      zaza: 'Klassenraumfertige Formate'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl">
              <Shield className="w-12 h-12 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('whyNotChatgpt.pageTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('whyNotChatgpt.subtitle')}
          </p>
        </div>

        {/* Zaza Teach Advantages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Was Zaza Teach Ihnen bietet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {zazaAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${advantage.color} rounded-xl flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Generic AI Limitations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Warum generische KI-Tools zu kurz greifen
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="w-8 h-8 text-gray-500" />
            </div>
            <ul className="space-y-3 max-w-2xl mx-auto">
              {genericLimitations.map((limitation, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <span className="text-gray-700">{limitation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Direct Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Sehen Sie den Unterschied in Minuten
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Aufgabe</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Mit generischer KI</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Mit Zaza Teach</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{item.task}</td>
                      <td className="px-6 py-4 text-gray-600">{item.generic}</td>
                      <td className="px-6 py-4 text-purple-600 font-medium">{item.zaza}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Teacher Testimonial */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <blockquote className="text-xl italic text-center text-gray-800 mb-4 leading-relaxed">
              "Ich habe mehr Zeit damit verbracht, ChatGPTs Pläne zu korrigieren, als ich gespart habe. Mit Zaza Teach fühle ich mich endlich sicher und habe die Kontrolle."
            </blockquote>
            <p className="text-center text-purple-700 font-medium">
              - Sarah M., Grundschullehrerin
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center mb-6">
              <Target className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Ihr vertrauensvoller Co-Pilot im Unterricht
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto leading-relaxed">
              Zaza Teach ist mehr als KI - es ist Ihr vertrauensvoller Co-Pilot im Unterricht. Probieren Sie es kostenlos aus und spüren Sie den Unterschied.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/de/pricing"
                className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Kostenlos testen
              </Link>
              <Link 
                href="/de/products"
                className="inline-flex items-center justify-center bg-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 transition-colors border-2 border-white/20"
              >
                Funktionen kennenlernen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}