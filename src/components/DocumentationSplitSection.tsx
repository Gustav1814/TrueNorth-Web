import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ClipboardCheck,
  FileText,
  Flame,
  Layers,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { EyebrowText, FadeInText, SplitWords } from './ui/animated-text';
import { PageId } from '../types';

interface DocumentationSplitSectionProps {
  onNavigate: (page: PageId) => void;
}

const documentationItems = [
  { title: 'Product specifications', icon: FileText },
  { title: 'Cover and material details', icon: Layers },
  { title: 'Fire-rating documentation', icon: Flame },
  { title: 'Care and cleaning guidance', icon: ShieldCheck },
  { title: 'Bulk quote records', icon: ClipboardCheck },
  { title: 'Freight and delivery coordination', icon: MapPin },
];

export const DocumentationSplitSection: React.FC<DocumentationSplitSectionProps> = ({ onNavigate }) => {
  return (
    <section id="documentation" className="relative grid min-h-[620px] grid-cols-1 lg:min-h-[760px] lg:grid-cols-2">
      <div className="doc-split-panel relative flex flex-col justify-center overflow-hidden px-7 py-20 text-white sm:px-12 lg:px-16 lg:py-24 xl:px-24">
        <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-brand-red/10 blur-3xl" />
        <div className="doc-split-grain pointer-events-none absolute inset-0 opacity-[0.14]" />

        <div className="relative z-10 max-w-xl">
          <BlurFade delay={0.04} direction="up" offset={10} blur="4px" inView>
            <EyebrowText className="text-xs font-black uppercase tracking-[0.24em] text-brand-red">
              Documentation
            </EyebrowText>
          </BlurFade>

          <SplitWords
            as="h2"
            text="Documentation for Confident Purchasing"
            animation="blurInUp"
            by="word"
            className="mt-5 max-w-xl font-condensed text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl"
          />

          <BlurFade delay={0.18} direction="up" offset={8} blur="3px" inView className="mt-8">
            <div className="h-px w-14 bg-white/25" />
          </BlurFade>

          <FadeInText
            className="mt-8 max-w-lg text-base font-medium leading-relaxed text-brand-surface/85 sm:text-lg"
            delay={0.12}
          >
            True North Mattress Supply supports institutional buyers with the documentation and product information needed for internal approvals, compliance review, and procurement files.
          </FadeInText>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {documentationItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <BlurFade
                  key={item.title}
                  delay={0.14 + index * 0.05}
                  direction="up"
                  offset={12}
                  blur="4px"
                  inView
                >
                  <button
                    type="button"
                    onClick={() => onNavigate('resources')}
                    className="doc-split-item group flex w-full items-center gap-3 px-4 py-3 text-left"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-brand-red transition-colors group-hover:border-brand-red/35 group-hover:bg-brand-red/10">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-brand-surface sm:text-[13px]">
                      {item.title}
                    </span>
                  </button>
                </BlurFade>
              );
            })}
          </ul>

          <BlurFade delay={0.42} direction="up" offset={10} blur="3px" inView className="mt-10">
            <button
              type="button"
              onClick={() => onNavigate('resources')}
              className="inline-flex items-center gap-3 bg-white px-8 py-4 font-condensed text-base font-bold uppercase tracking-wider text-brand-navy transition-colors hover:bg-brand-surface"
            >
              Request Documentation <ArrowRight className="h-5 w-5" />
            </button>
          </BlurFade>
        </div>
      </div>

      <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">
        <motion.img
          src="/images/hero-shelter.jpg"
          alt="Institutional facility served by True North Mattress Supply documentation programs"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/75 via-brand-deep/20 to-brand-deep/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/55 via-transparent to-brand-deep/15" />
        <div className="doc-split-grain pointer-events-none absolute inset-0 opacity-[0.12]" />

        <div className="pointer-events-none absolute inset-y-8 left-0 hidden w-px bg-white/15 lg:block" />

        <motion.div
          className="absolute bottom-10 right-10 hidden border border-white/12 bg-white/10 px-6 py-5 backdrop-blur-md lg:block"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-red">Procurement Files</p>
          <p className="mt-1 font-condensed text-3xl font-black uppercase leading-none text-white">Ready on Request</p>
        </motion.div>
      </div>
    </section>
  );
};
