import React, { useEffect } from "react";
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
export default function Slidebio() {
	useEffect(() => {
		const toggleButton = document.querySelector(".content-body__ellipsis");
		const hiddenSpans = document.querySelector(".content-body__hide-box");
		const contentText = document.querySelector('.content-body__text');


		toggleButton.addEventListener("click", function () {
			hiddenSpans.classList.toggle('_active');
			contentText.classList.toggle('_active');
		});
	}, []);

	return (
		<div className="about">
			<div className="about__bg-image _ibg">
				<picture>
					{isWebpSupported()
						? <img src="../img/about/ab-img-01.webp" type="image/webp" />
						: <img src="../img/about/ab-img-01.png" alt="image" />}
				</picture>
			</div>
			<div className="about__container">
				<div className="content-body about__content">
					{/* <div className="content-body__column"></div> */}
					<div className="content-body__column">
						<div className="content-body__text">
							<h1 className="content-body__title">В нашей студии:</h1>
							<p>- описав свой проект, Вы получаете уникальные предложения от ведущих профессионалов. Наймите именно того специалиста, который идеально подходит для воплощения вашей музыкальной идеи. Доверьтесь опыту и таланту экспертов, чтобы создать потрясающие треки, которые оставят свой неизгладимый след в мире музыки!
								<span className="content-body__icon">
									<i className="content-body__ellipsis"></i>
								</span>
							</p>
							<div className="content-body__hide-box">
								<div className="content-body__wrapper">
									<span>- мы понимаем, что талант без правильного оборудования может оставаться скрытым. Именно поэтому мы предлагаем все необходимое для раскрытия вашего потенциала. У нас есть передовое оборудование и инструменты, которые помогут вам донести ваше искусство до аудитории.</span>
									<span>- но наша студия - это не просто место для работы. Здесь создается особая настроение, которое способствует вашему вдохновению. Дружеская атмосфера позволяет вам чувствовать себя комфортно и свободно, чтобы в полной мере насладиться процессом создания музыки. Вам не нужно беспокоиться о технических деталях - мы позаботимся обо всем, чтобы вы могли сосредоточиться исключительно на вашем творчестве.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}