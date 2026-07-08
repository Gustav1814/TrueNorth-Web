import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Logo } from './Logo';
import { PageId } from '../types';
import { Menu, X, ChevronDown, ChevronUp, Quote, Mail, PhoneCall } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'industries' | 'company' | 'resources' | null>(null);
  
  // Mobile accordions state
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside clicks
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const toggleDropdown = (dropdown: 'industries' | 'company' | 'resources') => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const dropdownMotion = {
    initial: { opacity: 0, y: 10, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 8, scale: 0.98 },
    transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
  };

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  if (currentPage === 'home') {
    return (
      <>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-3 focus:font-sans focus:font-bold focus:text-brand-navy focus:shadow-saas-lg"
        >
          Skip to main content
        </a>

        <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 text-white sm:px-6">
          <div className="mx-auto flex h-[4.5rem] max-w-[96rem] items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#02070D]/86 px-5 shadow-[0_22px_70px_rgba(0,0,0,0.36)] backdrop-blur-xl sm:px-8">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="group shrink-0 transition-transform hover:scale-[1.01]"
              aria-label="True North Mattress Supply home"
            >
              <span className="flex h-12 w-28 items-center justify-center overflow-hidden rounded-sm bg-white px-2 sm:h-14 sm:w-36">
                <img
                  src="/images/true-north-full-logo.svg"
                  alt="True North Mattress Supply"
                  className="h-full w-full object-contain"
                />
              </span>
            </button>

            <nav className="hidden items-center gap-8 lg:flex">
              <button type="button" onClick={() => handleNavClick('products')} className="text-xs font-black uppercase tracking-[0.18em] text-white/76 transition-colors hover:text-white">
                Products
              </button>
              <button type="button" onClick={() => handleNavClick('resources')} className="text-xs font-black uppercase tracking-[0.18em] text-white/76 transition-colors hover:text-white">
                Resources
              </button>
              <button type="button" onClick={() => document.getElementById('sectors')?.scrollIntoView({ behavior: 'smooth' })} className="text-xs font-black uppercase tracking-[0.18em] text-white/76 transition-colors hover:text-white">
                Sectors
              </button>
              <button type="button" onClick={() => handleNavClick('contact')} className="text-xs font-black uppercase tracking-[0.18em] text-white/76 transition-colors hover:text-white">
                Company
              </button>
            </nav>

            <button
              type="button"
              onClick={() => handleNavClick('quote')}
              className="hidden rounded-full bg-brand-red px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#B91622] sm:inline-flex"
            >
              Contact Us
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="justify-self-end border border-white/14 bg-white/[0.04] p-3 text-white backdrop-blur-md lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </header>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-[90] bg-[#02070D]/96 px-6 py-7 text-white lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start justify-between">
                <span className="font-condensed text-3xl font-black uppercase leading-none text-white/84">
                  True North
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="border border-white/14 p-3"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-14 grid gap-5 font-condensed text-4xl font-black uppercase leading-none">
                <button type="button" onClick={() => handleNavClick('products')} className="text-left text-white/84">
                  Products
                </button>
                <button type="button" onClick={() => handleNavClick('resources')} className="text-left text-white/84">
                  Resources
                </button>
                <button type="button" onClick={() => handleNavClick('quote')} className="text-left text-brand-red">
                  Request Quote
                </button>
                <button type="button" onClick={() => handleNavClick('contact')} className="text-left text-white/84">
                  Contacts
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:text-brand-navy focus:px-4 focus:py-3 focus:rounded-sm focus:shadow-saas-lg focus:font-sans focus:font-bold"
      >
        Skip to main content
      </a>

      {/* Top operational strip */}
      <div className="relative z-50 overflow-hidden border-b border-white/10 bg-brand-deep text-white">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/80 to-transparent" />
        <div className="mx-auto flex min-h-10 max-w-[92rem] items-center justify-between gap-3 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] sm:px-8 lg:px-10">
          <div className="flex min-w-0 items-center gap-3">
            <span className="h-2 w-2 shrink-0 bg-brand-red" />
            <span className="truncate">Canada-wide institutional mattress supply</span>
          </div>

          <div className="hidden items-center gap-2 text-white/72 xl:flex">
            <span className="border border-white/12 bg-white/[0.06] px-3 py-1">Bulk Orders</span>
            <span className="border border-white/12 bg-white/[0.06] px-3 py-1">Spec Docs</span>
            <span className="border border-white/12 bg-white/[0.06] px-3 py-1">Freight Desk</span>
          </div>

          <div className="flex shrink-0 items-center gap-4 tracking-[0.12em]">
            <a href="tel:18005557878" className="flex items-center gap-1.5 transition-colors hover:text-brand-surface">
              <PhoneCall className="h-3.5 w-3.5 text-brand-red" />
              <span className="hidden sm:inline">1-800-555-TRUE</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a href="mailto:procurement@truenorthmattress.ca" className="hidden items-center gap-1.5 transition-colors hover:text-brand-surface md:flex">
              <Mail className="h-3.5 w-3.5 text-brand-red" />
              <span>Procurement Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-brand-border/80 z-40 shadow-saas-sm">
        <div ref={dropdownRef} className="relative max-w-[92rem] mx-auto px-4 sm:px-8 lg:px-10 h-24 flex items-center justify-between gap-3">
          
          {/* Logo */}
          <Logo variant="horizontal" onClick={() => handleNavClick('home')} className="ml-16 min-w-0 sm:ml-0" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-9 font-sans">
            <button
              onClick={() => handleNavClick('home')}
              className={`relative py-8 text-base uppercase font-bold tracking-wider hover:text-brand-red transition-colors after:absolute after:left-0 after:right-0 after:bottom-6 after:h-0.5 after:origin-left after:bg-brand-red after:transition-transform ${
                currentPage === 'home' ? 'text-brand-red' : 'text-brand-navy'
              } ${currentPage === 'home' ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`}
            >
              Home
            </button>

            {/* Industries Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('industries')}
                className={`flex items-center gap-1.5 text-base uppercase font-bold tracking-wider hover:text-brand-red transition-colors ${
                  activeDropdown === 'industries' || ['shelters', 'summer-camps', 'university-housing', 'hospitals', 'correctional-facilities', 'industrial-camps'].includes(currentPage)
                    ? 'text-brand-red'
                    : 'text-brand-navy'
                }`}
              >
                Industries
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
              {activeDropdown === 'industries' && (
                <motion.div {...dropdownMotion} className="absolute top-full left-0 mt-4 w-72 bg-white border border-brand-border shadow-saas-lg rounded-sm py-3 z-50">
                  <div className="px-5 py-2 text-xs font-sans font-extrabold tracking-widest text-brand-gray uppercase border-b border-brand-border/40 mb-1">
                    Procurement Sectors
                  </div>
                  <button
                    onClick={() => handleNavClick('shelters')}
                    className="w-full text-left px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-navy hover:bg-brand-surface hover:text-brand-red transition-all"
                  >
                    Shelters
                  </button>
                  <button
                    onClick={() => handleNavClick('summer-camps')}
                    className="w-full text-left px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-navy hover:bg-brand-surface hover:text-brand-red transition-all"
                  >
                    Summer Camps
                  </button>
                  <button
                    onClick={() => handleNavClick('university-housing')}
                    className="w-full text-left px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-navy hover:bg-brand-surface hover:text-brand-red transition-all"
                  >
                    University Housing
                  </button>
                  <button
                    onClick={() => handleNavClick('hospitals')}
                    className="w-full text-left px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-navy hover:bg-brand-surface hover:text-brand-red transition-all"
                  >
                    Hospitals
                  </button>
                  <button
                    onClick={() => handleNavClick('correctional-facilities')}
                    className="w-full text-left px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-navy hover:bg-brand-surface hover:text-brand-red transition-all"
                  >
                    Correctional Facilities
                  </button>
                  <button
                    onClick={() => handleNavClick('industrial-camps')}
                    className="w-full text-left px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-navy hover:bg-brand-surface hover:text-brand-red transition-all"
                  >
                    Industrial Camps
                  </button>
                </motion.div>
              )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNavClick('products')}
              className={`relative py-8 text-base uppercase font-bold tracking-wider hover:text-brand-red transition-colors after:absolute after:left-0 after:right-0 after:bottom-6 after:h-0.5 after:origin-left after:bg-brand-red after:transition-transform ${
                currentPage === 'products' ? 'text-brand-red' : 'text-brand-navy'
              } ${currentPage === 'products' ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`}
            >
              Products
            </button>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('company')}
                className={`flex items-center gap-1.5 text-base uppercase font-bold tracking-wider hover:text-brand-red transition-colors ${
                  activeDropdown === 'company' || ['about', 'quality', 'delivery'].includes(currentPage)
                    ? 'text-brand-red'
                    : 'text-brand-navy'
                }`}
              >
                Company
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
              {activeDropdown === 'company' && (
                <motion.div {...dropdownMotion} className="absolute top-full left-0 mt-4 w-72 bg-white border border-brand-border shadow-saas-lg rounded-sm py-3 z-50">
                  <div className="px-5 py-2 text-xs font-sans font-extrabold tracking-widest text-brand-gray uppercase border-b border-brand-border/40 mb-1">
                    About True North
                  </div>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-navy hover:bg-brand-surface hover:text-brand-red transition-all"
                  >
                    About True North
                  </button>
                  <button
                    onClick={() => handleNavClick('quality')}
                    className="w-full text-left px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-navy hover:bg-brand-surface hover:text-brand-red transition-all"
                  >
                    Quality & Compliance
                  </button>
                  <button
                    onClick={() => handleNavClick('delivery')}
                    className="w-full text-left px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-navy hover:bg-brand-surface hover:text-brand-red transition-all"
                  >
                    Delivery & Service
                  </button>
                </motion.div>
              )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('resources')}
                className={`flex items-center gap-1.5 text-base uppercase font-bold tracking-wider hover:text-brand-red transition-colors ${
                  activeDropdown === 'resources' || currentPage === 'resources'
                    ? 'text-brand-red'
                    : 'text-brand-navy'
                }`}
              >
                Resources
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
              {activeDropdown === 'resources' && (
                <motion.div {...dropdownMotion} className="absolute top-full left-0 mt-4 w-80 bg-white border border-brand-border shadow-saas-lg rounded-sm py-3 z-50">
                  <div className="px-5 py-2 text-xs font-sans font-extrabold tracking-widest text-brand-gray uppercase border-b border-brand-border/40 mb-1">
                    Operational Support
                  </div>
                  <button
                    onClick={() => {
                      handleNavClick('resources');
                      setTimeout(() => document.getElementById('specs-resource')?.scrollIntoView({ behavior: 'smooth' }), 200);
                    }}
                    className="w-full text-left px-5 py-3 text-sm font-semibold uppercase tracking-wider text-brand-navy hover:bg-brand-surface hover:text-brand-red transition-all flex justify-between items-center"
                  >
                    <span>Product Specifications</span>
                    <span className="text-[10px] bg-brand-surface text-brand-navy px-2 py-1 rounded-sm font-mono font-bold">PDF/DOC</span>
                  </button>
                  <button
                    onClick={() => {
                      handleNavClick('resources');
                      setTimeout(() => document.getElementById('care-cleaning-resource')?.scrollIntoView({ behavior: 'smooth' }), 200);
                    }}
                    className="w-full text-left px-5 py-3 text-sm font-semibold uppercase tracking-wider text-brand-navy hover:bg-brand-surface hover:text-brand-red transition-all"
                  >
                    Care & Cleaning Guidance
                  </button>
                  <button
                    onClick={() => {
                      handleNavClick('resources');
                      setTimeout(() => document.getElementById('faq-resource')?.scrollIntoView({ behavior: 'smooth' }), 200);
                    }}
                    className="w-full text-left px-5 py-3 text-sm font-semibold uppercase tracking-wider text-brand-navy hover:bg-brand-surface hover:text-brand-red transition-all"
                  >
                    Frequently Asked Questions
                  </button>
                  <button
                    onClick={() => {
                      handleNavClick('resources');
                      setTimeout(() => document.getElementById('case-studies-resource')?.scrollIntoView({ behavior: 'smooth' }), 200);
                    }}
                    className="w-full text-left px-5 py-3 text-sm font-semibold uppercase tracking-wider text-brand-navy hover:bg-brand-surface hover:text-brand-red transition-all"
                  >
                    Case Studies
                  </button>
                </motion.div>
              )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              className={`relative py-8 text-base uppercase font-bold tracking-wider hover:text-brand-red transition-colors after:absolute after:left-0 after:right-0 after:bottom-6 after:h-0.5 after:origin-left after:bg-brand-red after:transition-transform ${
                currentPage === 'contact' ? 'text-brand-red' : 'text-brand-navy'
              } ${currentPage === 'contact' ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`}
            >
              Contact
            </button>
          </nav>

          {/* Call To Action button desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('quote')}
              className="saas-button-hover inline-flex items-center gap-2.5 bg-brand-red hover:bg-[#C21320] text-white font-condensed font-bold uppercase tracking-widest py-3.5 px-7 text-base rounded-sm shadow-sm transition-all select-none cursor-pointer"
            >
              Request a Quote <Quote className="w-5 h-5 fill-white/20" />
            </button>
          </div>

          {/* Mobile hamburger menu trigger */}
          <div className="absolute left-4 top-1/2 z-10 flex -translate-y-1/2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-white p-3 border border-brand-navy rounded-sm bg-brand-navy shadow-saas-sm"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile slide-out navigation drawer */}
      <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          ></motion.div>

          {/* Drawer content */}
          <motion.div
            className="relative flex flex-col w-full max-w-xs bg-white h-full shadow-2xl z-10 py-6 overflow-y-auto ml-auto"
            initial={{ x: 36, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 36, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between px-6 pb-6 border-b border-brand-border">
              <span className="font-condensed text-xl font-bold text-brand-navy uppercase tracking-tight">Navigation Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-brand-navy hover:text-brand-red p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 px-4 py-5 space-y-2">
              <button
                onClick={() => handleNavClick('home')}
                className="w-full text-left py-3 px-3 text-base font-extrabold uppercase tracking-wider text-brand-navy hover:bg-brand-surface rounded-sm block"
              >
                Home
              </button>

              {/* Mobile Industries Accordion */}
              <div>
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="w-full flex items-center justify-between py-3 px-3 text-base font-extrabold uppercase tracking-wider text-brand-navy hover:bg-brand-surface rounded-sm"
                >
                  <span>Industries</span>
                  {mobileIndustriesOpen ? <ChevronUp className="w-4 h-4 text-brand-red" /> : <ChevronDown className="w-4 h-4 text-brand-gray" />}
                </button>
                {mobileIndustriesOpen && (
                  <div className="pl-6 pr-2 py-1.5 space-y-1 bg-brand-bg/50 border-l-2 border-brand-navy mt-1">
                    <button
                      onClick={() => handleNavClick('shelters')}
                      className="w-full text-left py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-gray hover:text-brand-red block"
                    >
                      Shelters
                    </button>
                    <button
                      onClick={() => handleNavClick('summer-camps')}
                      className="w-full text-left py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-gray hover:text-brand-red block"
                    >
                      Summer Camps
                    </button>
                    <button
                      onClick={() => handleNavClick('university-housing')}
                      className="w-full text-left py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-gray hover:text-brand-red block"
                    >
                      University Housing
                    </button>
                    <button
                      onClick={() => handleNavClick('hospitals')}
                      className="w-full text-left py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-gray hover:text-brand-red block"
                    >
                      Hospitals
                    </button>
                    <button
                      onClick={() => handleNavClick('correctional-facilities')}
                      className="w-full text-left py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-gray hover:text-brand-red block"
                    >
                      Correctional Facilities
                    </button>
                    <button
                      onClick={() => handleNavClick('industrial-camps')}
                      className="w-full text-left py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-gray hover:text-brand-red block"
                    >
                      Industrial Camps
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('products')}
                className="w-full text-left py-3 px-3 text-base font-extrabold uppercase tracking-wider text-brand-navy hover:bg-brand-surface rounded-sm block"
              >
                Products
              </button>

              {/* Mobile Company Accordion */}
              <div>
                <button
                  onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                  className="w-full flex items-center justify-between py-3 px-3 text-base font-extrabold uppercase tracking-wider text-brand-navy hover:bg-brand-surface rounded-sm"
                >
                  <span>Company</span>
                  {mobileCompanyOpen ? <ChevronUp className="w-4 h-4 text-brand-red" /> : <ChevronDown className="w-4 h-4 text-brand-gray" />}
                </button>
                {mobileCompanyOpen && (
                  <div className="pl-6 pr-2 py-1.5 space-y-1 bg-brand-bg/50 border-l-2 border-brand-navy mt-1">
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-gray hover:text-brand-red block"
                    >
                      About True North
                    </button>
                    <button
                      onClick={() => handleNavClick('quality')}
                      className="w-full text-left py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-gray hover:text-brand-red block"
                    >
                      Quality & Compliance
                    </button>
                    <button
                      onClick={() => handleNavClick('delivery')}
                      className="w-full text-left py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-gray hover:text-brand-red block"
                    >
                      Delivery & Service
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Resources Accordion */}
              <div>
                <button
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="w-full flex items-center justify-between py-3 px-3 text-base font-extrabold uppercase tracking-wider text-brand-navy hover:bg-brand-surface rounded-sm"
                >
                  <span>Resources</span>
                  {mobileResourcesOpen ? <ChevronUp className="w-4 h-4 text-brand-red" /> : <ChevronDown className="w-4 h-4 text-brand-gray" />}
                </button>
                {mobileResourcesOpen && (
                  <div className="pl-6 pr-2 py-1.5 space-y-1 bg-brand-bg/50 border-l-2 border-brand-navy mt-1">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        handleNavClick('resources');
                        setTimeout(() => document.getElementById('specs-resource')?.scrollIntoView({ behavior: 'smooth' }), 200);
                      }}
                      className="w-full text-left py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-gray hover:text-brand-red block"
                    >
                      Product Specifications
                    </button>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        handleNavClick('resources');
                        setTimeout(() => document.getElementById('care-cleaning-resource')?.scrollIntoView({ behavior: 'smooth' }), 200);
                      }}
                      className="w-full text-left py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-gray hover:text-brand-red block"
                    >
                      Care & Cleaning Guidance
                    </button>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        handleNavClick('resources');
                        setTimeout(() => document.getElementById('faq-resource')?.scrollIntoView({ behavior: 'smooth' }), 200);
                      }}
                      className="w-full text-left py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-gray hover:text-brand-red block"
                    >
                      Frequently Asked Questions
                    </button>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        handleNavClick('resources');
                        setTimeout(() => document.getElementById('case-studies-resource')?.scrollIntoView({ behavior: 'smooth' }), 200);
                      }}
                      className="w-full text-left py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-gray hover:text-brand-red block"
                    >
                      Case Studies
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-left py-3 px-3 text-base font-extrabold uppercase tracking-wider text-brand-navy hover:bg-brand-surface rounded-sm block"
              >
                Contact
              </button>
            </div>

            {/* Mobile Bottom Section with CTA */}
            <div className="p-6 border-t border-brand-border space-y-4">
              <button
                onClick={() => handleNavClick('quote')}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-[#C21320] text-white font-condensed font-bold uppercase tracking-wider py-4 px-4 rounded-sm shadow-sm text-base"
              >
                Request a Quote
              </button>
              
              <div className="space-y-2 text-sm text-brand-gray font-medium">
                <p className="flex items-center gap-1">
                  <span>Call:</span>
                  <a href="tel:18005557878" className="text-brand-navy font-bold underline">1-800-555-7878</a>
                </p>
                <p className="flex items-center gap-1">
                  <span>Email:</span>
                  <a href="mailto:procurement@truenorthmattress.ca" className="text-brand-navy font-bold underline">procurement@truenorthmattress.ca</a>
                </p>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
};
