import React, { useEffect } from 'react';

export default function Header() {
	return (
		<footer className='footer'>

			<div className="footer__content">
				<div className="footer__row _container">

					<div className="footer__column">
						<div className="footer__title">ABOUT OUR STUDIO</div>
						<p>Наша медиа-группа представляет собой превосходную студию звукозаписи и продюсерскую компанию. Мы специализируемся на создании текстов, продюсировании, звукозаписи и развитии талантов. Готовы к сотрудничеству с вами в любое время.</p>
						<p>Мы признаём и ценим значимость каждого проекта. Наше обязательство - обеспечить высочайшее качество звукозаписи, гибкость и терпение, необходимые для достижения вами высокого уровня в конкурентной среде современного рынка. В нашей студии вас ждёт дружелюбная и уютная атмосфера, создающая идеальное окружение для раскрытия вашего творчества и создания вашего лучшего произведения.</p>
					</div>
					<div className="footer__column">
						<div className="footer__title">SERVICES</div>
						<div className="footer__item-services">
							<i className='icon-microphone'></i>
							<span>Мы предлагаем услуги аналоговой и цифровой записи, а также микширования в широком спектре жанров.</span>
						</div>
						<div className="footer__item-services">
							<i className='icon-fast-forward'></i>
							<span>Наша студия привлекает великолепным интерьером и оборудованными комфортабельными помещениями, идеально подходящими для создания лучших произведений.</span>
						</div>
						<div className="footer__item-services">
							<i className='icon-music'></i>
							<span>В нашей студии мы внедряем передовое оборудование и программное обеспечение для микширования, обеспечивая высочайшее качество звучания ваших треков. Ваше творчество - наш приоритет.</span>
						</div>
					</div>
					<div className="footer__column">
						<div className="footer__title">OUR TEAM</div>
						<div className="footer__item-services"></div>



					</div>
				</div>
				<div className="footer__info">
					<div className="contacts footer__contacts _container">
						<div className="contacts__item">
							<i className='icon-location'></i>
							<div className='contacts__text'>
								<p>Россия, Калужская область, г. Обнинск,</p>
								<p>Проспект Ленина, 137, к. 4, подъезд 3, оф. 260</p>
							</div>

						</div>
						<div className="contacts__item">
							<a href="tel:+79106044424">
								<i className="icon-phone-call"></i>
								<span>+7 910 604-44-24</span>
							</a>
						</div>
						<div className="contacts__item">
							<a href="mailto:mailto:studio@obninsk-gusli.ru">
								<i className="icon-enve-mail"></i>
								<span>studio@obninsk-gusli.ru</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__footer _container">
				<div className="community footer__community">
					<div className="community__title">
						<span>Media-Studio GROUP ©  2024.</span>
						<a className='community__link' href="">Privacy Policy.</a>
					</div>
					<div className="community__icons">

						<div className="community__icon">
							<a class="wa" title="WhatsApp" target="blank" href="https://wa.me/79106044424">
								<i className="icon-whatsapp"></i>
							</a>
						</div>
						<div className="community__icon">
							<a class="wa" title="VK" target="blank" href="https://vk.com/studio_gusli">
								<i className="icon-vk-brand"></i>
							</a>
						</div>
						<div className="community__icon">
							<a class="wa" title="TG" target="blank" href="https://t.me/gusli_studio">
								<i className="icon-telegram-fly"></i>
							</a>
						</div>
						<div className="community__icon">
							<a class="wa" title="youtube" target="blank" href="https://youtube.com/@guslistudio6257?si=36fe20TYpLAJyB3m">
								<i className="icon-youtube"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
} 