import React, { StrictMode } from 'react';
import ReactDOM from "react-dom";

import Header from "../layouts/Header.jsx";
ReactDOM.render(
	<StrictMode><Header /></StrictMode>, document.querySelector('.page__header-wrapper')
);

import Services from "../layouts/Services.jsx";
ReactDOM.render(
	<StrictMode><Services /></StrictMode>, document.querySelector('.main-content__services')
);

import Footer from '../layouts/Footer.jsx';
ReactDOM.render(
	<StrictMode><Footer /></StrictMode>, document.querySelector('.main-content__footer')
);

import Menufloat from '../layouts/Menu-float.jsx';
ReactDOM.render(
	<StrictMode> <Menufloat /></StrictMode>, document.querySelector('.page__menu-float')
);

import Mainslide from "../layouts/Mainslide.jsx";
ReactDOM.render(
	<StrictMode><Mainslide /></StrictMode>, document.querySelector('.main-content__slide')
);

