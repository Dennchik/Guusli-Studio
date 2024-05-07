import { useEffect } from 'react';

const ScrollToTarget = () => {
	useEffect(() => {
		const targetElement = document.getElementById('target-services');

		console.log(targetElement);
		if (targetElement) {// Проверка, определяется ли элемент правильно
			targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}, []); // Пустой массив завершит эффект только после первого рендера

	return null; // Нет необходимости рендерить какой-либо компонент
};

export default ScrollToTarget;