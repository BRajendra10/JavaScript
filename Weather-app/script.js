const city = document.querySelector('.search');
const search_btn = document.querySelector('.btn-search');
const api_key = '53f02c771c45682da5fb40a179760e71';
let weather_icon = document.querySelector('.weather-icon');

function weather_data(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
    .then((response) => response.json())
    .then((data) => {        

        console.log(data.weather[0].main);
        set_icon(data.weather[0].main);
        document.querySelector('.temp').innerHTML = Math.floor(data.main.temp)  + '°C';
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'm/s';
    })
    .catch((error) => {
        document.querySelector('.temp').innerHTML = '--';
        document.querySelector('.city').innerHTML = 'city not found';
        document.querySelector('.humidity').innerHTML = '--';
        document.querySelector('.wind').innerHTML = '--';
    });
}

function set_icon(mode){    
    if(mode == "Clear"){
        weather_icon.src = "./assets/sun.png";
    }else if(mode == "Rain"){
        weather_icon.src = "./assets/rainy-day.png";
    }else if(mode == "Clouds"){
        weather_icon.src = "./assets/cloudy.png";
    }else if(mode == "Clear"){
        weather_icon.src = "./assets/weather.png";
    }else if(mode == "Drizzle"){
        weather_icon.src = "./assets/haze.png";
    }else if(mode == "Mist"){
        weather_icon.src = "./assets/snow.png";
    }
}

search_btn.addEventListener('click', () => {
    weather_data(city.value);
});