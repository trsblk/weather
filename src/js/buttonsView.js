import { API_URL_BERLIN } from './config';
import { API_URL_LONDON } from './config';
import { API_URL_PARIS } from './config';
import { container } from './weatherView';
import * as weatherView from './weatherView';
const BUTTONS_ARRAY = document.querySelectorAll('.city-btn');

export const buttonsAppearing = function () {
  setTimeout(function () {
    BUTTONS_ARRAY.forEach(btn => (btn.style.opacity = '100'));
  }, 1000);
};

// Add event listeners to buttons
export const addHandlerButtons = function (handler) {
  BUTTONS_ARRAY.forEach(btn => {
    btn.addEventListener('click', function (e) {
      container.classList.add('hidden');
      weatherView.clearContainer();

      // Render spinner
      weatherView.renderSpinner();
      setTimeout(function () {
        container.classList.remove('hidden');
        if (e.target.innerText === 'Berlin') handler(API_URL_BERLIN, 'Berlin');
        if (e.target.innerText === 'London') handler(API_URL_LONDON, 'London');
        if (e.target.innerText === 'Paris') handler(API_URL_PARIS, 'Paris');
      }, 500);
    });
  });
};
