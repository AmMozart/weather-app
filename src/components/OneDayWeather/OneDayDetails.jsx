import React from 'react'
import style from './OneDayDetails.module.css'

function OneDayDetails({ i, date, displayDetails, weatherData }) {

  let getDate = (ms) => {
    return new Date(ms * 1000)
  }

  let formatTime = (num) => {
    return num < 10 ? ('0' + num) : num
  }

  let sunriseTime = formatTime(getDate(weatherData[i].data.sunrise).getHours()) + ':' +
    formatTime(getDate(weatherData[i].data.sunrise).getMinutes()) + ':' +
    formatTime(getDate(weatherData[i].data.sunrise).getSeconds())
  let sunsetTime = formatTime(getDate(weatherData[i].data.sunrise).getHours()) + ':' +
    formatTime(getDate(weatherData[i].data.sunrise).getMinutes()) + ':' +
    formatTime(getDate(weatherData[i].data.sunrise).getSeconds())

  return (
    <div className={style.oneDayDetails + " " + (date ? style.show : style.hide)} onClick={() => { displayDetails(null) }}>
      <div className={style.details}>
        <h1>Прогноз Погоды на <span className={style.spanData}>{date}г.</span></h1>
        <ul>
          <li>Время рассвета: <span className={style.spanData}>{sunriseTime}</span></li>
          <li>Время заката: <span className={style.spanData}>{sunsetTime}</span></li>
          <hr />
          <h5>Температура:</h5>
          <li>Минимальная &deg;C: <span className={style.spanData}>{weatherData[i].data.temp.min} &deg;C</span></li>
          <li>Максимальная &deg;C: <span className={style.spanData}>{weatherData[i].data.temp.max} &deg;C</span></li>
          <hr />
          <li>Утро: <span className={style.spanData}>{weatherData[i].data.temp.morn} &deg;C</span></li>
          <li>День: <span className={style.spanData}>{weatherData[i].data.temp.day} &deg;C</span></li>
          <li>Вечер: <span className={style.spanData}>{weatherData[i].data.temp.eve} &deg;C</span></li>
          <li>Ночь: <span className={style.spanData}>{weatherData[i].data.temp.night} &deg;C</span></li>
          <hr />
          <h5>Ощущается как:</h5>
          <li>Утро : <span className={style.spanData}>{weatherData[i].data.feels_like.morn} &deg;C</span></li>
          <li>День : <span className={style.spanData}>{weatherData[i].data.feels_like.day} &deg;C</span></li>
          <li>Вечер : <span className={style.spanData}>{weatherData[i].data.feels_like.eve} &deg;C</span></li>
          <li>Ночь : <span className={style.spanData}>{weatherData[i].data.feels_like.night} &deg;C</span></li>
          {/* <hr /> */}
          <li>Ночь : <span className={style.spanData}>{weatherData[i].data.feels_like.night} &deg;C</span></li>
        </ul>
      </div>
      <div className={style.shadow}>
      </div>
    </div >
  )
}

export default OneDayDetails