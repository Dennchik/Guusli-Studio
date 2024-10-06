export function burger() {
	document.querySelector('.burger-button').addEventListener('click', function () {
		this.classList.toggle('_active');
		const menuFloattop = document.querySelector('.menu-float__top');
		console.log(menuFloattop);
		menuFloattop.classList.toggle('_is-open');
	});
};

export function removeElement() {
	const animatedElements = document.querySelectorAll('.equalizer-content__square');
	animatedElements.forEach(element => {
		anime.remove(element); // Удаляем анимацию для каждого элемента
	});
}