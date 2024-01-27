import { getDay } from "date-fns";


export async function getOtherDayData(location, tempScale) {
    const weather = await fetch('http://api.weatherapi.com/v1/forecast.json?key=3aa654fe53e441b690942131240801&q=' + location + '&days=8&aqi=no&alerts=no', {mode: "cors"});
    const data = await weather.json();

    for (let i = 1; i < data['forecast']['forecastday'].length; i++) {

        let date = data['forecast']['forecastday'][i]['date'];
        let dayNumber = getDay(new Date(date));


        if (dayNumber == 6) {
            dayNumber = 0;
        } else {
            dayNumber++;
        }

        const otherDays = document.querySelector('.other-days');
        const dayContainer = document.createElement('div');
        dayContainer.className = 'day-container';
        const nameOfDay = document.createElement('h1');
        const maxTemp = document.createElement('h2');
        const minTemp = document.createElement('h3');
        const otherDayConditionImg = document.createElement('div');
        otherDayConditionImg.className = 'other-day-condi-img';

        if (tempScale == 'Fahrenheit') {

            maxTemp.textContent = Math.round(data['forecast']['forecastday'][i]['day']['maxtemp_f']) + '\u2109';
            minTemp.textContent = Math.round(data['forecast']['forecastday'][i]['day']['mintemp_f']) + '\u2109';

        } else if (tempScale == 'Celsius') {

            maxTemp.textContent = Math.round(data['forecast']['forecastday'][i]['day']['maxtemp_c']) + '\u2103';
            minTemp.textContent = Math.round(data['forecast']['forecastday'][i]['day']['mintemp_c']) + '\u2103';
        }


        otherDayConditionImg.style.backgroundImage = 'url(' + data['forecast']['forecastday'][i]['day']['condition']['icon'] + ')';

        switch (dayNumber) {

            case 0:
                nameOfDay.textContent = 'Sunday';
                break;
            case 1:
                nameOfDay.textContent = 'Monday';
                break;
            case 2:
                nameOfDay.textContent = 'Tuesday';
                break;
            case 3:
                nameOfDay.textContent = 'Wednesday';
                break;
            case 4:
                nameOfDay.textContent = 'Thursday';
                break;
            case 5:
                nameOfDay.textContent = 'Friday';
                break;
            case 6:
                nameOfDay.textContent = 'Saturday';
                break;

        }

        nameOfDay.appendChild(maxTemp);
        nameOfDay.appendChild(minTemp);
        nameOfDay.appendChild(otherDayConditionImg);
        dayContainer.appendChild(nameOfDay);
        otherDays.appendChild(dayContainer);

    }

}