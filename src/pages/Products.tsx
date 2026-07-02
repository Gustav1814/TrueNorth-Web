import React, { useEffect } from 'react';
import { PageId } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, Layers, Eye, FileText, ClipboardList, Package, Scale, HelpCircle } from 'lucide-react';

interface ProductsProps {
  onNavigate: (page: PageId) => void;
  onSetSelectedIndustryForQuote: (industryName: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onNavigate, onSetSelectedIndustryForQuote }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProductQuoteClick = (industryCategory: string) => {
    onSetSelectedIndustryForQuote(industryCategory);
    onNavigate('quote');
  };

  const productLines = [
    {
      title: 'WIPEOUT SERIES (Institutional Systems)',
      subtitle: 'Designed for Shelters, Hostels & Medical Rest-Zones',
      desc: 'Engineered with heavy-duty reinforced vinyl and inverted bed-bug resistant seams to sustain constant room-turnovers and deep chemical disinfections.',
      cover: '10 oz. reinforced vinyl or multi-coated medical polyurethane, 100% fluid-proof, anti-fungal, bleach-resistant.',
      core: 'Densified virgin polyester fiber core or 1.8 lbs high-resiliency security foam.',
      seams: 'Inverted, lock-stitched, thread-treated edges (eliminates bed-bug harboring pipe-hems). Optional RF-welded stitchless seams.',
      sizes: '30" x 75", 36" x 75", 36" x 80" (Twin XL), 39" x 80", and custom cot sizing.',
      compliance: 'Completely compliant with CAN/CGSB 4.162 and CAL TB 117-2013 flammability metrics.',
      industryCode: 'Shelters'
    },
    {
      title: 'ARMOUR SERIES (Maximum Security Beds)',
      subtitle: 'Designed for Correctional Cells & Behavioral Safety Wards',
      desc: 'Extremely durable, tamper-resistant, stitchless sealed seam security beds with integrated pillows. Built to prevent contraband concealment and withstand heavy manual force.',
      cover: '12 oz. heavy-duty reinforced puncture-resistant vinyl. No zippers, no threads, no openings.',
      core: 'High-density densified polyester thermal-fused fiber or neoprene-infused safety foam.',
      seams: '100% radio-frequency (RF) welded stitchless solid seams. Completely leak-proof and solid.',
      sizes: '25" x 75", 30" x 75", 30" x 80", custom safety thicknesses (3" to 6").',
      compliance: 'Tested and certified compliant with CAL TB 121 (maximum fire safety testing) and CAN/CGSB standards.',
      industryCode: 'Correctional Facilities'
    },
    {
      title: 'HORIZON SERIES (Workforce & Housing Cores)',
      subtitle: 'Designed for Student Housing, Camps & Remote Workforce Sites',
      desc: 'Breathable, reversible dual-comfort mattresses providing standard residential sleep comfort but optimized for high rotational occupancy and damp-environment durability.',
      cover: 'Nylon Oxford with water-resistant inner backing or highly breathable heavy stretch-knit, stain-proof, removable zipper.',
      core: 'Multi-layer polyurethane foam core (firm on one side, soft on the other) or heavy pocket coils.',
      seams: 'Heavy-duty concealed zipper with double lock-stitch nylon threading and safety flap.',
      sizes: '36" x 80" (Twin XL), 38" x 80" (Twin XL), 54" x 80" (Double XL), and standard Queen/King programs.',
      compliance: 'Fully compliant with 16 CFR 1633 and CAL TB 117-2013 standards.',
      industryCode: 'University Housing'
    }
  ];

  return (
    <div className="w-full">
      <Breadcrumbs currentPage="products" onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative bg-brand-navy text-white py-16 overflow-hidden starburst-pattern">
        <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="text-brand-red text-xs font-sans font-bold tracking-[0.25em] uppercase block">
            THE CATALOGUE
          </span>
          <h1 className="font-condensed text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mt-1">
            Built Around Your Facility’s Reality
          </h1>
          <p className="mt-3 font-sans text-sm md:text-base text-brand-surface max-w-2xl leading-relaxed">
            True North provides direct commercial wholesale mattress systems with transparent specifications. All configurations are optimized for heavy institutional loading, sanitization compliance, and secure delivery.
          </p>
        </div>
      </section>

      {/* Main product catalogue list */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-16">
            {productLines.map((prod, idx) => (
              <div 
                key={idx}
                className="bg-brand-bg border border-brand-border rounded-sm overflow-hidden shadow-xs hover:shadow-sm hover:border-brand-navy transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Visual / Text Details Column */}
                <div className="p-8 lg:col-span-7 flex flex-col justify-between text-left">
                  <div>
                    <span className="text-brand-red text-xs font-sans font-bold tracking-widest uppercase block mb-1">
                      PRODUCT SUITE 0{idx + 1}
                    </span>
                    <h2 className="font-condensed text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-tight">
                      {prod.title}
                    </h2>
                    <p className="text-xs font-sans text-brand-gray uppercase font-bold tracking-wider mt-0.5">
                      {prod.subtitle}
                    </p>
                    <p className="text-sm font-sans text-brand-charcoal mt-4 leading-relaxed">
                      {prod.desc}
                    </p>
                  </div>

                  {/* Procurement Callouts */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-brand-border">
                    <div className="flex gap-2.5 items-start">
                      <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="text-left">
                        <h4 className="font-condensed text-xs font-bold text-brand-navy uppercase tracking-wider">
                          Infection Control
                        </h4>
                        <p className="text-[11px] font-sans text-brand-gray mt-0.5">
                          Impermeable coatings resist high-potency sanitizing chemicals.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2.5 items-start">
                      <Layers className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                      <div className="text-left">
                        <h4 className="font-condensed text-xs font-bold text-brand-navy uppercase tracking-wider">
                          Support Cores
                        </h4>
                        <p className="text-[11px] font-sans text-brand-gray mt-0.5">
                          High density prevents sagging over continuous rotational shifts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Specifications Specs Sheet Column */}
                <div className="bg-brand-navy text-white p-8 lg:col-span-5 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="font-condensed text-lg font-bold uppercase tracking-wider border-b border-white/10 pb-3 mb-4 flex items-center gap-2">
                      <ClipboardList className="w-4 h-4 text-brand-red" />
                      Material Spec Sheet
                    </h3>
                    
                    <div className="space-y-3.5 text-xs">
                      <div>
                        <span className="text-brand-surface font-semibold uppercase text-[10px] tracking-wider block">
                          Cover Wrap fabric:
                        </span>
                        <p className="text-white font-medium mt-0.5 leading-snug">{prod.cover}</p>
                      </div>

                      <div>
                        <span className="text-brand-surface font-semibold uppercase text-[10px] tracking-wider block">
                          Internal Support Core:
                        </span>
                        <p className="text-white font-medium mt-0.5 leading-snug">{prod.core}</p>
                      </div>

                      <div>
                        <span className="text-brand-surface font-semibold uppercase text-[10px] tracking-wider block">
                          Seam Assembly Style:
                        </span>
                        <p className="text-white font-medium mt-0.5 leading-snug">{prod.seams}</p>
                      </div>

                      <div>
                        <span className="text-brand-surface font-semibold uppercase text-[10px] tracking-wider block">
                          Standard Sizes:
                        </span>
                        <p className="text-white font-medium mt-0.5 leading-snug">{prod.sizes}</p>
                      </div>

                      <div className="pt-2 border-t border-white/10">
                        <span className="text-brand-red font-bold uppercase text-[10px] tracking-wider block">
                          Canadian Fire Compliance:
                        </span>
                        <p className="text-brand-surface font-semibold mt-0.5 leading-snug">{prod.compliance}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10">
                    <button
                      onClick={() => handleProductQuoteClick(prod.industryCode)}
                      className="w-full text-center bg-brand-red hover:bg-[#C21320] text-white font-condensed font-bold uppercase tracking-wider py-3 text-xs rounded-sm transition-colors shadow-xs"
                    >
                      Request Quote for This Series
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Procurement / Tender Guidelines Strip */}
      <section className="bg-brand-deep text-white py-16 starburst-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          <div className="lg:col-span-8">
            <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase block">
              TENDER SUBMISSIONS
            </span>
            <h3 className="font-condensed text-3xl font-bold uppercase tracking-tight mt-1">
              Public Tenders & Custom Sizing Requests
            </h3>
            <p className="text-sm font-sans text-brand-surface mt-2 leading-relaxed max-w-3xl">
              True North frequently participates in municipal, provincial, and private facility tender programs. We supply comprehensive custom drawings, flammability rating reports, and chemical tolerance documentations. If you require specialized dimensions (such as historic wood frames, custom metal cots, or remote camps), our pattern designers can manufacture matching cores precisely to your drawings.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 w-full">
            <button
              onClick={() => onNavigate('quote')}
              className="bg-brand-red hover:bg-[#C21320] text-white font-condensed font-bold uppercase tracking-wider py-3 px-6 text-xs rounded-sm text-center transition-colors cursor-pointer"
            >
              Submit Tender Specifications
            </button>
            <button
              onClick={() => onNavigate('resources')}
              className="bg-white/5 hover:bg-white/10 text-white border border-brand-border py-3 px-6 text-xs rounded-sm text-center transition-colors cursor-pointer"
            >
              Download Specs Library
            </button>
          </div>

        </div>
      </section>

      {/* Clean Trust Strip */}
      <section className="bg-brand-bg py-10 border-t border-brand-border">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-xs font-sans text-brand-gray font-medium">
          <span className="flex items-center gap-1.5">
            <Scale className="w-4 h-4 text-brand-navy" /> Strict Regulatory Flammability Standard Controls
          </span>
          <span className="flex items-center gap-1.5">
            <Package className="w-4 h-4 text-brand-navy" /> Directly Sourced Canadian Corporate Commercial Operations
          </span>
          <span className="flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-brand-navy" /> Full Material Tolerances Provided for Procurement Audit
          </span>
        </div>
      </section>
    </div>
  );
};
