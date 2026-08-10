document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  console.log("weatherInfo", weatherInfo);
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "c77aa8e77b9d5df42b6da03f6ce1c13d";

  // cityInput.onchange = (e) => {
  //   // Works on blur
  //   console.log("text", e);
  // };

  cityInput.oninput = (e) => {
    console.log("text", e.target.value);
    const inputValue = e.target.value;
    if (inputValue === "") {
      weatherInfo.classList.add("hidden");
      errorMessage.classList.add("hidden");
    }
  };

  cityInput.addEventListener("input", (e) => {
    console.log("text", e.target.value);
  });

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    // It may throw an error
    // server/database is always in another continent

    try {
      const weatherData = await fetchWeatherData(city);
      // browser environment or node environment
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    // gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    const { name, main, weather } = data;
    cityNameDisplay.innerText = name;
    temperatureDisplay.textContent = `Temperature : ${main.temp}`;
    descriptionDisplay.textContent = `Weather : ${main.temp}`;
    // Unlock the display
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }

  // Background change
  const bodyElement = document.getElementsByTagName("body");
  console.log(bodyElement[0]);
  const changeBackBtn = document.getElementById("change-back");

  changeBackBtn.addEventListener("click", () => {
    console.log("click");
    bodyElement[0].classList.toggle("back-change");
  });
});
