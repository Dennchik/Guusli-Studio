import React, { useEffect } from 'react';

export default function Header() {
	const dataMoveEl = [{ 'bp-max': 920, 'index': 1, 'target': '.bp-1' }];
	useEffect(() => {
		const fadeIn = document.querySelector('.page__fade-in');

		document.querySelector('.header__ellipsis').addEventListener("click", () => {
			fadeIn.classList.toggle('_active');
		});

		const handleScroll = () => {
			const header = document.querySelector('.header');
			const mainContent = document.querySelector('.main-content');
			const mainContentTop = mainContent.getBoundingClientRect().top;

			if (mainContentTop < 0) {
				header.classList.add('with-border');
				fadeIn.classList.add('with-border');
			} else {
				header.classList.add('without-border');
				header.classList.remove('with-border');
				fadeIn.classList.remove('with-border');
			}
			if (mainContentTop < 0) {
				// headerCommunity.classList.remove('with-border');
				header.classList.remove('without-border');
			}
		};

		window.addEventListener('scroll', handleScroll);
		// Очистка слушателя событий при размонтировании компонента
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};


	}, []);

	return (
		<header className="header key-object">
			<div className="header__container">
				<div className="header__column el-logo">
					<div className="header__logo"></div>
					<div className="header__text">
						<h1>Media-Studio</h1>
						<p><span>Group</span><span>Obninsk</span></p>
					</div>
				</div>
				<div className="header__column">
					<div className="header__menu">
						<div className="header__item">
							<a className='link-key key-home' href="#home">HOME</a>
						</div>
						<div className="header__item">
							<a className='link-key key-services' id="services" href="#">SERVICES</a>
						</div>
						<div className="header__item"><a href="#">VIDEOS</a></div>
						<div className="header__item"><a href="#">BIO</a></div>
						<div className="header__item"><a href="#">NEWS</a></div>
						<div className="header__item"><a href="#">CONTACTS</a></div>
					</div>
				</div>
				<div className="header__column el-community">
					<div className="header__ellipsis">
						<span></span>
					</div>

					<div className="header__community" data-move-el={JSON.stringify(dataMoveEl)}>
						<div className="header__icon"><i className="icon-whatsapp"></i></div>
						<div className="header__icon"><i className="icon-vk-brand"></i></div>
						<div className="header__icon"><i className="icon-telegram-fly"></i></div>
						<div className="header__icon"><i className="icon-youtube"></i></div>
					</div>
				</div>
			</div>
		</header>
	);
}