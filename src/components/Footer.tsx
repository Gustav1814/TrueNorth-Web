import React from 'react';
import { Logo } from './Logo';
import { PageId } from '../types';
import { MapPin, Phone, Mail, FileSpreadsheet, Scale, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-deep text-white border-t-4 border-brand-red mt-auto relative overflow-hidden">
      
      {/* Subtle background compass graphics */}
      <div className="absolute right-0 bottom-0 w-80 h-80 opacity-[0.02] pointer-events-none translate-x-12 translate-y-12">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="white" strokeWidth="1" />
          <line x1="0" y1="100" x2="200" y2="100" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Logo Column */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left gap-6 border-b lg:border-b-0 pb-8 lg:pb-0 border-white/10">
            <Logo variant="stacked" onClick={() => handleLinkClick('home')} className="bg-[#061A2D]" />
            <p className="text-xs font-sans text-brand-gray/90 max-w-sm mt-2 leading-relaxed">
              True North Mattress Supply is a dedicated Canadian commercial supplier of high-durability institutional sleep systems. Engineered for high-use facilities, public tenders, and repeat facility procurement programs nationwide.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-sans font-semibold text-brand-gray/70">
              <Scale className="w-3.5 h-3.5 text-brand-red" />
              <span>Full compliance with Canadian flammability and material standards.</span>
            </div>
          </div>

          {/* Industries Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-condensed text-base font-bold uppercase tracking-wider text-white border-l-2 border-brand-red pl-3 leading-none">
              Industries Served
            </h4>
            <ul className="space-y-2.5 font-sans text-xs font-semibold text-brand-gray/90 uppercase tracking-wider">
              <li>
                <button onClick={() => handleLinkClick('shelters')} className="hover:text-brand-red hover:underline transition-all">
                  Shelters
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('summer-camps')} className="hover:text-brand-red hover:underline transition-all">
                  Summer Camps
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('university-housing')} className="hover:text-brand-red hover:underline transition-all">
                  University Housing
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('hospitals')} className="hover:text-brand-red hover:underline transition-all">
                  Hospitals
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('correctional-facilities')} className="hover:text-brand-red hover:underline transition-all">
                  Correctional Facilities
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('industrial-camps')} className="hover:text-brand-red hover:underline transition-all">
                  Industrial Camps
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="font-condensed text-base font-bold uppercase tracking-wider text-white border-l-2 border-brand-red pl-3 leading-none">
              Company & Info
            </h4>
            <ul className="space-y-2.5 font-sans text-xs font-semibold text-brand-gray/90 uppercase tracking-wider">
              <li>
                <button onClick={() => handleLinkClick('products')} className="hover:text-brand-red hover:underline transition-all">
                  Products & Programs
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-brand-red hover:underline transition-all">
                  About True North
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('quality')} className="hover:text-brand-red hover:underline transition-all">
                  Quality & Compliance
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('delivery')} className="hover:text-brand-red hover:underline transition-all">
                  Delivery & Logistics
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('resources')} className="hover:text-brand-red hover:underline transition-all">
                  Product Specifications
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('quote')} className="hover:text-brand-red hover:underline transition-all">
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-4 text-xs">
            <h4 className="font-condensed text-base font-bold uppercase tracking-wider text-white border-l-2 border-brand-red pl-3 leading-none">
              Procurement Desk
            </h4>
            <div className="space-y-4 font-sans text-brand-gray">
              
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>
                  <strong>National Supply Headquarters:</strong><br />
                  100 True North Boulevard, Suite 500<br />
                  Toronto, ON, M5V 2N2, Canada
                </span>
              </div>

              <div className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <a href="tel:18005557878" className="hover:text-white transition-colors">
                  1-800-555-7878 (Toll Free)
                </a>
              </div>

              <div className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <a href="mailto:procurement@truenorthmattress.ca" className="hover:text-white transition-colors">
                  procurement@truenorthmattress.ca
                </a>
              </div>

              <div className="flex gap-2.5 items-start pt-2 border-t border-white/10 text-[10px]">
                <FileSpreadsheet className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>
                  <strong>Procurement Portal:</strong><br />
                  Submit RFP / Tender documentation directly to our national logistics desk.
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Legal / Compliance Strip */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-brand-gray">
          <div className="text-center md:text-left">
            &copy; {currentYear} True North Mattress Supply. All rights reserved. 
            <span className="block md:inline md:ml-2 text-[10px] text-brand-gray/50">Commercial sleep systems engineered for high-durability facilities.</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 font-semibold uppercase tracking-wider text-[11px]">
            <a href="#/company/quality" className="hover:text-brand-red transition-all">Compliance & Standards</a>
            <a href="#/company/delivery" className="hover:text-brand-red transition-all">Shipping Guidelines</a>
            <a href="#/contact" className="hover:text-brand-red transition-all">Support Desk</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
