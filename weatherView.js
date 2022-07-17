// Renden weather
export const container = document.querySelector('.container');
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

// Render spinner
export const renderSpinner = function () {
  html = `  <div class="spinner">
                    <div class="lds-dual-ring"></div>
                </div> `;
  container.insertAdjacentHTML('afterbegin', html);
};
