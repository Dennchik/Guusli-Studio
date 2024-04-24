import { smoother, applyEffects, applyParallaxEffects, animateTitles, initSectionTriggerMove, tlFooterParallel, tlServices1, tlServices2 } from "./modules/gs-animation.js";
// -----------------------------------------------------------------------------

applyParallaxEffects(smoother);
animateTitles('.services__title', '.services', '.services', '=150', '=0');
animateTitles('.offer-container__title', '.services__offer', '.services', '=150');
initSectionTriggerMove('#main-slide', '.header__item--home');
initSectionTriggerMove('#services', '.header__item--services');
initSectionTriggerMove('#footer', '#contacts');

tlServices1();
tlServices2();
// -----------------------------------------------------------------------------
import isMobile from "./libraries/Js-devise";
if (isMobile.any()) {
} else {
	tlFooterParallel();
	applyEffects(smoother);
}