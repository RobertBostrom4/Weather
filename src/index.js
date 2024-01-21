import './style.css';
import { getCurrentDayData } from './currentDayData';
import { getOtherDayData } from './getOtherDayData';
import { tempConversion } from './tempConversion';

const displayButton = document.querySelector('.display-button');
const searchBar = document.querySelector('.search');
let location = 'London';


function handleEnter(event) {

    if (event.key === "Enter") {
        const otherDays = document.querySelector('.other-days');
        location = searchBar.value;
        searchBar.value = '';

        while (otherDays.firstChild) {
            otherDays.removeChild(otherDays.firstChild);
        }

        getCurrentDayData(location);
        getOtherDayData(location, 'Fahrenheit');

    }

}

searchBar.addEventListener('keydown', (handleEnter));

displayButton.addEventListener('click', () => {

    tempConversion(location);
});


getOtherDayData(location, 'Fahrenheit');
getCurrentDayData(location);
