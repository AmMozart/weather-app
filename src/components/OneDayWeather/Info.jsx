import React from 'react'
import style from './Info.module.css'
import tempIco from './icon/temp.png'
import humIco from './icon/hum.png'
import presIco from './icon/pres.png'
import windIco from './icon/wind.png'

function Info({ temp = "---", humidity = "---", pressure = "---", windSpeed = "---" }) {
  return (
    <div className={style.info}>
      <p><img className={style.icon} src={tempIco} alt="темп." /> <span>{temp} &deg;C </span></p>
      <p><img className={style.icon} src={humIco} alt="влаж." /> <span>{humidity} %</span></p>
      <p><img className={style.icon} src={presIco} alt="давл." /> <span>{pressure} мм.</span></p>
      <p><img className={style.icon} src={windIco} alt="ветер" /> <span>{windSpeed} м/с</span></p>
    </div>
  )
}

export default Info