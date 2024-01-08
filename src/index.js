async function getWeatherData() {
    const weather = await fetch('http://api.weatherapi.com/v1/forecast.json?key=3aa654fe53e441b690942131240801&q=London&days=1&aqi=no&alerts=no');
    const data = await weather.json();
    console.log(data);
}

getWeatherData();