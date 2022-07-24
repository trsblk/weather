// App state
let state = {};

import { getJSON } from './src/js/helpers';
import * as weatherView from './src/js/weatherView';
import * as buttonsView from './src/js/buttonsView';

// API Call
const getWeatherData = async function (url, city) {
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

    // console.log(daily);

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
const controlButtonsAppearing = function () {
  buttonsView.buttonsAppearing();
};

// add event listeners to buttons
const controlButtonsEvent = function () {
  buttonsView.addHandlerButtons(getWeatherData);
};

const init = function () {
  controlButtonsAppearing();
  controlButtonsEvent();
};

init();
