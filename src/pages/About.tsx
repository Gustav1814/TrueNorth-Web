import React, { useEffect } from 'react';
import { PageId } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, Truck, Scale, Map, ArrowRight } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: PageId) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <Breadcrumbs currentPage="about" onNavigate={onNavigate} />

      {/* Hero Header */}
      <section className="relative bg-brand-navy text-white py-16 overflow-hidden starburst-pattern">
        <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="text-brand-red text-xs font-sans font-bold tracking-[0.25em] uppercase block">
            COMPANY PROFILE
          </span>
          <h1 className="font-condensed text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mt-1">
            About True North Mattress Supply
          </h1>
          <p className="mt-3 font-sans text-sm md:text-base text-brand-surface max-w-2xl leading-relaxed">
            A dedicated commercial supplier of institutional mattresses for shelters, workforce camps, university housing, hospitals, and correctional facilities across Canada.
          </p>
        </div>
      </section>

      {/* Corporate Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 text-left">
              <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase block">
                WHO WE ARE
              </span>
              <h2 className="font-condensed text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight mt-1">
                Operationally Ready. Institutionally Focused.
              </h2>
              <div className="w-12 h-1 bg-brand-red mt-4 mb-6"></div>
              
              <div className="space-y-4 font-sans text-sm text-brand-charcoal leading-relaxed">
                <p>
                  True North Mattress Supply was established to solve a persistent operational challenge: the high failure rate and safety compliance confusion associated with using consumer sleep products in professional and high-use facilities.
                </p>
                <p>
                  We do not supply standard consumer bedroom mattresses, nor do we run retail storefronts or direct-to-consumer digital channels. Our operations are centered strictly around direct B2B institutional supply.
                </p>
                <p>
                  Our team partners directly with municipal procurement advisors, hospital facility directors, summer camp managers, campus housing authorities, and mine-site camp managers. We provide transparent technical specifications, rigid flammability testing, and precise logistics coordination.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[300px] md:h-[400px] border-4 border-brand-navy bg-brand-navy rounded-sm overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-brand-navy/50 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
                alt="Canadian transport truck / bulk logistics facility"
                className="w-full h-full object-cover object-center absolute inset-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-left bg-brand-deep/95 border-l-4 border-brand-red p-4 rounded-sm">
                <p className="text-[10px] font-sans font-bold text-brand-red uppercase tracking-widest">
                  National Supply Network
                </p>
                <h4 className="font-condensed text-lg font-bold text-white uppercase mt-1">
                  Canadian Infrastructure Delivery
                </h4>
                <p className="text-xs font-sans text-brand-gray mt-1">
                  Managing remote logistics from regional centers to site coordinates nationwide.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values / Operational Pillars */}
      <section className="py-16 bg-brand-bg starburst-pattern border-t border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="max-w-3xl mb-12">
            <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase block">
              OPERATIONAL PILLARS
            </span>
            <h2 className="font-condensed text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight mt-1">
              Engineered Around Professional Procurement
            </h2>
            <div className="w-12 h-1 bg-brand-red mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white border border-brand-border p-6 rounded-sm">
              <Scale className="w-8 h-8 text-brand-navy mb-4" />
              <h3 className="font-condensed text-lg font-bold text-brand-navy uppercase tracking-wider">
                Regulatory Compliance First
              </h3>
              <p className="text-xs font-sans text-brand-charcoal mt-2 leading-relaxed">
                All True North materials undergo rigid quality checks to ensure compliance with federal, provincial, and municipal safety guidelines, including strict flammability CGSB metrics and infection control regulations.
              </p>
            </div>

            <div className="bg-white border border-brand-border p-6 rounded-sm">
              <ShieldCheck className="<!-- -->w-8 h-8 text-brand-navy mb-4" />
              <h3 className="font-condensed text-lg font-bold text-brand-navy uppercase tracking-wider">
                Industrial Strength Durability
              </h3>
              <p className="text-xs font-sans text-brand-charcoal mt-2 leading-relaxed">
                By utilizing thick-coated vinyl, water-resistant heavy nylons, and high-density supportive cores, our sleep systems reduce standard operational replacement costs by up to 40% compared to typical consumer-grade products.
              </p>
            </div>

            <div className="bg-white border border-brand-border p-6 rounded-sm">
              <Truck className="w-8 h-8 text-brand-navy mb-4" />
              <h3 className="font-condensed text-lg font-bold text-brand-navy uppercase tracking-wider">
                Remote Logistical Coordination
              </h3>
              <p className="text-xs font-sans text-brand-charcoal mt-2 leading-relaxed">
                We handle shipping across Canada. From heavy industrial mines in northern territories to community shelters in downtown metropolitan centers, our logistics desk guarantees reliable delivery coordination.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Directly Sourced Canada Map Concept */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Map className="w-12 h-12 text-brand-red mx-auto mb-4" />
          <h3 className="font-condensed text-2xl font-bold uppercase text-brand-navy">
            Directly Servicing Canadian Procurement Sectors
          </h3>
          <p className="mt-2 font-sans text-xs text-brand-gray uppercase tracking-widest font-semibold">
            TORONTO &bull; CALGARY &bull; MONTREAL &bull; VANCOUVER &bull; REGINA &bull; REMOTE NORTH
          </p>
          <p className="mt-4 font-sans text-sm text-brand-charcoal leading-relaxed max-w-2xl mx-auto">
            Our corporate structure enables centralized support. This means you speak directly with commercial mattress designers who can review flammability criteria, custom dimensions, or delivery timelines instantly.
          </p>
          <div className="mt-8">
            <button
              onClick={() => onNavigate('quote')}
              className="bg-brand-red hover:bg-[#C21320] text-white font-condensed font-bold uppercase tracking-wider py-3.5 px-8 text-sm rounded-sm transition-colors cursor-pointer"
            >
              Request a Bulk Supply Proposal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
