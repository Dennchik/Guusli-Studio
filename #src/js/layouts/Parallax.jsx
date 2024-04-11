// import React, { useEffect } from 'react';
// import { animationSvgLine } from '../modules/animations.js';
// import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
// // -----------------------------------------------------------------------------

// // -----------------------------------------------------------------------------
// export default function Parallax() {
// 	useEffect(() => {
// 		const handleMouseOver = (event) => {
// 			const target = event.currentTarget;
// 			animationSvgLine(target, false); // Запускаем анимацию при наведении
// 		};

// 		const handleMouseLeave = (event) => {
// 			const target = event.currentTarget;
// 			setTimeout(() => {
// 				animationSvgLine(target, true); // Запускаем анимацию в обратном направлении с задержкой при уходе мыши
// 			}, 500);
// 		};

// 		const boxImages = document.querySelectorAll('.content-box__image');
// 		boxImages.forEach(boxImage => {
// 			boxImage.addEventListener('mouseover', handleMouseOver);
// 			boxImage.addEventListener('mouseleave', handleMouseLeave);
// 		});

// 		return () => {
// 			boxImages.forEach(boxImage => {
// 				boxImage.removeEventListener('mouseover', handleMouseOver);
// 				boxImage.removeEventListener('mouseleave', handleMouseLeave);
// 			});
// 		};
// 	}, []);

// 	return (

// 		<section className='services'>
// 			<div className="material-parallax parallax">
// 				<div className="parallax__image">
// 					<img src="img/body/parallax_bg.png" alt="" />
// 				</div>
// 			</div>
// 			<div className="services__body _container">
// 				<div className="services__title">Наши услуги</div>
// 				<div className="services__content content-box">
// 					<div className="content-box__column">
// 						<div className="content-box__image">
// 							<div className="content-box__svg">
// 								<g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1" className="lines">
// 									<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 700 430" style={{ enableBackground: 'new 0 0 700 430' }} xmlSpace="preserve">
// 										{/* Применяем стили к элементу */}
// 										<style type="text/css">
// 											{`.el{fill:none;stroke:#fff;stroke-width:8;stroke-miterlimit:10;}`}
// 										</style>
// 										{/* Ваш SVG-код */}
// 										<path class="el" d="M11.6,12.2c69.8,144.5,138.5,245,178.9,277.9c29.8,24.2,60.5,32.7,60.5,32.7c5.6,1.5,31.8,8.4,65.9,3.4c28.1-4.1,47.3-14.2,68-25c34.2-17.9,55.5-37.6,61.9-43.7c13.8-13.2,27.2-26.1,37.4-47.3c3.1-6.4,21.9-46.7,8.9-57.9c-11.3-9.7-41.2,7.2-56.1,18.7c-6.2,4.7-28.1,22.4-41.7,57.6c-16.1,41.8-19.9,107.1,19.3,150.7c6.9,7.7,22.9,23.3,47.8,31.8c36.1,12.3,68.2,1.9,85.1-3.6c6.2-2,28.7-9.7,56-30.5c42.8-32.6,66.8-74.1,79.8-103.9" />
// 									</svg>
// 								</g>
// 							</div>
// 							<a href="#">
// 								<picture>
// 									{isWebpSupported()
// 										? <img src="./img/body/img_1.webp" type="image/webp" />
// 										: <img src="./img/body/img_1.png" alt="image" />}
// 								</picture>
// 								<img className='content-box__bg-img' src="./img/body/bg_img.png" alt="bg-img" />
// 							</a>
// 							<div className="content-box__text">Звук</div>
// 						</div>
// 					</div>
// 					<div className="content-box__column">
// 						<div className="content-box__image">
// 							<div className="content-box__svg">
// 								<g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1" className="lines">
// 									<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 700 430" style={{ enableBackground: 'new 0 0 700 430' }} xmlSpace="preserve">
// 										{/* Применяем стили к элементу */}
// 										<style type="text/css">
// 											{`.el{fill:none;stroke:#fff;stroke-width:8;stroke-miterlimit:10;}`}
// 										</style>
// 										<path class="el" d="M696.2,7.5c-34.2,148.6-72,277.8-101.4,275c-33.3-3.2-35.5-173-68.4-175c-43.1-2.6-78.4,285.7-134.4,285C352.4,392,352.9,248,282.5,221.2c-71.8-27.3-181.8,81-278.7,201.2" />
// 									</svg>
// 								</g>
// 							</div>
// 							<a href="">
// 								<picture>
// 									{isWebpSupported()
// 										? <img src="./img/body/img_2.webp" type="image/webp" />
// 										: <img src="./img/body/img_2.png" alt="image" />}
// 								</picture>
// 								<img className='content-box__bg-img' src="./img/body/bg_img.png" alt="bg-img" />
// 							</a>
// 							<div className="content-box__text">Видео</div>
// 						</div>
// 					</div>
// 					<div className="content-box__column">
// 						<div className="content-box__image">
// 							<div className="content-box__svg">
// 								<g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1" className="lines">
// 									<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 700 430" style={{ enableBackground: 'new 0 0 700 430' }} xmlSpace="preserve">
// 										{/* Применяем стили к элементу */}
// 										<style type="text/css">
// 											{`.el{fill:none;stroke:#fff;stroke-width:8;stroke-miterlimit:10;}`}
// 										</style>
// 										<path class="el" d="M685.8,108.5c-14.3,4.6-36.4,10.1-63.7,10c-34.6-0.1-61.2-9.1-81-16C496,86.8,493,75,454.9,67.2c-15.6-3.2-34.7-6.9-58.6-1.8c-10,2.1-35.5,7.9-56.8,30c-19.6,20.3-24.8,42.9-28.1,58.9c-2.2,10.5-11.1,58.7,11.6,100.5c3.7,6.8,22.1,40.7,55.1,44c4.3,0.4,29.8,2.4,51-22.4c4.5-5.2,18.1-22.5,21.8-51.1c1.1-8.3,4.7-36.3-8.8-59.2c-3.5-5.9-7.4-10.3-11.3-13.6c-2-1.7-7.2-5.9-16.5-9.7c-7-2.8-25.6-10.3-48.3-5.6c-20.8,4.3-33.7,16.6-41.1,23.7c-19.8,19.2-26.7,40.6-36.8,73.7c-8.9,28.8-7.8,37.4-20.5,76.3c-4.3,13.1-8.7,25.2-17.9,38.7c-6.4,9.3-15.3,22-31.6,30.5c-15.6,8.2-30,8.1-39.6,8.5c-36.8,1.6-63.5-17.6-70-22.4c-28.6-21.5-42.4-51.3-54.4-77.2c-19.6-42.2-25.5-77.6-32.6-118.4c-5-28.5-10.2-67.3-12.2-114" />
// 									</svg>
// 								</g>
// 							</div>
// 							<a href="">
// 								<picture>
// 									{isWebpSupported()
// 										? <img src="./img/body/img_3.webp" type="image/webp" />
// 										: <img src="./img/body/img_3.png" alt="image" />}
// 								</picture>
// 								<img className='content-box__bg-img' src="./img/body/bg_img.png" alt="bg-img" />
// 							</a>
// 							<div className="content-box__text">Текст</div>
// 						</div>
// 					</div>
// 					<div className="content-box__column">
// 						<div className="content-box__image">
// 							<div className="content-box__svg">
// 								<g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1" className="lines">
// 									<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 700 430" style={{ enableBackground: 'new 0 0 700 430' }} xmlSpace="preserve">
// 										{/* Применяем стили к элементу */}
// 										<style type="text/css">
// 											{`.el{fill:none;stroke:#fff;stroke-width:8;stroke-miterlimit:10;}`}
// 										</style>
// 										<path class="el" d="M7.4,413.8c7.5-80,18-147.2,27.3-198.3c0,0,28.1-154.7,81.2-198.3c2.1-1.7,8-6.6,13-4.3c8.5,3.8,8.5,25.8,8.5,33.9c0,59.8-60.8,301.8-81.6,293.5c-9.8-3.9,1.4-66.6,9.3-97.4c9.6-37.8,22.2-58.8,33.5-72.8c1.8-2.3,27.3-33.5,37.2-26.7c6.3,4.4,1.7,21.2-0.6,51.9c-0.7,10-1.9,48.8,1.9,82.2c0.7,6.5,8.6,67.6,47.1,90.2c19.8,11.6,40.8,7.4,65.1,2.9c4.9-0.9,25-4.9,51.4-18.8c17.3-9.1,52.6-27.6,80.7-68.2c23.7-34.2,40.7-81.8,32.7-89c-7.2-6.5-36.7,17.4-53.9,47.6c-17.9,31.3-29.5,80.7-18,103.9c16.1,32.4,91.5,41.4,350.7-59.9" />
// 									</svg>
// 								</g>
// 							</div>
// 							<a href="">
// 								<picture>
// 									{isWebpSupported()
// 										? <img src="./img/body/img_4.webp" type="image/webp" />
// 										: <img src="./img/body/img_4.png" alt="image" />}
// 								</picture>
// 								<img className='content-box__bg-img' src="./img/body/bg_img.png" alt="bg-img" />
// 							</a>
// 							<div className="content-box__text">Мероприятия</div>
// 						</div>
// 					</div>
// 					<div className="content-box__column">
// 						<div className="content-box__image">
// 							<div className="content-box__svg">
// 								<g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1" className="lines">
// 									<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 700 430" style={{ enableBackground: 'new 0 0 700 430' }} xmlSpace="preserve">
// 										{/* Применяем стили к элементу */}
// 										<style type="text/css">
// 											{`.el{fill:none;stroke:#fff;stroke-width:8;stroke-miterlimit:10;}`}
// 										</style>
// 										<path class="el" d="M17.8,295.9c39,14.8,99.1,35.6,175.3,53.7c20,4.7,107.6,25.5,111.1,15.3c2.6-7.8-46.7-25.3-110-66.8c-59.2-38.8-126-82.5-118.9-106.3c17.2-58.3,452.1,86.9,532.6,122.6c8.2,3.6,21.6,10.1,22.1,19.5c1.5,29.5-126.9,62.8-132.1,51.1c-3.1-7,39.2-25.7,108.9-89.5c22.3-20.4,44.7-43,57.9-78.4c4.8-13,7-24.1,9.5-40.5c4.5-30.4,9.1-75.4,7.9-133.7" />
// 									</svg>
// 								</g>
// 							</div>
// 							<a href="">
// 								<picture>
// 									{isWebpSupported()
// 										? <img src="./img/body/img_5.webp" type="image/webp" />
// 										: <img src="./img/body/img_5.png" alt="image" />}
// 								</picture>
// 								<img className='content-box__bg-img' src="./img/body/bg_img.png" alt="bg-img" />
// 							</a>
// 							<div className="content-box__text">Прочие услуги</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="services__title">Специальное предложение</div>
// 				<div className="services__offer">
// 					<div className="offer-container">
// 						<div className="offer-container__column">
// 							<div className="offer-container__title">
// 								<span>Пакет Домашний</span>
// 								<span>5 000<i className='icon-rub'> </i></span>
// 							</div>
// 							<div className="offer-container__text">
// 								Включает час звукозаписи сведение и мастеринг
// 							</div>
// 						</div>
// 						<div className="offer-container__column">
// 							<a className='offer-container__link' href="#"></a>
// 							<div className="offer-container__title">
// 								<span>Пакет Комфорт</span>
// 								<span>8 000<i className='icon-rub'></i></span>
// 							</div>
// 							<div className="offer-container__text">
// 								Час звукозаписи, Продюсирование, отбор лучших дублей, нотная коррекция, сведение и мастеринг
// 							</div>
// 						</div>
// 						<div className="offer-container__column">
// 							<div className="offer-container__title">
// 								<span>Пакет Профи</span>
// 								<span>12 000<i className='icon-rub'></i></span>
// 							</div>
// 							<div className="offer-container__text">
// 								Час звукозаписи, Педагог по вокалу поможет раскрыть ваш голос присутствуя на звукозаписи, Продюсирование, отбор лучших дублей, нотная коррекция, сведение и мастеринг
// 							</div>
// 						</div>
// 						<div className="offer-container__column">
// 							<div className="offer-container__title">
// 								<span>Съемка клипа в студии</span>
// 								<span>от 5 000<i className='icon-rub'></i></span>
// 							</div>
// 							<div className="offer-container__text">
// 								При заказе Клипа в студии дарим скидку 10%
// 							</div>
// 						</div>

// 					</div>

// 				</div>

// 			</div>

// 		</section >
// 	);
// }