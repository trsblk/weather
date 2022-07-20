import { BUTTONS_ARRAY } from './config';

export const buttonsAppearing = function (buttons) {
  console.log(buttons);
  setTimeout(function () {
    buttons.forEach(btn => (btn.style.opacity = '100'));
  }, 1000);
};
