import React, { useState, useEffect } from 'react'
import Weather from './components/Weather'
import style from './App.module.css'
import WeatherStation from './weatherAPI/WeatherStation'
import WeatherData from './weatherAPI/WeatherData'


let weatherStation = new WeatherStation()
const wd = new WeatherData();

function App() {
  const [weatherData, setWeatherData] = useState([wd, wd, wd])

  useEffect(() => {
    weatherStation.getWeatherData()
      .then((dataArr) => {
        if (dataArr) {
          setWeatherData(dataArr)
          console.log(weatherData)
        }
        else {
          console.log("Не удалось получить данные о погоде!")
        }
      })
  }, [])

  return (
    <div className={style.weather}>
      <Weather WeatherData={weatherData} />
    </div>
  );
}

export default App;
