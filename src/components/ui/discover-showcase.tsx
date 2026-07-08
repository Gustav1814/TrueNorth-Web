import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BlurFade } from '@/components/ui/blur-fade';
import { EyebrowText, FadeInText, SplitWords } from './animated-text';

export interface DiscoverSlide {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  images: [string, string, string, string];
}

export interface DiscoverShowcaseProps {
  slides: DiscoverSlide[];
  onCtaClick?: (index: number) => void;
  autoPlayMs?: number;
  className?: string;
}

const imageCorners = [
  'rounded-tl-[1.35rem] rounded-br-[1rem] sm:rounded-tl-[1.75rem] sm:rounded-br-[1.15rem]',
  'rounded-tr-[1.35rem] rounded-bl-[1rem] sm:rounded-tr-[1.75rem] sm:rounded-bl-[1.15rem]',
  'rounded-bl-[1.35rem] rounded-tr-[1rem] sm:rounded-bl-[1.75rem] sm:rounded-tr-[1.15rem]',
  'rounded-br-[1.35rem] rounded-tl-[1rem] sm:rounded-br-[1.75rem] sm:rounded-tl-[1.15rem]',
] as const;

export const DiscoverShowcase: React.FC<DiscoverShowcaseProps> = ({
  slides,
  onCtaClick,
  autoPlayMs = 7000,
  className,
}) => {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const goTo = (index: number) => {
    setActive((index + slides.length) % slides.length);
    setProgress(0);
  };

  const goNext = () => goTo(active + 1);
  const goPrev = () => goTo(active - 1);

  useEffect(() => {
    setProgress(0);
    const step = 50;
    let elapsed = 0;
    let advanced = false;

    const timer = window.setInterval(() => {
      if (advanced) return;

      elapsed += step;
      const pct = Math.min(100, (elapsed / autoPlayMs) * 100);
      setProgress(pct);

      if (elapsed >= autoPlayMs) {
        advanced = true;
        setActive((current) => (current + 1) % slides.length);
      }
    }, step);

    return () => window.clearInterval(timer);
  }, [active, autoPlayMs, slides.length]);

  const slide = slides[active];

  return (
    <section
      className={cn(
        'discover-showcase relative overflow-hidden py-16 text-white sm:py-20 lg:py-24',
        className
      )}
    >
      <div className="absolute inset-0 starburst-pattern-dark opacity-45" />
      <div className="discover-showcase__glow pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-8 flex items-center justify-between gap-4 lg:mb-10">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-surface/55">
            {String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </p>
          <div className="hidden items-center gap-2 lg:flex">
            {slides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-500',
                  active === index ? 'w-10 bg-brand-red' : 'w-2 bg-white/25 hover:bg-white/40'
                )}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <EyebrowText className="text-xs font-black uppercase tracking-[0.24em] text-brand-red">
                  {slide.eyebrow}
                </EyebrowText>

                <SplitWords
                  as="h2"
                  text={slide.title}
                  animation="blurInUp"
                  by="word"
                  className="mt-4 font-condensed text-4xl font-black uppercase leading-[0.9] text-white sm:text-5xl lg:text-6xl"
                />

                <div className="mt-6 h-px w-14 bg-white/20" />

                <div className="mt-6 h-0.5 w-full max-w-sm overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-brand-red"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.04, ease: 'linear' }}
                  />
                </div>

                <FadeInText
                  animateOnMount
                  delay={0.1}
                  className="mt-6 max-w-lg text-base font-medium leading-relaxed text-brand-surface/85 sm:text-lg"
                >
                  {slide.description}
                </FadeInText>

                <button
                  type="button"
                  onClick={() => onCtaClick?.(active)}
                  className="saas-button-hover mt-8 inline-flex items-center gap-3 bg-brand-red px-8 py-4 font-condensed text-base font-bold uppercase tracking-wider text-white shadow-saas-md transition-all hover:bg-[#9F1F1F] hover:shadow-saas-lg"
                >
                  {slide.ctaLabel}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center gap-3 lg:hidden">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous slide"
                className="discover-showcase__nav flex h-11 w-11 items-center justify-center rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {slides.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={cn(
                      'h-1.5 rounded-full transition-all duration-500',
                      active === index ? 'w-8 bg-brand-red' : 'w-2 bg-white/30'
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next slide"
                className="discover-showcase__nav flex h-11 w-11 items-center justify-center rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous slide"
                className="discover-showcase__nav absolute -left-2 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full lg:flex"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next slide"
                className="discover-showcase__nav absolute -right-2 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full lg:flex"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.title}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="discover-image-grid mx-auto grid max-w-md grid-cols-2 gap-3 sm:max-w-lg sm:gap-3.5 lg:max-w-xl"
                >
                  {slide.images.map((src, index) => (
                    <BlurFade
                      key={`${slide.title}-${index}`}
                      delay={0.06 + index * 0.06}
                      direction="up"
                      offset={10}
                      blur="3px"
                      className="h-full"
                    >
                      <div
                        className={cn(
                          'discover-image-tile group relative aspect-[5/4] overflow-hidden bg-brand-navy',
                          imageCorners[index]
                        )}
                      >
                        <img
                          src={src}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/35 via-transparent to-transparent opacity-80" />
                      </div>
                    </BlurFade>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
