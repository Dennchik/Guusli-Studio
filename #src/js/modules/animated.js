import { smoother, applyEffects, applyParallaxEffects, animateTitles, initSectionTriggerMove, tlFooter, tlServices1, tlServices2 } from "./modules/gs-animation.js";
// -----------------------------------------------------------------------------
applyParallaxEffects(smoother);
// applyEffects(smoother);
animateTitles(); initSectionTriggerMove('#main-slide', '.header__item--home');
initSectionTriggerMove('#services', '.header__item--services');
initSectionTriggerMove('#footer', '#contacts'); tlFooter();
tlServices1();
tlServices2();
// -----------------------------------------------------------------------------
import isMobile from "./libraries/Js-devise";
if (isMobile.any()) {
} else {
	applyEffects(smoother);
}
// -----------------------------------------------------------------------------
import ScrollAccordion from "./modules/gsap-animated.js";
import isMobile from "./libraries/Js-devise";
if (isMobile.any()) {
} else {
	ScrollAccordion();
}
