const gnbNoVar = '4';
const gnbText = '플랫폼 소개';
const intro = [
	{
		path: '/front/intro/vision',
		name: 'vision',
		component: () => import('@/views/front/intro/Vision.vue'),
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: '비전 및 목표',
			text: 'KISTA 특허빅데이터포털의 비전 및 목표을 알려드립니다.',
		},
	},
	{
		path: '/front/intro/guide',
		name: 'guide',
		component: () => import('@/views/front/intro/Guide.vue'),
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: '이용방법',
			text: 'KISTA 특허빅데이터포털의 이용방법을 알려드립니다.',
		},
	},
	{
		path: '/front/intro/GuideMapping',
		name: 'GuideMapping',
		component: () => import('@/views/front/intro/GuideMapping.vue'),
		props: true,
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: '이용방법',
			text: 'KISTA 특허빅데이터포털의 이용방법을 알려드립니다.',
		},
	},
	{
		path: '/front/intro/GuideReport',
		name: 'GuideReport',
		component: () => import('@/views/front/intro/GuideReport.vue'),
		props: true,
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: '이용방법',
			text: 'KISTA 특허빅데이터포털의 이용방법을 알려드립니다.',
		},
	},
	{
		path: '/front/intro/GuideIntro',
		name: 'GuideIntro',
		component: () => import('@/views/front/intro/GuideIntro.vue'),
		props: true,
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: '이용방법',
			text: 'KISTA 특허빅데이터포털의 이용방법을 알려드립니다.',
		},
	},
	{
		path: '/front/intro/GuideSearch',
		name: 'GuideSearch',
		component: () => import('@/views/front/intro/GuideSearch.vue'),
		props: true,
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: '이용방법',
			text: 'KISTA 특허빅데이터포털의 이용방법을 알려드립니다.',
		},
	},
	{
		path: '/front/intro/notice',
		name: 'notice',
		component: () => import('@/views/front/intro/Notice.vue'),
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: '공지사항',
			text: 'KISTA 특허빅데이터포털의 새소식을 알려드립니다.',
		},
	},
	{
		path: '/front/intro/noticeView/:id',
		name: 'noticeViewfront',
		component: () => import('@/views/front/intro/NoticeView.vue'),
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: '공지사항',
			text: 'KISTA 특허빅데이터포털의 새소식을 알려드립니다.',
		},
	},
	{
		path: '/front/intro/inquiry',
		name: 'inquiry',
		component: () => import('@/views/front/intro/Inquiry.vue'),
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: '문의안내',
			text: 'KISTA 특허빅데이터포털의 문의안내을 알려드립니다.',
		},
	},
	{
		path: '/front/intro/faq',
		name: 'faq',
		component: () => import('@/views/front/intro/Faq.vue'),
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: 'FAQ',
			text: '특허 빅테이터 포털 FAQ 페이지입니다',
		},
	},
];
export { intro };
