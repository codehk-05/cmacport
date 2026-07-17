export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
  badge?: string;
  bgGradient: string;
}

export interface DesignTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  layoutType: 'poster' | 'business_card' | 'social_media' | 'wedding_card';
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  selectedService: string;
  urgency: 'flexible' | 'urgent' | 'rush';
  customDetails: string;
}
