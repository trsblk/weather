// App state
let state = {};
import { API_URL_BERLIN } from './src/js/config';
import { API_URL_LONDON } from './src/js/config';
import { API_URL_PARIS } from './src/js/config';
import { BUTTONS_ARRAY } from './src/js/config';
import { container } from './src/js/weatherView';
import * as weatherView from './src/js/weatherView';
import { getJSON } from './src/js/helpers';
import { clearContainer, manipulateOpacity } from './src/js/helpers';
import { buttonsAppearing } from './src/js/buttonsView';

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
    console.log(daily);

    // Render weather data for 1 day
    // weatherView.renderWeatherData(state);

    // Render weather for 1 week
    weatherView.renderWeekWeather(state);

    // console.log(daily);
  } catch (err) {
    console.log(err);
  }
};

// Control buttons appearing
const controlButtons = function () {
  buttonsAppearing(BUTTONS_ARRAY);
};

const init = function () {
  controlButtons();
};

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

// Manipulate hover state
container.addEventListener('mouseover', function (e) {
  //  Check if event happened on weather card
  if (!e.target.closest('.weather-card')) return;
  const card = e.target.closest('.weather-card');
  card.classList.add('add-scale');

  // Selecting weather cards
  const weatherCards = document.querySelectorAll('.weather-card');

  // change opacity
  manipulateOpacity(weatherCards, 0.4);
});

// Manipulate hover state
container.addEventListener('mouseout', function (e) {
  //  Check if event happened on weather card
  if (!e.target.closest('.weather-card')) return;
  const card = e.target.closest('.weather-card');
  card.classList.remove('add-scale');

  // Selecting weather cards
  const weatherCards = document.querySelectorAll('.weather-card');

  // change opacity
  manipulateOpacity(weatherCards);
});
