import React, { useEffect } from 'react';
const AboutCompany = ({ baseUrl }) => {
	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};
	return (
		<div className="about">
			<div className="about__column el-1">
				<div className="about__body">
					<div className="about__title">ABOUT OUR STUDIO</div>
					<div className="about__text">
						<p>Наша медиа-группа представляет собой превосходную студию звукозаписи и продюсерскую компанию. Мы специализируемся на создании текстов, продюсировании, звукозаписи и развитии талантов. Готовы к сотрудничеству с вами в любое время.</p>
						<p>Мы признаём и ценим значимость каждого проекта. Наше обязательство - обеспечить высочайшее качество звукозаписи, гибкость и терпение, необходимые для достижения вами высокого уровня в конкурентной среде современного рынка.</p>
						<p>В нашей студии вас ждёт дружелюбная и уютная атмосфера, создающая идеальное окружение для раскрытия вашего таланта и создания ваших лучших произведений.</p>
					</div>
				</div>
				<div className='about__footer'>
					<a href={getPath('pages/about.html')} className='about__button'>Read more</a>
				</div>
			</div>
			<div className="about__column el-2">
				<div className='about__body'>
					<div className="about__title">SERVICES</div>
					<div className="about__item-services">
						<i className='icon-microphone'></i>
						<span>Мы предлагаем услуги аналоговой и цифровой записи, а также микширования в широком спектре жанров.</span>
					</div>
					<div className="about__item-services">
						<i className='icon-fast-forward'></i>
						<span>Наша студия привлекает великолепным интерьером и оборудованными комфортабельными помещениями, идеально подходящими для создания лучших произведений.</span>
					</div>
					<div className="about__item-services">
						<i className='icon-music'></i>
						<span>В нашей студии мы внедряем передовое оборудование и программное обеспечение для микширования, обеспечивая высочайшее качество звучания ваших треков. Ваше творчество - наш приоритет.</span>
					</div>
				</div>
				<div className='about__footer'>
					<a className='about__button' href="#" type='button'>Read more</a>
				</div>
			</div>
			<div className="about__column el-3">
				<div className='about__body'>
					<div className="about__title">OUR TEAM</div>
					<div className="team-mates about__team-items">
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
									<p>Райан - основатель студии и ведущий звукорежиссер. Engineer.</p>
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
	);
};
export default AboutCompany;