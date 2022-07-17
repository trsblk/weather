export const getJSON = async function (URL) {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};
