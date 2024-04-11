import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

export default function Smoother() {
	gsap.registerPlugin(ScrollSmoother);
	ScrollSmoother.create({
		content: 'html', // Явно указываем применение скрипта к <html>
		smooth: true,
		effects: true,
		normalizeScroll: true
	});
};
