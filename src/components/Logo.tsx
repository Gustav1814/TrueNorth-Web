import React from 'react';

interface LogoProps {
  variant?: 'stacked' | 'horizontal';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'stacked', className = '', onClick }) => {
  // Clean, professional SVG paths for the maple leaf and compass elements
  const renderCompassGraphic = (sizeClass: string) => (
    <div className={`relative flex items-center justify-center ${sizeClass}`}>
      <svg
        viewBox="0 0 200 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Semi-circular compass outer dial (arc) */}
        <path
          d="M 22 105 A 80 80 0 0 1 178 105"
          stroke="#0A2342"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M 18 105 A 84 84 0 0 1 182 105"
          stroke="#0A2342"
          strokeWidth="1"
        />
        {/* Radial tick marks */}
        <line x1="100" y1="21" x2="100" y2="15" stroke="#0A2342" strokeWidth="2" />
        <line x1="38" y1="56" x2="43" y2="60" stroke="#0A2342" strokeWidth="1.5" />
        <line x1="162" y1="56" x2="157" y2="60" stroke="#0A2342" strokeWidth="1.5" />
        <line x1="60" y1="33" x2="64" y2="38" stroke="#0A2342" strokeWidth="1.5" />
        <line x1="140" y1="33" x2="136" y2="38" stroke="#0A2342" strokeWidth="1.5" />

        {/* 8-pointed Compass Rose */}
        {/* North Pointer */}
        <path d="M100 105 L100 25 L88 95 Z" fill="#0A2342" />
        <path d="M100 105 L100 25 L112 95 Z" fill="#1E3E62" />

        {/* East Pointer */}
        <path d="M100 105 L165 95 L110 105 Z" fill="#061A2D" />
        <path d="M100 105 L165 95 L110 100 Z" fill="#1E3E62" />

        {/* West Pointer */}
        <path d="M100 105 L35 95 L90 105 Z" fill="#061A2D" />
        <path d="M100 105 L35 95 L90 100 Z" fill="#1E3E62" />

        {/* Diagonal pointers */}
        <path d="M100 105 L60 65 L80 90 Z" fill="#0A2342" />
        <path d="M100 105 L140 65 L120 90 Z" fill="#1E3E62" />

        {/* Little details */}
        <line x1="25" y1="105" x2="175" y2="105" stroke="#0A2342" strokeWidth="1.5" />

        {/* Crisp Central Maple Leaf in Vibrant Red */}
        <g transform="translate(85, 80) scale(1.1)">
          <path
            d="M 13.5 13 C 13.5 13 11 9 14 7 C 14 7 12.5 6 12 6 C 12.5 4 15 5 15 5 C 15 5 13.5 2 15.5 1.5 C 17.5 1 18.5 2 18.5 2 C 18.5 2 19.5 0 21 0 C 22.5 0 23.5 2 23.5 2 C 23.5 2 24.5 1 26.5 1.5 C 28.5 2 27 5 27 5 C 27 5 29.5 4 30 6 C 29.5 6 28 7 28 7 C 31 9 28.5 13 28.5 13 L 23.5 14.5 C 23.5 14.5 24 18 24.5 21 C 24.5 21 21.5 21.5 21 24 C 20.5 21.5 17.5 21 C 17.5 21 C 18 18 18.5 14.5 18.5 14.5 L 13.5 13 Z"
            fill="#E31B2B"
          />
        </g>
      </svg>
    </div>
  );

  if (variant === 'horizontal') {
    return (
      <div
        className={`flex items-center gap-4 cursor-pointer select-none group ${className}`}
        onClick={onClick}
      >
        {renderCompassGraphic('w-16 h-11')}
        <div className="flex flex-col text-left">
          <span className="font-condensed text-2xl font-extrabold tracking-tight text-brand-navy leading-none group-hover:text-brand-red transition-colors">
            TRUE NORTH
          </span>
          <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-brand-deep leading-none mt-1">
            MATTRESS SUPPLY
          </span>
          <span className="text-[9px] font-sans text-brand-gray tracking-wider uppercase font-semibold mt-1">
            INSTITUTIONAL SOLUTIONS
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center text-center cursor-pointer select-none max-w-[280px] ${className}`}
      onClick={onClick}
    >
      {/* 1. Compass Graphic */}
      {renderCompassGraphic('w-44 h-28')}

      {/* 2. Brand Name */}
      <h1 className="font-condensed text-4xl font-extrabold tracking-tight text-brand-navy leading-none -mt-1">
        TRUE NORTH
      </h1>

      {/* 3. Subtext */}
      <div className="flex items-center justify-between w-full px-2 mt-1">
        <div className="h-[1.5px] bg-brand-navy flex-grow"></div>
        <span className="text-[11px] font-sans font-extrabold tracking-[0.25em] text-brand-deep px-2 leading-none uppercase">
          MATTRESS SUPPLY
        </span>
        <div className="h-[1.5px] bg-brand-navy flex-grow"></div>
      </div>

      {/* 4. Split Red Lines with Maple Leaf */}
      <div className="flex items-center justify-center w-full gap-2 mt-2">
        <div className="h-[2px] bg-brand-red w-[45%]"></div>
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-brand-red">
          <path d="M12 2s.5 2 2 3c0 0-1 1-1.5 2.5 1-.5 2.5 0 2.5 0s-1 3.5 1 4c1 0 1.5-.5 1.5-.5s.5 2-1 3.5c1.5-.5 3-.5 3-.5s-1.5 4.5-2.5 4.5h-5.5s.5 3 1 5.5c0 0-2.5-.5-3 2c-.5-2.5-3-2-3-2s.5-2.5 1-5.5h-5.5c-1 0-2.5-4.5-2.5-4.5s1.5 0 3 .5c-1.5-1.5-1-3.5-1-3.5s.5.5 1.5.5c2-.5 1-4 1-4s1.5-.5 2.5 0c-.5-1.5-1.5-2.5-1.5-2.5 1.5-1 2-3 2-3z" />
        </svg>
        <div className="h-[2px] bg-brand-red w-[45%]"></div>
      </div>

      {/* 5. Solid Capsule Button */}
      <div className="w-full bg-brand-navy text-white py-1.5 px-4 mt-3 rounded-md shadow-sm">
        <span className="text-[10px] font-sans font-bold tracking-[0.18em] uppercase block">
          INSTITUTIONAL MATTRESSES
        </span>
      </div>
    </div>
  );
};
