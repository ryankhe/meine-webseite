const API_KEY = "755649c5a87e194e63bb588bb281c170"; // Replace with your OpenWeatherMap API key

// Function to get weather data
function getWeather() {
  const city = document.getElementById("city").value;

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  if (city === "Frankfurt") {
    alert("du bist 100 % hossein");
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

function add() {
  const addContainer = document.getElementById("addContainer");
  addContainer.innerHTML = `
  <h1 id="AddWid">Add a widjet</h1>
  <div id="containerAdd">
    <button type="button" id="weather" class="AddButton" onclick="weather()">Weather</button>
    <button type="button" id="todo" class="AddButton">Todo</button>
    <button type="button" id="zitat" class="AddButton">zitat</button>
    </div>`
    ;
}
function weather() {
    let weatherContainer = document.getElementById("container1");
    weatherContainer.style.visibility = "visible";

weatherContainer.innerHTML = `

            <h1>weather display</h1>
            <div id="input">
                <input id="city" type="text" placeholder="enter city">
                <button type="submit" onclick="getWeather()" id="searchBtn">Search</button>
            </div>
            <div id="stats" class="stats">
            </div>`
}
