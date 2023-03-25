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

![Meteo1](https://user-images.githubusercontent.com/10536527/227704305-34eead3a-3b63-4aeb-9e10-c22d5131cbe3.jpg)
![Meteo2](https://user-images.githubusercontent.com/10536527/227704308-615c7cf3-8859-4d56-ae48-15e38b65feb7.jpg)
