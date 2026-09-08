import { useState } from "react";
import {
  countryCodes,
  defaultCountry,
  type CountryCode,
} from "../data/homepage/countryCodes";

export function useGeoDialCode() {
  const [country, setCountry] = useState<CountryCode>(defaultCountry);
  const loading = false;

  return { country, setCountry, loading, countryCodes };
}
