import swiperLayout from "../assets/swiper-layout";
swiperLayout('._swiper');
//* import Swiper bundle with all modules installed 
import Swiper from 'swiper/bundle';
//* import styles bundle
// import 'swiper/css/bundle';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
export default function mainSlide(
	mainslide = '._swiper',
	pagination = '.main-slide__pagination',
	scrollbar = '',
	nextEl = '',
	prevEl = '',
) {
	if (mainslide) {
		new Swiper(mainslide, {
			// autoplay: {
			// 	delay: 6500,
			// 	disableOnInteraction: true,
			// },
			speed: 800,
			loop: true,
			grabCursor: true,
			// mousewheel: true, 
			slidesPerView: 1,
			// autoHeight: true,
			pagination: {
				el: pagination,
				clickable: true,
				// renderBullet: function (index, className) {
				// 	return '<span class="' + className + ' ' + 'el' + '">' + (index + 1) + "</span>";
				// },
			},

			navigation: {
				nextEl: nextEl,
				prevEl: prevEl,
			},

			// scrollbar: {
			// 	el: scrollbar,
			// },
			// on: {
			// 	slideChange: function () {
			// 		// Проверяем, содержит ли активный слайд нужный класс
			// 		const activeSlide = document.querySelector('.main-slide__slide-wrapper');
			// 		if (activeSlide.classList.contains('swiper-slide-active')) {
			// 			// Запускаем анимацию, если активный слайд содержит нужный класс
			// 			fadeInSlide();
			// 		}
			// 	}
			// }
		});
	}
}




