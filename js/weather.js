const weatherText = document.querySelector("#js-weather");
const API_KEY = "ded8b1690ab3da1a4ef762795e744b2f";
const COORDS = "coords";

function setWeather() {
  const coords = loadCoords();
  const lat = coords.lat;
  const lon = coords.lon;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      const temp = result.main.temp;
      const name = result.name;
      weatherText.textContent = `${temp}℃, ${name}`;
    })
    .catch((err) => {
      console.log(err);
    });
}

function storeCoords(lat, lon) {
  const coordsObj = { lat: lat, lon: lon };
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
  setWeather();
}

function loadCoords() {
  const loadCoords = localStorage.getItem(COORDS);
  return JSON.parse(loadCoords);
}

if (loadCoords() === null) {
  window.navigator.geolocation.getCurrentPosition((res) => {
    storeCoords(res.coords.latitude, res.coords.longitude);
  });
} else {
  setWeather();
}
