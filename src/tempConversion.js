import { getOtherDayData } from "./getOtherDayData";


export async function tempConversion(location) {
    const weather = await fetch('http://api.weatherapi.com/v1/forecast.json?key=3aa654fe53e441b690942131240801&q=' + location + '&days=1&aqi=no&alerts=no');
    const data = await weather.json();

    const displayButton = document.querySelector('.display-button');
    const currentDayTemp = document.querySelector('.temperature');
    const feelsTemp = document.querySelector('.feels-temp');
    const windSpeed = document.querySelector('.speed');
    const otherDays = document.querySelector('.other-days');

    //Clear otherDays div

    while (otherDays.firstChild) {
        otherDays.removeChild(otherDays.firstChild);
    }

    //If the button includes the Celsius symbol
    if (displayButton.textContent.includes('\u2103')) {
        displayButton.textContent = 'Display \u2109';
        currentDayTemp.textContent = Math.round(data['current']['temp_c']) + ' \u2103';
        feelsTemp.textContent = Math.round(data['current']['feelslike_c']) + ' \u2103';
        windSpeed.textContent = data['current']['wind_kph'] + " kph";
        getOtherDayData(location, 'Celsius');


        //If the button includes the Fahrenheit symbol
    } else if (displayButton.textContent.includes('\u2109')) {
        displayButton.textContent = 'Display \u2103';
        currentDayTemp.textContent = Math.round(data['current']['temp_f']) + ' \u2109';
        feelsTemp.textContent = Math.round(data['current']['feelslike_f']) + ' \u2109';
        windSpeed.textContent = data['current']['wind_mph'] + " mph";
        getOtherDayData(location, 'Fahrenheit');

    }

}