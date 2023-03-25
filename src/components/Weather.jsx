import React, { useState } from "react";
import style from "./Weather.module.css";
import OneDayWeather from "./OneDayWeather/OneDayWeather";
import OneDayDetails from "./OneDayWeather/OneDayDetails";

function Weather({ weatherData }) {
  let [date, setDate] = useState(null);

  let displayDetails = (value) => {
    setDate(value);
  };

  let formatDate = (date) => {
    let newDate = new Date(date * 1000);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${day < 10 ? "0" + day : day}.${
      month < 10 ? "0" + month : month
    }.${year}`;
  };
  let index = weatherData.reduce((result, elem, i) => {
    result = formatDate(elem.data.dt) === date ? i : result;
    return result;
  }, 0);

  return (
    <div className={style.generalBlock}>
      <div className={style.weather}>
        <h1 className={style.title}>Погода в Москве</h1>
        <div className={style.containerDay}>
          <OneDayWeather
            title="Сегодня"
            weatherData={weatherData[0]}
            display={date}
            displayDetails={displayDetails}
          />
          <OneDayWeather
            title="Завтра"
            weatherData={weatherData[1]}
            display={date}
            displayDetails={displayDetails}
          />
          <OneDayWeather
            title="Послезавтра"
            weatherData={weatherData[2]}
            display={date}
            displayDetails={displayDetails}
          />
          <OneDayDetails
            i={index}
            date={date}
            displayDetails={displayDetails}
            weatherData={weatherData}
          />
        </div>
      </div>
      <div className={style.footer}></div>
    </div>
  );
}

export default Weather;
