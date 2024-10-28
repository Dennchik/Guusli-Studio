import swiperLayout from '../layouts/init-swiper.js';
swiperLayout('._swiper');
//* import Swiper bundle with all modules installed 
import Swiper from 'swiper/bundle';
export function servicesSlide(
	mainslide = '.services-slide__body',
	// scrollbar = '',
	// nextEl = '',
	// prevEl = '',
) {
	if (mainslide) {
		new Swiper(mainslide, {
			speed: 800,
			spaceBetween: 30,
			// loop: true,
			grabCursor: true,
			// mousewheel: true,
			// centeredSlides: true,
			// slidesPerView: 5,
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				330: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				491: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 4,
				},
				1025: {
					slidesPerView: 5,
				}
			}
		});
	}
} 
