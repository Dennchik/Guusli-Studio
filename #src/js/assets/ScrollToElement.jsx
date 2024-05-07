import React, { useEffect } from 'react';

const ScrollToElement = () => {
	useEffect(() => {
		if (window.location.hash) {
			var targetId = window.location.hash.substring(1); // Убираем символ #
			var targetElement = document.getElementById(targetId);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, []); // [] означает, что useEffect будет выполняться только один раз после монтирования компонента

	return null; // Поскольку этот компонент не отображает ничего на странице, он может просто возвращать null
};

export default ScrollToElement;
