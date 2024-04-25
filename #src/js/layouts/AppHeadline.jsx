import React, { useState, useEffect, useRef } from "react";
import Headline from "./Headline.jsx";
export default function AppHeadline() {

	const ref = useRef(null);
	const handleClick = () => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<div style={{ textAlign: 'center', zIndex: '99' }}>
			<h1>Scroll to Component</h1>
			<button onClick={handleClick} style={{ marginBottom: '20px', padding: '2rem', fontSize: '20px', backgroundColor: '#000', borderRadius: '15px' }}>
				Click here to scroll to headline Component!
			</button>
			<div style={{ height: '500px', backgroundColor: '#92A8D1' }}>
			</div>
			<Headline ref={ref} text="Hello World" />
			<div style={{ height: '500px', backgroundColor: '#f7CAC9' }}></div>
		</div>
	);
}