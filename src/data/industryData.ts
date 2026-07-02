import { IndustryConfig } from '../types';

export const industryConfigs: Record<string, IndustryConfig> = {
  shelters: {
    id: 'shelters',
    title: 'Emergency & Transition Shelters',
    heroHeadline: 'Durable, Sanitizable Sleep Systems for Municipal & Private Shelters.',
    heroSubheadline: 'Engineered for high turnover, bed-bug resistance, and respectful shelter accommodations across Canada.',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', // Structured multi-bed space
    challenges: [
      'Rapid occupancy turnover and heavy daily usage wearing down materials.',
      'Constant risk of fluid damage, staining, and severe biological contamination.',
      'Bed-bug infestations requiring aggressive chemical treatments or steam sanitization.',
      'Tight public funding and local municipal budget accountability.',
    ],
    productApproach: 'Heavy-Duty Wipeable Vinyl or Polyurethane Mattresses with Sealed Inverted Seams.',
    productFeatures: [
      { name: 'Fluid-Proof Outer Cover', desc: '100% water-resistant heavy-duty vinyl or healthcare-grade polyurethane that stands up to hospital-grade disinfectants.' },
      { name: 'Inverted, Insect-Resistant Seams', desc: 'Eliminates typical piping and seams where bed-bugs harbor and multiply, simplifying steam treatments.' },
      { name: 'Flame Retardant Core', desc: 'Densified fiber or combustion-modified foam complying with strict Canadian municipal safety and fire codes.' },
      { name: 'Breathable Ventilation Vents', desc: 'Vents utilize water-resistant mesh designs to allow airflow while keeping moisture out.' },
    ],
    specs: [
      { label: 'Standard Sizes', value: '30" x 75", 36" x 75", 36" x 80" (Twin XL), Custom sizing available' },
      { label: 'Cover Material', value: '10 oz. Reinforced Fluid-Proof Vinyl or Breathable Polyurethane' },
      { label: 'Core Density', value: '1.8 lbs/cu.ft High-Resiliency Safety Foam or Core Fiber' },
      { label: 'Fire Compliance', value: 'CAN/CGSB 4.162, CAL TB 129, and TB 117-2013 compliant' },
    ],
    whyTrueNorth: [
      'Immediate wholesale stock available for sudden facility expansions.',
      'Respectful, clean, no-nonsense designs supporting guest dignity.',
      'Extended material lifespans reducing municipal replacement costs by up to 40%.',
    ],
    testimonial: {
      quote: 'We standardized our regional transition shelter beds with True North systems. The inverted seam design virtually eliminated our harborages, and they clean off instantly.',
      author: 'Regional Operations Manager — Greater Vancouver Area'
    },
    faq: [
      { q: 'How do you disinfect shelter mattresses?', a: 'They can be wiped down directly with diluted bleach solutions (1:10), standard commercial disinfectants, or steam cleaned without damaging the inner core.' },
      { q: 'Can you supply custom dimensions for historic bunk systems?', a: 'Yes. We frequently build custom widths and thicknesses to fit custom metal bunk frames. Specify your measurements on the Quote Request form.' },
      { q: 'What is the standard delivery timeline for bulk shelter orders?', a: 'Standard stocking program sizes ship within 5-7 business days. Custom dimensional programs require approximately 3-4 weeks.' }
    ]
  },
  'summer-camps': {
    id: 'summer-camps',
    title: 'Summer Camps & Outdoor Rec',
    heroHeadline: 'Rugged Bunkhouse Mattresses Engineered for Camp Life.',
    heroSubheadline: 'Durable, moisture-resistant, and easily stored mattresses built for seasonal camps and outdoor institutions.',
    heroImage: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80', // Camp cabins/woodland camp style
    challenges: [
      'Unheated cabin environments during off-season leading to dampness, mold, and mildew.',
      'Active campers tracking in dirt, mud, moisture, and general abrasive wear.',
      'The need for straightforward, compact vertical storage during the winter freeze.',
      'Rigid seasonal budgets that demand long-term value from bunkhouse furniture.',
    ],
    productApproach: 'Breathable, Dual-Sided Water-Resistant Polyester Fiber or Solid Foam Core Mattresses.',
    productFeatures: [
      { name: 'Breathable Polyurethane Covers', desc: 'Water-resistant yet highly breathable fabric that prevents sweat buildup during hot summer camp seasons.' },
      { name: 'Mildew-Resistant Core', desc: '100% virgin polyester fiber core or antimicrobial foam that does not hold moisture or develop musty odors.' },
      { name: 'Dual-Sided Reversible Design', desc: 'Extends the operational lifespan by allowing camp counselors to rotate and flip mattresses between seasons.' },
      { name: 'Lightweight Construction', desc: 'Allows camp staff to easily lift, clean, stack, and transport mattresses for off-season storage.' },
    ],
    specs: [
      { label: 'Standard Sizes', value: '30" x 75" (Camp Cot), 39" x 75" (Standard Twin), Custom widths available' },
      { label: 'Cover Fabric', value: 'Nylon Oxford with water-resistant interior coating or Wipeable Vinyl' },
      { label: 'Internal Core', value: 'Densified Thermobonded Polyester Fiber or Polyfoam' },
      { label: 'Safety Rating', value: 'Hypoallergenic, Lead-free, and Phthalate-free' },
    ],
    whyTrueNorth: [
      'Volume bulk seasonal packages with pre-negotiated freight logistics.',
      'Lightweight structures ideal for counselor cleanup and cabin turnarounds.',
      'Durable construction that resists breakdown during cold winter shut-downs.',
    ],
    testimonial: {
      quote: 'Standardizing our 220 bunk beds with True North was a seamless experience. Our off-season storage worries are gone because these fiber-cores do not attract dampness.',
      author: 'Camp Director — Muskoka Lake District, Ontario'
    },
    faq: [
      { q: 'Can these mattresses survive winter cabin storage?', a: 'Yes. Our densified polyester fiber cores are completely inorganic, meaning they resist mold, mildew, and musty odors even when stored in unheated cabins over the Canadian winter.' },
      { q: 'Do you offer camp cot sizes?', a: 'Yes. Our specialized cot sizes (e.g. 30" x 75" and 28" x 75") are designed to sit securely on traditional spring-suspension metal camp bunk beds.' },
      { q: 'Can we order replacement zippered covers only?', a: 'Absolutely. We supply replacement covers to extend the life of your existing mattress cores.' }
    ]
  },
  'university-housing': {
    id: 'university-housing',
    title: 'University & College Housing',
    heroHeadline: 'High-Density Student Residence Sleep Systems.',
    heroSubheadline: 'Double-sided versatility, dense supportive cores, and long-term asset security for student housing operations.',
    heroImage: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80', // Modern dorm room/college bunkhouse
    challenges: [
      'High student turnover requiring rapid, robust cleaning and sanitization protocols.',
      'Varying comfort preferences (firmness) leading to potential student complaints.',
      'Heavy student load demands including study-hours, seating on bed edges, and long hours.',
      'Complex building logistics during summer turnover windows across multiple stories.',
    ],
    productApproach: 'Double-Firmness Reversible Foam Mattresses with Stain-Resistant Breathable Covers.',
    productFeatures: [
      { name: 'Dual-Comfort Core', desc: 'Firm support on one side, soft pressure relief on the other. Students simply flip the mattress to select their preference.' },
      { name: 'Stain & Odor-Repellent fabric', desc: 'Breathable, heavy-duty commercial knit covers treated with water-repelling coatings for a modern home-like feel.' },
      { name: 'Reinforced Perimeter Support', desc: 'High-density foam encasements around edges to prevent sagging when students sit on the bed side to study.' },
      { name: 'Concealed Zipper Security', desc: 'Heavy-duty zippers are hidden behind protective fabric flaps to prevent student tampering while remaining accessible to staff.' },
    ],
    specs: [
      { label: 'Standard Sizes', value: '36" x 80" (Twin XL), 39" x 80" (Twin XL), 54" x 80" (Double XL)' },
      { label: 'Cover Type', value: 'Heavy-Duty Fluid-Resistant Nylon or Stretch-Knit Premium Fabric' },
      { label: 'Core Structure', value: 'Multi-layer high-density memory foam over supportive core base' },
      { label: 'Compliance', value: '16 CFR 1633 (Federal flammability standard) and CAL TB 117-2013' },
    ],
    whyTrueNorth: [
      'Precise delivery windows coordinated with campus housing turnover schedules.',
      'Extremely high student satisfaction ratings due to our dual-comfort systems.',
      '10+ year operational design life dramatically lowering your capital expense cycles.',
    ],
    testimonial: {
      quote: 'The dual-comfort flip design has completely eliminated student complaints about mattress firmness. True North handled delivery across three 10-story towers in 2 days.',
      author: 'Director of Campus Housing — Montreal, Quebec'
    },
    faq: [
      { q: 'What is a Twin XL mattress?', a: 'Twin XL is the standard size for college dorms, measuring 36" or 39" wide by 80" long, which is 5 inches longer than a standard residential twin, accommodating taller students.' },
      { q: 'Can we customize the firmness levels?', a: 'Yes. For bulk procurement orders (100+ units), we can customize the exact density and feel of both the firm and soft layers.' },
      { q: 'Do you offer white-glove inside delivery to dorm rooms?', a: 'Yes. We offer coordinated multi-story inside delivery, room-to-room placement, and commercial recycling/disposal of old mattresses.' }
    ]
  },
  hospitals: {
    id: 'hospitals',
    title: 'Hospitals & Healthcare Facilities',
    heroHeadline: 'Hygiene-Conscious, Medical-Grade Clinic Mattresses.',
    heroSubheadline: 'Dependable infection-control fabrics, pressure-redistributing foam, and clean facility supply programs.',
    heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80', // Clean clinical facility scene
    challenges: [
      'Severe infection control protocols requiring impermeable, medical-grade covers.',
      'Incontinence and bodily fluid contact causing biological contamination of bed cores.',
      'Patient pressure injuries from long-term bed confinement on improper support.',
      'The need for certified non-allergenic, anti-microbial components in sensitive settings.',
    ],
    productApproach: 'Pressure-Redistributing Multi-Zone Clinical Foam with Healthcare Polyurethane Covers.',
    productFeatures: [
      { name: 'Medical-Grade Polyurethane', desc: 'Fluid-proof, anti-fungal, and anti-static cover material designed to endure aggressive chemical disinfection.' },
      { name: 'Die-Cut Pressure Relief Foam', desc: 'Anatomically zoned foam that redistributes body weight, minimizing capillary pressure and bedsores.' },
      { name: 'Sonic-Welded Seams (Optional)', desc: 'Provides hermetically sealed edges that prevent fluid ingress and airborne pathogen nesting.' },
      { name: 'Hypoallergenic Materials', desc: 'Completely latex-free, lead-free, and phthalate-free construction safe for all medical settings.' },
    ],
    specs: [
      { label: 'Standard Sizes', value: '35" x 80" (Standard Clinic), 35" x 84" (Extended Clinic), Custom ICU sizes' },
      { label: 'Cover Standard', value: '4-Way Stretch Medical Polyurethane, vapor-permeable, fluid-proof' },
      { label: 'Core Integrity', value: 'High-Resiliency Clinical Polyurethane Foam (Multi-zoned structure)' },
      { label: 'Disinfection Rate', value: 'Resistant to 10,000 ppm active chlorine solution wipes' },
    ],
    whyTrueNorth: [
      'Clinical-grade infection-mitigating materials with clear quality controls.',
      'Zoned pressure redistribution maximizing resident and patient comfort.',
      'Rapid replenishment programs for regional clinical hubs and long-term care.',
    ],
    testimonial: {
      quote: 'Our recovery wards needed durable, easily sanitizable beds. These polyurethane covers do not stiffen or crack even after hundreds of bleach cleanings.',
      author: 'Facilities Procurement Director — Health Region, Alberta'
    },
    faq: [
      { q: 'Are these mattresses latex-free?', a: 'Yes. All True North healthcare and clinical mattresses are 100% latex-free to prevent allergic reactions in patients and staff.' },
      { q: 'Do you make clinical claims?', a: 'No, our mattresses are built for standard supportive ward care, clinical dormitories, and outpatient facilities, matching high institutional hygiene specifications.' },
      { q: 'What is the standard warranty?', a: 'We provide structured commercial facility guarantees against core sagging and material defects under regular operation.' }
    ]
  },
  'correctional-facilities': {
    id: 'correctional-facilities',
    title: 'Correctional & Security Facilities',
    heroHeadline: 'Vandal-Resistant, High-Security Institutional Sleep Systems.',
    heroSubheadline: 'Security-conscious designs, integrated pillows, anti-contraband seams, and strict municipal fire compliance.',
    heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80', // Clean institutional building facade/hallway
    challenges: [
      'Deliberate vandalism, tearing, and attempts to dismantle mattresses.',
      'Inmates hiding contraband inside seam cavities, zippers, or mattress cores.',
      'Extreme safety risks associated with fire hazards, smoke inhalation, and ignition.',
      'The need for extreme longevity under maximum continuous operational loads.',
    ],
    productApproach: 'Heavy-Duty Seamless Sealed Vinyl Mattresses with Molded Integrated Pillows.',
    productFeatures: [
      { name: '100% Stitchless Sealed Seams', desc: 'Fully radio-frequency (RF) welded seams. Completely stitch-free edges that eliminate any capability to conceal contraband.' },
      { name: 'Molded Integrated Pillow', desc: 'An built-in raised pillow area molded directly into the mattress cover, eliminating loose pillows which can pose safety hazards.' },
      { name: 'Vandal-Proof 12 oz. Vinyl', desc: 'Extremely thick, puncture-resistant reinforced commercial vinyl cover that is nearly impossible to tear by hand.' },
      { name: 'Strict Fire Block Barrier', desc: 'Utilizes an internal fire retardant barrier that extinguishes flames immediately and prevents toxic smoke emissions.' },
    ],
    specs: [
      { label: 'Standard Sizes', value: '25" x 75", 30" x 75", 30" x 80" (Custom thicknesses available)' },
      { label: 'Cover Assembly', value: '12 oz. Heavy-Duty RF-Welded Fluid-Proof Vinyl (Seam-free)' },
      { label: 'Internal Cushioning', value: 'Ultra-Dense Densified Polyester Fiber or Flame-Retardant Neoprene Foam' },
      { label: 'Safety Certifications', value: 'CGSB 4.162, California Technical Bulletin 121 (TB 121) compliant' },
    ],
    whyTrueNorth: [
      'Zero-stitch security designs that maximize safety and simplify inspections.',
      'Virtually indestructible vinyl exteriors minimizing replacement costs.',
      'Proven compliance with Canadian and provincial security facility fire mandates.',
    ],
    testimonial: {
      quote: 'We have completely transitioned our cells to True North stitchless beds. The integrated pillow design has cut our loose item inventory in half while remaining simple to hose down.',
      author: 'Provincial Correctional Procurement Officer — Regina, Saskatchewan'
    },
    faq: [
      { q: 'What makes a mattress "stitchless"?', a: 'Instead of traditional sewing machines, we use high-frequency radio waves to weld the vinyl edges together. This melts the vinyl into a single solid piece, making it incredibly durable and completely seam-free.' },
      { q: 'Is there a zipper on these mattresses?', a: 'No. Our security and correctional mattresses are 100% sealed without zippers or openings to prevent contraband concealment.' },
      { q: 'Are these mattresses fluid-proof?', a: 'Yes. They are entirely fluid-proof and can be sanitized with high-pressure water hoses and industrial bleach compounds.' }
    ]
  },
  'industrial-camps': {
    id: 'industrial-camps',
    title: 'Industrial & Workforce Camps',
    heroHeadline: 'Durable Workforce Accommodations Mattresses.',
    heroSubheadline: 'Rotational occupancy support, remote logistical coordination, and home-like sleeping comfort for hard-working crews.',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80', // Workforce housing site/lodging construction
    challenges: [
      'Rotational occupancy with highly varied crew sizes wearing out beds quickly.',
      'Extreme remote site logistics and transport challenges across northern Canada.',
      'High crew physical fatigue requiring exceptional sleep quality to maintain safety.',
      'Abrasive workspace soils, grease, and chemicals tracked into accommodations.',
    ],
    productApproach: 'Heavy-Duty Commercial Coil or Multi-Layer Memory Foam with Sturdy Protective Encasements.',
    productFeatures: [
      { name: 'Rotational Occupancy Foam', desc: 'Deep support core built to withstand continuous 24/7 hot-bedding or rapid rotational crew shifts without flattening.' },
      { name: 'Stain-Proof Breathable Wrap', desc: 'Heavy canvas-knit nylon cover that blocks grease, oil, and sweat while allowing body heat to dissipate.' },
      { name: 'Reinforced Inner Spring or Foam', desc: 'Engineered high-tensile spring system or dense technical foam providing supportive orthopedic sleep.' },
      { name: 'Logistics-Friendly Packaging', desc: 'Can be shipped compressed and rolled in bulk pallets to minimize transport costs to remote regions.' },
    ],
    specs: [
      { label: 'Standard Sizes', value: '38" x 75" (Standard Twin), 38" x 80" (Twin XL), Double & Queen programs' },
      { label: 'Cover Structure', value: 'Durable nylon cover with robust zipper or sealed heavy polyester knit' },
      { label: 'Core Technology', value: 'High-density multi-zoned support foam or pocket coils' },
      { label: 'Logistics Code', value: 'Bulk palletized, vacuum-packed or flat-crate shipping ready' },
    ],
    whyTrueNorth: [
      'Proven experience delivering to remote northern mines, forestry lodges, and oil sites.',
      'Exceptional sleep quality that supports crew productivity and workplace safety.',
      'Extremely durable components built for heavy commercial utility.',
    ],
    testimonial: {
      quote: 'Our workforce lodge houses up to 450 rotational workers. Standardizing on True North foam beds dramatically improved crew morale and we have zero complaints of sagging cores.',
      author: 'Operations Director — Northern Mining Lodge, Nunavut'
    },
    faq: [
      { q: 'How do you ship to remote northern communities?', a: 'We specialize in remote logistics, utilizing bulk compressed pallet packaging. This reduces the cargo volume by 70%, allowing easy transport via winter roads, sea cans, or air cargo.' },
      { q: 'Do you offer mattresses that resist grease and mud?', a: 'Yes. Our specialized heavy-duty nylon covers have a commercial-grade backing that prevents grease, clay, or workspace residues from soaking into the core.' },
      { q: 'Can we purchase in volumes under 50?', a: 'Yes. While we specialize in large industrial programs, we accommodate small remote lodges with low order minimums.' }
    ]
  }
};
