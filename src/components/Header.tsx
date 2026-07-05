import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Logo } from './Logo';
import { PageId } from '../types';
import { Menu, X, ChevronDown, ChevronUp, Quote, ExternalLink, Mail, PhoneCall } from 'lucide-react';

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

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:text-brand-navy focus:px-4 focus:py-3 focus:rounded-sm focus:shadow-saas-lg focus:font-sans focus:font-bold"
      >
        Skip to main content
      </a>

      {/* Top operational strip (extremely clean, no telemetry, pure B2B support info) */}
      <div className="bg-brand-deep text-white text-sm py-2.5 px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-white/10 relative z-50 overflow-hidden">
        <div className="min-w-0 flex items-center gap-2 font-sans font-medium text-center sm:text-left">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse shrink-0"></span>
          <span className="sm:hidden">Commercial procurement across Canada</span>
          <span className="hidden sm:inline min-w-0 break-words">Commercial procurement desk and site delivery services across Canada</span>
        </div>
        <div className="min-w-0 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-sans">
          <a href="tel:18005557878" className="flex items-center gap-1.5 hover:text-brand-surface transition-colors">
            <PhoneCall className="w-4 h-4 text-brand-red" />
            <span>1-800-555-TRUE (7878)</span>
          </a>
          <a href="mailto:procurement@truenorthmattress.ca" className="min-w-0 flex items-center gap-1.5 hover:text-brand-surface transition-colors">
            <Mail className="w-4 h-4 text-brand-red" />
            <span className="min-w-0 break-all">procurement@truenorthmattress.ca</span>
          </a>
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
