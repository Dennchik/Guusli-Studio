import React, { StrictMode } from 'react';
import ReactDOM from "react-dom";
const baseUrl = '.';

import Header from '../layouts/Header.jsx';
ReactDOM.createRoot(document.querySelector('.page__header')).render(
	<StrictMode><Header baseUrl={baseUrl} /></StrictMode>);

// -----------------------------------------------------------------------------
import Services from '../layouts/Services.jsx';
ReactDOM.render(
	<StrictMode><Services /></StrictMode>, document.querySelector('.main-content__services')
);
// -----------------------------------------------------------------------------
import Footer from '../layouts/Footer.jsx';
ReactDOM.render(
	<StrictMode><Footer /></StrictMode>, document.querySelector('.main-content__footer')
);
// -----------------------------------------------------------------------------
import AboutCompany from '../layouts/AboutCompanys.jsx';
// Создаем временный DOM-элемент
const tempElement = document.createElement('div');
// Получаем ссылку на DOM-элемент
const footerInfo = document.querySelector('.footer__info');
// Рендерим компонент AboutCompany в созданный контейнер
ReactDOM.render(<AboutCompany baseUrl={baseUrl} />, tempElement);
// Добавляем контейнер с компонентом AboutCompany в конец .footer__info
footerInfo.insertBefore(tempElement.firstChild, footerInfo.firstChild);
// -----------------------------------------------------------------------------
import Menufloat from '../layouts/Menu-float.jsx';
ReactDOM.hydrate(
	<StrictMode> <Menufloat baseUrl={baseUrl} /></StrictMode>, document.querySelector('.page__menu-float')
);

// import Mainslide from '../layouts/Mainslide.jsx';
// const mainslide = ReactDOM.createRoot(document.querySelector('.main-content__slide'));
// ReactDOM.createRoot(document.querySelector('.main-content__slide')).render(
// 	<React.StrictMode><Mainslide baseUrl={baseUrl} /></React.StrictMode>
// );
// ReactDOM.render(
// 	<StrictMode><Mainslide baseUrl={baseUrl} /></StrictMode>, document.querySelector('.main-content__slide')
// );

// -----------------------------------------------------------------------------
import Mainslide from '../layouts/Mainslide.jsx';
ReactDOM.render(
	<StrictMode><Mainslide baseUrl={baseUrl} /></StrictMode>, document.querySelector('.main-content__slide')
);