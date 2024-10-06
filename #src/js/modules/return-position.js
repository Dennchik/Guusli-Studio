
export default function returnToSavedPosition() {
	var savedScrollPosition = 0;

	// Функция для возврата к исходной позиции
	function returnToSavedPosition() {
		if ((window.scrollY || document.documentElement.scrollTop) !== 0) {
			// Если прокрутка не находится в самом верху, прокручиваем страницу вверх
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		} else if (savedScrollPosition !== 0) {
			// Если прокрутка находится в самом верху и есть сохраненная позиция, возвращаемся к сохраненной позиции
			window.scrollTo({
				top: savedScrollPosition,
				behavior: 'smooth'
			});
		}
	}
	// Добавляем обработчик события для кнопки
	const scrollButton = document.getElementById('scrollButton');
	scrollButton.addEventListener('click', function () {
		// Проверяем, находится ли страница не в самом верху
		if ((window.scrollY || document.documentElement.scrollTop) !== 0) {
			// Если да, сохраняем текущую позицию прокрутки
			savedScrollPosition = window.scrollY || document.documentElement.scrollTop;
		}
		// Вызываем функцию возврата к исходной позиции
		returnToSavedPosition();
	});

	// Отслеживаем событие прокрутки страницы
	window.addEventListener('scroll', function () {
		// Если прокрутка больше, чем половина высоты окна браузера, добавляем класс "_rotate" кнопке 
		if ((window.scrollY || document.documentElement.scrollTop) > window.innerHeight * 0.2) {
			scrollButton.classList.add('_rotate');
		} else {
			// Иначе удаляем класс _rotate у кнопки
			scrollButton.classList.remove('_rotate');
		}
	});
}