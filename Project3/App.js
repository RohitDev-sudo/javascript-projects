// Function to create elements with attributes
function createElement(tag, attributes = {}) {
  const element = document.createElement(tag);
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  return element;
}

// Function to append children to a parent element
function appendChildren(parent, ...children) {
  children.forEach((child) => parent.appendChild(child));
}

// Function to fetch weather data
async function fetchWeather(cityName) {
  const API_KEY = "your api key";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    displayWeatherInfo(data);
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
  }
}

// Function to display weather information
function displayWeatherInfo(weatherData) {
  const weatherInfoDiv = document.getElementById("weatherInfo");
  const { name, main, weather, wind } = weatherData;

  const cityName = name;
  const temperature = Math.round(main.temp - 273.15); // Convert from Kelvin to Celsius
  const description = weather[0].description;
  const humidity = main.humidity;
  const windSpeed = wind.speed;
  // Set different text colors for each piece of information
  const cityNameColor = "#ff9800"; // Orange color
  const temperatureColor = "#4caf50"; // Green color
  const descriptionColor = "#2196f3"; // Blue color
  const humidityColor = "#ffeb3b"; // Yellow color
  const windSpeedColor = "#e91e63"; // Pink color

  // Create HTML content with extracted information and color styles
  const htmlContent = `
    <h2 style="color: ${cityNameColor};">${cityName}</h2>
    <p style="color: ${temperatureColor};">Temperature: ${temperature}°C</p>
    <p style="color: ${humidityColor};">Humidity: ${humidity}%</p>
    <p style="color: ${windSpeedColor};">Wind Speed: ${windSpeed} m/s</p>
    <p style="color: ${descriptionColor};">Description: ${description}</p>
  `;

  weatherInfoDiv.innerHTML = htmlContent;
  weatherInfoDiv.classList.add("active");
}

// Main code
const root = document.getElementById("root");

// Create user input section
const userInputDiv = createElement("div", { id: "userInput" });
const label = createElement("label", { for: "cityName" });
label.textContent = "Enter City Name";
const input = createElement("input", { id: "cityName", required: true });
const button = createElement("button");
button.textContent = "Get Weather Info";

appendChildren(userInputDiv, label, input, button);

// Create weather info section
const weatherInfoDiv = createElement("div", { id: "weatherInfo" });

// Append everything to the root element
appendChildren(root, userInputDiv, weatherInfoDiv);

// Add click event listener to the button
button.addEventListener("click", () => {
  const cityName = document.getElementById("cityName").value;
  fetchWeather(cityName);
});
