import { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
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
  if (hash === '#/industries/shelters') return 'shelters';
  if (hash === '#/industries/summer-camps') return 'summer-camps';
  if (hash === '#/industries/university-housing') return 'university-housing';
  if (hash === '#/industries/hospitals') return 'hospitals';
  if (hash === '#/industries/correctional-facilities') return 'correctional-facilities';
  if (hash === '#/industries/industrial-camps') return 'industrial-camps';
  if (hash === '#/products') return 'products';
  if (hash === '#/company/about') return 'about';
  if (hash === '#/company/quality') return 'quality';
  if (hash === '#/company/delivery') return 'delivery';
  if (hash === '#/resources') return 'resources';
  if (hash === '#/request-a-quote') return 'quote';
  if (hash === '#/contact') return 'contact';
  return 'home';
};

const getHashFromPageId = (pageId: PageId): string => {
  switch (pageId) {
    case 'home':
      return '#/';
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

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedIndustryForQuote, setSelectedIndustryForQuote] = useState<string>('');

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

  const handleNavigate = (pageId: PageId) => {
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
      {/* 1. Header (Sticky navigation + callbacks) */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* 2. Main Page Content Section */}
      <main className="flex-1 flex flex-col">
        {renderActivePage()}
      </main>

      {/* 3. Footer (Auth links, Stacked logo, regional contacts) */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
