import React, { useEffect } from 'react';
import { PageId } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Truck, MapPin, PackageOpen, HelpCircle, ArrowRight, Anchor } from 'lucide-react';

interface DeliveryProps {
  onNavigate: (page: PageId) => void;
}

export const Delivery: React.FC<DeliveryProps> = ({ onNavigate }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const provincesLogistics = [
    {
      region: 'Ontario & Quebec (Central Canada)',
      timeline: '3 - 5 Business Days',
      desc: 'Rapid ground delivery from our primary central warehouses. Includes direct tail-gate delivery to municipal centers, camps, and university residences.'
    },
    {
      region: 'Western Provinces (BC, AB, SK, MB)',
      timeline: '5 - 7 Business Days',
      desc: 'Dedicated commercial freight routes servicing municipal shelters, remote workforce lodges, and seasonal camps in the Western regions.'
    },
    {
      region: 'Atlantic Canada (NB, NS, PE, NL)',
      timeline: '6 - 9 Business Days',
      desc: 'Coordinated commercial shipping across maritime freight networks, including specialized sea transport schedules for Newfoundland facilities.'
    },
    {
      region: 'Northern Territories (YT, NT, NU)',
      timeline: 'Project-Based Coordination',
      desc: 'Specialized logistics utilizing winter roads, bulk sea cans (barge operations), or cargo air freight. Palletized and vacuum-compressed to optimize shipping space.'
    }
  ];

  return (
    <div className="w-full">
      <Breadcrumbs currentPage="delivery" onNavigate={onNavigate} />

      {/* Hero Header */}
      <section className="relative bg-brand-navy text-white py-16 overflow-hidden starburst-pattern">
        <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="text-brand-red text-xs font-sans font-bold tracking-[0.25em] uppercase block">
            LOGISTICS PROGRAM
          </span>
          <h1 className="font-condensed text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mt-1">
            Delivery & Logistics Services
          </h1>
          <p className="mt-3 font-sans text-sm md:text-base text-brand-surface max-w-2xl leading-relaxed">
            Coordinating direct commercial transport and remote site deliveries across all Canadian provinces and territories. Palletized, compressed, and bulk logistics.
          </p>
        </div>
      </section>

      {/* Remote Logistics Focus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 text-left">
              <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase block">
                REMOTE & OFF-GRID SHIPPING
              </span>
              <h2 className="font-condensed text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight mt-1">
                Navigating the Toughest Remote Canadian Deliveries
              </h2>
              <div className="w-12 h-1 bg-brand-red mt-4 mb-6"></div>
              
              <div className="space-y-4 font-sans text-sm text-brand-charcoal leading-relaxed">
                <p>
                  At True North, we understand that B2B procurement doesn&apos;t always happen in metropolitan downtown hubs. Many of the camps, mineral mines, resource sites, and regional shelters we supply are located in highly remote regions with limited transport accessibility.
                </p>
                <p>
                  Our logistics desk is highly experienced in coordinating freight using specialized shipping corridors. We work directly with winter road transport networks, sea-barge operators for northern communities, air cargo brokers, and dedicated flatbed carriers.
                </p>
                <p>
                  To make transport as cost-effective and operationally smooth as possible, we offer bulk vacuum-compressed and rolled pallet packaging. This reduces the cargo volume of foam mattress shipments by up to 70%, dramatically lowering shipping fees and optimizing aircraft or container payload bounds.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[300px] md:h-[400px] border-4 border-brand-navy bg-brand-navy rounded-sm overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-brand-navy/60 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
                alt="Remote workforce camps or rugged Canadian logistics yard"
                className="w-full h-full object-cover object-center absolute inset-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-left bg-brand-deep/95 border-l-4 border-brand-red p-4 rounded-sm">
                <p className="text-[10px] font-sans font-bold text-brand-red uppercase tracking-widest">
                  Logistical Excellence
                </p>
                <h4 className="font-condensed text-lg font-bold text-white uppercase mt-1">
                  Vacuum-Compressed Shipping
                </h4>
                <p className="text-xs font-sans text-brand-gray mt-1">
                  Compressing foam cores by 70% to cut bulk cargo costs to Northern Canada.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Regional Shipping Guidelines */}
      <section className="py-16 bg-brand-bg starburst-pattern border-t border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left max-w-3xl mb-12">
            <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase block">
              REGIONAL GUIDE
            </span>
            <h2 className="font-condensed text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight mt-1">
              Estimated Freight Timelines Across Canada
            </h2>
            <div className="w-12 h-1 bg-brand-red mt-4 mb-6"></div>
            <p className="font-sans text-sm text-brand-charcoal leading-relaxed">
              Timelines apply to our in-stock program sizes. Custom dimensions and initial bulk programs require manufacturing lead times, which we outline clearly during the drafting stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {provincesLogistics.map((prov, idx) => (
              <div key={idx} className="bg-white border border-brand-border p-6 rounded-sm hover:border-brand-navy transition-colors">
                <div className="flex justify-between items-start gap-4 mb-3 border-b border-brand-border pb-3">
                  <h3 className="font-condensed text-lg font-bold text-brand-navy uppercase tracking-wider">
                    {prov.region}
                  </h3>
                  <span className="text-[10px] font-sans font-bold text-brand-red bg-brand-surface px-2.5 py-1 rounded-sm uppercase shrink-0">
                    {prov.timeline}
                  </span>
                </div>
                <p className="text-xs font-sans text-brand-charcoal leading-relaxed">
                  {prov.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Logistics services / Delivery support options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="max-w-3xl mb-12">
            <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase block">
              SERVICES SCOPE
            </span>
            <h2 className="font-condensed text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight mt-1">
              Logistics & Placement Services Available
            </h2>
            <div className="w-12 h-1 bg-brand-red mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            <div className="bg-brand-bg p-6 border-l-4 border-brand-navy rounded-sm flex flex-col justify-between">
              <div>
                <MapPin className="w-8 h-8 text-brand-navy mb-4" />
                <h3 className="font-condensed text-lg font-bold text-brand-navy uppercase tracking-wider">
                  Direct Dock-to-Dock
                </h3>
                <p className="text-xs font-sans text-brand-charcoal mt-2 leading-relaxed">
                  Standard LTL and FTL freight services delivering flatbeds or transport containers directly to your facility receiving docks or campground gates.
                </p>
              </div>
            </div>

            <div className="bg-brand-bg p-6 border-l-4 border-brand-navy rounded-sm flex flex-col justify-between">
              <div>
                <PackageOpen className="w-8 h-8 text-brand-navy mb-4" />
                <h3 className="font-condensed text-lg font-bold text-brand-navy uppercase tracking-wider">
                  Inside Placement (Turnover Support)
                </h3>
                <p className="text-xs font-sans text-brand-charcoal mt-2 leading-relaxed">
                  Coordinated multi-story inside delivery for student housing turnarounds or hospital ward updates. We place mattresses directly inside designated rooms.
                </p>
              </div>
            </div>

            <div className="bg-brand-bg p-6 border-l-4 border-brand-navy rounded-sm flex flex-col justify-between">
              <div>
                <Anchor className="w-8 h-8 text-brand-navy mb-4" />
                <h3 className="font-condensed text-lg font-bold text-brand-navy uppercase tracking-wider">
                  Northern Sealift Ready
                </h3>
                <p className="text-xs font-sans text-brand-charcoal mt-2 leading-relaxed">
                  We prepare wood crates and weather-proof sealift pallets matching standard marine cargo schedules for remote northern Nunavut and Arctic ports.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('quote')}
              className="bg-brand-red hover:bg-[#C21320] text-white font-condensed font-bold uppercase tracking-wider py-4 px-10 text-sm rounded-sm transition-colors cursor-pointer"
            >
              Request Siting & Delivery Quote
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
