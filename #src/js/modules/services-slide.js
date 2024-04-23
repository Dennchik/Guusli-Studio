import swiperLayout from "../assets/swiper-layout";
swiperLayout('._swiper');
//* import Swiper bundle with all modules installed 
import Swiper from 'swiper/bundle';
//* import styles bundle 

export default function servicesSlide(
	mainslide = '.content-box__body',
	scrollbar = '',
	nextEl = '',
	prevEl = '',
) {
	if (mainslide) {
		new Swiper(mainslide, {
			speed: 800,
			spaceBetween: 30,
			loop: true,
			grabCursor: true,
			// mousewheel: true,
			// centeredSlides: true,
			slidesPerView: 5,
			breakpoints: {
				300: {
					slidesPerView: 1,
				},
				376: {
					slidesPerView: 2,
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




