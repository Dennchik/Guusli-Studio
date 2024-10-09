import React from 'react';
import { createRoot } from 'react-dom/client';

// -------------------------------------------------------------------------------------------------
const baseUrl = '.';
// ------------------------------------- Components ------------------------------------------------
import Header from '../layouts/Header.jsx';
import Mainslide from '../components/Mainslide.jsx';
import Services from '../components/Services.jsx';
import Footer from '../layouts/Footer.jsx';
import Menufloat from '../components/Menu-float.jsx';
// -------------------------------------- Header ---------------------------------------------------
createRoot(document.querySelector('.page__header')).render(<Header baseUrl={baseUrl} />);
// -------------------------------------- Mainslide ------------------------------------------------
createRoot(document.querySelector('.main-content__slide')).render(<Mainslide baseUrl={baseUrl} />);
// -------------------------------------- Services -------------------------------------------------
createRoot(document.querySelector('.main-content__services')).render(<Services baseUrl={baseUrl} />);
// -------------------------------------- Footer ---------------------------------------------------
createRoot(document.querySelector('.main-content__footer')).render(<Footer baseUrl={baseUrl} />);

// -------------------------------------- Menufloat ------------------------------------------------
createRoot(document.querySelector('.page__menu-float')).render(<Menufloat />);
// -------------------------------------------------------------------------------------------------
