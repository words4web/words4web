export interface ContactFormData {
  fullName: string;
  email: string;
  phoneDialCode: string;
  phoneNumber: string;
  phone: string;
  service: string;
  details: string;
  formType: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  details?: string;
}

export interface LeadFormData {
  fullName: string;
  email: string;
  phoneDialCode: string;
  phoneNumber: string;
  phone: string;
  helpWith: string;
  details: string;
  formType: string;
}

export interface OfficeCardProps {
  label: string;
  city: string;
  address: string;
  phone: string;
  email: string;
}
