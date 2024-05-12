import { smoother, applyEffects, applyParallaxEffects, animateTitles, initSectionTriggerMove, tlFooterParallel, tlServices1, tlServices2 }
	from "../animations/animation-index.jsx";

// -----------------------------------------------------------------------------

applyParallaxEffects(smoother, '.material-parallax');
// -----------------------------------------------------------------------------
import isMobile from "../libraries/Js-devise.js";
if (isMobile.any()) {
} else {
	tlFooterParallel();
	applyEffects(smoother);
}
// -----------------------------------------------------------------------------
animateTitles('.services__title', '.services', '.services', '=150', '=0');
animateTitles('.offer-container__title', '.services__offer', '.services', '=150', '=0');
initSectionTriggerMove('.main-slide', '.header__item--home');
initSectionTriggerMove('.services', '.header__item--services');
initSectionTriggerMove('.footer', '.header__item--contacts');
// -----------------------------------------------------------------------------
initSectionTriggerMove('.main-slide', '.menu-float__menu-link--home');
initSectionTriggerMove('.services', '.menu-float__menu-link--services');
initSectionTriggerMove('.footer', '.menu-float__menu-link--footer');
tlServices1();
tlServices2();
