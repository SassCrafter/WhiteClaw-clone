import { toggleClasses } from '../utils';

export default class {
	constructor(headerId) {
		this.headerId = headerId;
		this.toggledClass = 'open';
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
	}

	handleTogglerClick() {
		console.log('Clicked');
		toggleClasses([this.toggler, this.nav, this.logo], this.toggledClass);
	}


}