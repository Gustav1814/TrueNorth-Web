import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { 
  ShieldAlert, 
  Truck, 
  Layers, 
  Compass, 
  ArrowRight, 
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
  PackageCheck,
  Ruler,
  Sparkles,
  Zap
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const reveal = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroSlides = [
    {
      label: 'University Housing',
      title: 'Residence turnover programs',
      desc: 'Twin XL and bunk-ready systems standardized for campus housing, workforce residences, and long-term replacement cycles.',
      image: '/images/hero-campus.jpg',
      stat: '12K+',
      statLabel: 'beds planned annually'
    },
    {
      label: 'Shelters & Transitional Housing',
      title: 'Fast clean, high-use durability',
      desc: 'Fluid-proof covers, sealed seam options, and material documentation for intensive room turnover environments.',
      image: '/images/hero-shelter.jpg',
      stat: '24 hr',
      statLabel: 'quote intake response'
    },
    {
      label: 'Remote Camps',
      title: 'Coordinated site logistics',
      desc: 'Bulk ordering support for seasonal camps, industrial accommodations, and remote workforce housing programs.',
      image: '/images/hero-camp.jpg',
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

  const trustMetrics = [
    { value: '10-12 oz', label: 'commercial covers', icon: Layers },
    { value: '24 hr', label: 'quote response target', icon: Zap },
    { value: '3', label: 'core product systems', icon: PackageCheck },
    { value: 'CA', label: 'national freight desk', icon: Truck },
  ];

  const productLayers = [
    {
      title: 'Fluid-Proof Cover',
      desc: 'Heavy coated vinyl or medical polyurethane tuned for repeated sanitation cycles.',
      icon: ShieldCheck,
    },
    {
      title: 'Sealed Seam System',
      desc: 'Lock-stitch or RF-welded construction selected around facility risk and turnover.',
      icon: Ruler,
    },
    {
      title: 'Commercial Core',
      desc: 'High-density support structures built for repeat occupancy and replacement planning.',
      icon: Layers,
    },
    {
      title: 'Procurement Kit',
      desc: 'Spec sheets, compliance notes, freight details, and rollout support for approvals.',
      icon: ClipboardCheck,
    },
  ];

  return (
    <div className="w-full">
      
      {/* 2. HERO SECTION */}
      <section className="relative bg-brand-deep text-white overflow-hidden border-b border-white/10">
        <h1 className="sr-only">
          True North Mattress Supply institutional mattresses for Canadian commercial facilities
        </h1>

        <div className="relative h-[580px] sm:h-[680px] lg:h-[820px]">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.title}
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                activeSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
              }`}
              referrerPolicy="no-referrer"
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/20 to-brand-deep/25"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/55 via-transparent to-brand-deep/45"></div>
          <div className="absolute inset-0 premium-grid-overlay opacity-45"></div>

          <motion.div
            className="absolute bottom-24 left-5 right-5 z-10 sm:bottom-28 sm:left-8 sm:right-auto sm:w-[calc(100%-4rem)] sm:max-w-3xl"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="premium-glass premium-sheen min-w-0 overflow-hidden rounded-sm p-5 sm:p-7">
              <div className="flex flex-wrap items-center gap-3 text-xs font-sans font-extrabold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-brand-surface">
                <Sparkles className="h-4 w-4 text-brand-red" />
                <span>{heroSlides[activeSlide].label}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span>
                <span>{heroSlides[activeSlide].stat} {heroSlides[activeSlide].statLabel}</span>
              </div>
              <h2 className="mt-3 break-words font-condensed text-xl font-black uppercase leading-tight text-white sm:text-6xl sm:leading-none">
                {heroSlides[activeSlide].title}
              </h2>
              <p className="mt-4 hidden max-w-2xl break-words text-sm leading-relaxed text-brand-surface sm:block sm:text-base">
                {heroSlides[activeSlide].desc}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => onNavigate('quote')}
                  className="saas-button-hover bg-brand-red px-7 py-3.5 font-condensed text-base font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#C21320]"
                >
                  Request a Quote
                </button>
                <button
                  onClick={() => document.getElementById('premium-systems')?.scrollIntoView({ behavior: 'smooth' })}
                  className="saas-button-hover border border-white/25 bg-white/10 px-7 py-3.5 font-condensed text-base font-bold uppercase tracking-wider text-white hover:bg-white/15"
                >
                  View Systems
                </button>
              </div>
            </div>
          </motion.div>

          <div className="absolute left-5 sm:left-8 lg:left-10 bottom-7 sm:bottom-10 z-10 flex items-center gap-2.5">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.label}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${slide.label} slide`}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === index ? 'w-12 sm:w-14 bg-brand-red' : 'w-8 sm:w-10 bg-white/55 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          <div className="absolute right-5 sm:right-8 lg:right-10 bottom-7 sm:bottom-10 z-10 hidden sm:flex gap-2">
            <button
              type="button"
              onClick={showPreviousSlide}
              aria-label="Previous hero slide"
              className="w-11 h-11 sm:w-12 sm:h-12 inline-flex items-center justify-center bg-white/95 hover:bg-white text-brand-navy rounded-sm shadow-saas-md transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={showNextSlide}
              aria-label="Next hero slide"
              className="w-11 h-11 sm:w-12 sm:h-12 inline-flex items-center justify-center bg-white/95 hover:bg-white text-brand-navy rounded-sm shadow-saas-md transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. TRUST / VALUE STRIP */}
      <section className="bg-white border-b border-brand-border py-10">
        <div className="max-w-[92rem] mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-brand-border"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {trustMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  variants={reveal}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col items-center px-4 pt-4 text-center lg:pt-0"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-sm bg-brand-surface text-brand-navy transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-brand-navy group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="font-condensed text-4xl font-black uppercase leading-none text-brand-navy">
                    {metric.value}
                  </div>
                  <p className="mt-2 text-sm font-sans font-bold uppercase tracking-wider text-brand-gray">
                    {metric.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="premium-systems" className="relative overflow-hidden bg-brand-deep py-24 text-white">
        <div className="absolute inset-0 starburst-pattern-dark opacity-70"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/60 to-transparent"></div>
        <div className="relative z-10 mx-auto grid max-w-[92rem] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
          <motion.div
            className="lg:col-span-5"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-sm font-sans font-bold uppercase tracking-[0.25em] text-brand-red">
              Interactive Product Logic
            </span>
            <h2 className="mt-3 font-condensed text-5xl font-black uppercase leading-none text-white md:text-7xl">
              Every Layer Has a Job
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-surface/85 md:text-lg">
              The system is engineered like procurement infrastructure: cover, seam, core, and documentation all work together for cleaning, compliance, and rollout speed.
            </p>
            <button
              onClick={() => onNavigate('products')}
              className="mt-8 inline-flex items-center gap-3 bg-brand-red px-8 py-4 font-condensed text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#C21320]"
            >
              Explore Products <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:col-span-7"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {productLayers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={layer.title}
                  variants={reveal}
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="premium-glass rounded-sm p-6"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-white/10 text-brand-red">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-sm font-bold text-white/35">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 font-condensed text-3xl font-black uppercase leading-none text-white">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-surface/80">
                    {layer.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
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

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
          >
            {industries.map((ind) => (
              <motion.button
                key={ind.id}
                type="button"
                onClick={() => onNavigate(ind.id)}
                variants={reveal}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
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
              </motion.button>
            ))}
          </motion.div>

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
              Built Around Your Facility's Reality
            </h2>
            <div className="w-20 h-1.5 bg-brand-red mx-auto mt-5"></div>
            <p className="mt-6 font-sans text-lg text-brand-gray leading-relaxed">
              We do not sell home comfort products. We engineer high-durability, safety-rated cores combined with chemical-resistant and secure fabrics for Canadian professional organizations.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
          >
            
            {/* Card 1 */}
            <motion.div
              variants={reveal}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="bg-brand-bg border border-brand-border/60 hover:border-brand-navy/60 p-10 flex flex-col justify-between shadow-saas-md hover:shadow-saas-lg rounded-sm transition-all duration-300"
            >
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
            </motion.div>

            {/* Card 2 (SaaS Highlight Tier) */}
            <motion.div
              variants={reveal}
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="bg-brand-deep border-2 border-brand-red p-10 flex flex-col justify-between shadow-saas-glow rounded-sm transition-all duration-300 relative"
            >
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
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={reveal}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="bg-brand-bg border border-brand-border/60 hover:border-brand-navy/60 p-10 flex flex-col justify-between shadow-saas-md hover:shadow-saas-lg rounded-sm transition-all duration-300"
            >
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
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* 6. WHY TRUE NORTH SECTION */}
      <section className="bg-brand-deep text-white py-28 relative overflow-hidden starburst-pattern">
        
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px compass-line"></div>

        <div className="max-w-[92rem] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              className="lg:col-span-5 flex flex-col items-start text-left"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
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
            </motion.div>

            <motion.div
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.22 }}
            >
              
              <motion.div variants={reveal} whileHover={{ y: -5 }} className="bg-white/5 border border-white/10 p-8 rounded-sm">
                <h3 className="font-condensed text-2xl font-bold text-white uppercase tracking-wider flex items-center gap-3">
                  <span className="text-brand-red text-lg font-mono">[1]</span>
                  Durable Materials
                </h3>
                <p className="text-base font-sans text-brand-gray mt-3 leading-relaxed">
                  We use heavy-gauge materials: 10-12 oz vinyl coatings, heavy nylon fabrics, and high-density supportive foam structures tested under extreme, repetitive loading environments.
                </p>
              </motion.div>

              <motion.div variants={reveal} whileHover={{ y: -5 }} className="bg-white/5 border border-white/10 p-8 rounded-sm">
                <h3 className="font-condensed text-2xl font-bold text-white uppercase tracking-wider flex items-center gap-3">
                  <span className="text-brand-red text-lg font-mono">[2]</span>
                  Clear Specifications
                </h3>
                <p className="text-base font-sans text-brand-gray mt-3 leading-relaxed">
                  We supply comprehensive technical specification manuals, flammability test documentation, and maintenance guidelines required for regional tenders and audits.
                </p>
              </motion.div>

              <motion.div variants={reveal} whileHover={{ y: -5 }} className="bg-white/5 border border-white/10 p-8 rounded-sm">
                <h3 className="font-condensed text-2xl font-bold text-white uppercase tracking-wider flex items-center gap-3">
                  <span className="text-brand-red text-lg font-mono">[3]</span>
                  Flexible Bulk Ordering
                </h3>
                <p className="text-base font-sans text-brand-gray mt-3 leading-relaxed">
                  Scale orders according to your facility needs. We support repeat seasonal programs, replacement rotations, and initial setup projects with clear commercial terms.
                </p>
              </motion.div>

              <motion.div variants={reveal} whileHover={{ y: -5 }} className="bg-white/5 border border-white/10 p-8 rounded-sm">
                <h3 className="font-condensed text-2xl font-bold text-white uppercase tracking-wider flex items-center gap-3">
                  <span className="text-brand-red text-lg font-mono">[4]</span>
                  Rollout Assistance
                </h3>
                <p className="text-base font-sans text-brand-gray mt-3 leading-relaxed">
                  We assist with national and regional facility rollouts, working directly with transport managers to deliver to sites, camps, housing towers, and secure complexes.
                </p>
              </motion.div>

            </motion.div>

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

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              
              {/* Step 1 */}
              <motion.div variants={reveal} whileHover={{ y: -7 }} className="bg-brand-bg lg:bg-white border border-brand-border p-8 text-left rounded-sm relative group hover:border-brand-navy transition-colors shadow-saas-sm">
                <span className="font-condensed text-6xl font-extrabold text-brand-red block mb-4 leading-none">
                  01.
                </span>
                <h4 className="font-condensed text-2xl font-bold text-brand-navy uppercase tracking-wider mb-3 leading-none">
                  Tell Us About Your Facility
                </h4>
                <p className="text-base font-sans text-brand-charcoal leading-relaxed">
                  Submit dimensions, quantity estimates, and target delivery locations using our commercial quote form.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div variants={reveal} whileHover={{ y: -7 }} className="bg-brand-bg lg:bg-white border border-brand-border p-8 text-left rounded-sm relative group hover:border-brand-navy transition-colors shadow-saas-sm">
                <span className="font-condensed text-6xl font-extrabold text-brand-red block mb-4 leading-none">
                  02.
                </span>
                <h4 className="font-condensed text-2xl font-bold text-brand-navy uppercase tracking-wider mb-3 leading-none">
                  Review the Right Solution
                </h4>
                <p className="text-base font-sans text-brand-charcoal leading-relaxed">
                  A dedicated commercial manager recommends the ideal covers, cores, and seam styles to match your compliance laws.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div variants={reveal} whileHover={{ y: -7 }} className="bg-brand-bg lg:bg-white border border-brand-border p-8 text-left rounded-sm relative group hover:border-brand-navy transition-colors shadow-saas-sm">
                <span className="font-condensed text-6xl font-extrabold text-brand-red block mb-4 leading-none">
                  03.
                </span>
                <h4 className="font-condensed text-2xl font-bold text-brand-navy uppercase tracking-wider mb-3 leading-none">
                  Approve Your Quote
                </h4>
                <p className="text-base font-sans text-brand-charcoal leading-relaxed">
                  Review our complete, transparent bulk price quote with precise commercial transport costs.
                </p>
              </motion.div>

              {/* Step 4 */}
              <motion.div variants={reveal} whileHover={{ y: -7 }} className="bg-brand-bg lg:bg-white border border-brand-border p-8 text-left rounded-sm relative group hover:border-brand-navy transition-colors shadow-saas-sm">
                <span className="font-condensed text-6xl font-extrabold text-brand-red block mb-4 leading-none">
                  04.
                </span>
                <h4 className="font-condensed text-2xl font-bold text-brand-navy uppercase tracking-wider mb-3 leading-none">
                  Coordinate Delivery
                </h4>
                <p className="text-base font-sans text-brand-charcoal leading-relaxed">
                  Our shipping desk delivers directly to your facility or camp coordinates, matching your timeline schedule.
                </p>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </section>

      {/* 8. QUALITY / SPECIFICATION SECTION */}
      <section className="py-28 bg-brand-bg starburst-pattern">
        <div className="max-w-[92rem] mx-auto px-5 sm:px-8 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              className="lg:col-span-5 text-left"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
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
            </motion.div>

            <motion.div
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              
              <motion.div
                onClick={() => onNavigate('resources')}
                variants={reveal}
                whileHover={{ y: -6 }}
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
              </motion.div>

              <motion.div
                onClick={() => onNavigate('resources')}
                variants={reveal}
                whileHover={{ y: -6 }}
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
              </motion.div>

              <motion.div
                onClick={() => onNavigate('resources')}
                variants={reveal}
                whileHover={{ y: -6 }}
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
              </motion.div>

              <motion.div
                onClick={() => onNavigate('resources')}
                variants={reveal}
                whileHover={{ y: -6 }}
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
              </motion.div>

            </motion.div>

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

          <motion.div
            className="relative bg-brand-bg border-l-4 border-brand-red p-10 md:p-14 text-left rounded-sm shadow-saas-md"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Big quote mark icon */}
            <span className="absolute top-4 right-8 text-brand-surface font-serif text-9xl leading-none font-black select-none pointer-events-none opacity-50">
              "
            </span>
            
            <p className="font-sans text-xl md:text-2xl text-brand-navy font-medium italic leading-relaxed relative z-10">
              "True North helped us standardize our mattress program while making seasonal ordering and replacement planning much easier. The team was operationally capable and handled delivery to our multiple regional buildings precisely on time."
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
          </motion.div>

        </div>
      </section>

    </div>
  );
};
