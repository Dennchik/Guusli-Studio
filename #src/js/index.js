import mainSlede from './modules/main-slide.js';
mainSlede();
import isMobile from "./libraries/Js-devise.js";
import servicesSlide from './modules/services-slide.js';
if (isMobile.any()) {
	servicesSlide();
}

import AudioPlayer from './assets/audio-player.js';
AudioPlayer();
// -----------------------------------------------------------------------------
