import React, { useEffect, useState, useRef, useCallback } from 'react';
import { createRoot } from 'react-dom/client';

import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import { Element, Button, Link } from 'react-scroll';

// -------------------------------- Modules ------------------------------------
import isMobile from "../libraries/Js-devise.js";
// import isMobile from "js/libraries/Js-devise.js";
// ------------------------------- Components ----------------------------------
import { timeLineHeaderItem } from '../modules/anime-js.js';

import { smoother, applyParallaxEffects, applyEffects, animateTitles, tlServices1, tlServices2, tlFooterContacts, initSectionTriggerMove } from "../animations/animation-index.jsx";
// -----------------------------------------------------------------------------
const baseUrl = '..';
// -------------------------------- Header -------------------------------------
const Header = ({ baseUrl }) => {
	// const dataMoveEl = [{ 'bp-max': 920.99, 'index': 1, 'target': '.bp-1' }];
	useEffect(() => {
		timeLineHeaderItem();
		// const fadeIn = document.querySelector('.page__fade-in');
		const handleScroll = () => {
			const header = document.querySelector('.header');
			const mainContent = document.querySelector('.page__main-content');
			const mainContentTop = mainContent.getBoundingClientRect().top;

			if (mainContentTop < 0) {
				header.classList.add('with-border');
				// fadeIn.classList.add('with-border');
			} else {
				header.classList.add('without-border');
				header.classList.remove('with-border');
				// fadeIn.classList.remove('with-border');
			}
			if (mainContentTop < 0) {
				header.classList.remove('without-border');
			}
		};
		window.addEventListener('scroll', handleScroll);
		// Очистка слушателя событий при размонтировании компонента
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};
	useEffect(() => {
		document.addEventListener('DOMContentLoaded', function () {
			var element = document.getElementById('target-services');
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			} else {
				console.error('Элемент с идентификатором target-services не найден на странице.');
			}
		});
	}, []);
	return (
		<header className="header key-object">
			<div className="header__container">
				<div className="header__column el-logo">
					<a href={getPath('index.html')}>
						<div className="header__logo"></div></a>
					<div className="header__text">
						<h1>Media-Studio</h1>
						<p><span>Group</span><span>Obninsk</span></p>
					</div>
				</div>
				<div className="header__column">
					<div className="header__menu">
						<a href={getPath('index.html')} className="header__item header__item--home">HOME
						</a>
						<div className="header__item header__item--services">
							<a className="link-key key-services"
								href="../index.html#target"
							// to='../index.html#target-services'
							>SERVICES</a>
						</div>
						<div className="header__item">
							<a href={getPath('pages/videos.html')}>VIDEOS</a></div>
						<div className="header__item">
							<a href={getPath('pages/about.html')}>BIO</a>
						</div>
						<div className="header__item">
							<a href={getPath('pages/news.html')}>NEWS</a>
						</div>
						<div className="header__item header__item--contacts">
							<Button className=' key-services'
								to='footer'
								duration={700}
								offset={-100}
								smooth='easeInQuad'
							>CONTACTS</Button>
						</div>
					</div>
					<div className="header__bookmark">

					</div>
				</div>
				<div className="header__column el-community">
					<a href='tel:++79106044424' className="el-community__phone">
						<i className='icon-phone-ringing'></i>
						<div className="el-community__content">
							<h5 className='el-community__title'>GIVE US A CALL</h5>
							<span>+7 910 604-44-24</span>
						</div>
					</a>
				</div>
			</div>
		</header >
	);
};
// -------------------------------- About --------------------------------------
const About = () => {
	const [isContentExpanded, setIsContentExpanded] = useState(window.innerWidth > 920);
	const toggleButtonRef = useRef(null);
	const textBlockRef = useRef(null);
	const hideBoxRef = useRef(null);

	const handleToggleClick = useCallback(() => {
		setIsContentExpanded(prevState => !prevState);
	}, []);

	useEffect(() => {
		applyParallaxEffects(smoother, '.about__bg-image');
		const toggleButton = toggleButtonRef.current;

		if (toggleButton) {
			if (!isContentExpanded) {
				toggleButton.classList.add('hidden');
			} else {
				toggleButton.classList.remove('hidden');
			}
		}
	}, [isContentExpanded]);

	useEffect(() => {
		const toggleButton = toggleButtonRef.current;
		const textBlock = textBlockRef.current;
		const hideBox = hideBoxRef.current;

		if (toggleButton) {
			toggleButton.addEventListener('click', handleToggleClick);
		}

		if (textBlock && hideBox) {
			if (!isContentExpanded) {
				textBlock.classList.remove('hidden');
				hideBox.classList.remove('hidden');
			} else {
				textBlock.classList.add('hidden');
				hideBox.classList.add('hidden');
			}
		}
	}, [handleToggleClick, isContentExpanded]);

	const handleResize = useCallback(() => {
		setIsContentExpanded(window.innerWidth > 920);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [handleResize]);


	useEffect(() => {
	});
	return (
		<div className="about" id='about'>
			<div className="about__bg-image _ibg">
				<picture>
					{isWebpSupported()
						? <img src="../img/about/ab-img-01.webp" type="image/webp" />
						: <img src="../img/about/ab-img-01.png" alt="image" />}
				</picture>
			</div>
			<div className="about__container">
				<div className="content-body about__content">
					{/* <div className="content-body__column"></div> */}
					<div className="content-body__column">
						<div ref={textBlockRef} className="content-body__text">
							<h1 className="content-body__title">В нашей студии:</h1>
							<p>- описав свой проект, Вы получаете уникальные предложения от ведущих профессионалов. Наймите именно того специалиста, который идеально подходит для воплощения вашей музыкальной идеи!
								<span ref={toggleButtonRef} className="content-body__icon">
									<i className="content-body__ellipsis"></i>
								</span>
							</p>
							<div ref={hideBoxRef} className="content-body__hide-box">
								<div className="content-body__wrapper">
									<span>- мы понимаем, что талант без правильного оборудования может оставаться скрытым. Именно поэтому мы предлагаем все необходимое для раскрытия вашего потенциала.</span>
									<span>- но наша студия - это не просто место для работы. Здесь создается особое настроение, которое способствует вашему вдохновению. Дружеская атмосфера позволяет вам чувствовать себя комфортно и свободно, чтобы в полной мере насладиться процессом создания музыки.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
// ----------------------------- Achievements ----------------------------------
const Achievements = () => {
	useEffect(() => {

	});
	return (
		<div className="achieve-items" id='achieve'>
			<div className="achieve-items__body">
				<div className="achieve-items__bg-image _ibg">
					<picture>
						{isWebpSupported()
							? <img src="../img/about/achieve/pattern-11.webp" type="image/webp" />
							: <img src="../img/about/achieve/pattern-11.png" alt="image" />}
					</picture>
				</div>
				<div className="achieve-items__wrapper">
					<div className="achieve-items__item">
						<div className="achieve-items__image _ibg">
							<picture>
								{isWebpSupported()
									? <img src="../img/about/slide/sert1.webp" type="image/webp" />
									: <img src="../img/about/slide/sert1.png" alt="image" />}
							</picture>
						</div>
					</div>
					{/* <div className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src="../img/about/slide/sert2.webp" type="image/webp" />
								: <img src="../img/about/slide/sert2.png" alt="image" />}
						</picture>
					</div>
					<div className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src="../img/about/slide/sert3.webp" type="image/webp" />
								: <img src="../img/about/slide/sert3.png" alt="image" />}
						</picture>
					</div>
					<div className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src="../img/about/slide/sert4.webp" type="image/webp" />
								: <img src="../img/about/slide/sert4.png" alt="image" />}
						</picture>
					</div>
					<div className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src="../img/about/slide/sert5.webp" type="image/webp" />
								: <img src="../img/about/slide/sert5.png" alt="image" />}
						</picture>
					</div> */}
				</div>
				{/* <div class="achieve-items__new-container">new container</div> */}
			</div>
		</div>
	);
};
// --------------------------------- footer ------------------------------------
const Footer = () => {
	useEffect(() => {
		if (isMobile.any()) {
		} else {
			tlFooterContacts();
		}
	}, []);

	return (
		<Element className='footer' name='footer'>
			<div className="footer__content">
				<div className="footer__info _container">
					<div className="footer__help el-4">
						<i className='icon-achievements _current-page'></i>
						<i className='icon-services'></i>
						<i className='icon-reviews'></i>
						<i className='icon-contacts'></i>
					</div>
				</div>
				<div className="contacts footer__contacts el-5">
					<div className="contacts__container">
						<div className="contacts__items">
							<div className="contacts__item">
								<i className='icon-location'></i>
								<div className='contacts__text'>
									<p>Россия, Калужская область, г. Обнинск,</p>
									<p>Проспект Ленина, 137, к. 4, подъезд 3, оф. 260</p>
								</div>
							</div>
							<div className="contacts__item">
								<a href="tel:+79106044424">
									<i className="icon-phone-call"></i>
									<span>+7 910 604-44-24</span>
								</a>
							</div>
							<div className="contacts__item">
								<a href="mailto:mailto:studio@obninsk-gusli.ru">
									<i className="icon-enve-mail"></i>
									<span>studio@obninsk-gusli.ru</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__community _container">
				<div className="community">
					<div className="community__items">
						<div className="community__title">
							<span>Media-Studio GROUP ©  2024.</span>
							<a className='community__link' href="">Privacy Policy.
								<i className='icon-angles-right-solid'></i>
							</a>
						</div>
						<div className="community__icons">
							<div className="community__icon">
								<a class="wa" title="WhatsApp" target="blank" href="https://wa.me/79106044424">
									<i className="icon-whatsapp"></i>
								</a>
							</div>
							<div className="community__icon">
								<a class="wa" title="VK" target="blank" href="https://vk.com/studio_gusli">
									<i className="icon-vk-brand"></i>
								</a>
							</div>
							<div className="community__icon">
								<a class="wa" title="TG" target="blank" href="https://t.me/gusli_studio">
									<i className="icon-telegram-fly"></i>
								</a>
							</div>
							<div className="community__icon">
								<a class="wa" title="youtube" target="blank" href="https://youtube.com/@guslistudio6257?si=36fe20TYpLAJyB3m">
									<i className="icon-youtube-logo"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Element>
	);
};
// ------------------------------- Menufloat -----------------------------------
const Menufloat = ({ baseUrl }) => {
	const [offset, setOffset] = useState(-100);
	useEffect(() => {
		function handleResize() {
			const screenWidth = window.innerWidth;
			//todo: Настроить логику для установки различных значений offset в зависимости от ширины экрана
			if (screenWidth < 768) {
				setOffset(-150);
			} else {
				setOffset(-100);
			}
		}
		//todo: Вызываем функцию handleResize сразу после монтирования компонента, чтобы установить начальное значение 
		handleResize();

		//todo: Убираем слушатель события изменения размера окна при размонтировании компонента
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		document.querySelector('.burger-button').addEventListener('click', function () {
			this.classList.toggle('_active');
			const menuFloattop = document.querySelector('.menu-float__top');
			console.log(menuFloattop);
			menuFloattop.classList.toggle('_is-open');
		});
	}, []);

	useEffect(() => {
		initSectionTriggerMove('#about', '.menu-float__menu-link--home');
		initSectionTriggerMove('#achieve', '.menu-float__menu-link--services');
		initSectionTriggerMove('#footer', '.menu-float__menu-link--footer');
	});
	const getPath = (filename) => {
		return `${baseUrl}/${filename}`;
	};

	return (
		<nav className="menu-float">
			<div className="menu-float__body">
				<div className="menu-float__inner">
					<div className="menu-float__wrapper">
						<div className="menu-float__top">
							<div className="menu-float__top-content">
								<div className="main-menu">
									<div className="main-menu__menu-wrapper">
										<div className="main-menu__column">
											<ul className="main-menu__menu-nav">
												<li className="main-menu__title">
													<h4>Inspiration</h4>
												</li>
												<li className="main-menu__menu-link">
													<a className="main-menu__menu-link" href="">Видео</a>
												</li>
												<li className="main-menu__menu-link">
													<a className="main-menu__menu-link" href="">Звук</a>
												</li>
												<li className="main-menu__menu-link">
													<a className="main-menu__menu-link" href="">Текст</a>
												</li>
												<li className="main-menu__menu-link">
													<a className="main-menu__menu-link" href="">Ивенты</a>
												</li>
												<li className="main-menu__menu-link">
													<a className="main-menu__menu-link" href="">Услуги</a>
												</li>
											</ul>
										</div>
										<div className="main-menu__column">
											<ul className="main-menu__menu-nav">
												<div className="main-menu__title">
													<h4>w.</h4>
												</div>
												<li className="main-menu__menu-link">
													<a className="main-menu__menu-link"
														href={getPath('pages/about.html')}>Биография</a>
												</li>
												<li className="main-menu__menu-link"><a className="main-menu__menu-link" href="">С кем работали</a>
												</li>
												<li className="main-menu__menu-link"><a className="main-menu__menu-link" href="">Отзывы клиентов</a>
												</li>
												<li className="main-menu__menu-link"><a className="main-menu__menu-link" href="">Галерея</a></li>
												<li className="main-menu__menu-link"><a className="main-menu__menu-link" href="">Контакты</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="menu-float__bottom">
							<div className="menu-float__layout menu-float__layout--primary">
								<div className="menu-float__content">
									<a className="menu-float__mail" href="tel:+79106044424">
										<div className="menu-float__logo"><i className="icon-phone-call"></i></div>
										<div className="menu-float__breadcrumb">
											<strong className="menu-float__title">G.студия</strong>
										</div>
									</a>
								</div>
							</div>
							<div className="menu-float__layout menu-float__layout--secondary">
								<div className="menu-float__content">
									<div className="menu-float__nav">
										<div className="menu-float__menu-link menu-float__menu-link--home">
											<Button to='about' duration={700} smooth={true} offset={0}>Home</Button>
										</div>
										<div className="menu-float__menu-link menu-float__menu-link--services">
											<Button to='achieve-items' duration={700} smooth={true} offset={-80}>
												Services
											</Button>
										</div>
										<div className="menu-float__menu-link menu-float__menu-link--footer">
											<Button to='footer' duration={700} smooth={true} offset={-80}>
												Contacts
											</Button>
										</div>
									</div>
								</div>
							</div>
							<div className="menu-float__layout menu-float__layout--button">
								<div className="menu-float__content">
									<div className="burger-button">
										<div className="burger-button__items"><svg viewBox="10 6 44 36">
											<path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
											<path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
											<path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
										</svg></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
// -----------------------------------------------------------------------------
createRoot(document.querySelector('.page__header')).render(<Header baseUrl={baseUrl} />);
// -----------------------------------------------------------------------------
createRoot(document.querySelector('.main-content__about')).render(<About />);
// -----------------------------------------------------------------------------
createRoot(document.querySelector('.main-content__achievements')).render(<Achievements />);
// -----------------------------------------------------------------------------
createRoot(document.querySelector('.main-content__footer')).render(<Footer baseUrl={baseUrl} />);
// -----------------------------------------------------------------------------
createRoot(document.querySelector('.page__menu-float')).render(<Menufloat baseUrl={baseUrl} />);
// -----------------------------------------------------------------------------