// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init UI
const ui = new UI();

// Get weather when DOM is loaded
document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city, state);

  // Set location to LS
  storage.setLocationData(city, state);

  getWeather();

  $('#locModal').modal('hide');
  console.log('success');

});


function getWeather() {
  weather.getWeather() // wrapped to outer getWeather function to be called when DOM is loaded
    .then(results => {
      ui.paint(results);
    })
    .catch(error => console.log(error));
}

