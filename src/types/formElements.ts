export interface AnimatedInputProps {
  label: string;
  type?: string;
  required?: boolean;
  name: string;
  value: string;
  onChange: (val: string) => void;
}

export interface AnimatedTextareaProps {
  label: string;
  required?: boolean;
  name: string;
  value: string;
  onChange: (val: string) => void;
}

export interface AnimatedSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (val: string) => void;
  children: React.ReactNode;
}

export interface FormSuccessProps {
  fullName: string;
  email: string;
  phone: string;
  serviceLabel: string;
  serviceValue: string;
  details?: string;
  formType: string;
  onReset: () => void;
}

export interface PhoneInputProps {
  label?: string;
  name?: string;
  value: string;
  onChange: (val: string) => void;
  onCountryChange?: (
    country: import("../data/countryCodes").CountryCode,
  ) => void;
  selectedCountry?: import("../data/countryCodes").CountryCode;
  variant?: "floating" | "box";
}
