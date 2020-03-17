import React from 'react'
import style from './OneDayWeather.module.css'
import Info from './Info'
import SkyInfo from './SkyInfo'

function OneDayWeather({ title, weatherData, displayDetails, display }) {
  let { temp, humidity, pressure, wind, icon, date } = weatherData
  return (
    <div className={style.oneDayWeather + " " + (display ? style.hide : style.show)} onClick={() => { displayDetails(date) }}>
      <div className={style.info}>
        <h2 className={title}>{title}</h2>
        <span>{date}</span>
        <SkyInfo sky={icon} />
        <Info temp={temp} humidity={humidity} pressure={pressure} windSpeed={wind} />
      </div>
      <div className={style.shadow}>
      </div>
    </div>
  )
}

export default OneDayWeather