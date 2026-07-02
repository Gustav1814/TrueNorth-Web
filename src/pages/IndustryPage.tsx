import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { industryConfigs } from '../data/industryData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  ShieldAlert, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Check, 
  FileText, 
  Truck, 
  Award,
  AlertCircle
} from 'lucide-react';

interface IndustryPageProps {
  industryKey: 'shelters' | 'summer-camps' | 'university-housing' | 'hospitals' | 'correctional-facilities' | 'industrial-camps';
  onNavigate: (page: PageId) => void;
  onSetSelectedIndustryForQuote: (industryName: string) => void;
}

export const IndustryPage: React.FC<IndustryPageProps> = ({ 
  industryKey, 
  onNavigate,
  onSetSelectedIndustryForQuote
}) => {
  const config = industryConfigs[industryKey];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenFaqIndex(null); // Reset FAQ state on industry change
  }, [industryKey]);

  if (!config) {
    return (
      <div className="py-20 text-center max-w-7xl mx-auto px-4">
        <AlertCircle className="w-12 h-12 text-brand-red mx-auto mb-4" />
        <h2 className="font-condensed text-2xl font-bold uppercase text-brand-navy">Sector Configuration Not Found</h2>
        <p className="font-sans text-xs text-brand-gray mt-2">Please return to the home screen or contact support.</p>
        <button onClick={() => onNavigate('home')} className="mt-6 bg-brand-navy text-white px-4 py-2 font-condensed">
          Return Home
        </button>
      </div>
    );
  }

  const handleRequestQuoteClick = () => {
    // Map our technical key to standard dropdown naming
    let industrySelectName = '';
    if (industryKey === 'shelters') industrySelectName = 'Shelters';
    else if (industryKey === 'summer-camps') industrySelectName = 'Summer Camps';
    else if (industryKey === 'university-housing') industrySelectName = 'University Housing';
    else if (industryKey === 'hospitals') industrySelectName = 'Hospitals';
    else if (industryKey === 'correctional-facilities') industrySelectName = 'Correctional Facilities';
    else if (industryKey === 'industrial-camps') industrySelectName = 'Industrial Camps';

    onSetSelectedIndustryForQuote(industrySelectName);
    onNavigate('quote');
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* 1. Breadcrumbs */}
      <Breadcrumbs currentPage={config.id} onNavigate={onNavigate} />

      {/* 2. Industry Specific Hero */}
      <section className="relative bg-brand-navy text-white py-20 lg:py-24 overflow-hidden starburst-pattern">
        <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
        <div className="absolute inset-0 pointer-events-none z-0">
          <img 
            src={config.heroImage} 
            alt={config.title} 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="text-brand-red text-xs font-sans font-extrabold tracking-[0.25em] uppercase bg-brand-deep/60 px-3 py-1 border-l-2 border-brand-red rounded-sm inline-block mb-4">
            Sector Solutions
          </span>
          <h1 className="font-condensed text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] max-w-4xl">
            {config.heroHeadline}
          </h1>
          <p className="mt-4 font-sans text-sm md:text-base text-brand-surface max-w-2xl leading-relaxed">
            {config.heroSubheadline}
          </p>

          <div className="mt-8">
            <button
              onClick={handleRequestQuoteClick}
              className="bg-brand-red hover:bg-[#C21320] text-white font-condensed font-bold uppercase tracking-wider py-3.5 px-8 text-sm rounded-sm shadow-md transition-colors select-none cursor-pointer"
            >
              Request a Sector Quote
            </button>
          </div>
        </div>
      </section>

      {/* 3. Main Operational Challenges */}
      <section className="py-16 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 text-left">
              <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase block">
                FACILITY REALITY
              </span>
              <h2 className="font-condensed text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight mt-1 leading-none">
                Primary Operational Challenges
              </h2>
              <div className="w-12 h-1 bg-brand-red mt-4 mb-6"></div>
              <p className="text-xs font-sans text-brand-gray leading-relaxed">
                Institutional facilities face strict requirements that residential mattresses simply cannot withstand. We analyze these challenges to build more resilient solutions.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {config.challenges.map((challenge, index) => (
                <div key={index} className="bg-brand-bg border-l-4 border-brand-navy p-5 rounded-sm">
                  <span className="text-[10px] font-sans font-bold text-brand-red block mb-1 uppercase tracking-wider font-mono">
                    Challenge 0{index + 1}
                  </span>
                  <p className="text-xs font-sans text-brand-charcoal leading-relaxed font-medium">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Recommended Product Approach & Spec Cards */}
      <section className="py-20 bg-brand-bg starburst-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase block">
              MATERIAL ARCHITECTURE
            </span>
            <h2 className="font-condensed text-4xl font-black text-brand-navy uppercase tracking-tight mt-1 leading-none">
              Recommended Product Architecture
            </h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-4"></div>
            <p className="mt-4 font-sans text-xs text-brand-gray leading-relaxed uppercase tracking-wider font-semibold">
              Approach: <span className="text-brand-navy">{config.productApproach}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Features list */}
            <div className="bg-white border border-brand-border p-6 md:p-8 rounded-sm flex flex-col justify-between text-left">
              <div>
                <h3 className="font-condensed text-xl font-bold text-brand-navy uppercase tracking-tight border-b border-brand-border pb-4 mb-6">
                  Engineered Feature Specifications
                </h3>
                
                <div className="space-y-6">
                  {config.productFeatures.map((feat, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-6 h-6 bg-brand-surface rounded-full flex items-center justify-center shrink-0 mt-0.5 text-brand-navy">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="font-condensed text-sm font-bold text-brand-navy uppercase tracking-wider">
                          {feat.name}
                        </h4>
                        <p className="text-xs font-sans text-brand-charcoal mt-1 leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-border flex items-center gap-3 text-[10px] font-sans text-brand-gray font-medium">
                <Award className="w-4 h-4 text-brand-red" />
                <span>All core components comply with Canadian federal and municipal procurement safety metrics.</span>
              </div>
            </div>

            {/* Technical Spec Sheet Card */}
            <div className="bg-brand-navy text-white p-6 md:p-8 rounded-sm flex flex-col justify-between text-left shadow-lg">
              <div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
                  <h3 className="font-condensed text-xl font-bold uppercase tracking-tight">
                    Technical Specifications
                  </h3>
                  <span className="text-[10px] font-sans font-bold bg-white/10 px-2 py-1 uppercase tracking-widest rounded-sm">
                    Direct Wholesale
                  </span>
                </div>

                <div className="divide-y divide-white/10">
                  {config.specs.map((spec, idx) => (
                    <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span className="text-xs font-sans text-brand-surface uppercase tracking-wider font-semibold">
                        {spec.label}
                      </span>
                      <span className="text-xs font-sans font-bold text-white">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                <p className="text-[11px] font-sans text-brand-surface/80 leading-relaxed">
                  * Custom modifications such as built-in brass vents, anti-static weaves, or heavy-duty carrying handles are available on demand.
                </p>
                <button
                  onClick={handleRequestQuoteClick}
                  className="w-full text-center bg-brand-red hover:bg-[#C21320] text-white font-condensed font-bold uppercase tracking-wider py-3.5 text-xs rounded-sm transition-colors shadow-xs"
                >
                  Generate Quote With These Specs
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Why True North for this Industry */}
      <section className="py-16 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12">
            <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase block">
              PARTNERSHIP BENEFITS
            </span>
            <h2 className="font-condensed text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight mt-1">
              Why Procurement Teams Partner With True North
            </h2>
            <div className="w-12 h-1 bg-brand-red mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.whyTrueNorth.map((point, index) => (
              <div key={index} className="bg-brand-bg p-6 rounded-sm border-t-2 border-brand-red flex flex-col gap-3">
                <span className="text-brand-navy font-condensed text-3xl font-extrabold leading-none">
                  0{index + 1}.
                </span>
                <p className="text-xs font-sans text-brand-charcoal leading-relaxed font-semibold">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Case Study / Testimonial */}
      <section className="py-16 bg-brand-bg border-b border-brand-border starburst-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase text-center block">
            FACILITY FEEDBACK
          </span>
          <div className="w-12 h-1 bg-brand-red mx-auto mt-3 mb-8"></div>

          <div className="bg-white border-l-4 border-brand-navy p-6 md:p-10 text-left rounded-sm shadow-xs relative">
            <span className="absolute top-2 right-4 text-brand-surface font-serif text-8xl leading-none font-black select-none pointer-events-none opacity-40">
              “
            </span>
            <p className="font-sans text-sm md:text-base text-brand-navy italic font-medium leading-relaxed relative z-10">
              “{config.testimonial.quote}”
            </p>
            <div className="mt-4 pt-4 border-t border-brand-border text-xs font-sans text-brand-gray font-semibold uppercase tracking-wider">
              — {config.testimonial.author}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Industry Specific FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase block">
              SECTOR FAQS
            </span>
            <h2 className="font-condensed text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight mt-1 text-center">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-brand-red mx-auto mt-4"></div>
          </div>

          <div className="space-y-4">
            {config.faq.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className="border border-brand-border rounded-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 bg-brand-bg hover:bg-brand-surface text-left transition-colors"
                  >
                    <span className="font-condensed text-base font-bold text-brand-navy uppercase tracking-wider flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-brand-red shrink-0" />
                      {item.q}
                    </span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-brand-red" /> : <ChevronDown className="w-5 h-5 text-brand-gray" />}
                  </button>
                  
                  {isOpen && (
                    <div className="p-5 bg-white border-t border-brand-border text-xs font-sans text-brand-charcoal leading-relaxed animate-in fade-in duration-200">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. Delivery & Logistics Strip */}
      <section className="bg-brand-navy text-white py-12 border-t border-brand-border starburst-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="flex gap-4 items-start max-w-xl">
            <Truck className="w-8 h-8 text-brand-red shrink-0 mt-1" />
            <div>
              <h4 className="font-condensed text-lg font-bold uppercase tracking-wider">
                Reliable Canadian Site Shipping
              </h4>
              <p className="text-xs font-sans text-brand-surface mt-1 leading-relaxed">
                We coordinate flatbeds, winter road transports, remote sea containers, and dedicated palletized freight directly to your housing complexes or campgrounds. 
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('delivery')}
            className="w-full md:w-auto bg-transparent hover:bg-white/10 text-white border-2 border-brand-border px-6 py-3 font-condensed font-bold uppercase text-xs tracking-wider transition-all text-center shrink-0 cursor-pointer"
          >
            Review Shipping Guidelines
          </button>
        </div>
      </section>

      {/* 9. Final Request a Quote CTA */}
      <section className="bg-brand-deep text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase block">
            GET AN ITEMISED PROPOSAL
          </span>
          <h2 className="font-condensed text-3xl md:text-4xl font-bold uppercase tracking-tight mt-2 leading-none">
            Get Pricing for Your {config.title} Program
          </h2>
          <p className="mt-3 font-sans text-xs text-brand-surface leading-relaxed max-w-xl mx-auto">
            Input your dimensions, approximate quantity range, and target delivery dates. Our corporate team will supply an itemized proposal with custom transport terms.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleRequestQuoteClick}
              className="bg-brand-red hover:bg-[#C21320] text-white font-condensed font-bold uppercase tracking-wider py-3.5 px-8 text-sm rounded-sm transition-colors cursor-pointer"
            >
              Request a Sector Quote
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-transparent hover:bg-white/10 text-white font-condensed font-bold uppercase tracking-wider py-3.5 px-8 border border-brand-border rounded-sm transition-colors text-sm cursor-pointer"
            >
              Contact Procurement Desk
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
