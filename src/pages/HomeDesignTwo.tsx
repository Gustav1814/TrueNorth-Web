import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Building2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  FileText,
  GraduationCap,
  HeartHandshake,
  Layers,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { Logo } from '../components/Logo';
import { PageId } from '../types';

interface HomeDesignTwoProps {
  onNavigate: (page: PageId) => void;
}

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const HomeDesignTwo: React.FC<HomeDesignTwoProps> = ({ onNavigate }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageSlides = [
    {
      label: 'Campus Housing',
      title: 'Residence renewal programs',
      image: '/images/hero-campus.jpg',
      meta: 'Twin XL / turnover windows',
    },
    {
      label: 'Shelter Systems',
      title: 'Sanitizable high-use beds',
      image: '/images/hero-shelter.jpg',
      meta: 'Fluid-proof / rapid reset',
    },
    {
      label: 'Remote Camps',
      title: 'Freight-ready workforce lodging',
      image: '/images/hero-camp.jpg',
      meta: 'Palletized / national routing',
    },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % imageSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [imageSlides.length]);

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + imageSlides.length) % imageSlides.length);
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % imageSlides.length);
  };

  const metrics = [
    ['Response', '24 hr'],
    ['Cover Weight', '10-12 oz'],
    ['Facility Sectors', '6'],
    ['Delivery Desk', 'Canada'],
    ['Programs', 'Bulk'],
    ['Documentation', 'Spec-ready'],
  ];

  const productRows = [
    {
      type: 'Shelter & Transition Housing',
      instruments: ['Fluid-proof vinyl', 'Inverted seams', 'Cleaning guidance'],
      opportunity: 'High-turnover mattresses designed for sanitation cycles, pest resistance, and fast room reset.',
      page: 'shelters' as PageId,
    },
    {
      type: 'Residence & Campus Programs',
      instruments: ['Twin XL matrix', 'Reversible cores', 'Room delivery plan'],
      opportunity: 'Standardized renewal programs for summer move-in windows, student housing towers, and repeat replacement cycles.',
      page: 'university-housing' as PageId,
    },
    {
      type: 'Workforce & Remote Camps',
      instruments: ['Pallet freight', 'Commercial support cores', 'Remote routing'],
      opportunity: 'Freight-aware sleep systems for resource camps, seasonal lodging, and rotational workforce accommodation.',
      page: 'industrial-camps' as PageId,
    },
  ];

  const solutionCards = [
    {
      title: 'Quality & Compliance',
      desc: 'Material notes, fire documentation, care instructions, and cleaning guidance prepared for purchasing review.',
      icon: ShieldCheck,
      page: 'quality' as PageId,
      stats: ['Spec files', 'Care sheets', 'Compliance notes'],
    },
    {
      title: 'Products & Programs',
      desc: 'Commercial covers, seam systems, support cores, and procurement packages matched to facility risk.',
      icon: BedDouble,
      page: 'products' as PageId,
      stats: ['Covers', 'Cores', 'Seams'],
    },
    {
      title: 'Delivery & Service',
      desc: 'Coordinated freight planning for campuses, camps, shelters, healthcare, and multi-site institutional programs.',
      icon: Truck,
      page: 'delivery' as PageId,
      stats: ['Routing', 'Windows', 'Receiving'],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-brand-navy">
      <header className="sticky top-0 z-50 border-b border-brand-border bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-24 max-w-[112rem] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Logo variant="horizontal" onClick={() => onNavigate('home-design-2')} />

          <nav className="hidden items-center gap-9 text-xs font-black uppercase tracking-[0.2em] text-brand-navy/70 lg:flex">
            <button onClick={() => document.getElementById('overview-v2')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-brand-red">Overview</button>
            <button onClick={() => document.getElementById('products-v2')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-brand-red">Systems</button>
            <button onClick={() => document.getElementById('solutions-v2')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-brand-red">Solutions</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-brand-red">Contact</button>
          </nav>

          <button
            onClick={() => onNavigate('quote')}
            className="inline-flex items-center gap-2 rounded-sm bg-brand-red px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-white shadow-saas-sm transition-colors hover:bg-[#C21320]"
          >
            Request Quote <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </header>

      <main>
        <section className="border-b border-brand-border bg-white">
          <div className="mx-auto max-w-[112rem] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-start">
              <motion.div
                variants={reveal}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-brand-red">
                  <span>Commercial Mattress Supply</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span>
                  <span>Institutional Procurement</span>
                </div>

                <h1 className="max-w-6xl font-condensed text-6xl font-black uppercase leading-[0.88] text-brand-navy sm:text-8xl lg:text-[10rem]">
                  Institutional Mattress Systems
                </h1>

                <p className="mt-8 max-w-4xl text-xl leading-relaxed text-brand-charcoal">
                  We combine facility-specific product specification with bulk ordering support to provide durable mattress programs for shelters, campuses, healthcare, correctional facilities, camps, and workforce housing.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => onNavigate('quote')}
                    className="inline-flex items-center justify-center gap-3 rounded-sm bg-brand-red px-7 py-4 font-condensed text-lg font-bold uppercase tracking-wider text-white shadow-saas-md transition-colors hover:bg-[#C21320]"
                  >
                    Start Quote File <ArrowRight className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => document.getElementById('products-v2')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center justify-center gap-3 rounded-sm border border-brand-border bg-white px-7 py-4 font-condensed text-lg font-bold uppercase tracking-wider text-brand-navy shadow-saas-sm transition-colors hover:border-brand-red hover:text-brand-red"
                  >
                    View Systems
                  </button>
                </div>

                <div className="mt-10 grid grid-cols-2 border-y border-brand-border md:grid-cols-3">
                  {metrics.map(([label, value]) => (
                    <div key={label} className="border-b border-r border-brand-border p-5 last:border-r-0 md:border-b-0">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-gray">{label}</p>
                      <div className="mt-4 font-condensed text-4xl font-black uppercase leading-none text-brand-navy">{value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="grid gap-5 lg:mt-8"
                variants={reveal}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative min-h-[390px] overflow-hidden rounded-sm bg-brand-deep shadow-saas-premium">
                  {imageSlides.map((slide, index) => (
                    <img
                      key={slide.title}
                      src={slide.image}
                      alt={slide.title}
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                        activeSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/88 via-brand-deep/18 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-red">
                      {imageSlides[activeSlide].label}
                    </p>
                    <h2 className="mt-2 font-condensed text-5xl font-black uppercase leading-none">
                      {imageSlides[activeSlide].title}
                    </h2>
                    <p className="mt-3 text-sm font-bold uppercase tracking-wider text-brand-surface/76">
                      {imageSlides[activeSlide].meta}
                    </p>
                  </div>
                  <div className="absolute right-5 top-5 flex gap-2">
                    <button
                      type="button"
                      onClick={showPreviousSlide}
                      aria-label="Previous image"
                      className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/92 text-brand-navy shadow-saas-sm hover:bg-white"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNextSlide}
                      aria-label="Next image"
                      className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/92 text-brand-navy shadow-saas-sm hover:bg-white"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="absolute left-5 top-5 flex gap-2">
                    {imageSlides.map((slide, index) => (
                      <button
                        key={slide.label}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Show ${slide.label}`}
                        className={`h-1.5 rounded-full transition-all ${
                          activeSlide === index ? 'w-12 bg-brand-red' : 'w-7 bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-[1fr_0.86fr]">
                  <div className="rounded-sm border border-brand-border bg-brand-bg p-6">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red">Procurement Desk</p>
                    <h2 className="mt-3 font-condensed text-4xl font-black uppercase leading-none text-brand-navy">
                      Built for high-use facilities, not retail showrooms.
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-brand-gray">
                      Clear material choices, commercial-grade construction, specification support, and coordinated delivery across Canada.
                    </p>
                    <button
                      onClick={() => onNavigate('quote')}
                      className="mt-8 inline-flex items-center gap-2 font-condensed text-xl font-black uppercase text-brand-red hover:text-[#C21320]"
                    >
                      Start a quote file <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="rounded-sm bg-brand-navy p-6 text-white">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red">Current File</p>
                    <h3 className="mt-3 font-condensed text-4xl font-black uppercase leading-none">840 Unit Campus Brief</h3>
                    <div className="mt-6 space-y-3">
                      {['Cover approved', 'Freight in review', 'Specs ready'].map((item) => (
                        <div key={item} className="flex items-center gap-3 border-t border-white/12 pt-3 text-sm font-bold text-brand-surface">
                          <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-brand-red text-white">
                            <ClipboardCheck className="h-4 w-4" />
                          </span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        <section className="bg-brand-bg py-8">
          <div className="mx-auto grid max-w-[112rem] grid-cols-1 gap-6 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
            <div className="relative min-h-[560px] overflow-hidden rounded-sm lg:col-span-7">
              <img src="/images/hero-campus.jpg" alt="Campus housing mattress program" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-surface/80">Featured Program</p>
                <h2 className="mt-2 font-condensed text-5xl font-black uppercase leading-none">Residence Renewal</h2>
              </div>
            </div>

            <div className="grid gap-6 lg:col-span-5">
              <div className="relative min-h-[267px] overflow-hidden rounded-sm">
                <img src="/images/hero-shelter.jpg" alt="Shelter mattress systems" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-brand-deep/45"></div>
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-surface/80">Sanitation Focus</p>
                  <h3 className="mt-2 font-condensed text-4xl font-black uppercase leading-none">Shelter Turnover</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-sm bg-brand-red p-7 text-white">
                  <PackageCheck className="h-8 w-8" />
                  <h3 className="mt-10 font-condensed text-4xl font-black uppercase leading-none">Quote Ready</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/82">Intake, spec, quantity, freight, and delivery assumptions in one commercial file.</p>
                </div>
                <div className="rounded-sm bg-brand-navy p-7 text-white">
                  <MapPin className="h-8 w-8 text-brand-red" />
                  <h3 className="mt-10 font-condensed text-4xl font-black uppercase leading-none">Canada Desk</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-surface/82">Coordinated shipments for campuses, camps, shelters, and regional programs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="overview-v2" className="bg-white py-24">
          <div className="mx-auto grid max-w-[112rem] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[0.48fr_0.52fr] lg:px-12">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-sm font-black uppercase tracking-[0.24em] text-brand-red">Disciplined Specification</span>
              <h2 className="mt-5 font-condensed text-6xl font-black uppercase leading-none text-brand-navy sm:text-7xl">
                Built around strong, lasting facility relationships
              </h2>
            </motion.div>

            <motion.div
              className="space-y-7 text-lg leading-relaxed text-brand-charcoal"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <p>
                True North helps commercial buyers standardize mattress programs around hygiene, durability, operational turnover, documentation, and delivery constraints.
              </p>
              <p>
                We offer flexible institutional mattress systems tailored to each facility type, with clear product construction and procurement-ready support.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="bg-brand-deep py-20 text-white">
          <div className="mx-auto max-w-[112rem] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="rounded-sm border border-white/12 bg-white/7 p-7 lg:col-span-4">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-red">Procurement Console</p>
                <h2 className="mt-4 font-condensed text-5xl font-black uppercase leading-none">Facility Intake Snapshot</h2>
                <p className="mt-5 text-base leading-relaxed text-brand-surface/76">
                  Give buyers immediate confidence with visible quote status, required details, and document readiness.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:col-span-8">
                <div className="rounded-sm bg-white p-6 text-brand-navy">
                  <div className="flex items-center justify-between border-b border-brand-border pb-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red">Quote Builder</p>
                      <h3 className="mt-1 font-condensed text-3xl font-black uppercase leading-none">Program Inputs</h3>
                    </div>
                    <PackageCheck className="h-8 w-8 text-brand-red" />
                  </div>
                  <div className="mt-5 grid gap-3">
                    {[
                      ['Facility Type', 'University Housing'],
                      ['Quantity Range', '500-1,000 units'],
                      ['Delivery Window', 'Summer turnover'],
                    ].map(([label, value]) => (
                      <div key={label} className="grid grid-cols-[8rem_1fr] gap-4 rounded-sm bg-brand-bg p-3">
                        <span className="text-xs font-black uppercase tracking-wider text-brand-gray">{label}</span>
                        <span className="text-sm font-bold text-brand-navy">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-sm bg-white p-6 text-brand-navy">
                  <div className="flex items-center justify-between border-b border-brand-border pb-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red">Document Pack</p>
                      <h3 className="mt-1 font-condensed text-3xl font-black uppercase leading-none">Ready for Review</h3>
                    </div>
                    <FileText className="h-8 w-8 text-brand-red" />
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {['Product specs', 'Care guide', 'Freight notes', 'Compliance file'].map((item) => (
                      <div key={item} className="rounded-sm border border-brand-border p-4">
                        <ClipboardCheck className="h-5 w-5 text-brand-red" />
                        <p className="mt-5 text-xs font-black uppercase tracking-wider text-brand-navy">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products-v2" className="border-y border-brand-border bg-brand-bg py-24">
          <div className="mx-auto max-w-[112rem] px-5 sm:px-8 lg:px-12">
            <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <span className="text-sm font-black uppercase tracking-[0.24em] text-brand-red">Our Systems</span>
                <h2 className="mt-4 font-condensed text-6xl font-black uppercase leading-none text-brand-navy sm:text-7xl">Product Programs</h2>
              </div>
              <button
                onClick={() => onNavigate('products')}
                className="inline-flex w-fit items-center gap-2 font-condensed text-xl font-black uppercase text-brand-red hover:text-[#C21320]"
              >
                View all products <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <motion.div
              className="overflow-hidden rounded-sm border border-brand-border bg-white shadow-saas-md"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="hidden grid-cols-[0.27fr_0.28fr_0.45fr] border-b border-brand-border bg-brand-navy px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-white lg:grid">
                <span>Product Type</span>
                <span>System Components</span>
                <span>Facility Opportunity</span>
              </div>

              {productRows.map((row) => (
                <motion.button
                  key={row.type}
                  onClick={() => onNavigate(row.page)}
                  variants={reveal}
                  className="grid w-full grid-cols-1 gap-5 border-b border-brand-border p-6 text-left transition-colors last:border-b-0 hover:bg-brand-surface/60 lg:grid-cols-[0.27fr_0.28fr_0.45fr]"
                >
                  <h3 className="font-condensed text-4xl font-black uppercase leading-none text-brand-navy">{row.type}</h3>
                  <div className="space-y-2">
                    {row.instruments.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm font-bold text-brand-charcoal">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span>
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-base leading-relaxed text-brand-gray">{row.opportunity}</p>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-brand-red" />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="solutions-v2" className="bg-white py-24">
          <div className="mx-auto max-w-[112rem] px-5 sm:px-8 lg:px-12">
            <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-end">
              <div>
                <span className="text-sm font-black uppercase tracking-[0.24em] text-brand-red">Other Capabilities</span>
                <h2 className="mt-4 font-condensed text-6xl font-black uppercase leading-none text-brand-navy sm:text-7xl">Support Solutions</h2>
              </div>
              <p className="max-w-3xl text-lg leading-relaxed text-brand-charcoal">
                Beyond the mattress itself, True North supports procurement teams with technical files, rollout planning, and service coordination.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {solutionCards.map((card) => {
                const Icon = card.icon;
                return (
                  <button
                    key={card.title}
                    onClick={() => onNavigate(card.page)}
                    className="group rounded-sm border border-brand-border bg-white p-7 text-left shadow-saas-sm transition-all hover:-translate-y-1 hover:border-brand-navy hover:shadow-saas-lg"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-brand-surface text-brand-red">
                        <Icon className="h-7 w-7" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-brand-red transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <h3 className="mt-10 font-condensed text-4xl font-black uppercase leading-none text-brand-navy">{card.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-brand-gray">{card.desc}</p>
                    <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-sm bg-brand-border">
                      {card.stats.map((stat) => (
                        <div key={stat} className="bg-brand-bg p-3 text-xs font-black uppercase tracking-wider text-brand-navy">
                          {stat}
                        </div>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-deep py-24 text-white">
          <div className="absolute inset-0 opacity-20">
            <img src="/images/hero-camp.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="relative z-10 mx-auto grid max-w-[112rem] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.6fr] lg:items-end lg:px-12">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.24em] text-brand-red">Next Step</span>
              <h2 className="mt-5 max-w-5xl font-condensed text-6xl font-black uppercase leading-none sm:text-7xl">
                The opportunity to standardize, protect, and plan ahead
              </h2>
            </div>
            <div className="rounded-sm border border-white/12 bg-white/10 p-7 backdrop-blur-xl">
              <p className="text-base leading-relaxed text-brand-surface/86">
                Tell us about your facility, quantities, sizing, and delivery window. We will prepare a commercial quote file with the right system recommendation.
              </p>
              <button
                onClick={() => onNavigate('quote')}
                className="mt-8 inline-flex items-center gap-3 rounded-sm bg-brand-red px-7 py-4 font-condensed text-lg font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#C21320]"
              >
                Contact us <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
