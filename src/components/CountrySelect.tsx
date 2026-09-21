
import { countries} from "../data/countries";
import CitySelect from "./CitySelect";

type Country={
  setCity: (value: string) => void;
  country: string;
  setCountry: (value: string) => void;
}

export default function CountrySelect({setCity , country , setCountry}:Country) {
    
    const selectedCountry= countries.find(
    (item) => item.value === country
    );
  return (
    <div className="mx-auto mt-8 max-w-md px-6">

       <select
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-right outline-none focus:border-sky-500"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >

        
          {
            countries.map(
              (country)=>(
                <option key={country.value} value={country.value}>{country.name}</option>
              )
            )
          }
        

      </select>
      <CitySelect selectedCountry={selectedCountry} setCity={setCity}/>
     </div> 
  )
}
