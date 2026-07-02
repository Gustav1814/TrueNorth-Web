import React, { useEffect } from 'react';
import { PageId } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, Scale, FileText, Activity, Layers, AlertTriangle } from 'lucide-react';

interface QualityProps {
  onNavigate: (page: PageId) => void;
}

export const Quality: React.FC<QualityProps> = ({ onNavigate }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const complianceStandards = [
    {
      code: 'CAN/CGSB 4.162',
      title: 'Canadian Flammability Standard',
      desc: 'The benchmark standard for hospital and institutional mattresses in Canada. Assesses the resistance of mattresses to ignition from smouldering and open flame sources.',
      status: 'Fully compliant cores and covers are available'
    },
    {
      code: 'CAL TB 117-2013',
      title: 'Resiliency Foam Smolder Standard',
      desc: 'Evaluates the smoulder resistance of resilient filling materials used in upholstered furniture. Highly critical for residential housing, shelters, and workforce bunkhouses.',
      status: 'Standard for all True North foam products'
    },
    {
      code: '16 CFR 1633',
      title: 'Open Flame Ignition Resistance',
      desc: 'Federal flammability standard testing heat release rates under rigorous direct open flame burners. Critical for university student housing operations.',
      status: 'Certified compliant on recommended housing cores'
    },
    {
      code: 'CAL TB 121 / 129',
      title: 'High-Security Fire Block',
      desc: 'The most stringent vertical open-flame ignition test, measuring smoke generation, heat release, and weight loss. Required for correctional facilities and security wards.',
      status: 'RF-Welded fiber cores meet these strict criteria'
    }
  ];

  return (
    <div className="w-full">
      <Breadcrumbs currentPage="quality" onNavigate={onNavigate} />

      {/* Hero Header */}
      <section className="relative bg-brand-navy text-white py-16 overflow-hidden starburst-pattern">
        <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="text-brand-red text-xs font-sans font-bold tracking-[0.25em] uppercase block">
            STANDARDS & MANDATES
          </span>
          <h1 className="font-condensed text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mt-1">
            Quality & Compliance
          </h1>
          <p className="mt-3 font-sans text-sm md:text-base text-brand-surface max-w-2xl leading-relaxed">
            Strict flammability testing, durable materials, and hygiene-conscious standards. We focus on real-world compliance criteria for professional facility audits.
          </p>
        </div>
      </section>

      {/* Main compliance standards listing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left max-w-3xl mb-12">
            <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase block">
              FIRE SAFETY METRICS
            </span>
            <h2 className="font-condensed text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight mt-1">
              Canadian Flammability & Security Compliance
            </h2>
            <div className="w-12 h-1 bg-brand-red mt-4 mb-6"></div>
            <p className="font-sans text-sm text-brand-charcoal leading-relaxed">
              Before a mattress enters an institutional facility, it must meet specific flammability codes. True North ensures every mattress line matches or exceeds the mandatory fire codes of your province, municipality, or sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {complianceStandards.map((std, idx) => (
              <div key={idx} className="bg-brand-bg border border-brand-border p-6 rounded-sm hover:border-brand-navy transition-colors">
                <span className="text-[10px] font-sans font-bold text-brand-red bg-brand-surface px-2 py-1 uppercase tracking-widest rounded-sm inline-block mb-3 font-mono">
                  {std.code}
                </span>
                <h3 className="font-condensed text-xl font-bold text-brand-navy uppercase tracking-wider mb-2">
                  {std.title}
                </h3>
                <p className="text-xs font-sans text-brand-charcoal leading-relaxed mb-4">
                  {std.desc}
                </p>
                <div className="pt-3 border-t border-brand-border flex items-center gap-2 text-xs font-sans font-semibold text-brand-navy uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{std.status}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Hygiene and Infection Control Details */}
      <section className="py-16 bg-brand-bg starburst-pattern border-t border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            
            <div className="lg:col-span-6">
              <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase block">
                INFECTION CONTROL
              </span>
              <h2 className="font-condensed text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight mt-1 leading-none">
                Infection Control & Chemical Resistance
              </h2>
              <div className="w-12 h-1 bg-brand-red mt-4 mb-6"></div>
              
              <div className="space-y-4 font-sans text-xs text-brand-charcoal leading-relaxed">
                <p>
                  For clinical settings, shelters, and maximum custody wards, liquid and biological fluid contamination poses severe operational hazards. Our specialized polyurethane and vinyl covers are completely impermeable to fluids, helping prevent the internal cores from becoming reservoirs for mildew or pathogens.
                </p>
                <p>
                  True North healthcare and shelter fabrics are formulated to withstand continuous sanitation using institutional disinfectants, including hospital-grade chlorine dilution rubs (up to 10,000 ppm active chlorine) and standard quaternary sanitizers, without cracking or becoming brittle.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-white p-6 border border-brand-border rounded-sm">
                <Activity className="w-6 h-6 text-brand-navy mb-3" />
                <h4 className="font-condensed text-sm font-bold text-brand-navy uppercase tracking-wider">
                  Impermeable Covers
                </h4>
                <p className="text-[11px] font-sans text-brand-gray mt-1 leading-normal">
                  Reinforced vinyl and high-density polyurethane coatings that repel biological fluids, blood, and chemical contaminants completely.
                </p>
              </div>

              <div className="bg-white p-6 border border-brand-border rounded-sm">
                <Layers className="w-6 h-6 text-brand-navy mb-3" />
                <h4 className="font-condensed text-sm font-bold text-brand-navy uppercase tracking-wider">
                  Antimicrobial Shield
                </h4>
                <p className="text-[11px] font-sans text-brand-gray mt-1 leading-normal">
                  Inorganic polyester fiber fills and technical foams formulated to prevent the propagation of mold, mildew, and musty odors.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Warning / Quality Assurance Note */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-50 rounded-full text-amber-600 mb-4">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h3 className="font-condensed text-xl font-bold uppercase text-brand-navy">
            Strict Quality Assurance Standards
          </h3>
          <p className="mt-2 font-sans text-xs text-brand-gray uppercase tracking-widest font-semibold">
            Corporate Accountability Notice
          </p>
          <p className="mt-4 font-sans text-sm text-brand-charcoal leading-relaxed max-w-2xl mx-auto">
            We provide exact physical specifications, thickness measurements, density data, and flame rating sheets for all products. True North does not utilize unverified certification badges or marketing gimmicks. We supply genuine, verified laboratory testing paperwork directly to your regional procurement auditor upon request.
          </p>
          <div className="mt-8">
            <button
              onClick={() => onNavigate('quote')}
              className="bg-brand-red hover:bg-[#C21320] text-white font-condensed font-bold uppercase tracking-wider py-3.5 px-8 text-sm rounded-sm transition-colors cursor-pointer"
            >
              Request Compliance Paperwork
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
