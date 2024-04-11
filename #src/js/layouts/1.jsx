const boxImagesRef = useRef([]);
const boxTitleRef = useRef(null); // Создаем useRef для элемента .services__title
const contentServicesRef = useRef(null); // Создаем useRef для элемента .main-content__services
const offerContainerTitleRef = useRef(null); // Создаем useRef для элемента .offer-container__title
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
	const contentServices = contentServicesRef.current; // Получаем доступ к элементу .main-content__services
	const boxTitle = boxTitleRef.current; // Получаем доступ к элементу .services__title
	const offerContainerTitle = offerContainerTitleRef.current; // Получаем доступ к элементу .offer-container__title

	if (!contentServices || !boxTitle || !offerContainerTitle) return;

	const handleScroll = () => {
		const contentServicesRect = contentServices.getBoundingClientRect();

		if (contentServicesRect.top < window.innerHeight - 100 && contentServicesRect.bottom > 0) {
			setIsVisible(true); // Показываем блок с заголовком
		} else {
			setIsVisible(false); // Скрываем блок с заголовком
		}
	};

	const handleMouseOver = (event) => {
		const target = event.currentTarget;
		animationSvgLine(target, false); // Запускаем анимацию при наведении
		animationSvgSound(target, false);
	};

	const handleMouseLeave = (event) => {
		const target = event.currentTarget;
		setTimeout(() => {
			animationSvgLine(target, true); // Запускаем анимацию в обратном направлении с задержкой при уходе мыши 
			animationSvgSound(target, true);
		}, 500);
	};

	const boxImages = document.querySelectorAll('.content-box__image');
	boxImagesRef.current = boxImages; // Сохраняем ссылку на элементы в useRef

	boxImages.forEach(boxImage => {
		boxImage.addEventListener('mouseover', handleMouseOver);
		boxImage.addEventListener('mouseleave', handleMouseLeave);
	});

	window.addEventListener('scroll', handleScroll);

	// Добавляем проверку на класс visible внутри useEffect
	if (isVisible) {
		boxTitleRef.current.classList.add('visible');
	} else {
		boxTitleRef.current.classList.remove('visible');
	}

	return () => {
		boxImages.forEach(boxImage => {
			boxImage.removeEventListener('mouseover', handleMouseOver);
			boxImage.removeEventListener('mouseleave', handleMouseLeave);
		});
		window.removeEventListener('scroll', handleScroll);
	};
}, []);
// Добавляем useEffect для блока offer-container__title
useEffect(() => {
	const offerContainerTitle = offerContainerTitleRef.current;

	if (!offerContainerTitle) return;

	const handleScroll = () => {
		const offerContainerRect = offerContainerTitle.getBoundingClientRect();

		if (offerContainerRect.top < window.innerHeight - 100 && offerContainerRect.bottom > 0) {
			offerContainerTitle.classList.add('visible');
		} else {
			offerContainerTitle.classList.remove('visible');
		}
	};

	window.addEventListener('scroll', handleScroll);

	return () => {
		window.removeEventListener('scroll', handleScroll);
	};
}, []);