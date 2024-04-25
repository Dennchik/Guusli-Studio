import React from 'react';
import { Element } from "react-scroll";
export default function Header() {
	return (
		<footer className='footer' name='footer'>
			<Element className="footer__content">
				<div className="footer__info _container">
					<div className="content-info footer__content-info">
						<div className="content-info__column el-1">
							<div className="content-info__body">
								<div className="content-info__title">ABOUT OUR STUDIO</div>
								<div className="content-info__text">
									<p>Наша медиа-группа представляет собой превосходную студию звукозаписи и продюсерскую компанию. Мы специализируемся на создании текстов, продюсировании, звукозаписи и развитии талантов. Готовы к сотрудничеству с вами в любое время.</p>
									<p>Мы признаём и ценим значимость каждого проекта. Наше обязательство - обеспечить высочайшее качество звукозаписи, гибкость и терпение, необходимые для достижения вами высокого уровня в конкурентной среде современного рынка. В нашей студии вас ждёт дружелюбная и уютная атмосфера, создающая идеальное окружение для раскрытия вашего таланта и создания ваших лучших произведений.</p></div>
							</div>
							<div className='content-info__footer'>
								<a className='content-info__button' href="#" type='button'>Read more</a>
							</div>
						</div>
						<div className="content-info__column el-2">
							<div className='content-info__body'>
								<div className="content-info__title">SERVICES</div>
								<div className="content-info__item-services">
									<i className='icon-microphone'></i>
									<span>Мы предлагаем услуги аналоговой и цифровой записи, а также микширования в широком спектре жанров.</span>
								</div>
								<div className="content-info__item-services">
									<i className='icon-fast-forward'></i>
									<span>Наша студия привлекает великолепным интерьером и оборудованными комфортабельными помещениями, идеально подходящими для создания лучших произведений.</span>
								</div>
								<div className="content-info__item-services">
									<i className='icon-music'></i>
									<span>В нашей студии мы внедряем передовое оборудование и программное обеспечение для микширования, обеспечивая высочайшее качество звучания ваших треков. Ваше творчество - наш приоритет.</span>
								</div>
							</div>
							<div className='content-info__footer'>
								<a className='content-info__button' href="#" type='button'>Read more</a>
							</div>
						</div>
						<div className="content-info__column el-3">
							<div className='content-info__body'>
								<div className="content-info__title">OUR TEAM</div>
								<div className="team-mates content-info__team-items">
									<ul className="team-mates__list">
										<li>
											<div className="team-mates__image">
												<img src="@@webRoot/img/footer/team-1.png" alt="image" />
											</div>
										</li>
										<li>
											<div className="team-mates__name">
												<a href="#">Ryan Gosling</a>
											</div>
											<div className="team-mates__text">
												<p>Райан - основатель студии и ведущий звукорежиссер.engineer.</p>
											</div>
										</li>
									</ul>
									<ul className="team-mates__list">
										<li>
											<div className="team-mates__image">
												<img src="@@webRoot/img/footer/team-2.png" alt="image" />
											</div>
										</li>
										<li>
											<div className="team-mates__name">
												<a href="#">Ryan Gosling</a>
											</div>
											<div className="team-mates__text">
												<p>Райан - ассистент звукорежиссера в студии звукозаписи.</p>
											</div>
										</li>
									</ul>
									<ul className="team-mates__list">
										<li>
											<div className="team-mates__image">
												<img src="@@webRoot/img/footer/team-3.png" alt="image" />
											</div>
										</li>
										<li>
											<div className="team-mates__name">
												<a href="#">Ryan Gosling</a>
											</div>
											<div className="team-mates__text">
												<p>Райан - ассистент звукорежиссера в студии звукозаписи.</p>
											</div>
										</li>
									</ul>
									<ul className="team-mates__list">
										<li>
											<div className="team-mates__image">
												<img src="@@webRoot/img/footer/team-4.png" alt="image" />
											</div>
										</li>
										<li>
											<div className="team-mates__name">
												<a href="#">Ryan Gosling</a>
											</div>
											<div className="team-mates__text">
												<p>Adam is the studio’s founder and leading sound engineer.</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="content-info__nav el-4">
						<i className='icon-achievements'></i>
						<i className='icon-services'></i>
						<i className='icon-reviews'></i>
						<i className='icon-contacts'></i>
					</div>
				</div>
				<div className="contacts footer__contacts el-5">
					<div className="contacts__container">
						<div className="contacts__items">
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
			</Element>
			<div className="footer__community _container">
				<div className="community">
					<div className="community__items">
						<div className="community__title">
							<span>Media-Studio GROUP ©  2024.</span>
							<a className='community__link' href="">Privacy Policy.
								<i className='icon-angles-right-solid'></i>
							</a>
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
									<i className="icon-youtube-logo"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
} 