import React, { useEffect, StrictMode } from 'react';
import anime from 'animejs';
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { Link } from 'react-scroll';
import { fadeInSlide } from '../modules/anime-js.js';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import mainSlide from '../modules/main-slide.js';
import swiperLayout from '../assets/swiper-layout.js';
// import AudioPlayer from './AudioPlayer.jsx'; 
// import { Element } from 'react-scroll';

// -----------------------------------------------------------------------------
const baseUrl = '.';
// -----------------------------------------------------------------------------

const Mainslide = ({ baseUrl }) => {
	useEffect(() => {
		const slideWrappers = document.querySelectorAll('.main-slide__slide-wrapper');
		console.log(slideWrappers);
		if (!slideWrappers.length) return; // Проверка, что слайд-контейнеры существуют

		// Проверяем активен ли первый слайд при загрузке страницы
		const firstSlideWrapper = slideWrappers[0];
		const isActive = firstSlideWrapper.classList.contains('swiper-slide-active');
		if (isActive) {
			console.log('fadeInSlide() вызван');
			fadeInSlide();
			// Если первый слайд активен, запускаем анимацию 
			// console.log('fadeInSlide() вызван');
			// let fadeInSlide = anime.timeline({
			// 	duration: 750,
			// });
			// fadeInSlide
			// 	.add({
			// 		targets: '.swiper-slide-active .main-slide__title',
			// 		opacity: [0, 1],
			// 		translateY: [80, 0],
			// 		delay: anime.stagger(100, { start: 500 }),
			// 		duration: 1000,
			// 		easing: 'easeInOutSine',
			// 		begin: function (anim) {
			// 			anim.animatables.forEach(function (animatable) {
			// 				animatable.target.style.transition = 'opacity 0.3s ease-out';
			// 			});
			// 		}
			// 	}, 50)
			// 	.add({
			// 		targets: '.swiper-slide-active .main-slide__text',
			// 		opacity: [0, 1],
			// 		translateY: [100, 0],
			// 		delay: anime.stagger(100, { start: 500 }),
			// 		duration: 1000,
			// 		easing: 'easeInOutSine',
			// 		begin: function (anim) {
			// 			anim.animatables.forEach(function (animatable) {
			// 				animatable.target.style.transition = 'opacity 0.3s ease-out';
			// 			});
			// 		}
			// 	}, 130);
		}

		// Начинаем отслеживать изменения в слайд-контейнерах
		slideWrappers.forEach((slideWrapper) => {
			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
						const isActive = slideWrapper.classList.contains('swiper-slide-active');
						console.log(isActive);
						if (isActive) {
							console.log('fadeInSlide() вызван');
							fadeInSlide();
							// Если слайд-контейнер содержит класс 'swiper-slide-active', запускаем анимацию 
							// console.log('fadeInSlide() вызван');
							// let fadeInSlide = anime.timeline({
							// 	duration: 750,
							// });
							// fadeInSlide
							// 	.add({
							// 		targets: '.swiper-slide-active .main-slide__title',
							// 		opacity: [0, 1],
							// 		translateY: [80, 0],
							// 		delay: anime.stagger(100, { start: 500 }),
							// 		duration: 1000,
							// 		easing: 'easeInOutSine',
							// 		begin: function (anim) {
							// 			anim.animatables.forEach(function (animatable) {
							// 				animatable.target.style.transition = 'opacity 0.3s ease-out';
							// 			});
							// 		}
							// 	}, 50)
							// 	.add({
							// 		targets: '.swiper-slide-active .main-slide__text',
							// 		opacity: [0, 1],
							// 		translateY: [100, 0],
							// 		delay: anime.stagger(100, { start: 500 }),
							// 		duration: 1000,
							// 		easing: 'easeInOutSine',
							// 		begin: function (anim) {
							// 			anim.animatables.forEach(function (animatable) {
							// 				animatable.target.style.transition = 'opacity 0.3s ease-out';
							// 			});
							// 		}
							// 	}, 130);
						}
					}
				});
			});

			observer.observe(slideWrapper, { attributes: true });
			// Отключение наблюдателя при размонтировании компонента
			return () => {
				observer.disconnect();
			};
		});


	}, []);

	useEffect(() => {
		swiperLayout('._swiper');
		mainSlide();
		// audio();
	}, []);


	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};

	return (
		<div className="main-slide" name='main-slide'>
			<div className="main-slide__body _swiper">
				<div className="main-slide__slide-wrapper">
					<div className="main-slide__slide-image _img">
						<picture> {
							isWebpSupported()
								? <img src={getPath("@@webRoot/img/main/slides/slide_1.webp")} alt="slide-1" />
								: <img src={getPath("@@webRoot/img/main/slides/slide_1.jpg")} alt="slide-1" />
						}
						</picture>
					</div>
					<div className="main-slide__content">
						<div className="main-slide__title el-slidetitle"><span>Профессиональная </span>Студия Звукозаписи
						</div>
						<div className="main-slide__text">Мы - современная студия звукозаписи, в которой работают лучшие российские специалисты в области записи и продюсирования музыки, предоставляющие самый лучший сервис и удобства для современных артистов, как подписанных, так и независимых.
						</div>
					</div>
				</div>
				<div className="main-slide__slide-wrapper">
					<div className="main-slide__slide-image _img">
						<picture>
							{isWebpSupported()
								? <img src={getPath("@@webRoot/img/main/slides/slide_4.webp")} alt="slide-4" />
								: <img src={getPath("@@webRoot/img/main/slides/slide_4.jpg")} alt="slide-4" />}
						</picture>
					</div>
					<div className="main-slide__content">
						<div className="main-slide__title el-slidetitle"><span>Атмосфера Звука </span>Музыкального Пространства
						</div>
						<div className="main-slide__text">Мы создаем звуковые шедевры, где каждая нота оживает и звучит волшебно. Наша команда гарантирует, что ваше музыкальное произведение будет звучать так же эмоционально и мощно, как в самом сердце концертного зала. Доверьте нам ваше творчество и ощутите магию звука в каждой ноте.
						</div>
					</div>
				</div>
				<div className="main-slide__slide-wrapper">
					<div className="main-slide__slide-image _img">
						<picture>
							{isWebpSupported()
								? <img src={getPath("@@webRoot/img/main/slides/slide_2.webp")} alt="slide-2" />
								: <img src={getPath("@@webRoot/img/main/slides/slide_2.jpg")} alt="slide-2" />}
						</picture>
					</div>
					<div className="main-slide__content">
						<div className="main-slide__title el-slidetitle"><span>Индивидуальный  подход  </span>к Нашим Клиентам
						</div>
						<div className="main-slide__text">В нашей студии мы всегда стараемся делать все возможное, чтобы процесс записи был вдохновляющим и творческим. Мы индивидуально подбираем подход к каждому клиенту, с которым работаем.
						</div>
					</div>
				</div>
				<div className="main-slide__slide-wrapper">
					<div className="main-slide__slide-image _img">
						<picture>
							{isWebpSupported()
								? <img src={getPath("@@webRoot/img/main/slides/slide_3.webp")} alt="slide-3" />
								: <img src={getPath("@@webRoot/img/main/slides/slide_3.jpg")} alt="slide-3" />}
						</picture>
					</div>
					<div className="main-slide__content">
						<div className="main-slide__title el-slidetitle"><span>Все виды  </span> Микширования Звука
						</div>
						<div className="main-slide__text">Если вы ищете качественное сведение звука, то в нашей студии есть все, что вам нужно! Помимо первоклассных решений для микширования и мастеринга, мы также предлагаем полный цикл услуг по созданию музыки.
						</div>
					</div>
				</div>
			</div>
			<div className="main-slide__pagination"></div>
			<div className="main-slide__media">
				{/* <AudioPlayer /> */}
			</div>
		</div>
	);
};
// -----------------------------------------------------------------------------
// createRoot(document.querySelector('.page__header')).render(<Header baseUrl={baseUrl} />);
// -----------------------------------------------------------------------------
const mainsliddeNode = (document.querySelector('.main-content__slide'));
const mainSlideRoot = createRoot(mainsliddeNode);
mainSlideRoot.render(<Mainslide baseUrl={baseUrl} />);
ReactDOM.render(
	<StrictMode><Mainslide baseUrl={baseUrl} /></StrictMode>, document.querySelector('.main-content__slide')
);