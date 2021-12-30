const gnbNoVar = '2';
const gnbText = '분류별 연계맵핑';
const mapping = [
	{
		path: '/front/mapping/social',
		name: 'knscc',
		component: () => import('@/views/front/mapping/Social.vue'),
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: '과학기술표준분류',
			text: '국가과학기술표준 분류 체계 선택하면 KSIC의 출원 분석 서비스를 이용 할 수 있습니다.',
		},
	},
	{
		path: '/front/mapping/kmpas',
		name: '전후방산업관계도',
		component: () => import('@/views/front/mapping/Kmaps.vue'),
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: '전후방산업관계도',
			text: 'KSIC 분류 체계의 세세분류를 선택하면 전후방산업관계도를 확인 할 수 있습니다.',
		},
	},
	{
		path: '/front/mapping/istans',
		name: 'istans',
		component: () => import('@/views/front/mapping/Istan.vue'),
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: 'ISTANS',
			text: 'ISTANS 분류 체계 선택하면 KSIC의 출원 분석 서비스를 이용 할 수 있습니다.',
		},
	},
	{
		path: '/front/mapping/cpc',
		name: 'cpc',
		component: () => import('@/views/front/mapping/Cpc.vue'),
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: 'CPC',
			text: 'CPC코드를 검색하시면 KSIC의 출원 분석 서비스를 이용 할 수 있습니다.',
		},
	},
	{
		path: '/front/mapping/ipc',
		name: 'ipc',
		component: () => import('@/views/front/mapping/Ipc.vue'),
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: 'IPC',
			text: 'IPC코드를 검색하시면 KSIC의 출원 분석 서비스를 이용 할 수 있습니다.',
		},
	},
	{
		path: '/front/mapping/dart',
		name: 'dart',
		component: () => import('@/views/front/mapping/Dart.vue'),
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: 'DART',
			text: '회사명 또는 회사코드를 검색하시면 KSIC의 출원 분석 서비스를 이용 할 수 있습니다.',
		},
	},
	{
		path: '/front/mapping/hsk',
		name: 'hsk',
		component: () => import('@/views/front/mapping/Hsk.vue'),
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: 'HSK',
			text: 'HSK코드를 검색하시면 KSIC의 출원 분석 서비스를 이용 할 수 있습니다.',
		},
	},
	{
		path: '/front/mapping/itstat',
		name: 'itstat',
		component: () => import('@/views/front/mapping/Itstat.vue'),
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: 'ITSTAT',
			text: 'ISTAN 분류 체계 선택하면 KSIC의 출원 분석 서비스를 이용 할 수 있습니다.',
		},
	},
	{
		path: '/front/mapping/ksic',
		name: 'ksic',
		component: () => import('@/views/front/mapping/Ksic.vue'),
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: 'KSIC → IPC/CPC',
			text: 'KSIC 코드별 IPC/CPC 출원건수 및 비율 엑셀을 다운로드 가능합니다.',
		},
	},
];
export { mapping };
