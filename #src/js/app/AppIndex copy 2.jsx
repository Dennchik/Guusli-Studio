import React, { StrictMode } from 'react';
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
const baseUrl = '.';

// -----------------------------------------------------------------------------
import Mainslide from '../layouts/Mainslide.jsx';
createRoot(document.querySelector('.main-content__slide')).render(<Mainslide baseUrl={baseUrl} />);
// -----------------------------------------------------------------------------
import Header from '../layouts/Header.jsx';
createRoot(document.querySelector('.page__header')).render(<Header baseUrl={baseUrl} />);
// -----------------------------------------------------------------------------
import Services from '../layouts/Services.jsx';
createRoot(document.querySelector('.main-content__services')).render(<Services />);
// -----------------------------------------------------------------------------
// import Footer from '../layouts/Footer.jsx';
// createRoot(document.querySelector('.main-content__footer')).render(<Footer baseUrl={baseUrl} />);
// ReactDOM.createRoot(document.querySelector('.main-content__footer')).render(
// 	<StrictMode><Footer baseUrl={baseUrl} /></StrictMode>);


// ReactDOM.render(
// 	<StrictMode><Footer /></StrictMode>, document.querySelector('.main-content__footer')
// );
// -----------------------------------------------------------------------------
// import AboutCompany from '../layouts/AboutCompanys.jsx';
// // Создаем временный DOM-элемент
// const tempElement = document.createElement('div');
// // Получаем ссылку на DOM-элемент
// const footerInfo = createRoot(document.querySelector('.footer__info'));
// // Рендерим компонент AboutCompany в созданный контейнер
// footerInfo.render(<AboutCompany baseUrl={baseUrl} />, tempElement);
// // Добавляем контейнер с компонентом AboutCompany в конец .footer__info
// footerInfo.insertBefore(tempElement.firstChild, footerInfo.firstChild);
// -----------------------------------------------------------------------------
// import AboutCompany from '../layouts/AboutCompanys.jsx';
// // Создаем временный DOM-элемент
// const tempElement = document.createElement('div');
// // Получаем ссылку на DOM-элемент

// const footerInfo = ReactDOM.createRoot(document.querySelector('.footer__info'));
// // Рендерим компонент AboutCompany в созданный контейнер

// footerInfo.render(<AboutCompany baseUrl={baseUrl} />, tempElement);
// // Добавляем контейнер с компонентом AboutCompany в конец .footer__info
// footerInfo.insertBefore(tempElement.firstChild, footerInfo.firstChild);
// -----------------------------------------------------------------------------
import Menufloat from '../layouts/Menu-float.jsx';
createRoot(document.querySelector('.page__menu-float')).render(<Menufloat baseUrl={baseUrl} />);
