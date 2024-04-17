import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default () => {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	let smoother = ScrollSmoother.create({
		content: '.page__main-content',
		content: '.main-content',
		// wrapper: "#wrapper",
		// content: "#content",
		smooth: true,
		effects: true,
		// friction: 0.9,
	});
	// ---------------------------------------------------------------------------
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
	// ---------------------------------------------------------------------------
	gsap.from('.services__title', {
		y: 150,
		duration: 0.5,
		opacity: 0,
		scrollTrigger: {
			trigger: '.services',
			start: 'top+=50 bottom', // начать анимацию, когда верхняя граница .footer находится на 50px выше нижней границы окна браузера
			end: 'bottom bottom',
			toggleActions: 'play none none reverse',
		}
	});
	gsap.from('.offer-container__title', {
		y: 150,
		duration: 0.5,
		opacity: 0,
		scrollTrigger: {
			trigger: '.services__offer',
			start: 'top+=100 bottom', // начать анимацию, когда верхняя граница .footer находится на 50px выше нижней границы окна браузера
			end: 'bottom bottom',
			toggleActions: 'play none none reverse',
		}
	});
	// ---------------------------------------------------------------------------
	gsap.from('.footer', {
		y: 150,
		duration: 1,
		opacity: 0,
		scrollTrigger: {
			trigger: '.footer',
			start: 'top+=10 bottom', // начать анимацию, когда верхняя граница .footer находится на 50px выше нижней границы окна браузера
			end: 'bottom bottom',
			toggleActions: 'play none none reverse',
		}
	});
	gsap.from('.footer .el-1', {
		x: -350,
		duration: 1,
		opacity: 0,
		scrollTrigger: {
			trigger: '.footer',
			start: 'top bottom',
			end: 'bottom bottom',
			toggleActions: 'play none none reverse'
		}
	});
	gsap.from('.footer .el-2', {
		duration: 5,
		opacity: 0,
		scrollTrigger: {
			trigger: '.footer',
			start: 'top bottom',
			end: 'bottom bottom',
			toggleActions: 'play none none reverse'
		}
	});
	gsap.from('.footer .el-3', {
		x: 350,
		duration: 1,
		opacity: 0,
		scrollTrigger: {
			trigger: '.footer',
			start: 'top bottom',
			end: 'bottom bottom',
			toggleActions: 'play none none reverse'
		}
	});
	gsap.from('.contacts__items', {
		x: 250,
		duration: 0.5,
		opacity: 0,
		scrollTrigger: {
			trigger: '.contacts',
			start: 'top-=50 bottom',
			end: 'bottom bottom',
			toggleActions: 'play none none reverse',
		}
	});
};



