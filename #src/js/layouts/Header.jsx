import React, { useEffect } from 'react';

export default function Header() {
	const dataMoveEl = [{ 'bp-max': 920, 'index': 1, 'target': '.bp-1' }];
	useEffect(() => {
		const fadeIn = document.querySelector('.page__fade-in');

		document.querySelector('.header__ellipsis').addEventListener("click", () => {
			fadeIn.classList.toggle('_active');
		});
		document.querySelector('.burger-button').addEventListener('click', function () {
			this.classList.toggle('_active');
		});

		const handleScroll = () => {
			const header = document.querySelector('.header');
			const mainContent = document.querySelector('.page__main-content');
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
		<div className="header key-object">
			<div className="header__container">
				<div className="burger-button">
					<div className="burger-button__items">
						<svg viewBox="10 6 44 36">
							<path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37" />
							<path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24" />
							<path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37" />
						</svg>
					</div>
				</div>
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

					<div className="community header__community" data-move-el={JSON.stringify(dataMoveEl)}>
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
								<i className="icon-youtube"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}