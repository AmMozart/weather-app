import WeatherData from './WeatherData'

let weatherConfig = {
  city: "Moscow",
  language: 'RU',
  mode: 'json',
  units: 'metric',
  count: 3,
  APPID: '325d99ea2e22daeef5ec93a29f623c0e'
}

export default class WeatherStation {
  constructor(city = 'Moscow') {
    this.weatherConfig = {
      ...weatherConfig,
      city
    }
  }
  _getUrl() {
    return `http://api.openweathermap.org/data/2.5/forecast/daily?` +
      `q=${this.weatherConfig.city},${this.weatherConfig.language}&` +
      `mode=${this.weatherConfig.mode}&units=${this.weatherConfig.units}&` +
      `cnt=${this.weatherConfig.count}&APPID=${this.weatherConfig.APPID}`
  }

  async getWeatherData() {
    const resp = await fetch(this._getUrl(), {
      // mode: 'no-cors',
      // credentials: 'omit'
    })
    if (resp.ok) {
      return await resp.json()
        .then((value) => value.list)
        .then((value) => {
          return value.map((data) =>
            new WeatherData(
              data.temp.day,
              data.humidity,
              data.speed,
              data.pressure,
              data.weather[0].icon,
              data.dt))
        })
    }
  }
}