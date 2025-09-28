'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  BookOpen, 
  Users, 
  FileText, 
  Star,
  ArrowRight,
  PlayCircle
} from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

interface NavItem {
  label: string;
  href?: string;
  children?: {
    label: string;
    href: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

const navigation: NavItem[] = [
  {
    label: 'Solutions',
    children: [
      {
        label: 'AI Lesson Planning',
        href: '/solutions/lesson-planning',
        description: 'Generate complete lessons in minutes',
        icon: <BookOpen className="w-5 h-5" />
      },
      {
        label: 'Curriculum Mapping',
        href: '/solutions/curriculum',
        description: 'Align with standards automatically',
        icon: <FileText className="w-5 h-5" />
      },
      {
        label: 'Assessment Tools',
        href: '/solutions/assessment',
        description: 'Create tests and rubrics instantly',
        icon: <Star className="w-5 h-5" />
      }
    ]
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Getting Started',
        href: '/resources/getting-started',
        description: 'Quick start guide for new users',
        icon: <PlayCircle className="w-5 h-5" />
      },
      {
        label: 'Template Library',
        href: '/resources/templates',
        description: 'Ready-to-use lesson templates',
        icon: <FileText className="w-5 h-5" />
      },
      {
        label: 'Success Stories',
        href: '/resources/case-studies',
        description: 'See how teachers save time',
        icon: <Users className="w-5 h-5" />
      }
    ]
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' }
];

function EnhancedHeaderInner() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const searchRef = useRef<HTMLInputElement>(null);

  const isActive = (href: string) => pathname === href;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to search results page
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
      if (searchOpen && !(event.target as Element).closest('.search-container')) {
        setSearchOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown, searchOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchOpen]);

  const DropdownMenu = ({ item }: { item: NavItem }) => (
    <div className="dropdown-container relative">
      <button
        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
        className="flex items-center text-gray-700 hover:text-[#66B2B2] transition-colors duration-200 font-medium"
      >
        {item.label}
        <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
          activeDropdown === item.label ? 'rotate-180' : ''
        }`} />
      </button>

      <AnimatePresence>
        {activeDropdown === item.label && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50"
          >
            {item.children?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="flex items-start p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                onClick={() => setActiveDropdown(null)}
              >
                <div className="text-[#66B2B2] mr-4 mt-1 group-hover:text-[#8A2BE2] transition-colors">
                  {child.icon}
                </div>
                <div>
                  <div className="font-medium text-gray-900 group-hover:text-[#66B2B2] transition-colors">
                    {child.label}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {child.description}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <OptimizedImage
                src="/logo.png"
                alt="Zaza Teach Logo"
                width={32}
                height={32}
                className="h-8 w-8"
                priority={true}
              />
            </motion.div>
            <span className="text-xl font-bold text-[#2C3E35] group-hover:text-[#66B2B2] transition-colors duration-200">
              Zaza Teach
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              item.children ? (
                <DropdownMenu key={item.label} item={item} />
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.href!)
                      ? 'text-[#66B2B2]'
                      : 'text-gray-700 hover:text-[#66B2B2]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="search-container relative">
              <AnimatePresence>
                {searchOpen ? (
                  <motion.form
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 300, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSearch}
                    className="flex items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-[#66B2B2] transition-colors"
                  >
                    <Search className="w-4 h-4 text-gray-400 mr-2" />
                    <input
                      ref={searchRef}
                      type="text"
                      placeholder="Search resources..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                    />
                    <button
                      type="button"
                      onClick={() => setSearchOpen(false)}
                      className="ml-2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </motion.form>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="p-2 text-gray-600 hover:text-[#66B2B2] hover:bg-gray-50 rounded-full transition-colors duration-200"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                )}
              </AnimatePresence>
            </div>

            <a
              href={`${process.env.NEXT_PUBLIC_SIGNUP_URL || 'https://app.zazateach.com/signup'}?utm_source=marketing&utm_medium=header&utm_campaign=signin`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#66B2B2] font-medium transition-colors duration-200"
            >
              Sign In
            </a>
            
            <a
              href={`${process.env.NEXT_PUBLIC_SIGNUP_URL || 'https://app.zazateach.com/signup'}?utm_source=marketing&utm_medium=header&utm_campaign=cta`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#66B2B2] hover:bg-[#66B2B2]/90 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Try Free
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-[#66B2B2] transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-100 py-4"
            >
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          className="flex items-center justify-between w-full py-2 text-gray-700 font-medium"
                        >
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-2 mt-2"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block py-2 text-gray-600 hover:text-[#66B2B2] transition-colors"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href!}
                        className={`block py-2 font-medium transition-colors duration-200 ${
                          isActive(item.href!)
                            ? 'text-[#66B2B2]'
                            : 'text-gray-700 hover:text-[#66B2B2]'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <a
                    href={`${process.env.NEXT_PUBLIC_SIGNUP_URL || 'https://app.zazateach.com/signup'}?utm_source=marketing&utm_medium=mobile_menu&utm_campaign=signin`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-gray-700 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </a>
                  <a
                    href={`${process.env.NEXT_PUBLIC_SIGNUP_URL || 'https://app.zazateach.com/signup'}?utm_source=marketing&utm_medium=mobile_menu&utm_campaign=cta`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[#66B2B2] text-white px-4 py-2 rounded-full font-medium text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Try Free
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default function EnhancedHeader() {
  return (
    <Suspense fallback={<div className="h-16 bg-white border-b border-gray-100" />}>
      <EnhancedHeaderInner />
    </Suspense>
  );
}