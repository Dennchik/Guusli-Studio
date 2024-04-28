// Переменная для хранения позиции прокрутки
var savedScrollPosition = 0;

// Функция для возврата к исходной позиции
function returnToSavedPosition() {
	if (savedScrollPosition !== 0) {
		// Если позиция прокрутки сохранена, возвращаемся к ней
		window.scrollTo({
			top: savedScrollPosition,
			behavior: 'smooth' // Для плавной анимации прокрутки (опционально)
		});
		// Сбрасываем сохраненную позицию
		savedScrollPosition = 0;
		// Удаляем класс _rotate у кнопки
		document.getElementById('scrollButton').classList.remove('_rotate');
	} else {
		// Если позиция прокрутки не сохранена, прокручиваем к верху страницы
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		// Сохраняем текущую позицию прокрутки относительно верха окна браузера
		savedScrollPosition = window.scrollY || document.documentElement.scrollTop;
		// Добавляем класс _rotate кнопке, если прокрутка больше, чем половина высоты окна браузера
		if (savedScrollPosition > window.innerHeight * 0.5) {
			document.getElementById('scrollButton').classList.add('_rotate');
		}
	}
}

// Добавляем обработчик события для кнопки
document.getElementById('scrollButton').addEventListener('click', returnToSavedPosition);

// Отслеживаем событие прокрутки страницы
window.addEventListener('scroll', function () {
	// Если прокрутка больше, чем половина высоты окна браузера, добавляем класс _rotate кнопке
	if ((window.scrollY || document.documentElement.scrollTop) > window.innerHeight * 0.5) {
		document.getElementById('scrollButton').classList.add('_rotate');
	} else {
		// Иначе удаляем класс _rotate у кнопки
		document.getElementById('scrollButton').classList.remove('_rotate');
	}
});