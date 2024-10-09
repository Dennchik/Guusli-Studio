gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

/* Fade in the logo */
gsap.fromTo('.logo', {
	opacity: 0,
	yPercent: 50
}, {
	yPercent: -50,
	opacity: 1,
	duration: 1,
	ease: 'power3.out'
});

/* Smooth content */
let smoother = ScrollSmoother.create({
	wrapper: "#wrapper",
	content: "#content",
	smooth: 1,
	effects: true
});

smoother.effects(".image", {
	speed: (i) => {
		// Desktop three columns layout
		if (window.matchMedia('(min-width:730px)').matches) {
			// Center column is faster
			return i % 3 === 1 ? 1.15 : 1;
		} else {
			// Mobile, right column is fast
			return i % 2 === 0 ? 1 : 1.15;
		}
	}
});


/* Logo to header animation */
let logoTl = gsap.timeline({
	scrollTrigger: {
		trigger: document.body,
		start: 0,
		end: () => window.innerHeight * 1.2,
		scrub: 0.6
	}
});
logoTl.fromTo('.logo', {
	top: '50vh',
	yPercent: -50,
	scale: 4,
	textShadow: '0 0 2px rgba(0,0,0,0.3)'
}, {
	top: 0,
	yPercent: 0,
	scale: 1,
	textShadow: '0 0 2px rgba(0,0,0,0)',
	duration: 0.8
});
// Toggle the burger visibility
logoTl.fromTo('.menu', {
	opacity: 0
}, {
	opacity: 1,
	duration: 0.1
}, 0.9);
// Toggle the header box-shadow
logoTl.fromTo('header', {
	boxShadow: '0px 0px 10px rgba(0,0,0,0)',
}, {
	boxShadow: '0px 0px 10px rgba(0,0,0,.15)',
	duration: 0.2
}, 0.8);


/* That's all Folks animation */
let endTl = gsap.timeline({
	repeat: -1,
	delay: 0.5,
	scrollTrigger: {
		trigger: '.end',
		start: 'bottom 100%-=50px'
	}
});
gsap.set('.end', {
	opacity: 0
});
gsap.to('.end', {
	opacity: 1,
	duration: 1,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.end',
		start: 'bottom 100%-=50px',
		once: true
	}
});
let mySplitText = new SplitText(".end", { type: "words,chars" });
let chars = mySplitText.chars;
let endGradient = chroma.scale(['#F9D371', '#F47340', '#EF2F88', '#8843F2']);
endTl.to(chars, {
	duration: 0.5,
	scaleY: 0.6,
	ease: "power3.out",
	stagger: 0.04,
	transformOrigin: 'center bottom'
});
endTl.to(chars, {
	yPercent: -20,
	ease: "elastic",
	stagger: 0.03,
	duration: 0.8
}, 0.5);
endTl.to(chars, {
	scaleY: 1,
	ease: "elastic.out(2.5, 0.2)",
	stagger: 0.03,
	duration: 1.5
}, 0.5);
endTl.to(chars, {
	color: (i, el, arr) => {
		return endGradient(i / arr.length).hex();
	},
	ease: "power2.out",
	stagger: 0.03,
	duration: 0.3
}, 0.5);
endTl.to(chars, {
	yPercent: 0,
	ease: "back",
	stagger: 0.03,
	duration: 0.8
}, 0.7);
endTl.to(chars, {
	color: 'hsl(0,0,0)',
	duration: 1.4,
	stagger: 0.05
});

let menu = document.querySelector('.menu');

menu.addEventListener('click', (e) => {
	ScrollTrigger.refresh();
});