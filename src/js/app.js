import '../sass/style.scss';

import { toggleClass } from './utils';
import './vendors/swiperInit.js';

import Header from './components/Header';


const header = new Header('main-header');

const regionDropdown = document.querySelector('.dropdown--region');
const regionList = regionDropdown.querySelector('.dropdown__menu');

regionDropdown.addEventListener('click', () => {
	toggleClass(regionDropdown, 'open');
});
regionList.addEventListener('click', (e) => {
	console.log(e);
});
