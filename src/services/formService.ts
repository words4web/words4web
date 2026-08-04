const API_URL = import.meta.env.PUBLIC_API_URL;

export async function submitFormData(
  endpoint: string,
  data: Record<string, any>,
): Promise<any> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result?.error || result?.message || "Failed to submit form.",
    );
  }

  return result;
}
