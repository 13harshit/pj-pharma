import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown, ChevronRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage, languages } from '@/hooks/useLanguage';

interface SubMenuItem {
  label: string;
  href: string;
  children?: SubMenuItem[];
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  submenu?: SubMenuItem[];
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: t('nav.home'), href: '/' },
    {
      label: t('nav.company'),
      href: '#',
      hasDropdown: true,
      submenu: [
        { label: t('nav.about'), href: '/about' },
        { label: t('nav.certification'), href: '/certification' },
        { label: t('nav.regulatory'), href: '/regulatory' },
        { label: t('nav.innovation'), href: '/innovation' },
        { label: t('nav.quality'), href: '/quality-control' }
      ]
    },
    {
      label: t('nav.products'),
      href: '#',
      hasDropdown: true,
      submenu: [
        {
          label: t('nav.pharmaceutical'),
          href: '/products/pharmaceutical',
          children: [
            { label: 'TABLETS, CAPSULES, SYRUP', href: '/products/pharmaceutical/general' },
            { label: 'CARDIO CARE', href: '/products/pharmaceutical/cardio' },
            { label: 'INJECTIONS', href: '/products/pharmaceutical/injections' },
            { label: 'SOFT GEL CAPSULES', href: '/products/pharmaceutical/softgel' },
            { label: 'SUPPOSITORY', href: '/products/pharmaceutical/suppository' },
            { label: 'IV FLUIDS', href: '/products/pharmaceutical/iv-fluids' },
            { label: 'ANTICANCER DRUGS', href: '/products/pharmaceutical/anticancer' },
            { label: 'DIGNOSTICS KITS', href: '/products/pharmaceutical/diagnostics' },
          ]
        },
        { label: t('nav.nutraceutical'), href: '/products/nutraceutical' },
        { label: t('nav.herbal'), href: '/products/herbal' },
        { label: t('nav.foodgrains'), href: '/products/food-grains' },
        { label: t('nav.chemicals'), href: '/products/chemicals' },
        { label: t('nav.oil'), href: '/products/oil-lubricants' }
      ]
    },
    { label: t('nav.rd'), href: '/research' },
    {
      label: t('nav.facilities'),
      href: '#',
      hasDropdown: true,
      submenu: [
        { label: t('nav.manufacturing'), href: '/facilities/manufacturing' },
        { label: t('nav.export'), href: '/facilities/export' },
        { label: t('nav.sales'), href: '/facilities/sales' },
        { label: t('nav.contract'), href: '/facilities/contract' }
      ]
    },
    { label: t('nav.contact'), href: '/contact' },
  ];


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    setIsLanguageOpen(false);
  }, [location]);

  const currentLanguage = languages.find(l => l.code === language) || languages[0];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/tg-pharmz-logo.png" alt="TG PHARMZ" className="h-12 w-auto" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-500">
              TG PHARMZ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setActiveSubDropdown(null);
                }}
              >
                <Link
                  to={item.href}
                  className="flex items-center text-sm font-medium text-slate-700 hover:text-primary transition-colors py-2"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </Link>

                <AnimatePresence>
                  {activeDropdown === item.label && item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 mt-1"
                    >
                      {item.submenu.map((subItem) => (
                        <div
                          key={subItem.label}
                          className="relative"
                          onMouseEnter={() => setActiveSubDropdown(subItem.label)}
                          onMouseLeave={() => setActiveSubDropdown(null)}
                        >
                          <Link
                            to={subItem.href}
                            className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors"
                          >
                            <span>{subItem.label}</span>
                            {subItem.children && <ChevronRight className="w-4 h-4 ml-2" />}
                          </Link>

                          {/* Nested Dropdown */}
                          {subItem.children && activeSubDropdown === subItem.label && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="absolute left-full top-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 ml-1"
                            >
                              {subItem.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  className="block px-4 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Language Selector */}
            <div
              className="relative group"
              onMouseEnter={() => setIsLanguageOpen(true)}
              onMouseLeave={() => setIsLanguageOpen(false)}
            >
              <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors border border-dashed border-slate-300">
                <span className="text-lg">{currentLanguage.flag}</span>
                <span className="text-sm font-medium text-slate-700">{currentLanguage.name}</span>
                <ChevronDown className="w-4 h-4 text-slate-500 group-hover:rotate-180 transition-transform" />
              </button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 w-[600px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 mt-2 grid grid-cols-3 gap-y-3 gap-x-6 z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLanguageOpen(false);
                        }}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-50 transition-colors text-left group/lang"
                      >
                        <span className="text-2xl shadow-sm rounded-sm bg-slate-50">{lang.flag}</span>
                        <span className={`text-sm font-medium ${language === lang.code ? 'text-primary' : 'text-slate-600 group-hover/lang:text-slate-900'}`} >
                          {lang.name}
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="pl-4 pr-10 py-2 rounded-full border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm bg-slate-50 hover:bg-white w-48 transition-all focus:w-64"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Mobile menu button & Search */}
          <div className="flex lg:hidden items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-primary transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block text-slate-600 font-medium hover:text-primary transition-colors flex items-center justify-between"
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === item.label ? null : item.label);
                      }
                    }}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </Link>
                  {/* Mobile Submenu */}
                  {item.hasDropdown && item.submenu && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="pl-4 mt-2 space-y-2 border-l-2 border-slate-100"
                    >
                      {item.submenu.map((subItem) => (
                        <div key={subItem.label}>
                          <Link
                            to={subItem.href}
                            className="block text-sm text-slate-500 hover:text-primary py-1 flex items-center justify-between"
                            onClick={(e) => {
                              if (subItem.children) {
                                e.preventDefault();
                                setActiveSubDropdown(activeSubDropdown === subItem.label ? null : subItem.label);
                              }
                            }}
                          >
                            {subItem.label}
                            {subItem.children && (
                              <ChevronDown className={`w-3 h-3 transition-transform ${activeSubDropdown === subItem.label ? 'rotate-180' : ''}`} />
                            )}
                          </Link>

                          {/* Mobile Nested Submenu */}
                          {subItem.children && activeSubDropdown === subItem.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="pl-4 mt-1 space-y-1 border-l-2 border-slate-100"
                            >
                              {subItem.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  className="block text-xs text-slate-400 hover:text-primary py-1"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-slate-600 mb-4">
                  <span className="text-xl">{currentLanguage.flag}</span>
                  <span>{currentLanguage.name}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {languages.slice(0, 6).map(lang => (
                    <button key={lang.code} onClick={() => setLanguage(lang.code)} className="flex items-center gap-2 p-2 border rounded text-xs">
                      <span>{lang.flag}</span>{lang.name}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="w-full pl-4 pr-10 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
