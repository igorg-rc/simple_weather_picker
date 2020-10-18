class Weather {
  constructor(city, state) {
    this.base_url = 'https://api.openweathermap.org/data/2.5/weather';
    this.apiKey = '5226ddcf81005fab6c32e32d315adca8';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API using async - await
  async getWeather() {
    const response = await fetch(`${this.base_url}?q=${this.city},${this.state}&appid=${this.apiKey}`)
    const responseData = await response.json();
    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }

}
