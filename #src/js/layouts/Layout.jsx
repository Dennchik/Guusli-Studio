import React from 'react';
import { Outlet } from 'react-router-dom';
import { CustomLink } from '../components/CustomLink.jsx';
import Header from '../components/Header.jsx';
// -----------------------------------------------------------------------------
// import Header from '../layouts/Header.jsx';
// -----------------------------------------------------------------------------

const Layout = () => {
	return (
		<>
			<header className='page__header'>
				<Header />
			</header>

			<main className="page__main-content">
				<div className="main-content" id='wrapper'>
					<div className="main-content__content" id='content'>
						<Outlet />
					</div>
				</div>
			</main>
		</>
	);
};

export { Layout };
