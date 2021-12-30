export default {
	namespaced: true, // 네임스페이스
	state: () => ({
		bannerSwiper: [
			{
				href: 'https://www.kista.re.kr/',
				src: require('@/assets/img/banner/banner01.png'),
				target: '_blank',
				alt: '한국특허전략개발원',
			},
			{
				href: 'https://www.kiip.re.kr/index.do',
				src: require('@/assets/img/banner/banner02.png'),
				target: '_blank',
				alt: '한국지식재산연구원',
			},
			{
				href: 'https://www.kipo.go.kr/kpo/MainApp',
				src: require('@/assets/img/banner/banner03.png'),
				target: '_blank',
				alt: '특허청',
			},
			{
				href: 'https://www.kipa.org/kipa/index.jsp',
				src: require('@/assets/img/banner/banner04.png'),
				target: '_blank',
				alt: '한국발명진흥회',
			},
			{
				href: 'http://www.kipi.or.kr/',
				src: require('@/assets/img/banner/banner05.png'),
				target: '_blank',
				alt: '한국특허정보원',
			},
			{
				href: 'http://www.nrf.re.kr/',
				src: require('@/assets/img/banner/banner06.png'),
				target: '_blank',
				alt: '한국연구재단',
			},
			{
				href: 'http://www.nis.go.kr',
				src: require('@/assets/img/banner/banner07.png'),
				target: '_blank',
				alt: 'NIS',
			},
			{
				href: 'http://www.koipa.re.kr/index.php',
				src: require('@/assets/img/banner/banner08.png'),
				target: '_blank',
				alt: '한국지식재산보호원',
			},
			{
				href: 'http://www.patent.go.kr/',
				src: require('@/assets/img/banner/banner09.png'),
				target: '_blank',
				alt: '특허로',
			},
			{
				href: 'http://biz.kista.re.kr/patentmap/',
				src: require('@/assets/img/banner/banner10.png'),
				target: '_blank',
				alt: '특허동향 보고서',
			},
			{
				href: 'http://www.e-note.or.kr/',
				src: require('@/assets/img/banner/banner11.png'),
				target: '_blank',
				alt: '연구노트포털',
			},
			{
				href: 'http://www.rndip.or.kr/',
				src: require('@/assets/img/banner/banner12.png'),
				target: '_blank',
				alt: '정부R&D특허성과관리시스템',
			},
			{
				href: 'http://www.pipc.or.kr/',
				src: require('@/assets/img/banner/banner13.png'),
				target: '_blank',
				alt: '특허정보진흥센터',
			},
			{
				href: 'http://www.keti.re.kr/',
				src: require('@/assets/img/banner/banner14.png'),
				target: '_blank',
				alt: 'KETI',
			},
			{
				href: 'http://www.tipa.or.kr/',
				src: require('@/assets/img/banner/banner15.png'),
				target: '_blank',
				alt: '중소기업기술정보진흥원',
			},
			{
				href: 'https://www.khidi.or.kr/"',
				src: require('@/assets/img/banner/banner16.png'),
				target: '_blank',
				alt: '한국보건산업진흥원',
			},
			{
				href: 'https://www.fact.or.kr/',
				src: require('@/assets/img/banner/banner17.png'),
				target: '_blank',
				alt: '농헙기술실용화재단',
			},
			{
				href: 'https://www.kird.re.kr/',
				src: require('@/assets/img/banner/banner18.png'),
				target: '_blank',
				alt: '국가과학기술인력개발원',
			},
			{
				href: 'https://www.ketep.re.kr/',
				src: require('@/assets/img/banner/banner19.png'),
				target: '_blank',
				alt: 'KETEP',
			},
			{
				href: 'https://www.kist.re.kr/',
				src: require('@/assets/img/banner/banner20.png'),
				target: '_blank',
				alt: '한국과학기술연구원',
			},
			{
				href: 'https://www.inventor.or.kr/',
				src: require('@/assets/img/banner/banner21.png'),
				target: '_blank',
				alt: '한국여성발명협회',
			},
		],
		bannerSwiperOption: {
			slidesPerView: 5,
			spaceBetween: 0,
			loop: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.bannerAllQuick .swiper-button-next',
				prevEl: '.bannerAllQuick .swiper-button-prev',
			},
			breakpoints: {
				1024: {
					slidesPerView: 5,
					spaceBetween: 0,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 0,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 0,
				},
				425: {
					slidesPerView: 3,
					spaceBetween: 0,
				},
				375: {
					slidesPerView: 2,
					spaceBetween: 0,
				},
			},
		},
	}),
};
