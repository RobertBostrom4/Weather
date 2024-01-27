export async function getCurrentDayData(location) {
    const weather = await fetch('http://api.weatherapi.com/v1/forecast.json?key=3aa654fe53e441b690942131240801&q=' + location + '&days=1&aqi=no&alerts=no', {mode: "cors"});
    const data = await weather.json();

    document.querySelector('.condition').textContent = data['current']['condition']['text'];
    document.querySelector('.location').textContent = data['location']['name'];
    document.querySelector('.time').textContent = data['location']['localtime'];
    document.querySelector('.temperature').textContent = Math.round(data['current']['temp_f']) + ' \u2109';
    document.querySelector('.condition-img').style.backgroundImage = 'url(' + data['current']['condition']['icon'] + ')';
    document.querySelector('.feels-temp').textContent = data['current']['feelslike_f'] + ' \u2109';
    document.querySelector('.humidity-percentage').textContent = data['current']['humidity'] + "%";
    document.querySelector('.rain-percentage').textContent = data['forecast']['forecastday'][0]['day']['daily_chance_of_rain'] + "%";
    document.querySelector('.speed').textContent = data['current']['wind_mph'] + " mph";

}