import React, { useEffect } from 'react';
import { Link, scroller } from 'react-scroll';

const Header = () => {
	const dataMoveEl = [{ 'bp-max': 920.99, 'index': 1, 'target': '.bp-1' }];

	useEffect(() => {
		const fadeIn = document.querySelector('.page__fade-in');
		document.querySelector('.header__ellipsis').addEventListener("click", () => {
			fadeIn.classList.toggle('_active');
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
			<div className="header__wrapper">
				<div className="header__container">
					<div className="header__column el-logo">
						<a href="../index.html">
							<div className="header__logo"></div></a>
						<div className="header__text">
							<h1>Media-Studio</h1>
							<p><span>Group</span><span>Obninsk</span></p>
						</div>
					</div>
					<div className="header__column">
						<div className="header__menu">
							<Link href='#' className="header__item header__item--home"
								to='main-slide'
								spy={false}
								duration={700}
								smooth='easeInQuint'
							>HOME
							</Link>
							<div className="header__item header__item--services">
								<Link className='link-key key-services'
									to='services'
									duration={700}
									offset={-100}
									smooth='easeInCubic'
								>SERVICES</Link>
							</div>
							<div className="header__item"><a href="#">VIDEOS</a></div>
							<div className="header__item"><a href="../pages/about.html">BIO</a></div>
							<div className="header__item"><a href="#">NEWS</a></div>
							<div className="header__item header__item--contacts">
								<Link className='link-key key-services'
									to='footer'
									duration={700}
									offset={-100}
									smooth='easeInQuad'
								>CONTACTS</Link>
							</div>
						</div>
						<div className="header__bookmark">

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
									<i className="icon-youtube-logo"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};


export default Header;