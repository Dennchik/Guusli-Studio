import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
// -----------------------------------------------------------------------------
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Flip);
ScrollTrigger.normalizeScroll(true);
export let smoother = ScrollSmoother.create({
	wrapper: "#wrapper",
	content: "#content",
	smooth: 1,
	effects: true,
	normalizeScroll: true
});
// -----------------------------------------------------------------------------
//todo: Секция "Parallax Effects".
export function applyParallaxEffects(smoother, element) {
	smoother.effects(element, {
		speed: (i) => {
			return i % 1 === 0 ? 0.5 : 1.15;
		}
	});
}

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
export function flippElement() {

	const box = document.querySelector("._button-flip"),
		originalContainer = document.querySelector(".achieve-items__body"),
		newContainer = document.querySelector(".achieve-items__new-container");

	document.querySelector("._button-flip").addEventListener('click', () => {
		const state = Flip.getState(box);

		(box.parentNode === originalContainer ? newContainer : originalContainer).appendChild(box);

		Flip.from(state, { duration: 1, ease: "power1.inOut", scale: true });
	});

}


