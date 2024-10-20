const API_KEY = "755649c5a87e194e63bb588bb281c170"; // Replace with your OpenWeatherMap API key

// Function to get weather data
function getWeather() {
  const city = document.getElementById("city").value;

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  if (city === "Frankfurt") {
    alert("du bist 100 % hossein")
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        alert("City not found.");
        return;
      }
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching the weather data:", error);
    });
}

// Function to display weather data
function displayWeather(data) {
  const stats = document.getElementById("stats");
  let emoji;
  const temperature = data.main.temp;
  const feelsLike = data.main.feels_like;
  const humidity = data.main.humidity;
  const description = data.weather[0].description;
  const windSpeed = data.wind.speed;

  stats.innerHTML = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${temperature}°C</p>
        <p><strong>Feels Like:</strong> ${feelsLike}°C</p>
        <p><strong>Weather:</strong> ${description}</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <img src="images/${emoji}.png">
    `;
}
