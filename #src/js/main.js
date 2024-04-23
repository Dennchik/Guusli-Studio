import dinamicAdaptive from './libraries/move-elements.js';
dinamicAdaptive();

import mainSlede from './modules/main-slide.js';
mainSlede();

import isMobile from "./libraries/Js-devise";

import servicesSlide from './modules/services-slide.js';
if (isMobile.any()) {
	servicesSlide();
}

import { timeLineHeaderItem } from './modules/animations.js';
timeLineHeaderItem();
//* ----------------------------------------------------------------------------
console.log("%c РОССИЯ ", "background: blue; color: yellow; font-size: x-large; border-left: 5px solid black; border-top: 30px solid white; border-right: 2px solid black; border-bottom: 30px solid red;");
//* ----------------------------------------------------------------------------







