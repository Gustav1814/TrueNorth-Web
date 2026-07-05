import { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { HomeDesignTwo } from './pages/HomeDesignTwo';
import { IndustryPage } from './pages/IndustryPage';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Quality } from './pages/Quality';
import { Delivery } from './pages/Delivery';
import { Resources } from './pages/Resources';
import { Quote } from './pages/Quote';
import { Contact } from './pages/Contact';

const parseHash = (hash: string): PageId => {
  if (!hash || hash === '#/' || hash === '#') return 'home';
  if (hash === '#/home-design-2') return 'home-design-2';
  return 'home';
};

const getHashFromPageId = (pageId: PageId): string => {
  switch (pageId) {
    case 'home':
      return '#/';
    case 'home-design-2':
      return '#/home-design-2';
    case 'shelters':
      return '#/industries/shelters';
    case 'summer-camps':
      return '#/industries/summer-camps';
    case 'university-housing':
      return '#/industries/university-housing';
    case 'hospitals':
      return '#/industries/hospitals';
    case 'correctional-facilities':
      return '#/industries/correctional-facilities';
    case 'industrial-camps':
      return '#/industries/industrial-camps';
    case 'products':
      return '#/products';
    case 'about':
      return '#/company/about';
    case 'quality':
      return '#/company/quality';
    case 'delivery':
      return '#/company/delivery';
    case 'resources':
      return '#/resources';
    case 'quote':
      return '#/request-a-quote';
    case 'contact':
      return '#/contact';
    default:
      return '#/';
  }
};

const pageTitles: Record<PageId, string> = {
  home: 'True North Mattress Supply | Institutional Mattresses Canada',
  'home-design-2': 'Homepage Design 2 | True North Mattress Supply',
  shelters: 'Shelter Mattresses | True North Mattress Supply',
  'summer-camps': 'Summer Camp Mattresses | True North Mattress Supply',
  'university-housing': 'University Housing Mattresses | True North Mattress Supply',
  hospitals: 'Healthcare Mattresses | True North Mattress Supply',
  'correctional-facilities': 'Correctional Facility Mattresses | True North Mattress Supply',
  'industrial-camps': 'Industrial Camp Mattresses | True North Mattress Supply',
  products: 'Products & Programs | True North Mattress Supply',
  about: 'About True North | True North Mattress Supply',
  quality: 'Quality & Compliance | True North Mattress Supply',
  delivery: 'Delivery & Service | True North Mattress Supply',
  resources: 'Resources | True North Mattress Supply',
  quote: 'Request a Quote | True North Mattress Supply',
  contact: 'Contact | True North Mattress Supply',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => parseHash(window.location.hash));
  const [selectedIndustryForQuote, setSelectedIndustryForQuote] = useState<string>('');
  const usesStandaloneChrome = currentPage === 'home-design-2';
  const isHomepageDemo = currentPage === 'home' || currentPage === 'home-design-2';

  useEffect(() => {
    // Initial load parse
    const handleInitialRoute = () => {
      const page = parseHash(window.location.hash);
      setCurrentPage(page);
    };

    handleInitialRoute();

    // Event listener for subsequent hash changes (back/forward or user direct clicks)
    const handleHashChange = () => {
      const page = parseHash(window.location.hash);
      setCurrentPage(page);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.title = pageTitles[currentPage];
  }, [currentPage]);

  const handleNavigate = (pageId: PageId) => {
    if (pageId !== 'home' && pageId !== 'home-design-2') {
      return;
    }

    window.location.hash = getHashFromPageId(pageId);
    setCurrentPage(pageId);
  };

  const handleSetSelectedIndustryForQuote = (industryName: string) => {
    setSelectedIndustryForQuote(industryName);
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'home-design-2':
        return <HomeDesignTwo onNavigate={handleNavigate} />;
      
      // Reusable Industry Pages
      case 'shelters':
      case 'summer-camps':
      case 'university-housing':
      case 'hospitals':
      case 'correctional-facilities':
      case 'industrial-camps':
        return (
          <IndustryPage
            industryKey={currentPage}
            onNavigate={handleNavigate}
            onSetSelectedIndustryForQuote={handleSetSelectedIndustryForQuote}
          />
        );
      
      case 'products':
        return (
          <Products
            onNavigate={handleNavigate}
            onSetSelectedIndustryForQuote={handleSetSelectedIndustryForQuote}
          />
        );
      
      case 'about':
        return <About onNavigate={handleNavigate} />;
      
      case 'quality':
        return <Quality onNavigate={handleNavigate} />;
      
      case 'delivery':
        return <Delivery onNavigate={handleNavigate} />;
      
      case 'resources':
        return <Resources onNavigate={handleNavigate} />;
      
      case 'quote':
        return (
          <Quote
            selectedIndustry={selectedIndustryForQuote}
            onNavigate={handleNavigate}
          />
        );
      
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-charcoal antialiased">
      {!usesStandaloneChrome && (
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
      )}

      {isHomepageDemo && (
        <button
          type="button"
          onClick={() => handleNavigate(currentPage === 'home' ? 'home-design-2' : 'home')}
          className="fixed bottom-4 right-4 z-[70] rounded-full border border-brand-border bg-white px-4 py-3 font-condensed text-sm font-black uppercase tracking-wider text-brand-navy shadow-saas-lg transition-colors hover:border-brand-red hover:text-brand-red sm:bottom-auto sm:right-6 sm:top-28 sm:rounded-sm sm:px-5"
        >
          <span className="sm:hidden">
            {currentPage === 'home' ? 'Design 2' : 'Design 1'}
          </span>
          <span className="hidden sm:inline">
            {currentPage === 'home' ? 'View Design 2' : 'View Design 1'}
          </span>
        </button>
      )}

      <main id="main-content" className="flex-1 flex flex-col">
        {renderActivePage()}
      </main>

      {!isHomepageDemo && (
        <Footer onNavigate={handleNavigate} />
      )}
    </div>
  );
}
