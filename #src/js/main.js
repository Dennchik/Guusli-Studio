import dinamicAdaptive from './libraries/move-elements.js';
dinamicAdaptive();

import mainSlede from './modules/main-slide.js';
mainSlede();

import isMobile from "./libraries/Js-devise";
import servicesSlide from './modules/services-slide.js';


const initSwiper = document.querySelector('.content-box__body');
if (isMobile.any()) {
	servicesSlide();


} else {
}


import { timeLineHeaderItem } from './modules/animations.js';
timeLineHeaderItem();
// -----------------------------------------------------------------------------
// import { burger } from './modules/layouts.js';
// burger();
//* ----------------------------------------------------------------------------
console.log("%c РОССИЯ ", "background: blue; color: yellow; font-size: x-large; border-left: 5px solid black; border-top: 30px solid white; border-right: 2px solid black; border-bottom: 30px solid red;");
//* ----------------------------------------------------------------------------







