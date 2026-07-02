/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId =
  | 'home'
  | 'shelters'
  | 'summer-camps'
  | 'university-housing'
  | 'hospitals'
  | 'correctional-facilities'
  | 'industrial-camps'
  | 'products'
  | 'about'
  | 'quality'
  | 'delivery'
  | 'resources'
  | 'quote'
  | 'contact';

export interface QuoteFormData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  industry: string;
  estimatedQuantity: string;
  province: string;
  timeline: string;
  additionalNotes: string;
}

export interface IndustryConfig {
  id: PageId;
  title: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  challenges: string[];
  productApproach: string;
  productFeatures: { name: string; desc: string }[];
  specs: { label: string; value: string }[];
  whyTrueNorth: string[];
  testimonial: { quote: string; author: string };
  faq: { q: string; a: string }[];
}
