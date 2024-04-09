import anime from 'animejs';

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
	const path = target.querySelector('.content-box__svg .lines path'); // Создаем переменную path
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