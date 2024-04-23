// Add-content.jsx
import React from 'react';

const TextBlock = ({ index }) => {
	// Определяем содержимое каждого блока в зависимости от переданного индекса
	let content;
	switch (index) {
		case 1:
			content = (
				<div className="content-info__item-services">
					<i className='icon-microphone'></i>
					<span>Мы предлагаем услуги аналоговой и цифровой записи, а также микширования в широком спектре жанров.</span>
				</div>
			);
			break;
		case 2:
			content = (
				<div className="content-info__item-services">
					<i className='icon-fast-forward'></i>
					<span>Наша студия привлекает великолепным интерьером и оборудованными комфортабельными помещениями, идеально подходящими для создания лучших произведений.</span>
				</div>
			);
			break;
		case 3:
			content = (
				<div className="content-info__item-services">
					<i className='icon-music'></i>
					<span>В нашей студии мы внедряем передовое оборудование и программное обеспечение для микширования, обеспечивая высочайшее качество звучания ваших треков. Ваше творчество - наш приоритет.</span>
				</div>
			);
			break;
		default:
			content = null;
	}

	return content;
};

export default TextBlock;
