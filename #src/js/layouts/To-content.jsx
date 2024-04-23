// content.jsx
import React, { useState } from 'react';
import TextBlock from './text-block';

const Content = () => {
	const [blocks, setBlocks] = useState([]);

	const addBlock = () => {
		const newIndex = blocks.length + 1;
		const newBlock = <TextBlock key={newIndex} index={newIndex} />;
		setBlocks([...blocks, newBlock]);
	};

	const renderBlocks = () => {
		return blocks.map((block, index) => <div key={index}>{block}</div>);
	};

	const renderButton = () => {
		if (blocks.length < 3) { // Поменяйте на blocks.length < максимальное количество блоков
			return <button onClick={addBlock}>Добавить блок</button>;
		}
		return null;
	};

	return (
		<div>
			{renderBlocks()}
			{renderButton()}
		</div>
	);
};

export default Content;
