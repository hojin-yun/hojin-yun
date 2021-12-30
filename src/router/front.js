import { intro } from './front/intro';
import { report } from './front/report';
import { mapping } from './front/mapping';
import { analysis } from './front/analysis';
const frontRouter = {
	path: '/',
	component: () => import('@/views/front/Layout.vue'),
	children: [
		{
			path: '/',
			alias: ['/front', '/front/main'],
			name: 'frontMain',
			component: () => import('@/views/front/Main.vue'),
			meta: { titles: '메인' },
		},
		{
			path: '/front/search/',
			name: 'search',
			component: () => import('@/views/front/search/Search.vue'),
			meta: {
				gnbNo: 5,
				gnb: '통합검색',
				titles: '통합검색',
				text: '찾으시려는 단어를 입력해 주세요',
			},
		},
		{
			path: '/front/search/:id',
			alias: '/front/search/all/:id',
			name: 'searchprops',
			component: () => import('@/views/front/search/Search.vue'),
			meta: {
				gnbNo: 5,
				gnb: '통합검색',
				titles: '통합검색',
				text: '찾으시려는 단어를 입력해 주세요',
			},
		},
		{
			path: '/front/search/patent/:id',
			name: 'searchpatent',
			component: () => import('@/views/front/search/SearchPatent.vue'),
			meta: {
				gnbNo: 5,
				gnb: '통합검색',
				titles: '통합검색',
				text: '찾으시려는 단어를 입력해 주세요',
			},
		},
		{
			path: '/front/search/corp/:id',
			name: 'searchcorp',
			component: () => import('@/views/front/search/SearchCorp.vue'),
			meta: {
				gnbNo: 5,
				gnb: '통합검색',
				titles: '통합검색',
				text: '찾으시려는 단어를 입력해 주세요',
			},
		},
	],
};
frontRouter.children.push(...analysis);
frontRouter.children.push(...mapping);
frontRouter.children.push(...report);
frontRouter.children.push(...intro);
export { frontRouter };
