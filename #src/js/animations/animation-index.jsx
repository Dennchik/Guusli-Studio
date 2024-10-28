import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import { Flip } from 'gsap/Flip';
//* ----------------------------------------------------------------------------
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
ScrollTrigger.config({ ignoreMobileResize: true });
ScrollTrigger.normalizeScroll(true);
//* ----------------------------------------------------------------------------
// Check if the device is mobile 
const isMobile = /Mobi|Android/i.test(navigator.userAgent);
export let smoother;

//* Устанавливаем плавную прокрутку страницы
if (!isMobile) {
	smoother = ScrollSmoother.create({
		wrapper: '#wrapper',
		content: '#content',
		smooth: 1,
		effects: true,
		normalizeScroll: true,
		// ignoreMobile: true,
	});
}

//* ----------------------------------------------------------------------------
export function applyEffects(smoother) {
	smoother.effects('.services-slide__column', {
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
}

//* ----------------------- Секция "Parallax Effects" --------------------------
export function applyParallaxEffects(smoother, element) {

	if (smoother) {
		smoother.effects(element, {
			speed: (i) => {
				return i % 1 === 0 ? 0.5 : 1.15;
			}
		});
	}
}

//* ----------------------------------------------------------------------------
export function animateTitles(element, trigger, endTrigger, start, end) {
	gsap.from(element, {
		y: 150,
		duration: 1,
		opacity: 0,
		scrollTrigger: {
			trigger: trigger,
			start: `top bottom-${start}}`,
			endTrigger: endTrigger,
			end: `bottom bottom-${end}`,
			toggleActions: 'play none none reverse',
			// markers: true,
		},
	});
}

//* Секция "#main-slide".
export function initSectionTriggerMove(trigger, targets) {
	ScrollTrigger.create({
		trigger: trigger,
		/* Начинаем событие, когда верхняя граница элемента-1 находится на 100px
		ниже верха окна браузера*/
		start: 'top center',
		endTrigger: trigger, //* Конец события - конец документа
		/*Конец событие когда верхняя граница элемента 1 достигнет верха окна
		браузера*/
		end: 'bottom center',
		toggleClass: {
			targets: targets,
			className: '_active'
		},
		// markers: true
	});
}

//* ----------------------------------------------------------------------------
export function tlFooterParallel() {
	const tlParallel = gsap.timeline({
		scrollTrigger: {
			trigger: '.footer',
			start: 'top bottom',
			endTrigger: '.footer',
			end: 'bottom bottom+=300',
			scrub: 2,
			toggleActions: 'play none none reverse',
			// markers: true,
		}
	});
	tlParallel.from('.footer .el-1', {
		x: -250,
		duration: 1,
		opacity: 0,
		ease: 'sine.inOut',
	});

	tlParallel.from('.el-2', {
		x: window.innerWidth <= 680 ? 350 : 0,
		y: window.innerWidth > 680 ? 150 : 0,
		duration: 1,
		opacity: 0,
		ease: 'sine.inOut',
	}, '-=1');

	tlParallel.from('.el-3', {
		x: window.innerWidth <= 680 ? -350 : (window.innerWidth > 680 ? 350 : 0),
		duration: 1,
		opacity: 0,
		ease: 'sine.inOut',
	}, '-=1');
}

//* ----------------------------------------------------------------------------
export function tlFooterHorizontal() {
	const tlHorizontal = gsap.timeline({
		scrollTrigger: {
			trigger: '.footer',
			start: 'top bottom',
			endTrigger: '.footer',
			end: 'bottom bottom',
			scrub: 2,
			toggleActions: 'play none none reverse',
			// markers: true,
		}
	});

	tlHorizontal.from('.el-4', {
		y: 150,
		duration: 1,
		opacity: 0,
		ease: 'sine.inOut',
	}, '-=0.5');

	tlHorizontal.from('.el-5', {
		y: 350,
		duration: 1,
		opacity: 0,
		ease: 'sine.inOut',
	}, '-=1');

	tlHorizontal.from('.contacts__items', {
		x: 450,
		duration: 1,
		opacity: 0,
		ease: 'sine.inOut',
	}, '-=1');
}

//* ----------------------------------------------------------------------------
export function tlServices1() {

	const endValue = window.innerWidth >= 490 ? 'bottom bottom+=70' :
		'bottom bottom+=150';
	const tlServices1 = gsap.timeline({
		scrollTrigger: {
			trigger: '.offer-container__body',
			start: 'top bottom-=50',
			endTrigger: '.offer-container__body',
			// end: 'bottom bottom+=70',
			end: endValue,
			scrub: 2,
			toggleActions: 'play none none reverse',
			// markers: true,
		}
	});
	tlServices1.from('.sr-1', {
		x: -150,
		duration: 1,
		opacity: 0,
		ease: 'sine.inOut',
	});
	tlServices1.from('.sr-2', {
		x: 150,
		duration: 1,
		opacity: 0,
		ease: 'sine.inOut',
	}, '-=1');
}

//* ----------------------------------------------------------------------------
export function tlServices2() {
	const endValue = window.innerWidth >= 490 ? 'bottom bottom+=70' :
		'bottom bottom+=150';
	const tlServices2 = gsap.timeline({
		scrollTrigger: {
			trigger: '.offer-container__body',
			start: 'top bottom-=300',
			endTrigger: '.offer-container__body',
			// end: 'bottom bottom+=70',
			end: endValue,
			scrub: 2,
			toggleActions: 'play none none reverse',
			// markers: true,
		}
	});
	tlServices2.from('.sr-3', {
		x: -150,
		duration: 1,
		opacity: 0,
		ease: 'sine.in',
	});
	tlServices2.from('.sr-4', {
		x: 150,
		duration: 1,
		opacity: 0,
		ease: 'sine.in',
	}, '-=1');
}