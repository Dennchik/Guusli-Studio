import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
// -----------------------------------------------------------------------------
export default function Menufloat() {
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
												<li className="main-menu__menu-link"><a className="main-menu__menu-link" href="">Видео</a></li>
												<li className="main-menu__menu-link"><a className="main-menu__menu-link" href="">Звук</a></li>
												<li className="main-menu__menu-link"><a className="main-menu__menu-link" href="">Текст</a></li>
												<li className="main-menu__menu-link"><a className="main-menu__menu-link" href="">Ивенты</a></li>
												<li className="main-menu__menu-link"><a className="main-menu__menu-link" href="">Услуги</a></li>
											</ul>
										</div>
										<div className="main-menu__column">
											<ul className="main-menu__menu-nav">
												<div className="main-menu__title">
													<h4>w.</h4>
												</div>
												<li className="main-menu__menu-link"><a className="main-menu__menu-link" href="">Биография</a></li>
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
								<div className="menu-float__content"><a className="menu-float__mail" href="tel:+79106044424">
									<div className="menu-float__logo"><i className="icon-phone-call"></i></div>
									<div className="menu-float__breadcrumb"><strong className="menu-float__title">G.студия</strong></div>
								</a></div>
							</div>
							<div className="menu-float__layout menu-float__layout--secondary">
								<div className="menu-float__content">
									<div className="menu-float__nav">
										<div className="menu-float__menu-link menu-float__menu-link--home">
											<Link to='main-slide' duration={700} smooth={true} offset={0}>Home</Link></div>
										<div className="menu-float__menu-link menu-float__menu-link--services">
											<Link to='services' duration={700} smooth={true} offset={-80}>
												Services
											</Link></div>
										<div className="menu-float__menu-link menu-float__menu-link--footer">
											<Link to='footer' duration={700} smooth={true} offset={-80}>
												Contacts
											</Link></div>
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
}