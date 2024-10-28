import React, { useEffect } from 'react';
import { fadeInSlide } from '../animations/anime-js.js';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import swiperLayout from '../layouts/init-swiper.js';
import mainSlide from '../assets/main-slide.js';
import AudioPlayer from './AudioPlayer.jsx';
import PropTypes from 'prop-types';

export const Mainslide = ({ baseUrl }) => {
	useEffect(() => {
		swiperLayout();
		mainSlide();
	}, []);
	useEffect(() => {
		const slideWrappers = document.querySelectorAll(
			'.main-slide__slide-wrapper');
		if (!slideWrappers.length) return; // Проверка, что слайд-контейнеры
		// существуют

		// Проверяем активен ли первый слайд при загрузке страницы
		const firstSlideWrapper = slideWrappers[0];
		const isActive = firstSlideWrapper.classList.contains('swiper-slide-active');

		if (isActive) {
			// Если первый слайд активен, запускаем анимацию
			fadeInSlide();
		}

		// Начинаем отслеживать изменения в слайд-контейнерах
		slideWrappers.forEach((slideWrapper) => {
			const observer = new MutationObserver((
				mutations) => {
				mutations.forEach((mutation) => {
					if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
						const isActive = slideWrapper.classList.contains('swiper-slide-active');
						if (isActive) {
							// Если слайд-контейнер содержит класс 'swiper-slide-active',
							// запускаем анимацию
							fadeInSlide();
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

	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};

	return (
		<div className="main-slide">
			<div className="main-slide__body _swiper">
				<div className="main-slide__slide-wrapper">
					<div className="main-slide__slide-image _img">
						<picture> {
							isWebpSupported()
								? <img src={getPath('@@webRoot/img/main/slides/slide_1.webp')}
									alt="slide-1" />
								: <img src={getPath('@@webRoot/img/main/slides/slide_1.jpg')}
									alt="slide-1" />
						}
						</picture>
					</div>
					<div className="main-slide__content _container">
						<h1 className="main-slide__title el-slidetitle">
							<span>Профессиональная </span>
							<span>студия&nbsp;звукозаписи </span>
							<span>ГУСЛИ</span> в&nbsp;Обнинске
						</h1>
						<div className="main-slide__text">Мы - современная студия
							звукозаписи, в&nbsp;которой работают лучшие специалисты в&nbsp;области записи и&nbsp;продюсирования музыки, предоставляем самый лучший сервис и&nbsp;удобства для&nbsp;современных артистов, как&nbsp;подписанных, так и&nbsp;независимых.
						</div>
					</div>
				</div>
				<div className="main-slide__slide-wrapper">
					<div className="main-slide__slide-image _img">
						<picture>
							{isWebpSupported()
								? <img src={getPath('@@webRoot/img/main/slides/slide_4.webp')}
									alt="slide-4" />
								: <img src={getPath('@@webRoot/img/main/slides/slide_4.jpg')}
									alt="slide-4" />}
						</picture>
					</div>
					<div className="main-slide__content _container">
						<div className="main-slide__title el-slidetitle">
							<span>Атмосфера Звука </span>Музыкального
							Пространства
						</div>
						<div className="main-slide__text">Мы создаем звуковые шедевры, где&nbsp;каждая нота оживает и&nbsp;звучит волшебно. Ваше музыкальное произведение будет звучать так&nbsp;же эмоционально и&nbsp;мощно, какв&nbsp;самом сердце концертного зала. Доверьте нам ваше&nbsp;творчество и&nbsp;ощутите магию звука в&nbsp;каждой ноте.
						</div>
					</div>
				</div>
				<div className="main-slide__slide-wrapper">
					<div className="main-slide__slide-image _img">
						<picture>
							{isWebpSupported()
								? <img src={getPath('@@webRoot/img/main/slides/slide_2.webp')}
									alt="slide-2" />
								: <img src={getPath('@@webRoot/img/main/slides/slide_2.jpg')}
									alt="slide-2" />}
						</picture>
					</div>
					<div className="main-slide__content _container">
						<div className="main-slide__title el-slidetitle">
							<span>Индивидуальный  подход  </span>к
							Нашим Клиентам
						</div>
						<div className="main-slide__text">
							В нашей студии мы всегда стараемся делать все возможное, чтобы процесс записи был вдохновляющим и творческим. Мы индивидуально подбираем подход к каждому клиенту, с которым работаем.
						</div>
					</div>
				</div>
				<div className="main-slide__slide-wrapper">
					<div className="main-slide__slide-image _img">
						<picture>
							{isWebpSupported()
								? <img src={getPath('@@webRoot/img/main/slides/slide_3.webp')}
									alt="slide-3" />
								: <img src={getPath('@@webRoot/img/main/slides/slide_3.jpg')}
									alt="slide-3" />}
						</picture>
					</div>
					<div className="main-slide__content _container">
						<div className="main-slide__title el-slidetitle">
							<span>Все виды</span> Микширования Звука
						</div>
						<div className="main-slide__text">Если вы ищете качественное
							сведение звука, то в нашей студии есть все, что вам нужно! Помимо
							первоклассных решений для микширования и мастеринга, мы также
							предлагаем полный цикл услуг по созданию музыки.
						</div>
					</div>
				</div>
			</div>
			<div className="main-slide__pagination"></div>
			<div className="main-slide__media">
				<AudioPlayer />
			</div>
		</div>

	);
};

Mainslide.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};