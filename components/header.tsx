"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Menu, X, Moon, Sun, CheckCircle } from "lucide-react"
import Link from "next/link"

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("EN")
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)

  const languages = [
    { code: "EN", label: "English", href: "/" },
    { code: "DE", label: "German", href: "/de" },
    { code: "ES", label: "Spanish", href: "/es" },
    { code: "FR", label: "French", href: "/fr" },
  ]

  const solutionsMenuRef = useRef(null)
  const learningMenuRef = useRef(null)
  const aboutMenuRef = useRef(null)

  // Initialize dark mode from localStorage and system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)

    if (newDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const solutions = [
    { name: "Zaza Teach", href: "/", comingSoon: false },
    { name: "Zaza Promptly", href: "/promptly", comingSoon: false },
  ]

  const learningCentre = [
    { name: "Blog", href: "/blog" },
    { name: "Free Resources", href: "/resources" },
    { name: "FAQs", href: "/faqs" },
  ]

  const aboutUs = [
    { name: "About the Founder", href: "/about-founder" },
    { name: "Vision & Mission", href: "/mission" },
    { name: "Zaza Product List", href: "/products" },
    { name: "Why Not Just Use ChatGPT?", href: "/why-not-chatgpt" },
    { name: "Zaza Quote Wall", href: "/quote-wall" },
    { name: "Zaza Feature Request", href: "/feature-request" },
    { name: "Support", href: "/support" },
    { name: "Contact", href: "/contact" },
  ]

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  const handleDropdownKeyDown = (e: React.KeyboardEvent, dropdown: string) => {
    if (e.key === "Enter" || e.key === " ") {
      handleDropdownToggle(dropdown)
    } else if (e.key === "ArrowDown") {
      setActiveDropdown(dropdown)
      setTimeout(() => {
        const menu =
          dropdown === "solutions"
            ? solutionsMenuRef.current
            : dropdown === "learning"
            ? learningMenuRef.current
            : aboutMenuRef.current
        if (menu) (menu.querySelector('[role="menuitem"]') as HTMLElement)?.focus()
      }, 0)
    }
  }
  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    const items = Array.from(e.currentTarget.querySelectorAll('[role="menuitem"]'))
    const idx = items.indexOf(document.activeElement)
    if (e.key === "ArrowDown") {
      e.preventDefault()
      const next = items[(idx + 1) % items.length] as HTMLElement
      next?.focus()
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      const prev = items[(idx - 1 + items.length) % items.length] as HTMLElement
      prev?.focus()
    } else if (e.key === "Escape") {
      closeDropdown()
      // Return focus to toggle
      (document.querySelector(`[aria-controls="${e.currentTarget.id}"]`) as HTMLElement)?.focus()
    }
  }

  const LanguageSwitcher = ({ isMobile = false }) => {
    const [isOpen, setIsOpen] = useState(false)
    const buttonRef = useRef(null)
    const menuRef = useRef(null)

    const currentLang = languages.find((lang) => lang.code === currentLanguage) || languages[0]

    const handleLanguageSwitcherKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        setIsOpen((open) => !open)
      } else if (e.key === "ArrowDown") {
        setIsOpen(true)
        setTimeout(() => {
          (menuRef.current?.querySelector('[role="menuitem"]') as HTMLElement)?.focus()
        }, 0)
      }
    }
    const handleLanguageMenuKeyDown = (e: React.KeyboardEvent) => {
      const items = Array.from(e.currentTarget.querySelectorAll('[role="menuitem"]'))
      const idx = items.indexOf(document.activeElement)
      if (e.key === "ArrowDown") {
        e.preventDefault()
        const next = items[(idx + 1) % items.length] as HTMLElement
        next?.focus()
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        const prev = items[(idx - 1 + items.length) % items.length] as HTMLElement
        prev?.focus()
      } else if (e.key === "Escape") {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }

    return (
      <div className={`relative ${isMobile ? "w-full" : ""}`}>
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          onBlur={(e) => {
            // Close dropdown when focus leaves the component
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setTimeout(() => setIsOpen(false), 150)
            }
          }}
          onKeyDown={handleLanguageSwitcherKeyDown}
          aria-label="Select language"
          aria-haspopup="menu"
          aria-expanded={isOpen}
          aria-controls="language-menu"
          className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium text-slate-800 dark:text-white hover:text-[#E0115F] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E0115F] focus:ring-offset-2 ${
            isMobile ? "w-full justify-center" : ""
          }`}
        >
          <span>{currentLang.code}</span>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="language-menu"
              role="menu"
              ref={menuRef}
              tabIndex={-1}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`absolute ${
                isMobile ? "left-0 right-0 top-full" : "right-0 top-full"
              } mt-2 bg-white dark:bg-[#111827] rounded-lg shadow-xl border border-gray-200/50 dark:border-gray-700/50 py-2 z-50 min-w-[120px]`}
              onKeyDown={handleLanguageMenuKeyDown}
            >
              {languages.map((lang, idx) => (
                <Link
                  key={lang.code}
                  href={lang.href}
                  onClick={() => {
                    setCurrentLanguage(lang.code)
                    setIsOpen(false)
                    if (isMobile) setMobileMenuOpen(false)
                  }}
                  role="menuitem"
                  tabIndex={0}
                  className={`flex items-center px-4 py-2 text-sm transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-800 ${
                    currentLanguage === lang.code
                      ? "text-[#E0115F] font-semibold bg-[#E0115F]/5"
                      : "text-slate-800 dark:text-white"
                  }`}
                  aria-label={`Switch to ${lang.label}`}
                >
                  <span className="mr-3">{lang.code}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{lang.label}</span>
                  {currentLanguage === lang.code && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto">
                      <CheckCircle className="h-4 w-4 text-[#E0115F]" />
                    </motion.div>
                  )}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.img
              src="/zaza_z_logo.png"
              alt="Zaza Z Logo"
              className="h-8 w-8 transition-transform group-hover:scale-105"
              whileHover={{ scale: 1.05 }}
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg?height=32&width=32&text=Z"
              }}
            />
            <span className="text-xl font-bold text-slate-800 dark:text-white group-hover:underline transition-all duration-200">
              Zaza Teach
            </span>
          </Link>

          {/* Center Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Our Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("solutions")}
                onMouseEnter={() => setActiveDropdown("solutions")}
                onKeyDown={(e) => handleDropdownKeyDown(e, "solutions")}
                aria-haspopup="menu"
                aria-expanded={activeDropdown === "solutions"}
                aria-controls="solutions-menu"
                className="flex items-center space-x-1 text-slate-800 dark:text-white hover:text-[#E0115F] transition-colors font-medium"
              >
                <span>Our Solutions</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "solutions" && (
                  <motion.div
                    id="solutions-menu"
                    role="menu"
                    tabIndex={-1}
                    ref={solutionsMenuRef}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-[#111827] rounded-lg shadow-xl border border-gray-200/50 dark:border-gray-700/50 py-2 z-50"
                    onMouseLeave={closeDropdown}
                    onKeyDown={handleMenuKeyDown}
                  >
                    {solutions.map((solution, index) => (
                      <Link
                        key={solution.name}
                        href={solution.href}
                        role="menuitem"
                        tabIndex={0}
                        className="flex items-center justify-between px-4 py-2 text-slate-800 dark:text-white hover:bg-[#E8E6F5] dark:hover:bg-gray-800 hover:text-[#E0115F] transition-colors"
                        onClick={closeDropdown}
                      >
                        <span className="font-medium">{solution.name}</span>
                        {solution.comingSoon && (
                          <Badge
                            variant="outline"
                            className="text-xs bg-[#FFD700]/20 text-[#8A2BE2] border-[#8A2BE2]/30"
                          >
                            Coming Soon
                          </Badge>
                        )}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Learning Centre Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("learning")}
                onMouseEnter={() => setActiveDropdown("learning")}
                onKeyDown={(e) => handleDropdownKeyDown(e, "learning")}
                aria-haspopup="menu"
                aria-expanded={activeDropdown === "learning"}
                aria-controls="learning-menu"
                className="flex items-center space-x-1 text-slate-800 dark:text-white hover:text-[#E0115F] transition-colors font-medium"
              >
                <span>Learning Centre</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeDropdown === "learning" ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "learning" && (
                  <motion.div
                    id="learning-menu"
                    role="menu"
                    tabIndex={-1}
                    ref={learningMenuRef}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-[#111827] rounded-lg shadow-xl border border-gray-200/50 dark:border-gray-700/50 py-2 z-50"
                    onMouseLeave={closeDropdown}
                    onKeyDown={handleMenuKeyDown}
                  >
                    {learningCentre.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-slate-800 dark:text-white hover:bg-[#E8E6F5] dark:hover:bg-gray-800 hover:text-[#E0115F] transition-colors font-medium"
                        onClick={closeDropdown}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("about")}
                onMouseEnter={() => setActiveDropdown("about")}
                onKeyDown={(e) => handleDropdownKeyDown(e, "about")}
                aria-haspopup="menu"
                aria-expanded={activeDropdown === "about"}
                aria-controls="about-menu"
                className="flex items-center space-x-1 text-slate-800 dark:text-white hover:text-[#E0115F] transition-colors font-medium"
              >
                <span>About Us</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeDropdown === "about" ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div
                    id="about-menu"
                    role="menu"
                    tabIndex={-1}
                    ref={aboutMenuRef}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-[#111827] rounded-lg shadow-xl border border-gray-200/50 dark:border-gray-700/50 py-2 z-50"
                    onMouseLeave={closeDropdown}
                    onKeyDown={handleMenuKeyDown}
                  >
                    {aboutUs.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-slate-800 dark:text-white hover:bg-[#E8E6F5] dark:hover:bg-gray-800 hover:text-[#E0115F] transition-colors font-medium"
                        onClick={closeDropdown}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Section - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/promptly">
              <Button
                variant="outline"
                className="bg-gradient-to-r from-[#E0115F] to-[#8A2BE2] hover:from-[#E0115F]/90 hover:to-[#8A2BE2]/90 text-white border-0 font-medium"
              >
                Try Zaza Promptly
              </Button>
            </Link>
            <Link href="/">
              <Button className="bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white font-medium">Try Zaza Teach</Button>
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-pressed={!!isDarkMode}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-600" />}
            </button>

            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800 dark:text-white hover:text-[#E0115F] transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200/50 dark:border-gray-700/50 py-4 space-y-4 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md"
            >
              {/* Mobile Solutions */}
              <div className="space-y-2">
                <h3 className="font-semibold text-slate-800 dark:text-white px-4">Our Solutions</h3>
                {solutions.map((solution) => (
                  <Link
                    key={solution.name}
                    href={solution.href}
                    className="flex items-center justify-between px-6 py-2 text-slate-800 dark:text-white hover:bg-[#E8E6F5] dark:hover:bg-gray-800 hover:text-[#E0115F] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{solution.name}</span>
                    {solution.comingSoon && (
                      <Badge variant="outline" className="text-xs bg-[#FFD700]/20 text-[#8A2BE2] border-[#8A2BE2]/30">
                        Coming Soon
                      </Badge>
                    )}
                  </Link>
                ))}
              </div>

              {/* Mobile Learning Centre */}
              <div className="space-y-2">
                <h3 className="font-semibold text-slate-800 dark:text-white px-4">Learning Centre</h3>
                {learningCentre.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-2 text-slate-800 dark:text-white hover:bg-[#E8E6F5] dark:hover:bg-gray-800 hover:text-[#E0115F] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile About Us */}
              <div className="space-y-2">
                <h3 className="font-semibold text-slate-800 dark:text-white px-4">About Us</h3>
                {aboutUs.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-2 text-slate-800 dark:text-white hover:bg-[#E8E6F5] dark:hover:bg-gray-800 hover:text-[#E0115F] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Buttons and Dark Mode Toggle */}
              <div className="px-4 pt-4 space-y-3 border-t border-gray-200/50 dark:border-gray-700/50">
                <Link href="/promptly" className="block">
                  <Button
                    className="w-full bg-gradient-to-r from-[#E0115F] to-[#8A2BE2] hover:from-[#E0115F]/90 hover:to-[#8A2BE2]/90 text-white font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Try Zaza Promptly
                  </Button>
                </Link>
                <Link href="/" className="block">
                  <Button
                    className="w-full bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Try Zaza Teach
                  </Button>
                </Link>

                {/* Mobile Dark Mode Toggle */}
                <div className="flex justify-center pt-2">
                  <button
                    onClick={toggleDarkMode}
                    aria-pressed={!!isDarkMode}
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Toggle dark mode"
                  >
                    {isDarkMode ? (
                      <Sun className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <Moon className="h-5 w-5 text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Language Switcher */}
              <div className="px-4 pt-2 border-t border-gray-200/50 dark:border-gray-700/50">
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2 text-center">Language</h3>
                <LanguageSwitcher isMobile={true} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
