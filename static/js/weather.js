const apiKey = '1ad0404547e63fd623b84d9259f01630';
const cityName = 'Москва'; // начальный город

const weatherData = document.querySelector('#weather-data');
const cityInput = document.querySelector('#city-input');
const submitButton = document.querySelector('#submit-button');

// функция для получения данных о погоде
function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const cityName = data.name;
      const temperature = data.main.temp;
      const feelsLike = data.main.feels_like;
      const description = data.weather[0].description;

      const weatherHtml = `
        <h2>${cityName}</h2>
        <p>Температура: ${temperature} &deg;C</p>
        <p>Ощущается как: ${feelsLike} &deg;C</p>
        <p>Описание: ${description}</p>
      `;
      weatherData.innerHTML = weatherHtml;
    })
    .catch(error => {
      console.log(error);
      weatherData.innerHTML = '<p>Ошибка загрузки данных</p>';
    });
}

// вызываем функцию для получения данных о погоде для начального города
getWeatherData(cityName);

// обработчик события для формы
submitButton.addEventListener('click', event => {
  event.preventDefault();
  const city = cityInput.value;
  getWeatherData(city);
});