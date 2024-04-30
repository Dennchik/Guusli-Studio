import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = ({ baseUrl }) => {
	// const dataMoveEl = [{ 'bp-max': 920.99, 'index': 1, 'target': '.bp-1' }];
	useEffect(() => {
		const fadeIn = document.querySelector('.page__fade-in');
		// document.querySelector('.header__ellipsis').addEventListener("click", () => {
		// 	fadeIn.classList.toggle('_active');
		// });

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

	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};

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
						<div className="header__item">
							<a href={getPath('pages/videos.html')}>VIDEOS</a></div>
						<div className="header__item">
							<a href={getPath('pages/about.html')}>BIO</a>
						</div>
						<div className="header__item">
							<a href={getPath('pages/news.html')}>NEWS</a>
						</div>
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
					{/* <div className="header__column el-community"> */}
					<a href='tel:++79106044424' className="el-community__phone">
						<i className='icon-phone-ringing'></i>
						<div className="el-community__content">
							<h5 className='el-community__title'>GIVE US A CALL</h5>
							<span>+7 910 604-44-24</span>
						</div>
					</a>
					{/* </div> */}
				</div>
			</div>
		</header >
	);
};


export default Header;