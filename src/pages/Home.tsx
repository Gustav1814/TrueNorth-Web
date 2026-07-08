import React, { useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import {
  ArrowRight,
  Boxes,
  Compass,
  Factory,
  FileText,
  GraduationCap,
  HeartHandshake,
  Layers,
  Lock,
  Repeat,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  Truck,
} from 'lucide-react';
import { PageId } from '../types';
import { HeroSection } from '../components/HeroSection';
import { MaterialsBentoSection } from '../components/MaterialsBentoSection';
import { DocumentationSplitSection } from '../components/DocumentationSplitSection';
import { DiscoverShowcase } from '../components/ui/discover-showcase';
import { LogoSlider } from '../components/ui/logo-slider';
import {
  EyebrowText,
  FadeInText,
  ScrambleTitle,
  SectionHeading,
  SplitWords,
} from '../components/ui/animated-text';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const productSliderRef = useRef<HTMLElement | null>(null);
  const productSliderInView = useInView(productSliderRef, { amount: 0.35 });
  const { scrollYProgress: productScrollProgress } = useScroll({
    target: productSliderRef,
    offset: ['start end', 'end start'],
  });
  const productRailX = useTransform(productScrollProgress, [0, 1], ['8%', '-34%']);
  const productImageY = useTransform(productScrollProgress, [0, 1], [68, -58]);
  const productImageYAlt = useTransform(productScrollProgress, [0, 1], [-26, 52]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const trustPoints = [
    { label: 'Built for high-turnover environments', icon: Repeat },
    { label: 'Bulk order support', icon: Boxes },
    { label: 'Commercial-grade materials', icon: Layers },
    { label: 'Documentation available', icon: FileText },
    { label: 'Canada-wide freight coordination', icon: Truck },
  ];

  const productLines = [
    {
      title: 'Sealed Seam Mattresses',
      desc: 'Fluid-resistant, wipe-clean mattress systems for environments where hygiene and durability are non-negotiable.',
      image: '/images/hero-shelter.jpg',
      icon: ShieldCheck,
    },
    {
      title: 'Commercial Core Mattresses',
      desc: 'High-use mattress cores built for repeated occupancy, operational consistency, and long service cycles.',
      image: '/images/hero-campus.jpg',
      icon: Layers,
    },
    {
      title: 'Secure Facility Options',
      desc: 'Mattress solutions for controlled environments where safety, durability, and specification alignment matter.',
      image: '/images/hero-shelter.jpg',
      icon: ShieldAlert,
    },
    {
      title: 'Camp & Residence Programs',
      desc: 'Practical bulk mattress programs for seasonal camps, student residences, and remote workforce housing.',
      image: '/images/hero-camp.jpg',
      icon: Compass,
    },
  ];

  const sectors = [
    {
      id: 'shelters' as PageId,
      title: 'Shelters & Transitional Housing',
      detail: 'Turnover-ready, wipe-clean systems for high-use rooms and repeat sanitation cycles.',
      meta: 'Cleanability / turnover',
      image: '/images/hero-shelter.jpg',
      icon: HeartHandshake,
    },
    {
      id: 'university-housing' as PageId,
      title: 'University & Student Residences',
      detail: 'Standardized programs for move-in windows, Twin XL planning, and replacement cycles.',
      meta: 'Residence rollout',
      image: '/images/hero-campus.jpg',
      icon: GraduationCap,
    },
    {
      id: 'summer-camps' as PageId,
      title: 'Summer Camps',
      detail: 'Durable bunk and cot programs for seasonal occupancy, storage, and fast resets.',
      meta: 'Seasonal bulk',
      image: '/images/hero-camp.jpg',
      icon: Compass,
    },
    {
      id: 'industrial-camps' as PageId,
      title: 'Remote Industrial Camps',
      detail: 'Freight-aware mattress supply for remote housing, resource camps, and rotational workforces.',
      meta: 'Freight coordination',
      image: '/images/hero-camp.jpg',
      icon: Factory,
    },
    {
      id: 'hospitals' as PageId,
      title: 'Healthcare & Staff Rest Areas',
      detail: 'Fluid-proof, chemical-resistant configurations for staff rest and clinical-adjacent spaces.',
      meta: 'Material review',
      image: '/images/hero-shelter.jpg',
      icon: Stethoscope,
    },
    {
      id: 'correctional-facilities' as PageId,
      title: 'Correctional & Secure Facilities',
      detail: 'Secure options aligned to durability, inspection needs, and controlled environment requirements.',
      meta: 'Secure specs',
      image: '/images/hero-campus.jpg',
      icon: Lock,
    },
  ];

  const discoverSlides = [
    {
      eyebrow: 'Discover',
      title: 'Durability',
      description:
        'Explore institutional mattress systems engineered for shelters, residences, and high-turnover facilities — built with commercial-grade covers, sealed seams, and cores that hold up under repeat occupancy.',
      ctaLabel: 'View Product Lines',
      images: [
        '/images/hero-shelter.jpg',
        '/images/hero-campus.jpg',
        '/images/hero-camp.jpg',
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      ] as [string, string, string, string],
    },
    {
      eyebrow: 'Discover',
      title: 'Compliance',
      description:
        'Unveil specification-ready mattress programs with fluid-proof materials, fire-rating documentation, and care guidance aligned to procurement review and facility audit requirements.',
      ctaLabel: 'Request Documentation',
      images: [
        'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
        '/images/hero-shelter.jpg',
        'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
        '/images/hero-campus.jpg',
      ] as [string, string, string, string],
    },
    {
      eyebrow: 'Discover',
      title: 'Logistics',
      description:
        'Coordinate bulk mattress supply for remote camps, multi-building rollouts, and seasonal programs with Canada-wide freight support and clear commercial quoting.',
      ctaLabel: 'Request a Quote',
      images: [
        '/images/hero-camp.jpg',
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
        '/images/hero-campus.jpg',
        '/images/hero-shelter.jpg',
      ] as [string, string, string, string],
    },
  ];

  const handleDiscoverCta = (index: number) => {
    if (index === 0) onNavigate('products');
    else if (index === 1) onNavigate('resources');
    else onNavigate('quote');
  };

  return (
    <div className="w-full overflow-hidden bg-white">
      <HeroSection onNavigate={onNavigate} />

      <section className="relative overflow-hidden border-y border-brand-border bg-white py-5">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/70 to-transparent" />
        <LogoSlider
          speed={34}
          pauseOnHover
          blurLayers={8}
          blurIntensity={1.1}
          className="py-0"
          logos={trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.label}
                  className="flex h-full w-full items-center justify-center gap-4 px-8 py-4 opacity-72 transition-opacity hover:opacity-100"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-brand-bg text-brand-deep">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="whitespace-nowrap text-sm font-black uppercase tracking-[0.14em] text-brand-deep/72">
                    {point.label}
                  </span>
                </div>
              );
            })}
        />
      </section>

      <DiscoverShowcase
        slides={discoverSlides}
        onCtaClick={handleDiscoverCta}
        autoPlayMs={7000}
      />

      <section id="product-lines" className="bg-brand-bg py-24 starburst-pattern">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-8 lg:px-10">
          <motion.div
            className="mx-auto mb-14 max-w-6xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="Product Lines"
              title="Mattress Systems for Institutional Demand"
              animation="slideUp"
              className="mx-auto max-w-5xl"
              titleClassName="text-brand-deep"
              align="center"
            />
            <motion.p
              variants={reveal}
              className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-brand-gray sm:text-lg"
            >
              Image-led product programs for high-turnover spaces, sealed-surface requirements, and bulk facility rollouts.
            </motion.p>
          </motion.div>
        </div>

        <section ref={productSliderRef} className="relative overflow-hidden pb-8 pt-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-brand-bg to-transparent sm:w-44" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-brand-bg to-transparent sm:w-44" />

          <motion.div className="w-max" style={{ x: productRailX }}>
            <motion.div
              className="flex w-max gap-8 px-5 sm:gap-12 sm:px-10 lg:gap-16"
              animate={productSliderInView ? { x: ['0%', '-9%', '0%'] } : { x: '0%' }}
              transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
            >
              {[...productLines, ...productLines].map((product, index) => (
                <motion.button
                  key={`${product.title}-${index}`}
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="group relative h-[340px] w-[74vw] shrink-0 overflow-hidden bg-brand-deep text-left shadow-saas-premium sm:h-[440px] sm:w-[560px] lg:h-[500px] lg:w-[690px]"
                  style={{
                    y: index % 2 === 0 ? productImageY : productImageYAlt,
                    rotate: index % 3 === 0 ? -1.6 : index % 3 === 1 ? 1.2 : -0.5,
                  }}
                  whileHover={{ scale: 0.985 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src={product.image}
                    alt=""
                    className="h-full w-full object-cover opacity-92 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/82 via-brand-deep/18 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <span className="mb-3 inline-flex border border-white/18 bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      0{(index % productLines.length) + 1}
                    </span>
                    <h3 className="max-w-md font-condensed text-4xl font-black uppercase leading-none text-white sm:text-5xl">
                      {product.title}
                    </h3>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          <div className="mx-auto mt-16 flex max-w-[92rem] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
            <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-brand-gray">
              <span className="relative h-10 w-px overflow-hidden bg-brand-border">
                <motion.span
                  className="absolute left-0 top-0 h-5 w-px bg-brand-red"
                  animate={{ y: [0, 22, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                />
              </span>
              Scroll to move gallery
            </div>
            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 font-condensed text-lg font-black uppercase tracking-wider text-brand-deep transition-colors hover:text-brand-red"
            >
              View All Products <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </section>
      </section>

      <section id="sectors" className="bg-white py-24">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Explore Sectors"
            title="Supplying Mattress Programs Across High-Use Sectors"
            animation="scaleUp"
            by="word"
            className="mb-12 max-w-5xl"
            titleClassName="text-brand-deep"
          />

          <motion.div
            className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.14 }}
          >
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <motion.button
                  key={sector.id}
                  type="button"
                  onClick={() => onNavigate(sector.id)}
                  variants={reveal}
                  whileHover={{ y: -6 }}
                  className="group relative min-h-[420px] overflow-hidden bg-brand-deep text-left shadow-saas-md"
                >
                  <img
                    src={sector.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-72 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/46 to-transparent" />
                  <div className="absolute left-6 top-6 flex items-center gap-3 bg-white/95 px-4 py-3 text-brand-navy shadow-saas-md">
                    <Icon className="h-5 w-5 text-brand-red" />
                    <span className="text-xs font-black uppercase tracking-[0.16em]">{sector.meta}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <ScrambleTitle
                      text={sector.title}
                      as="h3"
                      className="text-4xl leading-none text-white"
                    />
                    <FadeInText className="mt-4 text-base leading-relaxed text-brand-surface/84" delay={0.06}>
                      {sector.detail}
                    </FadeInText>
                    <div className="mt-6 inline-flex items-center gap-2 font-condensed text-lg font-black uppercase tracking-wider text-white">
                      Explore Sector <ArrowRight className="h-5 w-5 text-brand-red transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      <MaterialsBentoSection onNavigate={onNavigate} />

      <DocumentationSplitSection onNavigate={onNavigate} />
    </div>
  );
};
