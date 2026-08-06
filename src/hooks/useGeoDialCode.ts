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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);

    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((res) => res.json() as Promise<GeoResponse>)
      .then((data) => {
        clearTimeout(timeout);
        if (!cancelled && data?.country_code) {
          console.log("data.country_code => ", data);
          const match = findCountryByIso2(data?.country_code);
          if (match) setCountry(match);
        }
      })
      .catch(() => {
        // Silently fall back to default
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(timeout);
    };
  }, []);

  return { country, setCountry, loading, countryCodes };
}
