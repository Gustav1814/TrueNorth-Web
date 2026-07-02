import React, { useEffect } from 'react';
import { PageId } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { QuoteForm } from '../components/QuoteForm';
import { ShieldCheck, Truck, Clock, Headphones } from 'lucide-react';

interface QuoteProps {
  selectedIndustry: string;
  onNavigate: (page: PageId) => void;
}

export const Quote: React.FC<QuoteProps> = ({ selectedIndustry, onNavigate }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-brand-bg">
      <Breadcrumbs currentPage="quote" onNavigate={onNavigate} />

      {/* Hero Header */}
      <section className="relative bg-brand-navy text-white py-12 overflow-hidden starburst-pattern border-b border-brand-border">
        <div className="absolute inset-0 bg-brand-deep/85 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="text-brand-red text-xs font-sans font-bold tracking-[0.25em] uppercase block">
            DIRECT PROPOSAL
          </span>
          <h1 className="font-condensed text-4xl md:text-5xl font-black uppercase tracking-tight mt-1">
            Request a Commercial Quote
          </h1>
          <p className="mt-2 font-sans text-xs md:text-sm text-brand-surface max-w-2xl leading-relaxed">
            Specify your dimensions, quantity targets, and target delivery timelines. A regional corporate support advisor will coordinate pricing and transport terms within 1 business day.
          </p>
        </div>
      </section>

      {/* Form and info split */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quote Form Embed (Left) */}
          <div className="lg:col-span-8">
            <QuoteForm initialIndustry={selectedIndustry} />
          </div>

          {/* B2B Sourcing guidelines (Right) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            
            <div className="bg-white border border-brand-border p-6 rounded-sm">
              <h3 className="font-condensed text-base font-bold text-brand-navy uppercase tracking-wider border-b border-brand-border pb-3 mb-4">
                Procurement Guidelines
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs font-sans text-brand-charcoal leading-relaxed">
                    <strong>Direct Wholesale pricing:</strong> We specialize in bulk volume discount programs. Minimum typical ordering starts at 15 beds.
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Truck className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <div className="text-xs font-sans text-brand-charcoal leading-relaxed">
                    <strong>Freight Quote Inclusion:</strong> All proposals include detailed ground or ocean container shipping options calculated to your exact site coordinates.
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Clock className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                  <div className="text-xs font-sans text-brand-charcoal leading-relaxed">
                    <strong>1-Day Response:</strong> Corporate procurement advisors review and draft standard proposals within 24 hours of form submission.
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contacts assistance */}
            <div className="bg-brand-navy text-white p-6 rounded-sm shadow-xs">
              <Headphones className="w-7 h-7 text-brand-red mb-3" />
              <h3 className="font-condensed text-lg font-bold uppercase tracking-wider mb-2">
                Need Instant Assistance?
              </h3>
              <p className="text-xs font-sans text-brand-surface leading-relaxed mb-4">
                Speak directly with a commercial mattress pattern designer or flammability compliance specialist regarding urgent tenders or tight delivery programs.
              </p>
              
              <div className="space-y-2 text-xs font-sans">
                <p>
                  Toll Free Hotline: <a href="tel:18005557878" className="font-bold underline text-white">1-800-555-7878</a>
                </p>
                <p>
                  Direct Procurement Email: <a href="mailto:procurement@truenorthmattress.ca" className="font-bold underline text-brand-surface">procurement@truenorthmattress.ca</a>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
