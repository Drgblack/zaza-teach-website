"use client";

import { useState } from 'react';
import { ChevronDown, Search, MessageCircle, Book, Shield, Users, UserCheck } from 'lucide-react';

const iconMap = {
  Book,
  MessageCircle,
  Users,
  Shield,
  UserCheck
};

interface FAQ {
  q: string;
  a: string;
}

interface FAQCategory {
  category: string;
  icon: string;
  color: string;
  faqs: FAQ[];
}

interface FAQClientProps {
  faqCategories: FAQCategory[];
}

const FAQItem = ({ faq, isOpen, onClick, itemId }: { faq: FAQ, isOpen: boolean, onClick: () => void, itemId: string }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        onClick={onClick}
        onKeyDown={handleKeyDown}
        className="w-full px-6 py-5 text-left bg-white hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors duration-200 flex items-center justify-between"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${itemId}`}
        id={`faq-question-${itemId}`}
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">
          {faq.q}
        </h3>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      <div 
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        id={`faq-answer-${itemId}`}
        role="region"
        aria-labelledby={`faq-question-${itemId}`}
      >
        <div className="px-6 pb-5 bg-gray-50">
          <div 
            className="text-gray-700 leading-relaxed prose prose-sm max-w-none prose-a:text-purple-600 prose-a:hover:text-purple-800 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: faq.a }}
          />
        </div>
      </div>
    </div>
  );
};

export default function FAQClient({ faqCategories }: FAQClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleItem = (categoryIndex: number, faqIndex: number) => {
    const itemId = `${categoryIndex}-${faqIndex}`;
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      newOpenItems.add(itemId);
    }
    setOpenItems(newOpenItems);
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'bg-purple-100 text-purple-800 border-purple-200',
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      green: 'bg-green-100 text-green-800 border-green-200',
      orange: 'bg-orange-100 text-orange-800 border-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Häufig gestellte Fragen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alles, was Sie über Zaza Teach wissen müssen. Können Sie nicht finden, was Sie suchen? 
            <a href="/de/contact" className="text-purple-600 hover:text-purple-800 font-medium ml-1">
              Kontaktieren Sie unser Support-Team
            </a>
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="FAQs durchsuchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-lg"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {faqCategories.map((category, index) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <div 
                key={index}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  activeCategory === category.category 
                    ? getColorClasses(category.color)
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveCategory(activeCategory === category.category ? null : category.category)}
              >
                <Icon className={`w-6 h-6 mb-2 ${
                  activeCategory === category.category ? '' : 'text-gray-600'
                }`} />
                <h3 className={`font-semibold text-sm ${
                  activeCategory === category.category ? '' : 'text-gray-900'
                }`}>
                  {category.category}
                </h3>
                <p className={`text-xs ${
                  activeCategory === category.category ? 'opacity-80' : 'text-gray-500'
                }`}>
                  {category.faqs.length} Fragen
                </p>
              </div>
            );
          })}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {(activeCategory 
            ? filteredCategories.filter(cat => cat.category === activeCategory)
            : filteredCategories
          ).map((category, categoryIndex) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            const actualCategoryIndex = faqCategories.findIndex(cat => cat.category === category.category);
            
            return (
              <div key={category.category} className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${getColorClasses(category.color)}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {category.category}
                    </h2>
                    <p className="text-gray-600">
                      {category.faqs.length} Frage{category.faqs.length !== 1 ? 'n' : ''}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.faqs.map((faq, faqIndex) => (
                    <FAQItem
                      key={faqIndex}
                      faq={faq}
                      isOpen={openItems.has(`${actualCategoryIndex}-${faqIndex}`)}
                      onClick={() => toggleItem(actualCategoryIndex, faqIndex)}
                      itemId={`${actualCategoryIndex}-${faqIndex}`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Keine Ergebnisse gefunden
            </h3>
            <p className="text-gray-600 mb-6">
              Versuchen Sie andere Suchbegriffe oder durchsuchen Sie unsere Kategorien oben.
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Suche löschen
            </button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Haben Sie noch Fragen?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Unser Support-Team hilft Ihnen gerne dabei, das Beste aus Zaza Teach herauszuholen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/de/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Support kontaktieren
            </a>
            <a
              href="/de/support"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Hilfe-Center besuchen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}