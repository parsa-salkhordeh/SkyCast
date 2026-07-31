import { cities } from "../data/cities";
export default function CitySelect({setCity}:{ setCity: (value: string) => void }) {
  return (
    <div className="mx-auto mt-8 max-w-md px-6">
      <select
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-right outline-none focus:border-sky-500"
        onChange={(e)=>setCity(e.target.value)}
      >
        <option value="">انتخاب شهر:</option>

        {
            cities.map(
                (city)=>(
                    <option key={city.value} value={city.value}>{city.name}</option>
                )
            )
        }

      </select>
    </div>
  );
}