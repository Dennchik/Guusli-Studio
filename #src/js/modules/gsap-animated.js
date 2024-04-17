import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default () => {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	let smoother = ScrollSmoother.create({
		content: '.main-content',
		content: '.main-content__content',

		smooth: true,
		effects: true,
	});

	smoother.effects(".content-box__column", {
		speed: (i) => {
			// Desktop three columns layout
			if (window.matchMedia('(min-width:730)').matches) {
				// Center column is faster
				return i % 3 === 1 ? 1.15 : 1;
			} else {
				// Mobile, right column is fast
				return i % 2 === 0 ? 0.9 : 1.15;
			}
		}
	});
	gsap.set('.footer', {
		opacity: 1
	});
	gsap.to('.footer', {
		opacity: 1,
		duration: 1,
		ease: 'power2.out',
		scrollTrigger: {
			trigger: '.footer',
			start: 'bottom 100%-=50px',
			once: true
		}
	});

	const keyObjects = document.querySelectorAll('.key-object');
	const linkKeys = document.querySelectorAll('.link-key');
	for (const key in keyObjects) {
		if (Object.hasOwnProperty.call(keyObjects, key)) {
			const linkKey = linkKeys[key];
			const keyObject = keyObjects[key];
			linkKey.addEventListener('click', (e) => {
				let target = e.target;
				if (target.closest('.key-home')) {
					gsap.to(smoother, {
						scrollTop: smoother.offset(keyObject, "top bottom"),
						duration: 1
					});
				} else {
					gsap.to(smoother, {
						scrollTop: smoother.offset(keyObject, "26% center"),
						duration: 1
					});
				}
			});
		}
	}
};



