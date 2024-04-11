import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default () => {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother); // Явная регистрация плагина ScrollSmoother

	// ScrollTrigger.normalizeScroll(true);
	ScrollSmoother.create({
		content: '.main-content',
		content: '.main-content__content',
		smooth: true,
		effects: true,
		normalizeScroll: true
	});
	// let smoother = ScrollSmoother.create({
	// 	target: '',
	// 	smooth: 0.1,
	// 	effects: true,
	// 	normalizeScroll: true
	// });
	// ScrollTrigger.create({
	// 	trigger: ".services",
	// 	pin: true,
	// 	start: "center center",
	// 	end: "+=300",
	// 	// markers: true
	// });

	// let linlItems = document.querySelectorAll('header__item' > a);

	// let linlContentItems = document.querySelectorAll('header__item' > a);
	// document.querySelector("#services").addEventListener("click", e => {
	// 	gsap.to(smoother, {
	// 		scrollTop: smoother.offset(".services", "top center"),
	// 		duration: 1
	// 	});
	// });
	// ScrollTrigger.create({
	// 	trigger: ".main-content__services",
	// 	pin: true,
	// 	start: "center center",
	// 	end: "+=300",
	// 	markers: true
	// });
	// const tl = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: '.main-content__services',
	// 		pin: true,
	// 		start: 'top top',
	// 		end: 'bottom top',
	// 		scrub: 1,
	// 		ease: 'linear',
	// 	}
	// });

	// // Добавляем анимацию к элементам
	// tl.to('.line .el', {
	// 	height: 0,
	// 	paddingBottom: 0,
	// 	opacity: 0,
	// 	stagger: .5,
	// });
	// tl.to('.line', {
	// 	marginBottom: -15,
	// 	stagger: .5,
	// }, '<');
};



