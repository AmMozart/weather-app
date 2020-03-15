Weather component take json data from API on this site:
http://api.openweathermap.org/

default param:

- city: Moscow,
- language: RU,
- mode: json, (format for data response)
- units: metric,
- cnt: 3, (count day for get weather)
- APPID: 325d99ea2e22daeef5ec93a29f623c0e. (unique id for each user on site openweathermap.org)

Request API looks like that:
http://api.openweathermap.org/data/2.5/forecast/daily?q=Moscow,RU&mode=json&units=metric&cnt=3&APPID=325d99ea2e22daeef5ec93a29f623c0e
