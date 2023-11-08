// Current city searched for
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#searchArea");
  let cityElement = document.querySelector("#current-city");
  let cityName = searchInputElement.value;
  cityElement.innerHTML = cityName;

  // Current weather API
  let apiKey = "025000aa1bof6148etc27f34c35bd48a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(changeTemperature);
}
function changeTemperature(response) {
  let currentTemperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#current-temperature-value");
  temperatureElement.innerHTML = `${currentTemperature}°C`;
}

// Current day and time
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
