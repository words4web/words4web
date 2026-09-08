import { useState, useEffect } from "react";
import {
  countryCodes,
  defaultCountry,
  findCountryByIso2,
  type CountryCode,
} from "../data/homepage/countryCodes";

interface GeoResponse {
  country_code?: string;
}

export function useGeoDialCode() {
  const [country, setCountry] = useState<CountryCode>(defaultCountry);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const scheduleFetch = () => {
      timeoutId = setTimeout(() => {
        const controller = new AbortController();
        const fetchTimeout = setTimeout(() => controller.abort(), 2500);

        fetch("https://ipapi.co/json/", { signal: controller.signal })
          .then((res) => res.json() as Promise<GeoResponse>)
          .then((data) => {
            clearTimeout(fetchTimeout);
            if (!cancelled && data?.country_code) {
              const match = findCountryByIso2(data?.country_code);
              if (match) setCountry(match);
            }
          })
          .catch(() => {});
      }, 2000);
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(scheduleFetch);
    } else {
      scheduleFetch();
    }

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return { country, setCountry, loading, countryCodes };
}
