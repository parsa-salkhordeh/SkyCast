import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import CountrySelect from "./components/CountrySelect";
import { countries } from "./data/countries";

function App() {
  const [city, setCity] = useState<string>("Tehran");
  const [country, setCountry] = useState<string>("iran");
  const apikey: string = "3ab8f5ff4502dd474bb8c4fdb3ca4d2c";
  //برای اینکه بتونیم دیتامونو به Weathercard پاس بدیم
  const [weather, setWeather] = useState(null);

  // با تغییر کشور، اولین شهر آن کشور انتخاب می‌شود
  useEffect(() => {
    const selectedCountry = countries.find(
      (item) => item.value === country
    );

    if (selectedCountry) {
      setCity(selectedCountry.cities[0].value);
    }
  }, [country]);

  useEffect(() => {
    async function getWeather() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`,
        );

        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    }

    getWeather();
  }, [city]);

  console.log(weather);

  return (
    <>
      <Header />
      <CountrySelect
        setCity={setCity}
        country={country}
        setCountry={setCountry}
      />
      <WeatherCard data={weather} />
    </>
  );
}

export default App;
