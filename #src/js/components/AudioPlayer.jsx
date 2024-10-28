import React, { useEffect } from 'react';
import audio from '../assets/AudioPlayer.js';
const AudioPlayer = ({ progress }) => {
	useEffect(() => {
		audio();
	});
	return (
		<div>
			{/* <figure> */}
			{/* <figcaption></figcaption> */}
			<div className="audio-player">
				<div className="audio-player__controls">
					<div className="audio-player__play-container">
						<div className="audio-player__toggle-play play">
						</div>
					</div>
					<div className="audio-player__time">
						<div className="audio-player__current">0:00</div>
						<div className="audio-player__divider">/</div>
						<div className="audio-player__length"></div>
					</div>
					<div className="audio-player__name">AdeleTaylor-Hello</div>

					<div className="audio-player__volume-container">
						<div className="audio-player__volume-button">
							<div className="audio-player__volume icono-volumeMedium"></div>
						</div>

						<div className="audio-player__volume-slider">
							<div className="audio-player__volume-percentage"></div>
						</div>
					</div>
				</div>
				<div className="audio-player__timeline">
					<div className="audio-player__progress" style={{ width: `${progress}%` }}></div>
				</div>
			</div>
			{/* </figure> */}
		</div>
	);
};

export default AudioPlayer;
