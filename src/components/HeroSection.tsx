import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { TextAnimate } from '@/components/ui/text-animate';
import { BlurFade } from '@/components/ui/blur-fade';
import { PageId } from '../types';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-brand-deep text-white lg:min-h-screen">
      <motion.img
        src="/images/hero-campus.jpg"
        alt="Commercial mattress supply program staged for institutional facilities"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 8, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#02070D]/72 via-brand-deep/36 to-brand-deep/72" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/64 via-transparent to-brand-deep/46" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#02070D]/82 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[96rem] flex-col items-center justify-center px-5 pb-16 pt-32 text-center sm:px-8 lg:min-h-screen lg:px-10">
        <BlurFade delay={0.08} direction="up" offset={10} blur="5px">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.26em] text-white/82 backdrop-blur-md">
            <span className="h-2 w-2 bg-brand-red" />
            Canada-Wide Institutional Supply
          </div>
        </BlurFade>

        <h1 className="sr-only">
          Commercial Mattress Supply for Canadian Facilities
        </h1>

        <TextAnimate
          as="h2"
          animation="blurInUp"
          by="word"
          startOnView={false}
          once
          duration={0.82}
          className="mx-auto max-w-5xl font-sans text-5xl font-semibold leading-[0.96] tracking-normal text-white sm:text-7xl lg:text-[6rem]"
        >
          Commercial Mattress Supply
        </TextAnimate>

        <BlurFade delay={0.28} direction="up" offset={10} blur="5px" className="mx-auto mt-6 max-w-2xl">
          <p className="text-lg font-semibold leading-relaxed text-white/82 sm:text-2xl">
            Durable. Cleanable. Procurement-ready.
          </p>
        </BlurFade>

        <BlurFade delay={0.4} direction="up" offset={10} blur="5px" className="mt-9">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate('quote')}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-red px-7 py-4 font-condensed text-base font-black uppercase tracking-wider text-white shadow-saas-md transition-colors hover:bg-[#B91622]"
            >
              Request a Quote <ArrowRight className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => document.getElementById('product-lines')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/24 bg-white/10 px-7 py-4 font-condensed text-base font-black uppercase tracking-wider text-white backdrop-blur-md transition-colors hover:bg-white/16"
            >
              Product Lines
            </button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};
