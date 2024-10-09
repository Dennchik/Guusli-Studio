import React, { useEffect, useRef, useCallback, useState } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
export default function Achievements() {
	useEffect(() => {

	});
	return (
		<div className="achieve-items">
			<div className="achieve-items__body">
				<div className="achieve-items__bg-image _ibg">
					<picture>
						{isWebpSupported()
							? <img src="../img/about/achieve/pattern-11.webp" type="image/webp" />
							: <img src="../img/about/achieve/pattern-11.png" alt="image" />}
					</picture>
				</div>
				<div className="achieve-items__wrapper">
					<div className="achieve-items__item">
						<div className="achieve-items__image _ibg">
							<picture>
								{isWebpSupported()
									? <img src="../img/about/slide/sert1.webp" type="image/webp" />
									: <img src="../img/about/slide/sert1.png" alt="image" />}
							</picture>
						</div>
					</div>
					{/* <div className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src="../img/about/slide/sert2.webp" type="image/webp" />
								: <img src="../img/about/slide/sert2.png" alt="image" />}
						</picture>
					</div>
					<div className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src="../img/about/slide/sert3.webp" type="image/webp" />
								: <img src="../img/about/slide/sert3.png" alt="image" />}
						</picture>
					</div>
					<div className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src="../img/about/slide/sert4.webp" type="image/webp" />
								: <img src="../img/about/slide/sert4.png" alt="image" />}
						</picture>
					</div>
					<div className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src="../img/about/slide/sert5.webp" type="image/webp" />
								: <img src="../img/about/slide/sert5.png" alt="image" />}
						</picture>
					</div> */}
				</div>
				{/* <div class="achieve-items__new-container">new container</div> */}
			</div>
		</div>
	);
}