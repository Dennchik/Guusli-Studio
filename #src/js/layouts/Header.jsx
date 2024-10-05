import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { timeLineHeaderItem } from "../modules/anime-js.js";
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';

import "../../scss/layouts/header.scss";


const Header = ({baseUrl}) => {
	useEffect(() => {
		timeLineHeaderItem();

		const handleScroll = () => {
			const header = document.querySelector(".header");
			const mainContent = document.querySelector(".page__main-content");
			const mainContentTop = mainContent.getBoundingClientRect().top;

			if (mainContentTop < 0) {
				header.classList.add("with-border");
			} else {
				header.classList.add("without-border");
				header.classList.remove("with-border");
			}

			if (mainContentTop < 0) {
				header.classList.remove("without-border");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};

	return (
		<header className="header key-object">
			<div className="header__container">
				<div className="header__column el-logo">
					<a href={getPath("index.html")}>
						<div className="header__logo">
							{isWebpSupported()
								? <img src={getPath("./img/header/logo.webp")} alt="Logo"
											 type="image/webp"/>
								: <img src={getPath("./img/header/logo.png")} alt="Logo"/>}
						</div>
					</a>
					<div className="header__text">
						<span>Media-Group</span>
					</div>
				</div>
				<div className="header__column">
					<div className="header__menu">
						<a className="header__item header__item--home"
							 href={getPath("index.html")}>
							<i className='icon-home'></i>
						</a>
						<div className="header__item header__item--services">
							<Link className='link-key key-services'
										to='services'
										duration={700}
										offset={-100}
										smooth='easeInCubic'>
								<span>Услуги</span>
							</Link>
						</div>
						<div className="header__item">
							<a href={getPath("pages/videos.html")}>
								<span>Видео</span>
							</a>
						</div>
						<div className="header__item">
							<a href={getPath("pages/about.html")}>Компания</a>
						</div>
						<div className="header__item">
							<a href={getPath("pages/news.html")}>Новости</a>
						</div>
						<div className="header__item header__item--contacts">
							<Link className='link-key key-services'
										to='footer'
										duration={700}
										offset={-100}
										smooth='easeInQuad'>
								Контакты
							</Link>
						</div>
					</div>
					<div className="header__bookmark"></div>
				</div>
				<div className="header__column el-community">
					<a href='tel:++79106044424' className="el-community__phone">
						<i className='icon-phone-ringing'></i>
						<div className="el-community__content">
							<h5 className='el-community__title'>Связаться с нами</h5>
							<span>+7 910 604-44-24</span>
						</div>
					</a>
				</div>
			</div>
		</header>);
};

export default Header;
