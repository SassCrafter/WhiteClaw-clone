import '../sass/style.scss';

import { toggleClass } from './utils';

import './vendors/swiperInit.js';
import Header from './components/Header';

import AOS from 'aos';
import 'aos/dist/aos.css';


const header = new Header('main-header');

const regionDropdown = document.querySelector('.dropdown--region');
const regionList = regionDropdown.querySelector('.dropdown__menu');

regionDropdown.addEventListener('click', () => {
	toggleClass(regionDropdown, 'open');
});
regionList.addEventListener('click', (e) => {
	console.log(e);
});

window.addEventListener('click', (e) => {
	if (!e.target.closest('.dropdown--region')) {
		if (regionDropdown.classList.contains('open')) {
			toggleClass(regionDropdown, 'open');
		}
	}
})


// Init AOS
AOS.init({
	duration: 1200,
	easing: 'easeInOutQuad',
	delay: 50,
	offset: 50,
});
