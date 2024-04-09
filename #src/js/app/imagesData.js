// imagesData.js

// Функция, которая генерирует информацию об изображениях на основе путей к изображениям
export const generateImagesData = (imagePaths) => {
	return imagePaths.map((path, index) => ({
		name: `img_${index + 1}`,
		png: (`../../../build/img/body/${path}.png`).default,
		webp: (`../../../build/img/body/${path}.webp`).default
	}));
};