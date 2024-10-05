import React, { useEffect, HTMLAttributes  } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';

/**
 * Компонент Header.
 * @param {{ baseUrl: string }} props - Объект пропсов.
 */
function Achievements({baseUrl}) {
	useEffect(() => {

	});
	return (
		<div className="achieve-items">
			<div className="achieve-items__body">
				<div className="achieve-items__bg-image _ibg">
					<picture>
						{isWebpSupported()
							? <img src={"../img/about/achieve/pattern-11.webp"}
										 type="image/webp" alt="image"/>
							: <img src={"../img/about/achieve/pattern-11.png"} alt="image"/>}
					</picture>
				</div>
				<div className="achieve-items__wrapper">
					<div className="achieve-items__item">
						<div className="achieve-items__image _ibg">
							<picture>
								{isWebpSupported()
									?
									<img src={"../img/about/slide/sert1.webp"} type="image/webp"/>
									: <img src={"../img/about/slide/sert1.png"} alt="image"/>}
							</picture>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}

export default Achievements