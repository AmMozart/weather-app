import React, { useState, useEffect } from "react";
import Weather from "./components/Weather";
import style from "./App.module.css";
import weatherStation from "./weatherAPI/WeatherStation";

function App() {
  const [weatherData, setWeatherData] = useState([{}, {}, {}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    weatherStation.getWeatherData().then((dataArr) => {
      if (dataArr) {
        setWeatherData(dataArr);
        setLoading(false);
      } else {
        console.log("Не удалось получить данные о погоде!");
      }
    });
  }, []);

  if (loading) {
    return (
      <div className={style.weather}>
        <h2>Loading</h2>
      </div>
    );
  } else {
    return (
      <div className={style.weather}>
        <Weather weatherData={weatherData} />
      </div>
    );
  }
}

export default App;
