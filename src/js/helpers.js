// Get JSON from API
import { container } from './weatherView';

export const getJSON = async function (URL) {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

// Clearing container
export const clearContainer = function () {
  container.innerText = '';
};

export const manipulateOpacity = function (cards, opacity = 1) {
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
