// Get JSON from API
export const getJSON = async function (URL) {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
