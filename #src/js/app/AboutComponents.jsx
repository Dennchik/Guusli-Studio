import React from 'react';
import { createRoot } from 'react-dom/client';
//* ----------------------------------------------------------------------------

//* ----------------------------------------------------------------------------
const baseUrl = '..';
//* ---------------------------- Components-------------------------------------
import { Header } from '../layouts/Header.jsx';
// import { Achievements } from '../components/Achievements.jsx';
import { Footer } from '../layouts/Footer.jsx';
import { About } from '../components/About.jsx';
import { MenuFloat } from '../components/Menu-float.jsx';
//* ---------------------------- About -----------------------------------------
/**
 * Компонент Header.
//  * @param {{ baseUrl: string }} props - Объект пропсов.
 */
// const isRoot = window.location.pathname === '/' || window.location.pathname.match(/^\/[^/]*$/);
// const baseUrl = isRoot ? '.' : '..';
// console.log(baseUrl);
//* ---------------------------- Header ----------------------------------------
createRoot(document.querySelector('.page__header')).render(
	<Header baseUrl={baseUrl} />);
//* ------------------------------ About ---------------------------------------
createRoot(document.querySelector('.main-content__about')).render(
	<About baseUrl={baseUrl} />);
//* ----------------------------------------------------------------------------
// createRoot(document.querySelector('.main-content__achievements')).render(
// 	<Achievements/>);
//* ------------------------------ Footer --------------------------------------
createRoot(document.querySelector('.main-content__footer')).render(
	<Footer />);
//* ------------------------------ Menufloat -----------------------------------
createRoot(document.querySelector('.page__menu-float')).render(
	<MenuFloat baseUrl={baseUrl} />);
//* ----------------------------------------------------------------------------