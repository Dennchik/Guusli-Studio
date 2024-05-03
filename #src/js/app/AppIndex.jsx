import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Footer, } from '../layouts/Components.jsx';
const baseUrl = '.';

import Header from '../layouts/Header.jsx';
const header = createRoot(document.querySelector('.page__header'));
header.render(<Header baseUrl={baseUrl} />);
// -----------------------------------------------------------------------------
import Mainslide from '../layouts/Mainslide.jsx';
const mainslide = createRoot(document.querySelector('.main-content__slide'));
mainslide.render(<Mainslide baseUrl={baseUrl} />);
// -----------------------------------------------------------------------------
// import Services from '../layouts/Services.jsx';
// const services = createRoot(document.querySelector('.main-content__services'));
// services.render(<Services />);
// -----------------------------------------------------------------------------
const commentDomFooter = document.querySelector('.main-content__footer');
const commentRootFooter = createRoot(commentDomFooter);
commentRootFooter.render(<Footer />);
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
import Menufloat from '../layouts/Menu-float.jsx';
const menufloat = createRoot(document.querySelector('.page__menu-float'));
menufloat.render(<Menufloat baseUrl={baseUrl} />);

// import Mainslide from '../layouts/Mainslide.jsx';
// const mainslide = ReactDOM.createRoot(document.querySelector('.main-content__slide'));
// ReactDOM.createRoot(document.querySelector('.main-content__slide')).render(
// 	<React.StrictMode><Mainslide baseUrl={baseUrl} /></React.StrictMode>
// );
// ReactDOM.render(
// 	<StrictMode><Mainslide baseUrl={baseUrl} /></StrictMode>, document.querySelector('.main-content__slide')
// );


