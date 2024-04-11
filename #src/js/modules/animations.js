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
export function animationSvgSound(target, reverse) {
	const textPath = target.querySelectorAll('.content-box__image .lines-text path');
	// Создаем переменную path
	anime({
		targets: textPath,
		strokeDashoffset: [0, anime.setDashoffset],
		easing: 'easeInOutSine',
		duration: 300,
		opacity: 1,
		delay: function (el, i) { return i * 150; },
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
export function elasticServices() {
	// anime({
	// 	targets: '.content-box .line:nth-child(1)',
	// 	translateX: 0,
	// 	duration: 500,
	// 	easing: 'easeInElastic(2, .5)',
	// });

	// anime({
	// 	targets: '.content-box .line:nth-child(2)',
	// 	translateX: 0,
	// 	easing: 'easeOutElastic(1, 1)'
	// });

	// anime({
	// 	targets: '.content-box .line:nth-child(3)',
	// 	translateX: 0,
	// 	easing: 'easeInOutElastic(1, .3)'
	// });

	// anime({
	// 	targets: '.content-box .line:nth-child(4)',
	// 	translateX: 0,
	// 	easing: 'easeOutInElastic(1, .1)'
	// });

	// anime({
	// 	targets: '.content-box .line:nth-child(5)',
	// 	translateX: 0,
	// 	easing: 'easeOutInElastic(1, .6)',
	// });
	anime({
		targets: '.content-box__column .el',
		translateX: [-80, 0],
		opacity: [0, 1],
		duration: 3000
	});
}