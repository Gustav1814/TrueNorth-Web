import React from 'react';
import { cn } from '@/lib/utils';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { BlurFade, type BlurFadeDirection } from '@/components/ui/blur-fade';
import { DiaTextReveal } from '@/components/ui/dia-text-reveal';
import { HyperText, type MotionElementType as HyperTextElementType } from '@/components/ui/hyper-text';
import { TextAnimate } from '@/components/ui/text-animate';
import { TypingAnimation } from '@/components/ui/typing-animation';

export type MagicAnimationVariant =
  | 'fadeIn'
  | 'blurIn'
  | 'blurInUp'
  | 'blurInDown'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'scaleUp'
  | 'scaleDown';

interface SplitWordsProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  animateOnMount?: boolean;
  animation?: MagicAnimationVariant;
  by?: 'word' | 'character' | 'line' | 'text';
  duration?: number;
}

export const SplitWords: React.FC<SplitWordsProps> = ({
  text,
  className,
  delay = 0,
  as = 'span',
  animateOnMount = false,
  animation = 'blurInUp',
  by = 'word',
  duration = 0.9,
}) => (
  <TextAnimate
    as={as}
    animation={animation}
    by={by}
    delay={delay}
    duration={duration}
    startOnView={!animateOnMount}
    once
    className={className}
  >
    {text}
  </TextAnimate>
);

interface FadeInTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animateOnMount?: boolean;
  direction?: BlurFadeDirection;
}

export const FadeInText: React.FC<FadeInTextProps> = ({
  children,
  className,
  delay = 0,
  animateOnMount = false,
  direction = 'up',
}) => (
  <BlurFade
    delay={delay}
    inView={!animateOnMount}
    direction={direction as BlurFadeDirection}
    offset={10}
    blur="8px"
    duration={0.55}
    className={className}
  >
    {children}
  </BlurFade>
);

interface EyebrowTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animateOnMount?: boolean;
  shiny?: boolean;
}

export const EyebrowText: React.FC<EyebrowTextProps> = ({
  children,
  className,
  delay = 0,
  animateOnMount = false,
  shiny = true,
}) => (
  <BlurFade delay={delay} inView={!animateOnMount} direction="left" offset={14} blur="4px">
    {shiny ? (
      <AnimatedShinyText className={cn('inline-flex items-center gap-3', className)}>
        {children}
      </AnimatedShinyText>
    ) : (
      <div className={cn('flex items-center gap-3', className)}>{children}</div>
    )}
  </BlurFade>
);

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  className?: string;
  titleClassName?: string;
  eyebrowClassName?: string;
  align?: 'left' | 'center';
  animation?: MagicAnimationVariant;
  by?: 'word' | 'character' | 'line';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  className,
  titleClassName,
  eyebrowClassName,
  align = 'left',
  animation = 'blurInUp',
  by = 'word',
}) => (
  <div className={cn(align === 'center' && 'text-center', className)}>
    <EyebrowText
      className={cn(
        'text-sm font-black uppercase tracking-[0.25em] text-brand-red',
        align === 'center' && 'justify-center',
        eyebrowClassName
      )}
    >
      {eyebrow}
    </EyebrowText>
    <SplitWords
      as="h2"
      text={title}
      delay={0.08}
      animation={animation}
      by={by}
      className={cn(
        'mt-3 font-condensed text-5xl font-black uppercase leading-none text-brand-navy md:text-7xl',
        titleClassName
      )}
    />
  </div>
);

interface GradientSplitTitleProps {
  text: string | string[];
  className?: string;
  repeat?: boolean;
}

export const GradientSplitTitle: React.FC<GradientSplitTitleProps> = ({
  text,
  className,
  repeat = false,
}) => (
  <DiaTextReveal
    text={text}
    repeat={repeat}
    repeatDelay={0.35}
    duration={1.2}
    colors={['#ffffff', '#eaf1f7', '#e31b2b', '#ffffff']}
    textColor="#ffffff"
    className={cn('font-condensed font-black uppercase leading-[0.92]', className)}
  />
);

interface ScrambleTitleProps {
  text: string;
  className?: string;
  as?: Extract<HyperTextElementType, 'h2' | 'h3' | 'div'>;
  startOnView?: boolean;
}

export const ScrambleTitle: React.FC<ScrambleTitleProps> = ({
  text,
  className,
  as = 'h2',
  startOnView = true,
}) => (
  <HyperText
    as={as as HyperTextElementType}
    className={cn('py-0 font-condensed font-black uppercase', className)}
    animateOnHover={false}
    startOnView={startOnView}
    duration={900}
  >
    {text}
  </HyperText>
);

interface LiveTypeTextProps {
  words: string[];
  className?: string;
  loop?: boolean;
}

export const LiveTypeText: React.FC<LiveTypeTextProps> = ({
  words,
  className,
  loop = true,
}) => (
  <TypingAnimation
    words={words}
    loop={loop}
    typeSpeed={55}
    deleteSpeed={28}
    pauseDelay={1400}
    showCursor
    blinkCursor
    cursorStyle="line"
    className={className}
  />
);

interface GradientHighlightProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientHighlight: React.FC<GradientHighlightProps> = ({
  children,
  className,
}) => (
  <AnimatedGradientText
    speed={1.2}
    colorFrom="#ffffff"
    colorTo="#e31b2b"
    className={className}
  >
    {children}
  </AnimatedGradientText>
);
