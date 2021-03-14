import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';

import SwiperCore, { Navigation, Pagination, Zoom } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Zoom]);

const flavorSwiper = new Swiper('.flavors__swiper', {
  init: false,
  grabCursor: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  speed: 500,
  observer: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 5,
    }
  },

  zoom: {
    maxRatio: 1.2,
    minRation: 1,
  },
});


flavorSwiper.on('init', () => {
  flavorSwiper.zoom.in();
});
flavorSwiper.init();
flavorSwiper.on('slideChangeTransitionStart', () => {
  flavorSwiper.zoom.out();
});
flavorSwiper.on('slideChangeTransitionEnd', () => {
  if (flavorSwiper.zoom.scale === 1) {
    flavorSwiper.zoom.in();
  }
});