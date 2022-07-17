let state = {};
import { API_URL_BERLIN } from './config';
import { API_URL_LONDON } from './config';
import { API_URL_PARIS } from './config';
import { BUTTONS_ARRAY } from './config';
import { container } from './weatherView';
import * as weatherView from './weatherView';
import { getJSON } from './helpers';

// API Call
export const getWeatherData = async function (url, city) {
  try {
    const data = await getJSON(url);

    const { daily } = data;
    state = {
      city: city,
      date: daily.time,
      tempMax: daily.temperature_2m_max,
      tempMin: daily.temperature_2m_min,
      windSpeed: daily.windspeed_10m_max,
      sunrise: daily.sunrise,
      sunset: daily.sunset,
    };

    // Render weather data
    weatherView.renderWeatherData(state);
    console.log(daily);
    console.log(data);
    console.log(state);
  } catch (err) {
    console.log(err);
  }
};

// Init function
const init = function () {};

init();

// Add event listeners

BUTTONS_ARRAY.forEach(btn => {
  btn.addEventListener('click', function (e) {
    container.classList.add('hidden');
    setTimeout(function () {
      container.classList.remove('hidden');
      if (e.target.innerText === 'Berlin')
        getWeatherData(API_URL_BERLIN, 'Berlin');
      if (e.target.innerText === 'London')
        getWeatherData(API_URL_LONDON, 'London');
      if (e.target.innerText === 'Paris')
        getWeatherData(API_URL_PARIS, 'Paris');
    }, 500);
  });
});
