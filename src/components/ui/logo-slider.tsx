import React from 'react';
import { cn } from '@/lib/utils';

export interface LogoSliderProps {
  logos: React.ReactNode[];
  speed?: number;
  direction?: 'left' | 'right';
  showBlur?: boolean;
  blurLayers?: number;
  blurIntensity?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export const LogoSlider = ({
  logos,
  speed = 60,
  direction = 'left',
  showBlur = true,
  blurLayers = 8,
  blurIntensity = 1,
  className,
  pauseOnHover = false,
}: LogoSliderProps) => {
  return (
    <div
      className={cn('logo-slider w-full overflow-hidden', className)}
      style={
        {
          '--speed': speed,
          '--count': logos.length,
          '--blurs': blurLayers,
          '--blur': blurIntensity,
        } as React.CSSProperties
      }
    >
      <div
        className="logo-slider__container relative grid min-h-[72px] w-full"
        data-direction={direction}
        data-pause-on-hover={pauseOnHover}
      >
        {showBlur && (
          <div className="logo-slider__blur logo-slider__blur--left pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-1/4 rotate-180">
            {Array.from({ length: blurLayers }).map((_, i) => (
              <div
                key={`blur-left-${i}`}
                className="absolute inset-0"
                style={{ '--blur-index': i } as React.CSSProperties}
              />
            ))}
          </div>
        )}

        {showBlur && (
          <div className="logo-slider__blur logo-slider__blur--right pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-1/4">
            {Array.from({ length: blurLayers }).map((_, i) => (
              <div
                key={`blur-right-${i}`}
                className="absolute inset-0"
                style={{ '--blur-index': i } as React.CSSProperties}
              />
            ))}
          </div>
        )}

        <ul className="logo-slider__track m-0 flex h-full w-fit list-none items-center p-0">
          {logos.map((logo, index) => (
            <li
              key={index}
              className="logo-slider__item grid h-full w-[300px] shrink-0 place-items-center sm:w-[360px] lg:w-[430px]"
              style={{ '--item-index': index } as React.CSSProperties}
            >
              <div className="flex h-full w-full items-center justify-center">
                {logo}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

LogoSlider.displayName = 'LogoSlider';

export default LogoSlider;
