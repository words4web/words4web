import { parsePhoneNumberWithError } from "libphonenumber-js";

export const validateContactFields = (
  fullName: string,
  email: string,
  phoneDialCode: string,
  phoneNumber: string,
) => {
  const errors: Record<string, string> = {};

  // Full Name validation
  if (!fullName?.trim()) {
    errors.fullName = "Full name is required.";
  } else if (fullName?.trim()?.length < 2) {
    errors.fullName = "Name must be at least 2 characters.";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email?.trim()) {
    errors.email = "Email address is required.";
  } else if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  // Phone validation — combines dial code + subscriber number
  if (!phoneNumber?.trim()) {
    errors.phone = "Phone number is required.";
  } else {
    const digitsOnly = phoneNumber?.replace(/\D/g, "");
    if (digitsOnly?.length < 4) {
      errors.phone = "Phone number is too short.";
    } else {
      const fullNumber = `${phoneDialCode}${phoneNumber?.trim()}`;
      try {
        const parsed = parsePhoneNumberWithError(fullNumber);
        if (!parsed.isValid()) {
          errors.phone = "Please enter a valid phone number for this country.";
        }
      } catch {
        errors.phone = "Please enter a valid phone number.";
      }
    }
  }

  return errors;
};
