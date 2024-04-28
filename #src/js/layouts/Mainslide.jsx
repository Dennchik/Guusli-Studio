import React, { useEffect } from 'react';
import { fadeInSlide } from '../modules/animations.js';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import AudioPlayer from './AudioPlayer.jsx';
import { Element } from 'react-scroll';
// Компонент Mainslide
export default function Mainslide() {
	useEffect(() => {
		const slideWrappers = document.querySelectorAll('.main-slide__slide-wrapper');
		if (!slideWrappers.length) return; // Проверка, что слайд-контейнеры существуют

		// Проверяем активен ли первый слайд при загрузке страницы
		const firstSlideWrapper = slideWrappers[0];
		const isActive = firstSlideWrapper.classList.contains('swiper-slide-active');
		if (isActive) {
			// Если первый слайд активен, запускаем анимацию
			fadeInSlide();
		}

		// Начинаем отслеживать изменения в слайд-контейнерах
		slideWrappers.forEach((slideWrapper) => {
			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
						const isActive = slideWrapper.classList.contains('swiper-slide-active');
						if (isActive) {
							// Если слайд-контейнер содержит класс 'swiper-slide-active', запускаем анимацию
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
	return (
		<Element className="main-slide" name='main-slide'>
			<div className="main-slide__body _swiper">
				<div className="main-slide__slide-wrapper">
					<div className="main-slide__slide-image _img">
						<picture> {
							isWebpSupported()
								? <img src="@@webRoot/img/main/slides/slide_1.webp" alt="slide-1" />
								: <img src="@@webRoot/img/main/slides/slide_1.jpg" alt="slide-1" />
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
								? <img src="@@webRoot/img/main/slides/slide_4.webp" alt="slide-4" />
								: <img src="@@webRoot/img/main/slides/slide_4.jpg" alt="slide-4" />}
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
								? <img src="@@webRoot/img/main/slides/slide_2.webp" alt="slide-2" />
								: <img src="@@webRoot/img/main/slides/slide_2.jpg" alt="slide-2" />}
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
								? <img src="@@webRoot/img/main/slides/slide_3.webp" alt="slide-3" />
								: <img src="@@webRoot/img/main/slides/slide_3.jpg" alt="slide-3" />}
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
				<AudioPlayer />
			</div>
		</Element>
	);
}