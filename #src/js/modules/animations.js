import anime, { easings } from 'animejs';

// -----------------------------------------------------------------------------
export function timeLineHeaderItem() {
	let timeline = anime.timeline({
		duration: 750,
	});
	timeline
		.add({
			targets: '.header__item',
			opacity: [0, 1],
			translateY: [100, 0],
			delay: anime.stagger(100, { start: 100 }),
			easing: 'easeInOutSine',
			begin: function (anim) {
				anim.animatables.forEach(function (animatable) {
					animatable.target.style.transition = 'all 0.5s ease-out';
				});
			}
		})
		.add({
			targets: '.header__item',
			opacity: [0, 1],
			delay: anime.stagger(100, { start: 500 }),
			easing: 'easeInOutSine',
		}, '-=250')
		.add({
			targets: '.el-logo',
			opacity: [0, 1],
			translateY: [-200, 0],
			rotate: [-90, 0],
			duration: 1250,
			easing: 'easeInOutSine',
			begin: function (anim) {
				anim.animatables.forEach(function (animatable) {
					animatable.target.style.transition = 'opacity 3s ease-out';
				});
			}
		}, 50)
		.add({
			targets: '.el-community',
			opacity: [0, 1],
			translateY: [200, 0],
			rotate: [-90, 0],
			duration: 1250,
			easing: 'easeInOutSine',
			begin: function (anim) {
				anim.animatables.forEach(function (animatable) {
					animatable.target.style.transition = 'opacity 3s ease-out';
				});
			}
		}, 50);

}
// -----------------------------------------------------------------------------
export function fadeInSlide() {
	let fadeInSlide = anime.timeline({
		duration: 750,
	});
	fadeInSlide
		.add({
			targets: '.swiper-slide-active .main-slide__title',
			opacity: [0, 1],
			translateY: [80, 0],
			delay: anime.stagger(100, { start: 500 }),
			duration: 1000,
			easing: 'easeInOutSine',
			begin: function (anim) {
				anim.animatables.forEach(function (animatable) {
					animatable.target.style.transition = 'opacity 0.3s ease-out';
				});
			}
		}, 50)
		.add({
			targets: '.swiper-slide-active .main-slide__text',
			opacity: [0, 1],
			translateY: [90, 0],
			delay: anime.stagger(100, { start: 500 }),
			duration: 1000,
			easing: 'easeInOutSine',
			begin: function (anim) {
				anim.animatables.forEach(function (animatable) {
					animatable.target.style.transition = 'opacity 0.3s ease-out';
				});
			}
		}, 130);
}
export function fadeInSlideBack() {
	let fadeInSlide = anime.timeline({
		duration: 750,
	})
		.add({
			targets: '.main-slide__title,  .main-slide__text',
			opacity: 0,
			translateY: 90,
			duration: 1000,
			easing: 'easeInOutSine',
		});
}
export function animationSvgLine(target, reverse) {
	const path = target.querySelector('.content-box__svg .lines path');
	// Создаем переменную path
	anime({
		targets: path,
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		duration: 500,
		opacity: [0, 1],
		delay: function (el, i) { return i * 250; },
		direction: reverse ? 'reverse' : 'normal', // Устанавливаем направление анимации в зависимости от параметра reverse 
		begin: () => {
			target.classList.add('animating'); // Добавляем класс при начале анимации
		},
		complete: () => {
			if (reverse) {
				target.classList.remove('animating'); // Удаляем класс после завершения анимации в обратном направлении
				path.setAttribute('stroke-dashoffset', anime.setDashoffset);
			}
		}
	});
}
export function animationSvgText(target, reverse) {
	const textPath = target.querySelectorAll('.content-box__image .lines-text path');
	// Создаем переменную path
	anime({
		targets: textPath,
		strokeDashoffset: [0, anime.setDashoffset],
		easing: 'easeInOutSine',
		duration: 300,
		opacity: 1,
		delay: function (el, i) { return i * 200; },
		direction: reverse ? 'reverse' : 'normal', // Устанавливаем направление анимации в зависимости от параметра reverse 
		begin: () => {
			target.classList.add('animating'); // Добавляем класс при начале анимации
		},
		complete: () => {
			if (reverse) {
				target.classList.remove('animating'); // Удаляем класс после завершения анимации в обратном направлении
				textPath.forEach(path => {
					path.setAttribute('stroke-dashoffset', anime.setDashoffset);
				});
			}
		}
	});
}
export function equalizerAnimated() {
	var equaContentEl = document.querySelector('.equalizer-content');
	var fragment = document.createDocumentFragment();
	var easingNames = [
		'easeInQuad',
		'easeInCubic',
		'easeInQuart',
		'easeInQuint',
		'easeInSine',
		'easeInExpo',
		'easeInCirc',
		'easeInBack',
		'easeOutQuad',
		'easeOutCubic',
		'easeOutQuart',
		'easeOutQuint',
		'easeOutSine',
		'easeOutExpo',
		'easeOutCirc',
		'easeOutBack',
		'easeInBounce',
		'easeInOutQuad',
		'easeInOutCubic',
		'easeInOutQuart',
		'easeInOutQuint',
		'easeInOutSine',
		'easeInOutExpo',
		'easeInOutCirc',
		'easeInOutBack',
		'easeInOutBounce',
		'easeOutBounce',
		'easeOutInQuad',
		'easeOutInCubic',
		'easeOutInQuart',
		'easeOutInQuint',
		'easeOutInSine',
		'easeOutInExpo',
		'easeOutInCirc',
		'easeOutInBack',
		'easeOutInBounce',
	];

	function createEasingDemo(easing) {
		var divEl = document.createElement('div');
		divEl.classList.add('equalizer-content__square', 'el', 'stretched', 'easing-' + easing);
		anime({
			targets: divEl,
			translateY: [750, -750],
			direction: 'alternate',
			loop: true,
			delay: 1500,
			endDelay: 700,
			duration: 1000,
			easing: easing
		});


		fragment.appendChild(divEl);
	}
	easingNames.forEach(function (easeName) {
		createEasingDemo(easeName);
	});

	equaContentEl.innerHTML = '';
	equaContentEl.appendChild(fragment);
}
export function removeElement() {
	const animatedElements = document.querySelectorAll('.equalizer-content__square');
	animatedElements.forEach(element => {
		anime.remove(element); // Удаляем анимацию для каждого элемента
	});
}