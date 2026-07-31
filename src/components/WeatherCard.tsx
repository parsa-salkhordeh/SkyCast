import Loading from "./Loading"

type weathercard={
  data:{
    name:string
  }| null
}

export default function WeatherCard({data}:weathercard) {
  if(!data) return <Loading/>
  return (
   <div className="mx-auto mt-8 max-w-sm rounded-2xl bg-white p-6 shadow-lg">
      <h2 className="text-xl font-bold text-slate-800">
       {data.name}
      </h2>

      <div className="my-6 text-center">
        <div className="text-6xl">
          ☀️
        </div>

        <p className="mt-3 text-4xl font-bold text-sky-500">
          32°C
        </p>

        <p className="mt-2 text-slate-500">
          آفتابی
        </p>
      </div>
    </div>
  )
}
