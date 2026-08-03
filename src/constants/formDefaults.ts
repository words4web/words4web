import type { ContactFormData, LeadFormData } from "../types/contact";

export const contactFormDefaults: ContactFormData = {
  fullName: "",
  email: "",
  phoneDialCode: "+91",
  phoneNumber: "",
  phone: "",
  service: "Website Development",
  details: "",
  formType: "Contact Form",
};

export const leadFormDefaults: LeadFormData = {
  fullName: "",
  email: "",
  phoneDialCode: "+91",
  phoneNumber: "",
  phone: "",
  helpWith: "Website",
  details: "",
  formType: "Lead Form",
};
