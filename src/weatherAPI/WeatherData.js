export default class WeatherData {
  constructor(data) {
    this.data = data
    this.temp = data.temp.day
    this.humidity = data.humidity
    this.wind = data.speed
    this.pressure = data.pressure
    this.icon = data.weather[0].icon
    this.date = data.dt
  }
  get temp() {
    return this._temp
  }
  set temp(value) {
    this._temp = Math.floor(value)
  }
  get humidity() {
    return this._humidity
  }
  set humidity(value) {
    this._humidity = value
  }
  get wind() {
    return this._wind
  }
  set wind(value) {
    this._wind = Math.floor(value)
  }
  get pressure() {
    return this._pressure
  }
  set pressure(value) {
    this._pressure = Math.floor(value * 0.76)
  }
  get icon() {
    return this._icon
  }
  set icon(value) {
    this._icon = value
  }
  get date() {
    let day = this._date.getDate();
    let month = this._date.getMonth() + 1;
    let year = this._date.getFullYear();

    return `${ day < 10 ? '0' + day : day }.${ month < 10 ? '0' + month : month }.${year}`
  }
  set date(value) {
    this._date = new Date(value * 1000)
  }
}