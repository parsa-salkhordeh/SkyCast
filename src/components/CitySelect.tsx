import { useState } from "react";
import { countries } from "../data/countries";

export default function CitySelect({
  setCity,
}: {
  setCity: (value: string) => void;
}) {
  const [country, setCountry] = useState<string>("iran");
  const selectedCountry = countries.find(
  (item) => item.value === country
);
  return (
    <div className="mx-auto mt-8 max-w-md px-6">

       <select
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-right outline-none focus:border-sky-500"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">انتخاب کشور:</option>

        
          {
            countries.map(
              (country)=>(
                <option key={country.value} value={country.value}>{country.name}</option>
              )
            )
          }
        

      </select>


      <select
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-right outline-none focus:border-sky-500"
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="">انتخاب شهر:</option>

        {selectedCountry?.cities.map((city) => (
          <option key={city.value} value={city.value}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}
