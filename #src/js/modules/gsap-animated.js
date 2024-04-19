import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default () => {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
	ScrollTrigger.normalizeScroll(true);
	let smoother = ScrollSmoother.create({
		wrapper: "#wrapper",
		content: "#content",

		smooth: 2,
		effects: true,
		normalizeScroll: true
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
	smoother.effects(".material-parallax", {
		speed: (i) => {
			return i % 1 === 0 ? 0.5 : 1.15;
		}
	});

	// ---------------------------------------------------------------------------
	gsap.from('.services__title', {
		y: 250,
		duration: 1,
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
		duration: 1,
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
			start: 'top-=150 bottom',
			end: 'bottom bottom',
			toggleActions: 'play none none reverse',
			// markers: true
		}
	});



	gsap.from('.footer .el-1', {
		x: -350,
		duration: 1,
		opacity: 0,
		scrollTrigger: {
			trigger: '.el-1',
			start: 'top bottom',
			end: 'bottom bottom',
			toggleActions: 'play none none reverse'
		}
	});



	gsap.from('.el-2', {
		x: window.innerWidth <= 680 ? 350 : 0,
		y: window.innerWidth > 680 ? 150 : 0,
		duration: 1,
		opacity: 0,
		scrollTrigger: {
			trigger: '.el-2',
			start: 'top-=250 bottom',
			end: 'bottom bottom',
			toggleActions: 'play none none reverse',
			// markers: true
		}
	});
	gsap.from('.footer .el-3', {
		x: window.innerWidth <= 680 ? -350 : (window.innerWidth > 680 ? 350 : 0),
		duration: 1,
		opacity: 0,
		scrollTrigger: {
			trigger: '.el-3',
			start: 'top bottom',
			end: 'bottom bottom',
			toggleActions: 'play none none reverse',
			// markers: true
		}
	});

	gsap.from('.contacts__items', {
		x: 250,
		duration: 0.5,
		opacity: 0,
		scrollTrigger: {
			trigger: '.contacts',
			pin: true,
			start: 'top-=80 bottom',
			end: 'bottom-=80 bottom',
			endTrigger: '.contacts',
			toggleActions: 'play none none reverse',
			// markers: true
		}
	});

	ScrollTrigger.create({
		trigger: "#main-slide",
		start: "top center", // Начинаем событие, когда верхняя граница элемента-1 находится на 100px ниже верха окна браузера
		endTrigger: '#main-slide', // Конец события - конец документа
		end: "bottom center", // Закончить событие, когда верхняя граница элемента 1 достигнет верха окна браузера
		toggleClass: {
			targets: ".header__item--home",
			className: "active"
		},
		// markers: true
	});

	ScrollTrigger.create({
		trigger: "#services",
		start: "top center", // Начинаем событие, когда верхняя граница элемента-1 находится на 100px ниже верха окна браузера
		endTrigger: '#services', // Конец события - конец документа
		end: "bottom center", // Закончить событие, когда верхняя граница элемента 1 достигнет верха окна браузера
		toggleClass: {
			targets: ".header__item--services",
			className: "active"
		},
		onToggle: ({ isActive }) => {
			if (isActive) {
				setTimeout(() => {
					gsap.set(".header__item--services", { className: "header__item header__item--services" });
				}, 2000); // Задержка в 2 секунды (2000 миллисекунд)
			} else {
				gsap.set(".header__item--services", { className: "header__item header__item--services" });
			}
		},
		// markers: true
	});

	ScrollTrigger.create({
		trigger: "#footer",
		start: "-150 center", // Начинаем событие, когда верхняя граница элемента-1 находится на 100px ниже верха окна браузера
		endTrigger: '#footer', // Конец события - конец документа
		end: "bottom+=150 center", // Закончить событие, когда верхняя граница элемента 1 достигнет верха окна браузера
		toggleClass: {
			targets: "#contacts",
			className: "active"
		},
		// markers: true
	});




	// ---------------------------------------------------------------------------

};



