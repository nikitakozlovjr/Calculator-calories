import elements from './application.js';
import {genderConfig, activityConfig} from './coefficients.js';

const spanWithResult = {
    normal: document.querySelector('.normal_cal'),
    low: document.querySelector('.low_cal'),
    more: document.querySelector('.more_cal')
};

const infoBlock = document.querySelector('.info');
const button = document.querySelector('.submit');

button.addEventListener('click', () => {
    const normal = activityConfig[elements.activity] * ((10 * elements.weight) + (6.25 * elements.height) - (5 * elements.age) + genderConfig[elements.gender]);
    const low = (0.85 * normal).toFixed(1);
    const more = (1.15 * normal).toFixed(1);

    spanWithResult.normal.textContent = normal.toFixed(1);
    spanWithResult.low.textContent = low;
    spanWithResult.more.textContent = more;

    infoBlock.style.display = 'block';
})