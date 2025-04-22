
const apiKey = 'c94e7b8e64c16d13981c9468b6049b08';
const city = 'Kharkiv';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`;

const weatherContainer = document.querySelector("#weather-widget");

function renderWeather(weatherData) {
    const icon = weatherData.weather[0].icon;

    const weatherInfo = `
                <div>Місто: ${weatherData.name}</div>
                <div>Температура: ${weatherData.main.temp}°C</div>
                <div>Опис: ${weatherData.weather[0].description}</div>
                <div>Вологість: ${weatherData.main.humidity}%</div>
                <div><img src="https://openweathermap.org/img/wn/${icon}@4x.png" alt="Weather Icon"></div> 
            `;

    weatherContainer.innerHTML = `
                <h3>Погода</h3>
                ${weatherInfo}
                <button id="update-btn">Оновити</button>
            `;
}

function getWeather() {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => renderWeather(data))
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Помилка під час отримання даних про погоду');
        });
}

window.onload = getWeather;

document.getElementById('update-btn').addEventListener('click', getWeather);