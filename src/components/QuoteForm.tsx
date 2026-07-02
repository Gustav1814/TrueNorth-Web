import React, { useState } from 'react';
import { QuoteFormData } from '../types';
import { Send, CheckCircle2, ClipboardCheck, ArrowRight, ShieldCheck } from 'lucide-react';

interface QuoteFormProps {
  initialIndustry?: string;
  className?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialIndustry = '', className = '' }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    industry: initialIndustry,
    estimatedQuantity: '',
    province: '',
    timeline: '',
    additionalNotes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const industries = [
    'Shelters',
    'Summer Camps',
    'University Housing',
    'Hospitals',
    'Correctional Facilities',
    'Industrial Camps',
    'Other Institutional/Procurement',
  ];

  const provinces = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
    'Northwest Territories',
    'Nunavut',
    'Yukon',
  ];

  const timelines = [
    'Urgent (Less than 30 days)',
    '1 to 3 Months',
    '3 to 6 Months',
    '6+ Months / Planning Stage',
    'Ongoing Supply Agreement / Repeat Rollout',
  ];

  const validateForm = () => {
    const tempErrors: Partial<Record<keyof QuoteFormData, string>> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Full name is required.';
    if (!formData.organization.trim()) tempErrors.organization = 'Organization/facility name is required.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Contact phone number is required.';
    }

    if (!formData.industry) tempErrors.industry = 'Please select your industry type.';
    if (!formData.estimatedQuantity) {
      tempErrors.estimatedQuantity = 'Please select or input estimated quantity.';
    } else if (isNaN(Number(formData.estimatedQuantity)) || Number(formData.estimatedQuantity) <= 0) {
      // Allow flexible text like "50+" or parse number
    }

    if (!formData.province) tempErrors.province = 'Please select a delivery province/territory.';
    if (!formData.timeline) tempErrors.timeline = 'Please select a target delivery timeline.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof QuoteFormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      // Scroll to first error
      const firstError = Object.keys(errors)[0];
      const element = document.getElementsByName(firstError)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate real B2B API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTicketId(`TN-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1200);
  };

  if (submitted) {
    return (
      <div id="quote-success-panel" className="bg-white border-t-4 border-brand-red p-8 md:p-12 shadow-md max-w-2xl mx-auto text-center rounded-sm">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-full mb-6 text-emerald-600">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="font-condensed text-3xl font-bold text-brand-navy uppercase tracking-tight mb-2">
          Quote Request Received
        </h2>
        <p className="text-sm font-sans text-brand-gray uppercase tracking-wider font-semibold mb-6">
          Reference ID: <span className="font-mono text-brand-deep font-bold bg-brand-surface px-2 py-1 rounded-sm">{ticketId}</span>
        </p>
        
        <div className="bg-brand-bg p-6 text-left border border-brand-border rounded-sm mb-8">
          <h3 className="font-condensed text-lg font-bold text-brand-navy uppercase mb-3 flex items-center gap-2">
            <ClipboardCheck className="w-5 h-5 text-brand-red" />
            Next Operational Steps:
          </h3>
          <ul className="space-y-3 font-sans text-sm text-brand-charcoal">
            <li className="flex gap-3">
              <span className="font-bold text-brand-red font-mono">01.</span>
              <span><strong>Procurement Review:</strong> A dedicated commercial facility advisor will analyze your requirements and specification guidelines.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-brand-red font-mono">02.</span>
              <span><strong>Draft Quote Generation:</strong> We will construct an itemized commercial proposal with bulk transport estimates to your exact location in <strong>{formData.province}</strong>.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-brand-red font-mono">03.</span>
              <span><strong>Direct Contact:</strong> We will reach out to <strong>{formData.fullName}</strong> at <strong>{formData.email}</strong> within 1 business day to refine logistics and custom bulk discount terms.</span>
            </li>
          </ul>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              organization: '',
              email: '',
              phone: '',
              industry: '',
              estimatedQuantity: '',
              province: '',
              timeline: '',
              additionalNotes: '',
            });
          }}
          className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-deep text-white font-condensed font-bold uppercase tracking-wider py-3 px-6 rounded-sm transition-colors text-sm"
        >
          Request Another Quote <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <form
      id="quote-request-form"
      onSubmit={handleSubmit}
      className={`bg-white border-t-4 border-brand-navy p-6 md:p-10 shadow-md rounded-sm ${className}`}
      noValidate
    >
      <div className="border-b border-brand-border pb-5 mb-6">
        <h3 className="font-condensed text-2xl font-bold text-brand-navy uppercase tracking-tight">
          Commercial Procurement Form
        </h3>
        <p className="text-xs font-sans text-brand-gray mt-1">
          Complete the specifications below. Our procurement support desk responds within one Canadian business day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-sans font-bold text-brand-navy uppercase tracking-wider mb-2">
            Contact Name <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Johnathan Vance"
            className={`w-full bg-brand-bg border ${
              errors.fullName ? 'border-brand-red ring-1 ring-brand-red' : 'border-brand-border'
            } rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-navy focus:bg-white transition-all`}
          />
          {errors.fullName && <p className="text-xs text-brand-red mt-1 font-medium">{errors.fullName}</p>}
        </div>

        {/* Organization Name */}
        <div>
          <label className="block text-xs font-sans font-bold text-brand-navy uppercase tracking-wider mb-2">
            Organization / Facility Name <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Municipal Housing Authority / Camp Association"
            className={`w-full bg-brand-bg border ${
              errors.organization ? 'border-brand-red ring-1 ring-brand-red' : 'border-brand-border'
            } rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-navy focus:bg-white transition-all`}
          />
          {errors.organization && <p className="text-xs text-brand-red mt-1 font-medium">{errors.organization}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-sans font-bold text-brand-navy uppercase tracking-wider mb-2">
            Work Email Address <span className="text-brand-red">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="procurement@organization.ca"
            className={`w-full bg-brand-bg border ${
              errors.email ? 'border-brand-red ring-1 ring-brand-red' : 'border-brand-border'
            } rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-navy focus:bg-white transition-all`}
          />
          {errors.email && <p className="text-xs text-brand-red mt-1 font-medium">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-sans font-bold text-brand-navy uppercase tracking-wider mb-2">
            Direct Phone Number <span className="text-brand-red">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +1 (555) 019-2834"
            className={`w-full bg-brand-bg border ${
              errors.phone ? 'border-brand-red ring-1 ring-brand-red' : 'border-brand-border'
            } rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-navy focus:bg-white transition-all`}
          />
          {errors.phone && <p className="text-xs text-brand-red mt-1 font-medium">{errors.phone}</p>}
        </div>

        {/* Industry dropdown */}
        <div>
          <label className="block text-xs font-sans font-bold text-brand-navy uppercase tracking-wider mb-2">
            Sector / Industry <span className="text-brand-red">*</span>
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className={`w-full bg-brand-bg border ${
              errors.industry ? 'border-brand-red ring-1 ring-brand-red' : 'border-brand-border'
            } rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-navy focus:bg-white transition-all`}
          >
            <option value="">-- Select Industry --</option>
            {industries.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
          {errors.industry && <p className="text-xs text-brand-red mt-1 font-medium">{errors.industry}</p>}
        </div>

        {/* Estimated Quantity */}
        <div>
          <label className="block text-xs font-sans font-bold text-brand-navy uppercase tracking-wider mb-2">
            Estimated Quantity <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            name="estimatedQuantity"
            value={formData.estimatedQuantity}
            onChange={handleChange}
            placeholder="e.g. 150 mattresses (or range)"
            className={`w-full bg-brand-bg border ${
              errors.estimatedQuantity ? 'border-brand-red ring-1 ring-brand-red' : 'border-brand-border'
            } rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-navy focus:bg-white transition-all`}
          />
          {errors.estimatedQuantity && <p className="text-xs text-brand-red mt-1 font-medium">{errors.estimatedQuantity}</p>}
        </div>

        {/* Province / Delivery Location */}
        <div>
          <label className="block text-xs font-sans font-bold text-brand-navy uppercase tracking-wider mb-2">
            Province / Delivery Destination <span className="text-brand-red">*</span>
          </label>
          <select
            name="province"
            value={formData.province}
            onChange={handleChange}
            className={`w-full bg-brand-bg border ${
              errors.province ? 'border-brand-red ring-1 ring-brand-red' : 'border-brand-border'
            } rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-navy focus:bg-white transition-all`}
          >
            <option value="">-- Select Province/Territory --</option>
            {provinces.map((prov) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </select>
          {errors.province && <p className="text-xs text-brand-red mt-1 font-medium">{errors.province}</p>}
        </div>

        {/* Desired Delivery Timeline */}
        <div>
          <label className="block text-xs font-sans font-bold text-brand-navy uppercase tracking-wider mb-2">
            Required Delivery Timeline <span className="text-brand-red">*</span>
          </label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className={`w-full bg-brand-bg border ${
              errors.timeline ? 'border-brand-red ring-1 ring-brand-red' : 'border-brand-border'
            } rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-navy focus:bg-white transition-all`}
          >
            <option value="">-- Select Delivery Timeline --</option>
            {timelines.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.timeline && <p className="text-xs text-brand-red mt-1 font-medium">{errors.timeline}</p>}
        </div>
      </div>

      {/* Additional Notes */}
      <div className="mt-6">
        <label className="block text-xs font-sans font-bold text-brand-navy uppercase tracking-wider mb-2">
          Additional Specifications / Custom Dimension Requests
        </label>
        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          rows={4}
          placeholder="Please include sizing preferences, flame retardancy certifications required (such as CGSB standards or local codes), water resistance requirements, cover zippers, or remote site logistics directions."
          className="w-full bg-brand-bg border border-brand-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-navy focus:bg-white transition-all resize-y"
        ></textarea>
      </div>

      <div className="mt-8 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-brand-gray font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Professional, secure corporate privacy standards. Zero retail marketing spam.</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-[#C21320] text-white font-condensed font-bold uppercase tracking-wider py-3.5 px-8 rounded-sm shadow-sm hover:shadow transition-all text-base select-none cursor-pointer ${
            isSubmitting ? 'opacity-85 cursor-wait' : ''
          }`}
        >
          {isSubmitting ? 'Processing Proposal...' : 'Request My Quote'}
          {!isSubmitting && <Send className="w-4 h-4" />}
        </button>
      </div>
    </form>
  );
};
