import React from 'react';
import style from './Weather.module.css';
import OneDayWeather from './OneDayWeather/OneDayWeather'

function Weather({ WeatherData }) {

  return (
    <div className={style.generalBlock}>
      <div className={style.weather}>
        <h1 className={style.title}>Погода в Москве на 3 дня</h1>
        <div className={style.containerDay}>
          <OneDayWeather title="Сегодня" temp={WeatherData[0].temp}
            humidity={WeatherData[0].humidity} pressure={WeatherData[0].pressure}
            windSpeed={WeatherData[0].wind} icon={WeatherData[0].icon} date={WeatherData[0].date} />

          <OneDayWeather title="Завтра" temp={WeatherData[1].temp}
            humidity={WeatherData[1].humidity} pressure={WeatherData[1].pressure}
            windSpeed={WeatherData[1].wind} icon={WeatherData[1].icon} date={WeatherData[1].date} />

          <OneDayWeather title="Послезавтра" temp={WeatherData[2].temp}
            humidity={WeatherData[2].humidity} pressure={WeatherData[2].pressure}
            windSpeed={WeatherData[2].wind} icon={WeatherData[2].icon} date={WeatherData[2].date} />
        </div>
      </div>
      <div className={style.footer}>
      </div>
    </div>
  );
}

export default Weather;
