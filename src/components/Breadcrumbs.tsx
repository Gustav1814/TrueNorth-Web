import React from 'react';
import { PageId } from '../types';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  customLabel?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage, onNavigate, customLabel }) => {
  const getPageHierarchy = () => {
    switch (currentPage) {
      case 'shelters':
        return { parent: 'Industries', current: 'Shelters' };
      case 'summer-camps':
        return { parent: 'Industries', current: 'Summer Camps' };
      case 'university-housing':
        return { parent: 'Industries', current: 'University Housing' };
      case 'hospitals':
        return { parent: 'Industries', current: 'Hospitals' };
      case 'correctional-facilities':
        return { parent: 'Industries', current: 'Correctional Facilities' };
      case 'industrial-camps':
        return { parent: 'Industries', current: 'Industrial Camps' };
      case 'products':
        return { parent: 'Programs', current: 'Products & Solutions' };
      case 'about':
        return { parent: 'Company', current: 'About True North' };
      case 'quality':
        return { parent: 'Company', current: 'Quality & Compliance' };
      case 'delivery':
        return { parent: 'Company', current: 'Delivery & Logistics' };
      case 'resources':
        return { parent: 'Support', current: 'Product Resources' };
      case 'quote':
        return { parent: 'Procurement', current: 'Request a Quote' };
      case 'contact':
        return { parent: 'Inquiries', current: 'Contact Desk' };
      default:
        return { parent: '', current: '' };
    }
  };

  const { parent, current } = getPageHierarchy();

  if (currentPage === 'home') return null;

  return (
    <nav className="bg-brand-surface border-b border-brand-border py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-sans text-brand-gray/90 uppercase tracking-wider font-semibold">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1 hover:text-brand-red text-brand-navy transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        
        {parent && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-brand-red shrink-0" />
            <span className="text-brand-gray/60">{parent}</span>
          </>
        )}

        <ChevronRight className="w-3.5 h-3.5 text-brand-red shrink-0" />
        <span className="text-brand-navy font-bold">{customLabel || current}</span>
      </div>
    </nav>
  );
};
