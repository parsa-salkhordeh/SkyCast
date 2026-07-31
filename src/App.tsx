import { useEffect, useState } from "react";
import "./App.css";
import CitySelect from "./components/CitySelect";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState<string>("Tehran");
  const apikey: string = "3ab8f5ff4502dd474bb8c4fdb3ca4d2c";
  //برای اینکه بتونیم دیتامونو به Weathercard پاس بدیم
  const [weather, setWeather] = useState(null);
  
  useEffect(() => {
    async function getWeather() {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);

        const data = await response.json();
        setWeather(data)
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    getWeather();
  }, [city]);
  
    
  
    return (
    <>
      <Header />
      <CitySelect setCity={setCity}/>
      <WeatherCard data={weather}/>
    </>
  );
}

export default App;
