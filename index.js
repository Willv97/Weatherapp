const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () =>{

    const APIKey = '88e75cacc8c151a6b527984f693374d7';
    const city = document.querySelector(',search-box input').value;

    if (city === '')
        return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                container.computedStyleMap.height = '400px';
                weatherBox.computedStyleMap.display = 'none';
                weatherDetails.computedStyleMap.display = 'none';
                error404.computedStyleMap.display = 'block';
                error404.classList.add('fadein');
                return;
            }

            error404.computedStyleMap.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('weather-box .temperature');
            const description = document.querySelector('weather-details .description');
            const humidity = document.querySelector('weather-details .humidity');
            const wind = document.querySelector('weather-details .windspan');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/snow.png';
                    break;
            }
        })
})