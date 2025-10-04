"use client";

import { useState, useMemo } from 'react';
import { ChevronDown, Search, MessageCircle, Book, Shield, Users, UserCheck } from 'lucide-react';
import { useTranslations } from '../../../components/LocaleProvider';

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
  faqCategories?: FAQCategory[];
}

const FAQItem = ({ faq, isOpen, onClick, itemId, searchTerm, highlightText }: { 
  faq: FAQ, 
  isOpen: boolean, 
  onClick: () => void, 
  itemId: string,
  searchTerm: string,
  highlightText: (text: string, searchTerm: string) => string
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className="transition-all duration-200">
      <button
        onClick={onClick}
        onKeyDown={handleKeyDown}
        className="w-full px-6 py-5 text-left bg-white hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset transition-colors duration-200 flex items-start justify-between group"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${itemId}`}
        id={`faq-question-${itemId}`}
      >
        <h3 
          className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-purple-700 transition-colors"
          dangerouslySetInnerHTML={{ __html: highlightText(faq.q, searchTerm) }}
        />
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-all duration-300 flex-shrink-0 mt-1 group-hover:text-purple-600 ${
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
        <div className="px-6 pb-6 bg-gray-50">
          <div 
            className="text-gray-700 leading-relaxed prose prose-sm max-w-none prose-a:text-purple-600 prose-a:hover:text-purple-800 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: highlightText(faq.a, searchTerm) }}
          />
        </div>
      </div>
    </div>
  );
};

export default function FAQClient({ faqCategories: propCategories }: FAQClientProps) {
  const t = useTranslations();
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Get FAQ categories from i18n if not provided as props
  const faqCategories = useMemo(() => {
    if (propCategories) return propCategories;
    
    return [
      {
        category: t('faq.categories.gettingStarted.title'),
        icon: 'Book',
        color: 'purple',
        faqs: t('faq.categories.gettingStarted.faqs') || []
      },
      {
        category: t('faq.categories.featuresAndFunctionality.title'),
        icon: 'MessageCircle', 
        color: 'blue',
        faqs: t('faq.categories.featuresAndFunctionality.faqs') || []
      },
      {
        category: t('faq.categories.collaborationAndSupport.title'),
        icon: 'Users',
        color: 'green', 
        faqs: t('faq.categories.collaborationAndSupport.faqs') || []
      },
      {
        category: t('faq.categories.securityAndPrivacy.title'),
        icon: 'Shield',
        color: 'orange',
        faqs: t('faq.categories.securityAndPrivacy.faqs') || []
      }
    ].filter(category => category.faqs.length > 0);
  }, [t, propCategories]);

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

  const filteredCategories = useMemo(() => {
    return faqCategories.map(category => ({
      ...category,
      faqs: category.faqs.filter(faq => {
        const searchLower = searchTerm.toLowerCase();
        return faq.q.toLowerCase().includes(searchLower) ||
               faq.a.toLowerCase().includes(searchLower);
      })
    })).filter(category => category.faqs.length > 0);
  }, [faqCategories, searchTerm]);

  // Helper function to highlight search terms
  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm.trim()) return text;
    
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 text-yellow-900 rounded px-1">$1</mark>');
  };

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
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t('faq.pageTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('faq.subtitle')} 
            <a href="/en/contact" className="text-purple-600 hover:text-purple-800 font-medium ml-1">
              {t('faq.contactSupport')}
            </a>
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('faq.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-lg"
            />
          </div>
        </div>

        {/* Category Quick Access */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {faqCategories.map((category, index) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <button 
                key={index}
                className={`p-6 rounded-xl border-2 transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                  activeCategory === category.category 
                    ? getColorClasses(category.color) + ' shadow-md'
                    : 'bg-white border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                }`}
                onClick={() => setActiveCategory(activeCategory === category.category ? null : category.category)}
                aria-pressed={activeCategory === category.category}
              >
                <Icon className={`w-8 h-8 mb-3 mx-auto ${
                  activeCategory === category.category ? '' : 'text-gray-600'
                }`} />
                <h3 className={`font-semibold text-sm mb-1 ${
                  activeCategory === category.category ? '' : 'text-gray-900'
                }`}>
                  {category.category}
                </h3>
                <p className={`text-xs ${
                  activeCategory === category.category ? 'opacity-80' : 'text-gray-500'
                }`}>
                  {category.faqs.length} {category.faqs.length === 1 ? t('faq.question') : t('faq.questions')}
                </p>
              </button>
            );
          })}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {(activeCategory 
            ? filteredCategories.filter(cat => cat.category === activeCategory)
            : filteredCategories
          ).map((category, categoryIndex) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            const actualCategoryIndex = faqCategories.findIndex(cat => cat.category === category.category);
            
            return (
              <div key={category.category} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${getColorClasses(category.color)}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {category.category}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {category.faqs.length} {category.faqs.length === 1 ? t('faq.question') : t('faq.questions')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="divide-y divide-gray-100">
                  {category.faqs.map((faq, faqIndex) => (
                    <FAQItem
                      key={faqIndex}
                      faq={faq}
                      isOpen={openItems.has(`${actualCategoryIndex}-${faqIndex}`)}
                      onClick={() => toggleItem(actualCategoryIndex, faqIndex)}
                      itemId={`${actualCategoryIndex}-${faqIndex}`}
                      searchTerm={searchTerm}
                      highlightText={highlightText}
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
            <div className="text-gray-300 mb-6">
              <Search className="w-20 h-20 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('faq.noResults.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('faq.noResults.description')}
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              {t('faq.noResults.clearSearch')}
            </button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            {t('faq.stillHaveQuestions.title')}
          </h3>
          <p className="text-lg mb-6 opacity-90">
            {t('faq.stillHaveQuestions.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/en/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('faq.stillHaveQuestions.contactSupport')}
            </a>
            <a
              href="/en/support"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              {t('faq.stillHaveQuestions.visitHelpCenter')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}