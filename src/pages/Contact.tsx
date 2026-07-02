import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: PageId) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    const tempErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) tempErrors.name = 'Contact name is required.';
    if (!formData.organization.trim()) tempErrors.organization = 'Organization name is required.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Please provide a message or question.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof formData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="w-full">
      <Breadcrumbs currentPage="contact" onNavigate={onNavigate} />

      {/* Hero Header */}
      <section className="relative bg-brand-navy text-white py-16 overflow-hidden starburst-pattern">
        <div className="absolute inset-0 bg-brand-deep/80 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="text-brand-red text-xs font-sans font-bold tracking-[0.25em] uppercase block">
            GET IN TOUCH
          </span>
          <h1 className="font-condensed text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mt-1">
            Corporate Contact Desk
          </h1>
          <p className="mt-3 font-sans text-sm md:text-base text-brand-surface max-w-2xl leading-relaxed">
            Reach out to our administrative headquarters, shipping depots, or regional sales managers. We support facility managers and logistics operators nationwide.
          </p>
        </div>
      </section>

      {/* Direct support information and contact form split */}
      <section className="py-16 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Direct Contact Options (Left) */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div>
                <span className="text-brand-red text-xs font-sans font-bold tracking-[0.2em] uppercase block">
                  SUPPORT COORDINATION
                </span>
                <h2 className="font-condensed text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-tight mt-1 leading-none">
                  Sourcing & Sales Assistance
                </h2>
                <div className="w-12 h-1 bg-brand-red mt-4 mb-6"></div>
              </div>

              <div className="space-y-6 font-sans text-sm text-brand-charcoal">
                
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-surface rounded-sm text-brand-navy shrink-0">
                    <MapPin className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-condensed text-sm font-bold text-brand-navy uppercase tracking-wider">
                      National Headquarters
                    </h4>
                    <p className="text-xs text-brand-gray mt-1 leading-relaxed">
                      True North Mattress Supply Ltd.<br />
                      100 True North Boulevard, Suite 500<br />
                      Toronto, ON, M5V 2N2, Canada
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-surface rounded-sm text-brand-navy shrink-0">
                    <Phone className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-condensed text-sm font-bold text-brand-navy uppercase tracking-wider">
                      Telephone Hotlines
                    </h4>
                    <p className="text-xs text-brand-gray mt-1 leading-relaxed">
                      Toll Free: <a href="tel:18005557878" className="font-bold underline text-brand-navy">1-800-555-7878</a><br />
                      Local Desk: <a href="tel:4165550198" className="font-bold underline text-brand-navy">+1 (416) 555-0198</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-surface rounded-sm text-brand-navy shrink-0">
                    <Mail className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-condensed text-sm font-bold text-brand-navy uppercase tracking-wider">
                      Commercial Email Box
                    </h4>
                    <p className="text-xs text-brand-gray mt-1 leading-relaxed">
                      Procurement Review: <a href="mailto:procurement@truenorthmattress.ca" className="font-bold underline text-brand-navy">procurement@truenorthmattress.ca</a><br />
                      Support Inquiries: <a href="mailto:support@truenorthmattress.ca" className="font-bold underline text-brand-navy">support@truenorthmattress.ca</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-surface rounded-sm text-brand-navy shrink-0">
                    <Clock className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-condensed text-sm font-bold text-brand-navy uppercase tracking-wider">
                      Administrative Hours
                    </h4>
                    <p className="text-xs text-brand-gray mt-1 leading-relaxed">
                      Monday through Friday: 8:00 AM - 5:30 PM (EST)<br />
                      Excluding Canadian statutory holidays.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* General Contact Form (Right) */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-brand-bg border-t-4 border-brand-red p-8 text-center rounded-sm shadow-xs">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-condensed text-2xl font-bold uppercase text-brand-navy">
                    Message Dispatched Successfully
                  </h3>
                  <p className="font-sans text-xs text-brand-charcoal mt-2 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. An administrative assistant from our Toronto operations center has received your inquiry and will respond within 1 business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', organization: '', email: '', phone: '', message: '' });
                    }}
                    className="mt-6 bg-brand-navy hover:bg-brand-deep text-white text-xs font-condensed font-bold uppercase tracking-wider py-2.5 px-6 rounded-sm transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  className="bg-brand-bg border-t-4 border-brand-navy p-6 md:p-8 rounded-sm shadow-xs text-left"
                  noValidate
                >
                  <h3 className="font-condensed text-xl font-bold text-brand-navy uppercase tracking-wider border-b border-brand-border pb-3 mb-6">
                    Inquiry Submission Portal
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-sans font-bold text-brand-navy uppercase tracking-wider mb-1">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Johnathan Vance"
                        className={`w-full bg-white border ${
                          errors.name ? 'border-brand-red ring-1 ring-brand-red' : 'border-brand-border'
                        } rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-navy transition-all`}
                      />
                      {errors.name && <p className="text-[10px] text-brand-red mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-bold text-brand-navy uppercase tracking-wider mb-1">
                        Organization / Facility *
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. Greater Ontario Housing Authority"
                        className={`w-full bg-white border ${
                          errors.organization ? 'border-brand-red ring-1 ring-brand-red' : 'border-brand-border'
                        } rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-navy transition-all`}
                      />
                      {errors.organization && <p className="text-[10px] text-brand-red mt-1">{errors.organization}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-bold text-brand-navy uppercase tracking-wider mb-1">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="procurement@organization.ca"
                        className={`w-full bg-white border ${
                          errors.email ? 'border-brand-red ring-1 ring-brand-red' : 'border-brand-border'
                        } rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-navy transition-all`}
                      />
                      {errors.email && <p className="text-[10px] text-brand-red mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-bold text-brand-navy uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +1 (555) 019-2834"
                        className="w-full bg-white border border-brand-border rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-navy transition-all"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-[10px] font-sans font-bold text-brand-navy uppercase tracking-wider mb-1">
                      Inquiry Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Input your questions regarding lead times, custom sizes, laboratory compliance logs, or direct site logistics."
                      className={`w-full bg-white border ${
                        errors.message ? 'border-brand-red ring-1 ring-brand-red' : 'border-brand-border'
                      } rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-navy transition-all resize-y`}
                    ></textarea>
                    {errors.message && <p className="text-[10px] text-brand-red mt-1">{errors.message}</p>}
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-[10px] text-brand-gray font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" /> Secure B2B data transmission.
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-brand-red hover:bg-[#C21320] text-white font-condensed font-bold uppercase tracking-wider py-2.5 px-6 rounded-sm text-xs transition-colors cursor-pointer"
                    >
                      {isSubmitting ? 'Sending...' : 'Dispatch Message'} <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Styled vector layout representing corporate facility office map placeholder */}
      <section className="bg-brand-bg py-8 border-b border-brand-border starburst-pattern">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[10px] font-sans font-extrabold text-brand-gray tracking-widest uppercase block">
            Map Coordinates Placeholder
          </span>
          <div className="h-44 bg-brand-navy/5 border border-brand-border rounded-sm flex flex-col items-center justify-center gap-2 mt-4 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-10">
              {/* Decorative grid pattern */}
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <MapPin className="w-8 h-8 text-brand-red relative z-10 animate-bounce" />
            <h4 className="font-condensed text-base font-bold text-brand-navy uppercase relative z-10">
              National Distribution Office & Bull-Pen
            </h4>
            <p className="text-[11px] font-sans text-brand-gray relative z-10">
              100 True North Boulevard, Toronto, ON, M5V 2N2, Canada
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
