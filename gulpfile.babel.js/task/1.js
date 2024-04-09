//* Configuration
import path from "../config/path.js";
//* Plugins
const cb = () => { };

export default (done) => {
	// Читаем содержимое каталога с файлами JSX
	$.fs.readdir(path.reactWebp.src, function (err, items) {
		if (items) {
			// Для каждого файла JSX в каталоге
			items.forEach(item => {
				// Формируем путь к файлу JSX
				let jsxFilePath = `${path.reactWebp.src}/${item}`;
				// Добавляем строку с тегом <picture> в файл
				$.fs.appendFileSync(
					jsxFilePath, // Путь к файлу, в который нужно добавить строку
					`<picture>\n\t<source srcset="/img/tmp/${item.split('.')[0]}.webp" type="image/webp">\n\t<img src="/img/tmp/${item}" alt="${item.split('.')[0]}">\n</picture>\n`,
					cb
				);
			});
		}
	});

	done(); // Говорим Gulp, что задача завершена
};
