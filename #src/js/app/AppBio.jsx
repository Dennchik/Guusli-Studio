import React, { StrictMode } from 'react';
import ReactDOM from "react-dom";
const baseUrl = '..';
import Header from '../layouts/Header.jsx';
ReactDOM.render(
	<StrictMode><Header baseUrl={baseUrl} /></StrictMode>, document.querySelector('.page__header')
);
// -----------------------------------------------------------------------------
import Footer from '../layouts/Footer.jsx';
ReactDOM.render(
	<StrictMode><Footer /></StrictMode>, document.querySelector('.main-content__footer')
);
// -----------------------------------------------------------------------------
import Menufloat from '../layouts/Menu-float.jsx';
ReactDOM.render(
	<StrictMode><Menufloat baseUrl={baseUrl} /></StrictMode>, document.querySelector('.page__menu-float')
);
// -----------------------------------------------------------------------------
import Slidebio from '../layouts/Slidebio.jsx';
ReactDOM.render(
	<StrictMode><Slidebio /></StrictMode>, document.querySelector('.main-content__about')
);


