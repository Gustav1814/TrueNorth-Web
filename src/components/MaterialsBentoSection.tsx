import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Boxes,
  ClipboardCheck,
  Layers,
  Repeat,
  Ruler,
  ShieldCheck,
  Truck,
  Waves,
} from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { EyebrowText, FadeInText, SplitWords } from './ui/animated-text';
import { PageId } from '../types';

interface MaterialsBentoSectionProps {
  onNavigate: (page: PageId) => void;
}

const highlightCards = [
  {
    title: 'Fluid-proof cover options',
    description: 'Wipe-clean covers engineered for shelters, healthcare, and high-hygiene facility environments.',
    icon: Waves,
  },
  {
    title: 'Sealed seam construction',
    description: 'Continuous seam protection that supports infection-control protocols and repeated deep cleaning.',
    icon: Ruler,
  },
  {
    title: 'Wipe-clean surfaces',
    description: 'Non-porous finishes selected for operational turnover, not consumer showroom aesthetics.',
    icon: ShieldCheck,
  },
];

const additionalFeatures = [
  { title: 'Commercial mattress cores', icon: Layers },
  { title: 'Inventory-friendly sizing', icon: Boxes },
  { title: 'Specification support', icon: ClipboardCheck },
  { title: 'Replacement planning', icon: Repeat },
  { title: 'Freight and rollout coordination', icon: Truck },
];

const materialImages = [
  { src: '/images/hero-shelter.jpg', alt: 'Institutional shelter mattress environment' },
  { src: '/images/hero-campus.jpg', alt: 'University residence mattress supply' },
  { src: '/images/hero-camp.jpg', alt: 'Remote camp mattress program' },
];

const imageFloat = [
  { y: [0, -10, 0], rotate: -6 },
  { y: [0, 8, 0], rotate: 0 },
  { y: [0, -8, 0], rotate: 6 },
];

export const MaterialsBentoSection: React.FC<MaterialsBentoSectionProps> = ({ onNavigate }) => {
  const [requirements, setRequirements] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onNavigate('resources');
  };

  return (
    <section id="materials" className="relative overflow-hidden bg-brand-bg py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 starburst-pattern opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/35 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          <BlurFade
            delay={0.05}
            direction="up"
            offset={16}
            inView
            className="materials-bento-main flex flex-col items-center rounded-[2rem] border border-brand-border/80 bg-white px-7 py-12 text-center shadow-saas-lg sm:px-11 sm:py-14 lg:col-span-7 lg:px-14 lg:py-16"
          >
            <EyebrowText className="text-xs font-black uppercase tracking-[0.24em] text-brand-red">
              Materials & Control
            </EyebrowText>

            <SplitWords
              as="h2"
              text="Specified for Durability, Hygiene, and Operational Control"
              animation="blurInUp"
              by="word"
              className="mt-5 max-w-2xl font-condensed text-4xl font-black uppercase leading-[0.92] text-brand-deep sm:text-5xl lg:text-[3.4rem]"
            />

            <div className="mt-6 h-px w-14 bg-brand-border" />

            <FadeInText
              className="mt-6 max-w-lg text-base font-medium leading-relaxed text-brand-gray sm:text-lg"
              delay={0.08}
            >
              Covers, seams, cores, sizing, and logistics are selected around the facility environment, not consumer showroom language.
            </FadeInText>

            <div className="relative mx-auto mt-12 mb-9 h-48 w-full max-w-md sm:h-52">
              {materialImages.map((image, index) => {
                const positions = [
                  'left-[6%] top-8 z-0',
                  'left-1/2 top-0 z-20 -translate-x-1/2',
                  'right-[6%] top-10 z-10',
                ];

                return (
                  <motion.div
                    key={image.src}
                    className={`materials-bento-orbit absolute h-[7.5rem] w-[7.5rem] overflow-hidden rounded-full border-[5px] border-white shadow-saas-premium sm:h-[8.75rem] sm:w-[8.75rem] ${positions[index]}`}
                    initial={{ opacity: 0, scale: 0.88, y: 18 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{
                      y: imageFloat[index].y,
                      rotate: imageFloat[index].rotate,
                    }}
                    transition={{
                      opacity: { duration: 0.55, delay: 0.12 + index * 0.1, ease: [0.16, 1, 0.3, 1] },
                      scale: { duration: 0.55, delay: 0.12 + index * 0.1, ease: [0.16, 1, 0.3, 1] },
                      y: { duration: 5.5 + index, repeat: Infinity, ease: 'easeInOut' },
                      rotate: { duration: 5.5 + index, repeat: Infinity, ease: 'easeInOut' },
                    }}
                  >
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                    <div className="bento-image-grain pointer-events-none absolute inset-0" />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-50 mix-blend-multiply"
                      style={{
                        background:
                          index === 0
                            ? 'linear-gradient(135deg, rgba(227,27,43,0.28), transparent 62%)'
                            : index === 1
                              ? 'linear-gradient(135deg, rgba(10,35,66,0.35), transparent 65%)'
                              : 'linear-gradient(135deg, rgba(234,241,247,0.55), transparent 60%)',
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>

            <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand-gray/80 sm:text-sm">
              Specification sheets, cover details, and material documentation available for procurement review.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center"
            >
              <input
                type="text"
                value={requirements}
                onChange={(event) => setRequirements(event.target.value)}
                placeholder="Facility environment, cover requirements, sizing"
                className="w-full rounded-full border border-brand-border bg-brand-bg px-5 py-3.5 text-sm font-medium text-brand-charcoal outline-none transition-all placeholder:text-brand-gray/75 focus:border-brand-deep/35 focus:bg-white focus:shadow-saas-sm sm:flex-1 sm:text-base"
                aria-label="Material specification requirements"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-deep px-7 py-3.5 font-condensed text-base font-bold uppercase tracking-wider text-white shadow-saas-md transition-all hover:bg-brand-navy hover:shadow-saas-lg"
              >
                Request Specifications
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </BlurFade>

          <div className="flex flex-col gap-5 lg:col-span-5">
            {highlightCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <BlurFade
                  key={card.title}
                  delay={0.1 + index * 0.08}
                  direction="up"
                  offset={14}
                  inView
                >
                  <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="materials-bento-card group flex min-h-[172px] flex-col rounded-[2rem] border border-brand-border/80 bg-white px-7 py-8 shadow-saas-md sm:px-8 sm:py-9"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="max-w-[16rem] font-condensed text-2xl font-black uppercase leading-[0.95] text-brand-deep sm:text-3xl">
                        {card.title}
                      </h3>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-border bg-brand-bg text-brand-red shadow-saas-sm transition-colors group-hover:border-brand-red/25 group-hover:bg-brand-red/5">
                        <Icon className="h-4 w-4" strokeWidth={2} />
                      </span>
                    </div>
                    <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed text-brand-gray sm:text-base">
                      {card.description}
                    </p>
                  </motion.article>
                </BlurFade>
              );
            })}
          </div>
        </div>

        <BlurFade delay={0.2} direction="up" offset={12} inView className="mt-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 + index * 0.05 }}
                  className="materials-bento-chip flex items-center gap-3 rounded-2xl border border-brand-border/80 bg-white px-5 py-4 shadow-saas-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-deep text-white shadow-saas-sm">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] leading-snug text-brand-deep sm:text-sm">
                    {feature.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </BlurFade>
      </div>
    </section>
  );
};
