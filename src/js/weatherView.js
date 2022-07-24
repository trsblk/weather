// Renden weather
export const container = document.querySelector('.container');

// Render weather card for 1 day
export const renderWeatherData = function (data) {
  console.log(data);
  markup = `
      <div class="container-1">
          <span id="city">${data.city}</span>
          <span id="time">${data.date[0]}</span>
      </div>
      <div class="temp-container">
          <span class="temp-value">${data.tempMax[0]} &#8451;</span>
          <span class="temp-value temp-min">${data.tempMin[0]} &#8451;</span>
      </div>
  
      <div class="container-2">
          <div class="left-item">
              <span><i class="fa-solid fa-wind icon"></i>${
                data.windSpeed[0]
              } m/h</span>
              <span><i class="fa-solid fa-sun icon"></i>${data.sunrise[0].slice(
                -5
              )}</span>
              <span><i class="fa-solid fa-moon icon"></i>${data.sunset[0].slice(
                -5
              )}</span>
          </div>
          <div class="right-item">
              <i class="fa-regular fa-sun pic"></i>
          </div>
      </div> 
      `;
  container.innerHTML = '';
  container.insertAdjacentHTML('afterbegin', markup);
};

// Clearing container
export const clearContainer = function () {
  container.innerText = '';
};

// Render spinner
export const renderSpinner = function () {
  html = `  <div class="spinner">
              <div class="lds-dual-ring"></div>
            </div> `;
  container.insertAdjacentHTML('afterbegin', html);
};

// Render weather data for 1 week
export const renderWeekWeather = function (data) {
  let markup = '';
  for (let i = 0; i < 7; i++) {
    markup += `
    <div class="weather-card">
      <div class="container-1">
          <span id="city">${data.city}</span>
          <span id="time">${i === 0 ? 'heute' : data.date[i]}</span>
      </div>
    <div class="temp-container">
        <span class="temp-value">${data.tempMax[i]} &#8451;</span>
        <span class="temp-value temp-min">${data.tempMin[i]} &#8451;</span>
    </div>
    <div class="container-2">
        <div class="left-item">
            <span><i class="fa-solid fa-wind icon"></i>${
              data.windSpeed[i]
            }</span>
            <span><i class="fa-solid fa-sun icon"></i>${data.sunrise[i].slice(
              -5
            )}</span>
            <span><i class="fa-solid fa-moon icon"></i>${data.sunset[i].slice(
              -5
            )}</span>
        </div>
        <div class="right-item">
            <i class="fa-solid fa-${
              data.tempMax[i] > 25 ? 'sun' : 'cloud'
            } pic"></i>
        </div>
    </div>
</div>`;
  }
  clearContainer();
  document.querySelector('html').style.height = '150%';
  container.insertAdjacentHTML('afterbegin', markup);
};

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

const manipulateOpacity = function (cards, opacity = 1) {
  if (opacity < 1)
    cards.forEach(card => {
      if (!card.classList.contains('add-scale'))
        card.style.opacity = `${opacity}`;
    });

  if (opacity === 1) {
    cards.forEach(card => {
      if (!card.classList.contains('add-scale'))
        card.style.opacity = `${opacity}`;
    });
  }
};
