import React from 'react'
import style from './OneDayWeather.module.css'
import Info from './Info'
import SkyInfo from './SkyInfo'

function OneDayWeather({ title, temp, humidity, pressure, windSpeed, icon, date }) {
  return (
    <div className={style.oneDayWeather}>
      <div className={style.info}>
        <h2 className={title}>{title}</h2>
        <span>{date}</span>
        <SkyInfo sky={icon} />
        <Info temp={temp} humidity={humidity} pressure={pressure} windSpeed={windSpeed} />
      </div>
      <div className={style.shadow}>
      </div>
    </div>
  )
}

export default OneDayWeather