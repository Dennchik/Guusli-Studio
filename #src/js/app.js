import React, { StrictMode } from 'react';
import ReactDOM from "react-dom";

// -----------------------------------------------------------------------------
import Header from "./layouts/Header.jsx";
ReactDOM.render(
	<StrictMode><Header /></StrictMode>, document.querySelector('.page__header')
);
// -----------------------------------------------------------------------------
import Parallax from "./layouts/Parallax.jsx";
ReactDOM.render(
	<StrictMode><Parallax /></StrictMode>, document.querySelector('.main-content__services')
);
// -----------------------------------------------------------------------------
import Mainslide from "./layouts/Mainslide.jsx";
ReactDOM.render(
	<StrictMode><Mainslide /></StrictMode>, document.querySelector('.main-content__slide')
);
