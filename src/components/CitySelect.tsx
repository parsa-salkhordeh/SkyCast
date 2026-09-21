import { type Country } from "../data/countries";

export default function CitySelect({setCity, selectedCountry}:{setCity: (value: string) => void; selectedCountry: Country | undefined;}) {

  return (
      <select
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-right outline-none focus:border-sky-500"
        onChange={(e) => setCity(e.target.value)}
      >

        {selectedCountry?.cities.map((city) => (
          <option key={city.value} value={city.value}>
            {city.name}
          </option>
        ))}
      </select>
    
  );
}
