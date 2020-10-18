class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.t_minmax = document.getElementById('w-t_minmax');
    this.temp = document.getElementById('w-temp');

    this.feelsLike = document.getElementById('w-feels-like');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
    this.icon = document.getElementById('w-icon');
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = (JSON.stringify(weather.weather[0].description)).replace(/[""]/g, '');
    this.t_minmax.textContent = `Daily temperature: ${this.toCelsius(weather.main.temp_min)}-${this.toCelsius(weather.main.temp_max)} \u00B0C`;
    this.temp.textContent = `${this.toCelsius(weather.main.temp)} \u00B0C`;
    this.feelsLike.textContent = `Feels like: ${this.toCelsius(weather.main.feels_like)} \u00B0C`;
    this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} HPa.`;
    this.wind.textContent = `Wind speed: ${weather.wind.speed} m/s`;
    this.icon.setAttribute('src', 'http://openweathermap.org/img/wn/10d@2x.png');
  }

  toCelsius(obj) {
    return (Number(JSON.parse(obj)) - 273).toFixed(0);
  }

}