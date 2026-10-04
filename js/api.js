const apiStatus = document.getElementById("apiStatus");
const weatherData = document.getElementById("weatherData");

async function getWeather() {
    apiStatus.textContent = "Loading weather data...";

    try {
        const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=52.37&longitude=4.90&current=temperature_2m"
        );

        if (!response.ok) {
            throw new Error("Failed to load weather data.");
        }

        const data = await response.json();

        displayWeather(data);

    } catch (error) {
        apiStatus.textContent = "Unable to load weather data.";
        console.error("Weather API error:", error);
    }
}

function displayWeather(data) {
    apiStatus.textContent = "";

    const temperature = document.createElement("p");

    temperature.textContent =
        `Current temperature: ${data.current.temperature_2m} °C`;

    weatherData.appendChild(temperature);
}

getWeather();