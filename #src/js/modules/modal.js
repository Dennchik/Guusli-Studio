export default function modal() {
	const mainSlides = document.querySelectorAll(".mainslide__slide");
	let modal = document.querySelector('.modal');
	mainSlides.forEach(mainSlide => {
		let img = mainSlide.querySelector("img");
		img.onclick = function (e) {
			let target = e.target;
			let sourse = target.closest('.content-mainslide__image').querySelector('source').srcset;
			let ahref = target.closest('.content-mainslide').querySelector('.content-mainslide__link').href;
			if (!target.closest('.mainslide__slide').classList.contains('swiper-slide-active')) {
				e.preventDefault();
			} else {
				let modalImg = modal.querySelector('.modal__image');
				let _closeModalButtons = document.querySelectorAll('._close-modal');
				modal.classList.add('_show');
				modal.classList.remove('bounceOutDown');
				modal.classList.add('bounceInn');
				modal.style.zIndex = '9';
				modalImg.src = this.src;
				modal.querySelector('.modal__link').href = ahref;
				modal.querySelector('source').srcset = sourse;
				for (let i = 0; i < _closeModalButtons.length; i++) {
					const _closeModalButton = _closeModalButtons[i];
					_closeModalButton.addEventListener('click', () => {
						modal.classList.add('bounceOutDown');
						window.setTimeout(
							function removethis() {
								modal.classList.remove('_show');
								modal.style.display = "none";
								modal.style.zIndex = '1';
								modal.style.display = null;
							}, 500
						);
					});
				}
			}
		};
	});
}