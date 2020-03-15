import React from 'react'
import style from './SkyInfo.module.css'

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./icon', true, /\.png$/));

function SkyInfo({ sky }) {
  let description =
    (sky.match(/^01/) && "Ясно") ||
    (sky.match(/^02/) && "Малооблачно") ||
    (sky.match(/^03/) && "Облачно") ||
    (sky.match(/^04/) && "Облачно") ||
    (sky.match(/^09/) && "Дождь") ||
    (sky.match(/^11/) && "Слабый дождь") ||
    (sky.match(/^13/) && "Снег")

  let image = images.filter((image) => image.match(new RegExp(sky)) ? true : false)
  return (
    <div className={style.info}>
      <img className='icon' src={image} alt="" />
      <span className='description'>{description}</span>
    </div>
  )
}

export default SkyInfo