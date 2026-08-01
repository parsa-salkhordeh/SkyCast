import Loading from "./Loading"
import {getweatherEmoji} from "../data/emoji"


type weathercard={
  data: {
    name: string;
    main: {
      temp: number;
      humidity:number;
    };
    wind:{
      speed:number;
    };
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
  } | null;
}




export default function WeatherCard({data}:weathercard) {
 
  if(!data) return <Loading/>

   const emoji = getweatherEmoji(data.weather[0].main);
  return (
   <div className="mx-auto mt-8 max-w-sm rounded-2xl bg-white p-6 shadow-lg">
      <h2 className="text-xl font-bold text-slate-800">
       {data.name}
      </h2>

      <div className="my-6 text-center">
        <div className="text-6xl">
          {emoji}
        </div>

        <p className="mt-3 text-4xl font-bold text-sky-500">
          {data.main.temp}
        </p>

        <p className="mt-2 text-slate-500">
          {data.weather[0].description}
        </p>
        <div className="mt-4 flex justify-between text-slate-500">
          <p>رطوبت:{data.main.humidity}</p>
          <p>سرعت باد:{data.wind.speed}</p>
        </div>
      </div>
    </div>
  )
}
