import { toggleClasses, addClasses, removeClasses } from '../utils';

export default class {
	constructor(headerId) {
		this.headerId = headerId;
		this.toggledClass = 'open';
		this.scrolledClass = 'scrolled';
		this.init();
	}

	init() {
		this.header = document.getElementById(this.headerId);
		this.toggler = this.header.querySelector('.toggler');
		this.nav = this.header.querySelector('.nav');
		this.logo = this.header.querySelector('.logo');
		this.setListeners();
	}

	setListeners() {
		this.toggler.addEventListener('click', this.handleTogglerClick.bind(this));
		window.addEventListener('scroll', this.handleScroll.bind(this));
	}

	handleTogglerClick() {
		console.log('Clicked');
		toggleClasses([this.toggler, this.nav, this.logo], this.toggledClass);
	}

	handleScroll(e) {
		const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

		if (scrollTop >= 100) {
			addClasses([this.header, this.toggler, this.nav, this.logo], this.scrolledClass);
		} else {
			removeClasses([this.header, this.toggler, this.nav, this.logo], this.scrolledClass);
		}

	}
}