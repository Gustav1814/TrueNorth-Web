import React, { useEffect, useState } from 'react';
import { PageId } from '../types';
import { 
  ShieldAlert, 
  Truck, 
  Layers, 
  Compass, 
  ArrowRight, 
  Users, 
  GraduationCap, 
  HeartHandshake, 
  ShieldCheck, 
  FileText, 
  Volume2,
  Calendar,
  ClipboardCheck,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Factory,
  Sparkles
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroSlides = [
    {
      label: 'University Housing',
      title: 'Residence turnover programs',
      desc: 'Twin XL and bunk-ready systems standardized for campus housing, workforce residences, and long-term replacement cycles.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1400&q=85',
      stat: '12K+',
      statLabel: 'beds planned annually'
    },
    {
      label: 'Shelters & Transitional Housing',
      title: 'Fast clean, high-use durability',
      desc: 'Fluid-proof covers, sealed seam options, and material documentation for intensive room turnover environments.',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=85',
      stat: '24 hr',
      statLabel: 'quote intake response'
    },
    {
      label: 'Remote Camps',
      title: 'Coordinated site logistics',
      desc: 'Bulk ordering support for seasonal camps, industrial accommodations, and remote workforce housing programs.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85',
      stat: 'CA',
      statLabel: 'nationwide freight desk'
    }
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  const industries = [
    {
      id: 'shelters' as PageId,
      title: 'Shelters',
      desc: 'Hygiene-conscious, bed-bug resistant mattresses built for transition housing and shelters.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
      icon: <HeartHandshake className="w-7 h-7 text-brand-red" />
    },
    {
      id: 'summer-camps' as PageId,
      title: 'Summer Camps',
      desc: 'Mold-resistant, highly durable bunk mattresses engineered for active seasonal camp life.',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80',
      icon: <Compass className="w-7 h-7 text-brand-red" />
    },
    {
      id: 'university-housing' as PageId,
      title: 'University Housing',
      desc: 'Residence-grade reversible comfort models with exceptional sagging resistance.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80',
      icon: <GraduationCap className="w-7 h-7 text-brand-red" />
    },
    {
      id: 'hospitals' as PageId,
      title: 'Hospitals',
      desc: 'Fluid-proof, chemical-resistant clinical mattresses conforming to healthcare standards.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
      icon: <ShieldCheck className="w-7 h-7 text-brand-red" />
    },
    {
      id: 'correctional-facilities' as PageId,
      title: 'Correctional Facilities',
      desc: 'Vandal-resistant, stitchless sealed seam security beds with integrated pillows.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
      icon: <ShieldAlert className="w-7 h-7 text-brand-red" />
    },
    {
      id: 'industrial-camps' as PageId,
      title: 'Industrial Camps',
      desc: 'Rugged workforce mattresses designed for remote resource camps and site operations.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
      icon: <Truck className="w-7 h-7 text-brand-red" />
    },
  ];

  return (
    <div className="w-full">
      
      {/* 2. HERO SECTION */}
      <section className="relative bg-brand-deep text-white overflow-hidden border-b border-white/10">
        
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.title}
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                activeSlide === index ? 'opacity-45' : 'opacity-0'
              }`}
              referrerPolicy="no-referrer"
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/90 to-brand-navy/55"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-brand-deep/25"></div>
          <div className="absolute inset-0 starburst-pattern-dark"></div>
        </div>

        <div className="relative z-10 max-w-[92rem] mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center min-h-[760px] lg:min-h-[800px]">
          
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2.5 bg-white/10 text-white text-xs md:text-sm font-sans font-bold tracking-[0.18em] px-4 py-2 uppercase rounded-sm mb-7 shadow-sm border border-white/10 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-brand-red" />
              Canadian Commercial Procurement
            </div>
            <h1 className="font-condensed text-6xl sm:text-7xl md:text-8xl xl:text-[6.5rem] font-extrabold tracking-tight uppercase leading-[0.9] text-white max-w-5xl">
              Institutional Mattresses <br />
              <span className="gradient-text font-black">Built for the Places People Rely On.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl font-sans text-brand-border/90 max-w-3xl leading-relaxed">
              Durable, compliance-ready mattress solutions for shelters, camps, university housing, healthcare, correctional facilities, and workforce accommodations across Canada. Engineered specifically for intensive commercial usage.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('quote')}
                className="saas-button-hover bg-brand-red hover:bg-[#C21320] text-white font-condensed font-bold uppercase tracking-widest py-5 px-10 rounded-sm shadow-md hover:shadow-saas-glow transition-all text-center select-none cursor-pointer text-base"
              >
                Request a Quote
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('industries-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="saas-button-hover bg-transparent hover:bg-white/5 text-white font-condensed font-bold uppercase tracking-widest py-5 px-10 border border-white/25 rounded-sm transition-all text-center select-none cursor-pointer text-base"
              >
                Explore Industries
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
              {[
                ['10-12 oz', 'commercial covers'],
                ['3', 'core programs'],
                ['100%', 'B2B supply focus']
              ].map(([value, label]) => (
                <div key={label} className="bg-white/[0.07] border border-white/10 p-5 rounded-sm backdrop-blur-md">
                  <div className="font-condensed text-3xl md:text-4xl font-black text-white uppercase leading-none">
                    {value}
                  </div>
                  <div className="mt-2 text-xs md:text-sm font-sans font-bold uppercase tracking-wider text-brand-border/75">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full">
            <div className="relative h-[520px] md:h-[600px] border border-white/15 bg-brand-deep shadow-saas-premium rounded-sm overflow-hidden">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.label}
                  className={`absolute inset-0 transition-all duration-700 ${
                    activeSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center absolute inset-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-navy/45 to-transparent"></div>
                </div>
              ))}

              <div className="absolute top-6 left-6 right-6 z-20 flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1 bg-white/95 text-brand-navy px-5 py-4 rounded-sm shadow-saas-md">
                  <p className="text-xs font-sans font-extrabold text-brand-red uppercase tracking-[0.2em]">
                    Active Sector
                  </p>
                  <p className="font-condensed text-2xl md:text-3xl font-black uppercase leading-none mt-1 break-words">
                    {heroSlides[activeSlide].label}
                  </p>
                </div>

                <div className="shrink-0 max-w-[44%] bg-brand-red text-white px-4 md:px-5 py-4 rounded-sm shadow-saas-glow text-right">
                  <p className="font-condensed text-3xl md:text-4xl font-black uppercase leading-none">
                    {heroSlides[activeSlide].stat}
                  </p>
                  <p className="text-[10px] md:text-xs font-sans font-extrabold uppercase tracking-wider opacity-90 leading-tight">
                    {heroSlides[activeSlide].statLabel}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-20 text-left p-6 md:p-8">
                <div className="bg-brand-deep/95 border border-white/10 border-l-2 border-l-brand-red p-6 rounded-sm shadow-saas-lg backdrop-blur-md">
                  <p className="text-xs font-sans font-extrabold text-brand-red uppercase tracking-[0.2em]">
                    Facility Highlight
                  </p>
                  <h4 className="font-condensed text-3xl md:text-4xl font-black text-white uppercase mt-1 leading-none">
                    {heroSlides[activeSlide].title}
                  </h4>
                  <p className="text-sm md:text-base font-sans text-brand-border/80 mt-3 leading-relaxed">
                    {heroSlides[activeSlide].desc}
                  </p>
                </div>
              </div>

              <div className="absolute left-6 bottom-72 z-30 flex gap-2">
                <button
                  type="button"
                  onClick={showPreviousSlide}
                  aria-label="Previous hero slide"
                  className="w-12 h-12 inline-flex items-center justify-center bg-white/95 hover:bg-white text-brand-navy rounded-sm shadow-saas-md transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={showNextSlide}
                  aria-label="Next hero slide"
                  className="w-12 h-12 inline-flex items-center justify-center bg-white/95 hover:bg-white text-brand-navy rounded-sm shadow-saas-md transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2.5 mt-5">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.label}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show ${slide.label} slide`}
                  className={`h-2 rounded-full transition-all ${
                    activeSlide === index ? 'w-14 bg-brand-red' : 'w-10 bg-white/25 hover:bg-white/45'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

        <div className="relative z-10 border-t border-white/10 bg-brand-deep/80 backdrop-blur-md">
          <div className="max-w-[92rem] mx-auto px-5 sm:px-8 lg:px-10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm font-sans text-brand-border/80">
            <span className="inline-flex items-center gap-2 font-bold uppercase tracking-wider">
              <Factory className="w-5 h-5 text-brand-red" />
              Commercial programs only
            </span>
            <span className="inline-flex items-center gap-2 font-bold uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5 text-brand-red" />
              Material sheets and compliance support
            </span>
            <span className="inline-flex items-center gap-2 font-bold uppercase tracking-wider">
              <Truck className="w-5 h-5 text-brand-red" />
              Multi-site delivery coordination
            </span>
          </div>
        </div>
      </section>

      {/* 3. TRUST / VALUE STRIP */}
      <section className="bg-white border-b border-brand-border py-10">
        <div className="max-w-[92rem] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-x-0 divide-y lg:divide-y-0 lg:divide-x divide-brand-border">
            
            <div className="flex flex-col items-center text-center px-4 pt-4 lg:pt-0">
              <Layers className="w-9 h-9 text-brand-navy mb-3" />
              <h4 className="font-condensed text-lg font-bold text-brand-navy uppercase tracking-wider">
                Built for High-Use
              </h4>
              <p className="text-sm font-sans text-brand-gray mt-1.5">
                Engineered for maximum turnover.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-4 lg:pt-0">
              <ClipboardCheck className="w-9 h-9 text-brand-navy mb-3" />
              <h4 className="font-condensed text-lg font-bold text-brand-navy uppercase tracking-wider">
                Bulk & Commercial Ordering
              </h4>
              <p className="text-sm font-sans text-brand-gray mt-1.5">
                Optimized price brackets for volume.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-4 lg:pt-0">
              <Users className="w-9 h-9 text-brand-navy mb-3" />
              <h4 className="font-condensed text-lg font-bold text-brand-navy uppercase tracking-wider">
                Procurement Support
              </h4>
              <p className="text-sm font-sans text-brand-gray mt-1.5">
                Technical sheets & compliant RFPs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-4 lg:pt-0">
              <Truck className="w-9 h-9 text-brand-navy mb-3" />
              <h4 className="font-condensed text-lg font-bold text-brand-navy uppercase tracking-wider">
                Practical Logistics
              </h4>
              <p className="text-sm font-sans text-brand-gray mt-1.5">
                Coordinated shipping across Canada.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES SERVED */}
      <section id="industries-section" className="py-28 bg-brand-bg starburst-pattern">
        <div className="max-w-[92rem] mx-auto px-5 sm:px-8 lg:px-10 text-center">
          
          <span className="text-brand-red text-sm font-sans font-bold tracking-[0.25em] uppercase block">
            OPERATIONAL INDUSTRIES
          </span>
          <h2 className="font-condensed text-5xl md:text-7xl font-black text-brand-navy uppercase tracking-tight mt-3">
            Procurement Sectors We Supply
          </h2>
          <div className="w-20 h-1.5 bg-brand-red mx-auto mt-5"></div>
          
          <p className="mt-6 font-sans text-lg text-brand-gray max-w-4xl mx-auto leading-relaxed">
            Every facility has distinct compliance, wear, and cleaning standards. Select an industry category below to view customized material specs and ordering guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {industries.map((ind) => (
              <div
                key={ind.id}
                onClick={() => onNavigate(ind.id)}
                className="group relative bg-white border border-brand-border/60 rounded-sm overflow-hidden shadow-saas-md hover:shadow-saas-lg hover:border-brand-navy transition-all duration-300 cursor-pointer text-left"
              >
                {/* Visual Header */}
                <div className="relative h-72 w-full overflow-hidden bg-brand-navy">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-brand-navy/40 group-hover:bg-brand-navy/75 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-white text-brand-navy font-condensed font-extrabold uppercase text-base tracking-wider py-4 px-7 rounded-sm transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      View Specifications
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    {ind.icon}
                    <h3 className="font-condensed text-3xl font-bold text-brand-navy uppercase tracking-wider group-hover:text-brand-red transition-colors">
                      {ind.title}
                    </h3>
                  </div>
                  <p className="text-base font-sans text-brand-charcoal leading-relaxed">
                    {ind.desc}
                  </p>
                  
                  <div className="mt-7 pt-6 border-t border-brand-border/50 flex items-center justify-between text-brand-navy text-sm font-sans font-bold uppercase tracking-wider group-hover:text-brand-red transition-colors">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-5 h-5 text-brand-red transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. PRODUCT / SOLUTION SECTION */}
      <section className="py-28 bg-white border-t border-b border-brand-border/60 starburst-pattern">
        <div className="max-w-[92rem] mx-auto px-5 sm:px-8 lg:px-10">
          
          <div className="text-center max-w-5xl mx-auto mb-20">
            <span className="text-brand-red text-sm font-sans font-bold tracking-[0.25em] uppercase block">
              OUR MATTRESS LINES
            </span>
            <h2 className="font-condensed text-5xl md:text-7xl font-black text-brand-navy uppercase tracking-tight mt-3">
              Built Around Your Facility’s Reality
            </h2>
            <div className="w-20 h-1.5 bg-brand-red mx-auto mt-5"></div>
            <p className="mt-6 font-sans text-lg text-brand-gray leading-relaxed">
              We do not sell home comfort products. We engineer high-durability, safety-rated cores combined with chemical-resistant and secure fabrics for Canadian professional organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
            
            {/* Card 1 */}
            <div className="bg-brand-bg border border-brand-border/60 hover:border-brand-navy/60 p-10 flex flex-col justify-between shadow-saas-md hover:shadow-saas-lg rounded-sm transition-all duration-300">
              <div>
                <span className="text-xs font-sans font-extrabold text-brand-navy bg-brand-surface px-3.5 py-2 uppercase tracking-[0.15em] rounded-sm inline-block mb-6 border border-brand-border/40">
                  01 / WIPEOUT SERIES
                </span>
                <h3 className="font-condensed text-4xl font-black text-brand-navy uppercase tracking-wide mb-4 leading-none">
                  Institutional Systems
                </h3>
                <p className="text-base font-sans text-brand-charcoal leading-relaxed mb-8">
                  Perfect for transition shelters, medical rest-zones, and housing with extreme turnarounds. Highly fluid-proof reinforced vinyl or nylon covers combined with inverted bed-bug-resistant seams. Easily scrubbed, disinfected, and re-allocated.
                </p>
                <div className="w-full h-px bg-brand-border/40 my-6"></div>
                <ul className="space-y-4 font-sans text-base text-brand-charcoal mb-10">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                    <span>Waterproof RF-Welded stitchless options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                    <span>10 oz. vinyl heavy friction outer wraps</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                    <span>Bleach-dilution disinfected covers</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('products')}
                className="saas-button-hover w-full text-center bg-brand-navy hover:bg-brand-deep text-white font-condensed font-bold uppercase tracking-wider py-4 text-base rounded-sm transition-colors cursor-pointer"
              >
                Explore Solutions
              </button>
            </div>

            {/* Card 2 (SaaS Highlight Tier) */}
            <div className="bg-brand-deep border-2 border-brand-red p-10 flex flex-col justify-between shadow-saas-glow rounded-sm transition-all duration-300 relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-red text-white text-xs font-sans font-extrabold tracking-widest px-4 py-2 uppercase rounded-sm shadow-sm">
                MOST SPECIFIED SECURITY STANDARDS
              </div>
              <div>
                <span className="text-xs font-sans font-extrabold text-white bg-brand-red px-3.5 py-2 uppercase tracking-[0.15em] rounded-sm inline-block mb-6">
                  02 / ARMOUR SERIES
                </span>
                <h3 className="font-condensed text-4xl font-black text-white uppercase tracking-wide mb-4 leading-none">
                  High-Durability Solutions
                </h3>
                <p className="text-base font-sans text-brand-surface/80 leading-relaxed mb-8">
                  Specifically optimized for correctional cells, maximum security, and behavioral safety wards. Seamless, radio-frequency heat-sealed vinyl that prevents contraband hiding. Available with solid molded integrated pillows to optimize custody safety.
                </p>
                <div className="w-full h-px bg-white/10 my-6"></div>
                <ul className="space-y-4 font-sans text-base text-brand-surface/90 mb-10">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                    <span>No-stitch, non-pick security covers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                    <span>Integrated pillow configurations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                    <span>Flame-block core self-extinguishing</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('products')}
                className="saas-button-hover w-full text-center bg-brand-red hover:bg-[#C21320] text-white font-condensed font-bold uppercase tracking-wider py-4 text-base rounded-sm transition-colors cursor-pointer shadow-md"
              >
                Explore Solutions
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-brand-bg border border-brand-border/60 hover:border-brand-navy/60 p-10 flex flex-col justify-between shadow-saas-md hover:shadow-saas-lg rounded-sm transition-all duration-300">
              <div>
                <span className="text-xs font-sans font-extrabold text-brand-navy bg-brand-surface px-3.5 py-2 uppercase tracking-[0.15em] rounded-sm inline-block mb-6 border border-brand-border/40">
                  03 / HORIZON SERIES
                </span>
                <h3 className="font-condensed text-4xl font-black text-brand-navy uppercase tracking-wide mb-4 leading-none">
                  Bulk & Custom Programs
                </h3>
                <p className="text-base font-sans text-brand-charcoal leading-relaxed mb-8">
                  Engineered for summer camps, student residences, and industrial workforce camps. Lightweight, mildew-resistant polyester fiber cores or dense polyurethane foam configurations that facilitate fast bulk turnovers and seasonal warehousing.
                </p>
                <div className="w-full h-px bg-brand-border/40 my-6"></div>
                <ul className="space-y-4 font-sans text-base text-brand-charcoal mb-10">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                    <span>Breathable moisture-shedding fabrics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                    <span>Anti-mildew dry-core technology</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                    <span>Twin XL & custom camp cot sizes</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('products')}
                className="saas-button-hover w-full text-center bg-brand-navy hover:bg-brand-deep text-white font-condensed font-bold uppercase tracking-wider py-4 text-base rounded-sm transition-colors cursor-pointer"
              >
                Explore Solutions
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 6. WHY TRUE NORTH SECTION */}
      <section className="bg-brand-deep text-white py-28 relative overflow-hidden starburst-pattern">
        
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px compass-line"></div>

        <div className="max-w-[92rem] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <span className="text-brand-red text-sm font-sans font-bold tracking-[0.25em] uppercase block">
                B2B CAPABILITY
              </span>
              <h2 className="font-condensed text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tight mt-3 leading-[0.95]">
                Operationally Ready.<br />
                Institutionally Built.
              </h2>
              <div className="w-16 h-1.5 bg-brand-red mt-5 mb-8"></div>
              <p className="text-lg font-sans text-brand-border/90 leading-relaxed">
                True North is a dedicated commercial supply partner. We focus on assisting procurement advisors, facility managers, and camp directors with transparent material specifications, strict safety ratings, and dependable logistics.
              </p>
              
              <div className="mt-10 border-l-4 border-brand-red pl-5 py-2 text-base font-sans text-brand-gray leading-relaxed">
                No consumer marketing, no retail clearance games, and no home-delivery retail fees. Direct commercial volume pricing.
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
                <h3 className="font-condensed text-2xl font-bold text-white uppercase tracking-wider flex items-center gap-3">
                  <span className="text-brand-red text-lg font-mono">[1]</span>
                  Durable Materials
                </h3>
                <p className="text-base font-sans text-brand-gray mt-3 leading-relaxed">
                  We use heavy-gauge materials: 10-12 oz vinyl coatings, heavy nylon fabrics, and high-density supportive foam structures tested under extreme, repetitive loading environments.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
                <h3 className="font-condensed text-2xl font-bold text-white uppercase tracking-wider flex items-center gap-3">
                  <span className="text-brand-red text-lg font-mono">[2]</span>
                  Clear Specifications
                </h3>
                <p className="text-base font-sans text-brand-gray mt-3 leading-relaxed">
                  We supply comprehensive technical specification manuals, flammability test documentation, and maintenance guidelines required for regional tenders and audits.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
                <h3 className="font-condensed text-2xl font-bold text-white uppercase tracking-wider flex items-center gap-3">
                  <span className="text-brand-red text-lg font-mono">[3]</span>
                  Flexible Bulk Ordering
                </h3>
                <p className="text-base font-sans text-brand-gray mt-3 leading-relaxed">
                  Scale orders according to your facility needs. We support repeat seasonal programs, replacement rotations, and initial setup projects with clear commercial terms.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
                <h3 className="font-condensed text-2xl font-bold text-white uppercase tracking-wider flex items-center gap-3">
                  <span className="text-brand-red text-lg font-mono">[4]</span>
                  Rollout Assistance
                </h3>
                <p className="text-base font-sans text-brand-gray mt-3 leading-relaxed">
                  We assist with national and regional facility rollouts, working directly with transport managers to deliver to sites, camps, housing towers, and secure complexes.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 7. PROCUREMENT PROCESS */}
      <section className="py-28 bg-white border-b border-brand-border">
        <div className="max-w-[92rem] mx-auto px-5 sm:px-8 lg:px-10 text-center">
          
          <span className="text-brand-red text-sm font-sans font-bold tracking-[0.25em] uppercase block">
            HOW WE PARTNER
          </span>
          <h2 className="font-condensed text-5xl md:text-7xl font-black text-brand-navy uppercase tracking-tight mt-3">
            The Procurement Timeline
          </h2>
          <div className="w-20 h-1.5 bg-brand-red mx-auto mt-5"></div>

          <div className="relative mt-20 max-w-7xl mx-auto">
            {/* Connection Line Desktop */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-brand-navy/10 -translate-y-1/2 hidden lg:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              
              {/* Step 1 */}
              <div className="bg-brand-bg lg:bg-white border border-brand-border p-8 text-left rounded-sm relative group hover:border-brand-navy transition-colors shadow-saas-sm">
                <span className="font-condensed text-6xl font-extrabold text-brand-red block mb-4 leading-none">
                  01.
                </span>
                <h4 className="font-condensed text-2xl font-bold text-brand-navy uppercase tracking-wider mb-3 leading-none">
                  Tell Us About Your Facility
                </h4>
                <p className="text-base font-sans text-brand-charcoal leading-relaxed">
                  Submit dimensions, quantity estimates, and target delivery locations using our commercial quote form.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-brand-bg lg:bg-white border border-brand-border p-8 text-left rounded-sm relative group hover:border-brand-navy transition-colors shadow-saas-sm">
                <span className="font-condensed text-6xl font-extrabold text-brand-red block mb-4 leading-none">
                  02.
                </span>
                <h4 className="font-condensed text-2xl font-bold text-brand-navy uppercase tracking-wider mb-3 leading-none">
                  Review the Right Solution
                </h4>
                <p className="text-base font-sans text-brand-charcoal leading-relaxed">
                  A dedicated commercial manager recommends the ideal covers, cores, and seam styles to match your compliance laws.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-brand-bg lg:bg-white border border-brand-border p-8 text-left rounded-sm relative group hover:border-brand-navy transition-colors shadow-saas-sm">
                <span className="font-condensed text-6xl font-extrabold text-brand-red block mb-4 leading-none">
                  03.
                </span>
                <h4 className="font-condensed text-2xl font-bold text-brand-navy uppercase tracking-wider mb-3 leading-none">
                  Approve Your Quote
                </h4>
                <p className="text-base font-sans text-brand-charcoal leading-relaxed">
                  Review our complete, transparent bulk price quote with precise commercial transport costs.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-brand-bg lg:bg-white border border-brand-border p-8 text-left rounded-sm relative group hover:border-brand-navy transition-colors shadow-saas-sm">
                <span className="font-condensed text-6xl font-extrabold text-brand-red block mb-4 leading-none">
                  04.
                </span>
                <h4 className="font-condensed text-2xl font-bold text-brand-navy uppercase tracking-wider mb-3 leading-none">
                  Coordinate Delivery
                </h4>
                <p className="text-base font-sans text-brand-charcoal leading-relaxed">
                  Our shipping desk delivers directly to your facility or camp coordinates, matching your timeline schedule.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 8. QUALITY / SPECIFICATION SECTION */}
      <section className="py-28 bg-brand-bg starburst-pattern">
        <div className="max-w-[92rem] mx-auto px-5 sm:px-8 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 text-left">
              <span className="text-brand-red text-sm font-sans font-bold tracking-[0.25em] uppercase block">
                TECHNICAL DOCUMENTATION
              </span>
              <h2 className="font-condensed text-5xl md:text-7xl font-black text-brand-navy uppercase tracking-tight mt-3 leading-none">
                Quality & Material Specifications
              </h2>
              <div className="w-16 h-1.5 bg-brand-red mt-5 mb-8"></div>
              
              <p className="text-lg font-sans text-brand-charcoal leading-relaxed mb-8">
                All True North mattresses are constructed using non-toxic components, meeting fire, chemical, and hygiene guidelines for institutions in Canada. Download our resource packets to integrate with your upcoming requests.
              </p>
              
              <button
                onClick={() => onNavigate('resources')}
                className="inline-flex items-center gap-3 text-brand-red hover:text-[#C21320] font-sans font-bold uppercase text-base tracking-wider transition-colors"
              >
                Go to Resources <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              <div
                onClick={() => onNavigate('resources')}
                className="bg-white border border-brand-border p-8 rounded-sm shadow-saas-sm hover:shadow-saas-md hover:border-brand-navy cursor-pointer transition-all flex items-start gap-5"
              >
                <div className="p-4 bg-brand-surface rounded-sm text-brand-navy shrink-0">
                  <FileText className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <h4 className="font-condensed text-2xl font-bold text-brand-navy uppercase tracking-wider leading-none">
                    Product Specifications
                  </h4>
                  <p className="text-base font-sans text-brand-gray mt-3 leading-relaxed">
                    Direct technical dimensions, weight capacities, flammability reports, and vinyl-thick measurements.
                  </p>
                </div>
              </div>

              <div
                onClick={() => onNavigate('resources')}
                className="bg-white border border-brand-border p-8 rounded-sm shadow-saas-sm hover:shadow-saas-md hover:border-brand-navy cursor-pointer transition-all flex items-start gap-5"
              >
                <div className="p-4 bg-brand-surface rounded-sm text-brand-navy shrink-0">
                  <Volume2 className="w-7 h-7 text-brand-red" />
                </div>
                <div className="text-left">
                  <h4 className="font-condensed text-2xl font-bold text-brand-navy uppercase tracking-wider leading-none">
                    Care & Cleaning Guidance
                  </h4>
                  <p className="text-base font-sans text-brand-gray mt-3 leading-relaxed">
                    Permitted disinfectants, maximum chlorine dilutions, and thermal cleaning guidelines for facility staff.
                  </p>
                </div>
              </div>

              <div
                onClick={() => onNavigate('resources')}
                className="bg-white border border-brand-border p-8 rounded-sm shadow-saas-sm hover:shadow-saas-md hover:border-brand-navy cursor-pointer transition-all flex items-start gap-5"
              >
                <div className="p-4 bg-brand-surface rounded-sm text-brand-navy shrink-0">
                  <Calendar className="w-7 h-7 text-brand-red" />
                </div>
                <div className="text-left">
                  <h4 className="font-condensed text-2xl font-bold text-brand-navy uppercase tracking-wider leading-none">
                    Ordering Support
                  </h4>
                  <p className="text-base font-sans text-brand-gray mt-3 leading-relaxed">
                    Timelines, off-season storage strategies, freight logistics, and multi-facility shipment coordination.
                  </p>
                </div>
              </div>

              <div
                onClick={() => onNavigate('resources')}
                className="bg-white border border-brand-border p-8 rounded-sm shadow-saas-sm hover:shadow-saas-md hover:border-brand-navy cursor-pointer transition-all flex items-start gap-5"
              >
                <div className="p-4 bg-brand-surface rounded-sm text-brand-navy shrink-0">
                  <CheckCircle className="w-7 h-7 text-brand-navy" />
                </div>
                <div className="text-left">
                  <h4 className="font-condensed text-2xl font-bold text-brand-navy uppercase tracking-wider leading-none">
                    Facility Planning
                  </h4>
                  <p className="text-base font-sans text-brand-gray mt-3 leading-relaxed">
                    Bunk alignment specifications, mattress thickness safety guidelines, and space efficiency strategies.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 9. CASE STUDY / TESTIMONIAL SECTION */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          
          <span className="text-brand-red text-sm font-sans font-bold tracking-[0.25em] uppercase block">
            PARTNER VERDICT
          </span>
          <div className="w-16 h-1.5 bg-brand-red mx-auto mt-4 mb-10"></div>

          <div className="relative bg-brand-bg border-l-4 border-brand-red p-10 md:p-14 text-left rounded-sm shadow-saas-md">
            {/* Big quote mark icon */}
            <span className="absolute top-4 right-8 text-brand-surface font-serif text-9xl leading-none font-black select-none pointer-events-none opacity-50">
              “
            </span>
            
            <p className="font-sans text-xl md:text-2xl text-brand-navy font-medium italic leading-relaxed relative z-10">
              “True North helped us standardize our mattress program while making seasonal ordering and replacement planning much easier. The team was operationally capable and handled delivery to our multiple regional buildings precisely on time.”
            </p>
            
            <div className="mt-8 border-t border-brand-border pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h5 className="font-condensed text-xl font-bold text-brand-navy uppercase tracking-wider">
                  University Housing Client
                </h5>
                <p className="text-base font-sans text-brand-gray mt-1">
                  Ontario, Canada
                </p>
              </div>
              <span className="text-sm font-sans font-bold uppercase tracking-wider text-brand-navy bg-brand-surface px-4 py-2 rounded-sm">
                Housing Operations
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="bg-brand-navy text-white py-28 relative overflow-hidden starburst-pattern">
        <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
        
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 text-center relative z-10">
          <span className="text-brand-red text-sm font-sans font-bold tracking-[0.25em] uppercase block">
            READY TO ORDER
          </span>
          <h2 className="font-condensed text-5xl md:text-7xl font-black text-white uppercase tracking-tight mt-3">
            Need Mattresses That Can Handle Real Institutional Use?
          </h2>
          <p className="mt-6 font-sans text-lg md:text-xl text-brand-surface/90 max-w-4xl mx-auto leading-relaxed">
            Tell us about your facility, required quantity ranges, target timing, and delivery location. Our procurement advisors will prepare a comprehensive itemized quote with optimized shipping options.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => onNavigate('quote')}
              className="w-full sm:w-auto bg-brand-red hover:bg-[#C21320] text-white font-condensed font-bold uppercase tracking-wider py-5 px-12 rounded-sm shadow-md transition-colors text-center select-none cursor-pointer text-base"
            >
              Request a Quote
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-condensed font-bold uppercase tracking-wider py-5 px-12 border border-brand-border rounded-sm transition-colors text-center select-none cursor-pointer text-base"
            >
              Contact Support Desk
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-8 text-base text-brand-gray">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-red" /> Verified Canadian Corporate Supplier
            </span>
            <span className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-brand-red" /> Bulk Shipping Coordinated Nationwide
            </span>
          </div>

        </div>
      </section>

    </div>
  );
};
