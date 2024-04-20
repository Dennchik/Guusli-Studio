import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { equalizerAnimated, removeElement } from './animations';

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
	//todo: Секция "#main-slide".
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
	//todo: Секция "#services".
	ScrollTrigger.create({
		trigger: "#services",
		start: "top center",
		endTrigger: '#services',
		end: "bottom center",
		toggleClass: {
			targets: ".header__item--services",
			className: "active"
		},
		onEnter: function () {
			//todo: Запуск анимации при входе в зону видимости триг. - Start.
			gsap.to('.equalizer-content', {
				duration: 0.5,
				opacity: 1,
			});
			equalizerAnimated();
		},
		onLeaveBack: function () {
			//todo: Останавливаем анимацию при выходе из зоны видимости триг. - Start.
			removeElement();
			gsap.to('.equalizer-content', {
				opacity: 0,
			});
		},
		onLeave: function () {
			//todo: Останавливаем анимацию при выходе из зоны видимости триг. - End.
			removeElement();
			gsap.to('.equalizer-content', {
				opacity: 0,
			});
		},
		onEnterBack: function () {
			//todo: Запуск анимации при входе в зоны видимости триг. - End.
			equalizerAnimated();
			gsap.to('.equalizer-content', {
				opacity: 1,
			});
		},

		// markers: true
	});
	//todo: Секция "#footer".
	ScrollTrigger.create({
		trigger: "#footer",
		start: "top center", // Начинаем событие, когда верхняя граница элемента-1 находится на 100px ниже верха окна браузера
		endTrigger: '#footer', // Конец события - конец документа
		end: "bottom center", // Закончить событие, когда верхняя граница элемента 1 достигнет верха окна браузера
		toggleClass: {
			targets: "#contacts",
			className: "active"
		},
		// markers: true
	});
	// ---------------------------------------------------------------------------
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.footer',
			start: 'top bottom',
			endTrigger: '.footer',
			end: 'bottom bottom',
			scrub: 0.1,
			ease: 'linear',
			toggleActions: 'play none none reverse',
			// ease: 'linear',
			markers: true,
		}
	}, '-=0.2');
	tl.from('.footer .el-1', {
		x: -250,
		duration: 1,
		opacity: 0,
	});

	tl.from('.el-2', {
		x: window.innerWidth <= 680 ? 350 : 0,
		y: window.innerWidth > 680 ? 150 : 0,
		duration: 1,
		opacity: 0,
	}, '-=1');

	tl.from('.el-3', {
		x: window.innerWidth <= 680 ? -350 : (window.innerWidth > 680 ? 350 : 0),
		duration: 1,
		opacity: 0,
	}, '-=1');

	tl.from('.el-4', {
		y: 150,
		duration: 1,
		opacity: 0,
	}, '-=0.5');

	tl.from('.el-5', {
		y: 350,
		duration: 1,
		opacity: 0,
	}, '-=1');

	tl.from('.contacts__items', {
		x: 450,
		duration: 1,
		opacity: 0,
	}, '-=1');
	// ---------------------------------------------------------------------------
	const tlServices1 = gsap.timeline({
		scrollTrigger: {
			trigger: '.services__offer',
			start: 'top center+=300',
			endTrigger: '.services__offer',
			end: 'bottom center+=300',
			scrub: 1,
			ease: 'linear',
			toggleActions: 'play none none reverse',
			// ease: 'linear',
			markers: true,
		}
	});
	tlServices1.from('.sr-1', {
		x: -150,
		duration: 1,
		opacity: 0,
	});
	tlServices1.from('.sr-2', {
		x: 150,
		duration: 1,
		opacity: 0,
	}, '-=1');
	const tlServices2 = gsap.timeline({
		scrollTrigger: {
			trigger: '.services__offer',
			start: 'top center+=50',
			endTrigger: '.services__offer',
			end: 'bottom center+=150',
			scrub: 1,
			ease: 'linear',
			toggleActions: 'play none none reverse',
			// ease: 'linear',
			markers: true,
		}
	});
	tlServices2.from('.sr-3', {
		x: -150,
		duration: 1,
		opacity: 0,
	});
	tlServices2.from('.sr-4', {
		x: 150,
		duration: 1,
		opacity: 0,
	}, '-=1');
};
