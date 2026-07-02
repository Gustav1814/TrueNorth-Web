import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  FileText, 
  Volume2, 
  CheckCircle, 
  ShieldAlert, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  ArrowRight, 
  Download,
  Flame,
  Droplet
} from 'lucide-react';

interface ResourcesProps {
  onNavigate: (page: PageId) => void;
}

export const Resources: React.FC<ResourcesProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const downloads = [
    {
      id: 'specs-resource',
      title: 'Product Specifications Library',
      desc: 'Complete engineering blueprints, dimensions, core foam density parameters, vinyl thickness indices, and fabric compositions for all series.',
      format: 'PDF (2.4 MB)',
      label: 'Download Blueprint Sheets'
    },
    {
      id: 'care-cleaning-resource',
      title: 'Care & Cleaning Protocol Guidance',
      desc: 'Step-by-step sanitation guidelines, hospital-grade active chlorine dilution charts, chemical thresholds, and thermal steam clean limits.',
      format: 'DOCX (1.1 MB)',
      label: 'Download Care Guide'
    },
    {
      id: 'case-studies-resource',
      title: 'B2B Program Planning Manual',
      desc: 'Facility planning maps, bunk safety alignments, remote shipping compression data, off-season storage checklists, and regional case studies.',
      format: 'PDF (3.8 MB)',
      label: 'Download Planning Kit'
    }
  ];

  const genericFaqs = [
    {
      q: 'Do you supply mattresses for custom bunk dimensions?',
      a: 'Yes. We frequently manufacture custom lengths, widths, and thicknesses to fit custom metal bunk systems, historic wood cot frames, and space-restricted remote housing. Specify your exact measurements on our Request a Quote form.'
    },
    {
      q: 'What is the minimum order quantity (MOQ) for commercial orders?',
      a: 'To maintain commercial wholesale price brackets, our typical MOQ is 15 units. However, we do accommodate smaller orders for regional shelters, remote campsites, or replacement cycles. Contact our support desk to review your options.'
    },
    {
      q: 'How do you ship mattresses to northern remote sites?',
      a: 'We specialize in remote logistics, utilizing vacuum-compressed and rolled pallet packaging. This minimizes shipment volume by up to 70%, allowing easy and affordable transport via winter roads, marine barge containers, or cargo air flights.'
    },
    {
      q: 'What flammability safety ratings do your mattresses comply with?',
      a: 'Depending on the mattress series, our systems comply with CAN/CGSB 4.162 (standard institutional flammability), CAL TB 117-2013 (smoulder foam test), 16 CFR 1633 (open flame housing standard), and high-security CAL TB 121 and 129 standards. We provide certified laboratory reports upon request.'
    },
    {
      q: 'How do we disinfect the fluid-proof vinyl and polyurethane covers?',
      a: 'True North covers are designed to be cleaned directly using standard institutional disinfectants. You can wipe them down with diluted sodium hypochlorite solutions (up to 1:10 bleach dilution), quaternary ammonia solutions, or steam clean them. Avoid abrasive wire brushes and solvents.'
    },
    {
      q: 'Can we order replacement covers separate from the mattress cores?',
      a: 'Yes. We supply individual zippered or sealed replacement covers to extend the operational life of your existing supportive mattress cores. This is an excellent, cost-effective maintenance strategy.'
    }
  ];

  return (
    <div className="w-full">
      <Breadcrumbs currentPage="resources" onNavigate={onNavigate} />

      {/* Hero Header */}
      <section className="relative bg-brand-navy text-white py-16 overflow-hidden starburst-pattern">
        <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="text-brand-red text-xs font-sans font-bold tracking-[0.25em] uppercase block">
            DOCUMENTATION HUB
          </span>
          <h1 className="font-condensed text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mt-1">
            Product Specifications & Support
          </h1>
          <p className="mt-3 font-sans text-sm md:text-base text-brand-surface max-w-2xl leading-relaxed">
            Download flammability sheets, maintenance manuals, and procurement planning guides. If you require specialized compliance logs, they are available through our regional support desks.
          </p>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left max-w-3xl mb-12">
            <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase block">
              RESOURCE LIBRARY
            </span>
            <h2 className="font-condensed text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight mt-1">
              Procurement & Sizing Support Files
            </h2>
            <div className="w-12 h-1 bg-brand-red mt-4 mb-6"></div>
            <p className="font-sans text-sm text-brand-charcoal leading-relaxed">
              Click the resources below. True North does not require sign-up or corporate credentials to download our baseline product specification sheets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloads.map((dl) => (
              <div 
                key={dl.id}
                id={dl.id}
                className="bg-brand-bg border border-brand-border p-6 md:p-8 rounded-sm hover:border-brand-navy transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center text-brand-navy border border-brand-border mb-6">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="font-condensed text-xl font-bold text-brand-navy uppercase tracking-wider mb-2">
                    {dl.title}
                  </h3>
                  <p className="text-xs font-sans text-brand-charcoal leading-relaxed mb-6">
                    {dl.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <span className="text-[10px] font-mono text-brand-gray font-bold bg-brand-surface px-2 py-0.5 rounded-sm shrink-0">
                    {dl.format}
                  </span>
                  <button 
                    onClick={() => {
                      alert(`Mocking Download: ${dl.title}\nIn a production environment, this will trigger the download of ${dl.format}.`);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-brand-red hover:text-[#C21320] transition-colors uppercase tracking-wider"
                  >
                    {dl.label} <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Cleaning & Sanitation Tables */}
      <section id="care-cleaning-guide" className="py-16 bg-brand-bg starburst-pattern border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 text-left">
              <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase block">
                SANITATION STANDARDS
              </span>
              <h2 className="font-condensed text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight mt-1 leading-none">
                Care, Sanitation & Disinfection Protocols
              </h2>
              <div className="w-12 h-1 bg-brand-red mt-4 mb-6"></div>
              
              <p className="text-sm font-sans text-brand-charcoal leading-relaxed mb-6">
                Our heavy-coated vinyl and polyurethane covers are built for aggressive clinical cleaning. Always adhere to the chemical limits shown to maximize the life of the outer fabrics.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3 items-start text-left text-xs font-sans text-brand-charcoal">
                  <Flame className="w-5 h-5 text-brand-red shrink-0" />
                  <span><strong>Do Not Autoclave:</strong> Mattress covers are high-temperature fluid-resistant, but should not undergo vacuum autoclave cycles.</span>
                </div>
                <div className="flex gap-3 items-start text-left text-xs font-sans text-brand-charcoal">
                  <Droplet className="w-5 h-5 text-brand-red shrink-0" />
                  <span><strong>No Stiffening / Cracking:</strong> Formulated vinyl repels continuous active bleach sweeps without cracking.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white border border-brand-border p-6 md:p-8 rounded-sm text-left">
              <h4 className="font-condensed text-base font-bold text-brand-navy uppercase tracking-wider border-b border-brand-border pb-3 mb-4">
                Permitted Disinfectant Threshold Matrix
              </h4>

              <div className="divide-y divide-brand-border text-xs font-sans text-brand-charcoal">
                <div className="py-3 flex justify-between gap-4">
                  <span className="font-bold">Active Ingredient</span>
                  <span className="text-brand-navy font-bold">Max Allowed Concentration</span>
                  <span className="text-emerald-600 font-bold uppercase">Verdict</span>
                </div>
                <div className="py-3.5 flex justify-between gap-4">
                  <span>Sodium Hypochlorite (Bleach)</span>
                  <span className="font-mono">10,000 ppm (1:10 dilution)</span>
                  <span className="text-emerald-600 font-bold uppercase">Approved</span>
                </div>
                <div className="py-3.5 flex justify-between gap-4">
                  <span>Quaternary Ammonium Compounds</span>
                  <span className="font-mono">Standard hospital dilution</span>
                  <span className="text-emerald-600 font-bold uppercase">Approved</span>
                </div>
                <div className="py-3.5 flex justify-between gap-4">
                  <span>Phenolics</span>
                  <span className="font-mono">Not recommended</span>
                  <span className="text-brand-red font-bold uppercase">Avoid</span>
                </div>
                <div className="py-3.5 flex justify-between gap-4">
                  <span>Abrasive Wire Brushes</span>
                  <span className="font-mono">Strictly prohibited</span>
                  <span className="text-brand-red font-bold uppercase">Avoid</span>
                </div>
              </div>

              <p className="text-[10px] text-brand-gray mt-4 font-medium italic">
                * Note: Thoroughly rinse with clear water and wipe dry after cleaning with strong bleach formulas to prevent salt crystallization on surface covers.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faq-resource" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase block">
              SUPPORT CENTER
            </span>
            <h2 className="font-condensed text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight mt-1 text-center">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-brand-red mx-auto mt-4"></div>
          </div>

          <div className="space-y-4">
            {genericFaqs.map((item, index) => {
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

      {/* Final Request a Quote CTA */}
      <section className="bg-brand-deep text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase block">
            GET AN ITEMISED PROPOSAL
          </span>
          <h2 className="font-condensed text-3xl md:text-4xl font-bold uppercase tracking-tight mt-2 leading-none">
            Ready to Generate Your Quote?
          </h2>
          <p className="mt-3 font-sans text-xs text-brand-surface leading-relaxed max-w-xl mx-auto">
            Input your dimensions, approximate quantity range, and target delivery dates. Our corporate team will supply an itemized proposal with custom transport terms.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate('quote')}
              className="bg-brand-red hover:bg-[#C21320] text-white font-condensed font-bold uppercase tracking-wider py-3.5 px-8 text-sm rounded-sm transition-colors cursor-pointer"
            >
              Request a Bulk Supply Proposal
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-transparent hover:bg-white/10 text-white font-condensed font-bold uppercase tracking-wider py-3.5 px-8 border border-brand-border rounded-sm transition-colors text-sm cursor-pointer"
            >
              Contact Support Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
