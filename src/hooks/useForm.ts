import { useState } from "react";
import { submitFormData } from "../services/formService";

export function useForm<T extends Record<string, any>>(
  initialValues: T,
  validate: (values: T) => Record<string, string>,
  onSuccess?: () => void,
  endpoint?: string,
) {
  const [formData, setFormData] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleFieldChange = (name: keyof T, value: any) => {
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      // Derive combined phone field whenever either part changes
      if (name === "phoneDialCode" || name === "phoneNumber") {
        const dialCode =
          name === "phoneDialCode" ? value : (prev?.phoneDialCode ?? "");
        const number =
          name === "phoneNumber" ? value : (prev?.phoneNumber ?? "");
        (updated as any).phone = `${dialCode}${number}`;
      }
      return updated;
    });
    // Clear validation error when field is updated
    if (errors[name as string]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name as string];
        return updated;
      });
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData(initialValues);
    setErrors({});
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Silently block bot submissions if the honeypot field is filled
    const formElement = e.currentTarget as HTMLFormElement;
    const data = new FormData(formElement);
    if (data.get("website")) {
      setSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
      return;
    }

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors)?.length === 0) {
      if (endpoint) {
        setIsSubmitting(true);
        try {
          await submitFormData(endpoint, formData);

          setSubmitted(true);
          if (onSuccess) {
            onSuccess();
          }
        } catch (err: any) {
          console.error("Form submission error:", err);
          setSubmitError(
            err.message ||
              "An unexpected error occurred. Please try again later.",
          );
        } finally {
          setIsSubmitting(false);
        }
      } else {
        setSubmitted(true);
        if (onSuccess) {
          onSuccess();
        }
      }
    }
  };

  return {
    formData,
    errors,
    submitted,
    isSubmitting,
    submitError,
    handleFieldChange,
    handleSubmit,
    resetForm,
  };
}
