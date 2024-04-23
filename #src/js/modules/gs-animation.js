import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// -----------------------------------------------------------------------------
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// ScrollTrigger.normalizeScroll(true);
// export let smoother = ScrollSmoother.create({
// 	wrapper: "#wrapper",
// 	content: "#content",
// 	smooth: 2,
// 	effects: true,
// 	normalizeScroll: true
// });
// -----------------------------------------------------------------------------
export function smoother() {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
	ScrollTrigger.normalizeScroll(true);
	ScrollSmoother.create({
		wrapper: "#wrapper",
		content: "#content",
		smooth: 2,
		effects: true,
		normalizeScroll: true
	});
}
export let smoother = smoother();
// -----------------------------------------------------------------------------
export function applyEffects(smoother) {
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

};
export function applyParallaxEffects(smoother) {
	smoother.effects(".material-parallax", {
		speed: (i) => {
			return i % 1 === 0 ? 0.5 : 1.15;
		}
	});
}
// -----------------------------------------------------------------------------
export function animateTitles() {
	gsap.from('.services__title', {
		y: 250,
		duration: 1,
		opacity: 0,
		scrollTrigger: {
			trigger: '.services',
			start: 'top+=50 bottom',
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
			start: 'top+=100 bottom',
			end: 'bottom bottom',
			toggleActions: 'play none none reverse',
		}
	});
}
// -----------------------------------------------------------------------------
export function initSectionTriggerMove(trigger, targets) {
	//todo: Секция "#main-slide".
	ScrollTrigger.create({
		trigger: trigger,
		start: "top center", // Начинаем событие, когда верхняя граница элемента-1 находится на 100px ниже верха окна браузера
		endTrigger: trigger, // Конец события - конец документа
		end: "bottom center", // Закончить событие, когда верхняя граница элемента 1 достигнет верха окна браузера
		toggleClass: {
			targets: targets,
			className: "active"
		},
		// markers: true
	});
}
// -----------------------------------------------------------------------------
export function tlFooterParallel() {
	const tlFooter = gsap.timeline({
		scrollTrigger: {
			trigger: '.footer',
			start: 'top bottom',
			endTrigger: '.footer',
			end: 'bottom bottom',
			scrub: 0.1,
			ease: 'linear',
			toggleActions: 'play none none reverse',
			markers: true,
		}
	});
	tlFooter.from('.footer .el-1', {
		x: -250,
		duration: 1,
		opacity: 0,
	});

	tlFooter.from('.el-2', {
		x: window.innerWidth <= 680 ? 350 : 0,
		y: window.innerWidth > 680 ? 150 : 0,
		duration: 1,
		opacity: 0,
	}, '-=1');

	tlFooter.from('.el-3', {
		x: window.innerWidth <= 680 ? -350 : (window.innerWidth > 680 ? 350 : 0),
		duration: 1,
		opacity: 0,
	}, '-=1');

	tlFooter.from('.el-4', {
		y: 150,
		duration: 1,
		opacity: 0,
	}, '-=0.5');

	tlFooter.from('.el-5', {
		y: 350,
		duration: 1,
		opacity: 0,
	}, '-=1');

	tlFooter.from('.contacts__items', {
		x: 450,
		duration: 1,
		opacity: 0,
	}, '-=1');
}
// -----------------------------------------------------------------------------
// export function tlFooterSequential() {
// 	const tlFooterSequential = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: '.footer',
// 			start: 'top bottom',
// 			endTrigger: '.footer',
// 			end: 'bottom bottom',
// 			scrub: 0.1,
// 			ease: 'linear',
// 			toggleActions: 'play none none reverse',
// 			markers: true,
// 		}
// 	});

// 	if (window.innerWidth <= 920) {
// 		tlFooterSequential.from('.footer .el-1', {
// 			x: -250,
// 			duration: 1,
// 			opacity: 0,
// 		});

// 		tlFooterSequential.from('.el-2', {
// 			x: window.innerWidth <= 680 ? 350 : 0,
// 			y: window.innerWidth > 680 ? 150 : 0,
// 			duration: 1,
// 			opacity: 0,
// 		}, '-=1');

// 		tlFooterSequential.from('.el-3', {
// 			x: window.innerWidth <= 680 ? -350 : (window.innerWidth > 680 ? 350 : 0),
// 			duration: 1,
// 			opacity: 0,
// 		}, '-=1');
// 	};
// }
// -----------------------------------------------------------------------------
export function tlServices1() {
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
}
// -----------------------------------------------------------------------------
export function tlServices2() {
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
}