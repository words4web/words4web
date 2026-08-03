import { useState } from "react";

export function useForm<T extends Record<string, any>>(
  initialValues: T,
  validate: (values: T) => Record<string, string>,
  onSuccess?: () => void,
) {
  const [formData, setFormData] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors)?.length === 0) {
      setSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    }
  };

  return {
    formData,
    errors,
    submitted,
    handleFieldChange,
    handleSubmit,
    resetForm,
  };
}
