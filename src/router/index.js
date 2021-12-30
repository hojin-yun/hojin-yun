import Vue from 'vue';
import VueRouter from 'vue-router';
import { frontRouter } from './front';
import store from '@/store/index';

Vue.use(VueRouter);

const routes = [
	{
		path: '/pbipAdmin',
		name: 'admin',
		component: () => import('@/views/admin/Layout.vue'),
		children: [
			{
				alias: '/pbipAdmin',
				path: '/pbipAdmin/login',
				name: 'adminLogin',
				component: () => import('@/views/admin/adminLogin.vue'),
			},
			{
				path: '/pbipAdmin/pwagain',
				name: 'pwagain',
				component: () => import('@/views/admin/pwAgain.vue'),
				meta: {
					auth: true,
				},
			},
			{
				path: '/pbipAdmin/main',
				name: 'adminMain',
				component: () => import('@/views/admin/main/Main.vue'),
				meta: {
					auth: true,
				},
			},
			{
				path: '/pbipAdmin/notice',
				name: 'noticeList',
				component: () => import('@/views/admin/notice/List.vue'),
				meta: {
					auth: true,
					gnb: '1',
					title: '공지사항리스트',
				},
			},
			{
				path: '/pbipAdmin/noticeView/:id',
				name: 'noticeView',
				component: () => import('@/views/admin/notice/View.vue'),
				meta: {
					auth: true,
					gnb: '1',
					title: '공지사항보기',
				},
			},
			{
				path: '/pbipAdmin/noticeWrite',
				name: 'noticeWrite',
				component: () => import('@/views/admin/notice/Write.vue'),
				meta: {
					auth: true,
					gnb: '1',
					title: '공지사항쓰기',
				},
			},
			{
				path: '/pbipAdmin/noticeEdit/:id',
				name: 'noticeEdit',
				component: () => import('@/views/admin/notice/Edit.vue'),
				meta: {
					auth: true,
					gnb: '1',
					title: '공지사항수정',
				},
			},

			{
				path: '/pbipAdmin/report',
				name: 'reportList',
				component: () => import('@/views/admin/report/List.vue'),
				meta: {
					auth: true,
					gnb: '2',
					title: '분석보고서리스트',
				},
			},
			{
				path: '/pbipAdmin/reportView/:id',
				name: 'reportView',
				component: () => import('@/views/admin/report/View.vue'),
				meta: {
					auth: true,
					gnb: '2',
					title: '분석보고서보기',
				},
			},
			{
				path: '/pbipAdmin/reportWrite',
				name: 'reportWrite',
				component: () => import('@/views/admin/report/Write.vue'),
				meta: {
					auth: true,
					gnb: '2',
					title: '분석보고서쓰기',
				},
			},
			{
				path: '/pbipAdmin/reportEdit/:id',
				name: 'reportEdit',
				component: () => import('@/views/admin/report/Edit.vue'),
				meta: {
					auth: true,
					gnb: '2',
					title: '분석보고서수정',
				},
			},
			{
				path: '/pbipAdmin/faq',
				name: 'faqList',
				component: () => import('@/views/admin/faq/List.vue'),
				meta: {
					auth: true,
					gnb: '3',
					title: 'faq리스트',
				},
			},
			{
				path: '/pbipAdmin/faqView/:id',
				name: 'faqView',
				component: () => import('@/views/admin/faq/View.vue'),
				meta: {
					auth: true,
					gnb: '3',
					title: 'faq보기',
				},
			},
			{
				path: '/pbipAdmin/faqWrite',
				name: 'faqWrite',
				component: () => import('@/views/admin/faq/Write.vue'),
				meta: {
					auth: true,
					gnb: '3',
					title: 'faq쓰기',
				},
			},
			{
				path: '/pbipAdmin/faqEdit/:id',
				name: 'faqEdit',
				component: () => import('@/views/admin/faq/Edit.vue'),
				meta: {
					auth: true,
					gnb: '3',
					title: 'faq수정',
				},
			},
			{
				path: '/pbipAdmin/visitor',
				name: 'statisticsList',
				component: () => import('@/views/admin/visitor/List.vue'),
				meta: {
					auth: true,
					gnb: '4',
					title: '방문자 통계리스트',
				},
			},
			{
				path: '/pbipAdmin/banner',
				name: 'bannerList',
				component: () => import('@/views/admin/banner/List.vue'),
				meta: {
					auth: true,
					gnb: '5',
					title: '메인배너리스트',
				},
			},
			{
				path: '/pbipAdmin/bannerView/:id',
				name: 'bannerView',
				component: () => import('@/views/admin/banner/View.vue'),
				meta: {
					auth: true,
					gnb: '5',
					title: '메인배너보기',
				},
			},
			{
				path: '/pbipAdmin/bannerWrite',
				name: 'bannerWrite',
				component: () => import('@/views/admin/banner/Write.vue'),
				meta: {
					auth: true,
					gnb: '5',
					title: '메인배너쓰기',
				},
			},
			{
				path: '/pbipAdmin/bannerEdit/:id',
				name: 'bannerEdit',
				component: () => import('@/views/admin/banner/Edit.vue'),
				meta: {
					auth: true,
					gnb: '5',
					title: '메인배너수정',
				},
			},
			{
				path: '/pbipAdmin/popup',
				name: 'popupList',
				component: () => import('@/views/admin/popup/List.vue'),
				meta: {
					auth: true,
					gnb: '6',
					title: '팝업관리리스트',
				},
			},
			{
				path: '/pbipAdmin/popupView/:id',
				name: 'popupView',
				component: () => import('@/views/admin/popup/View.vue'),
				meta: {
					auth: true,
					gnb: '6',
					title: '팝업관리보기',
				},
			},
			{
				path: '/pbipAdmin/popupWrite',
				name: 'popupWrite',
				component: () => import('@/views/admin/popup/Write.vue'),
				meta: {
					auth: true,
					gnb: '6',
					title: '팝업관리쓰기',
				},
			},
			{
				path: '/pbipAdmin/popupEdit/:id',
				name: 'popupEdit',
				component: () => import('@/views/admin/popup/Edit.vue'),
				meta: {
					auth: true,
					gnb: '6',
					title: '팝업관리수정',
				},
			},
			{
				path: '/pbipAdmin/user',
				name: 'userList',
				component: () => import('@/views/admin/account/List.vue'),
				meta: {
					auth: true,
					gnb: '7',
					title: '계정관리리스트',
				},
			},
			{
				path: '/pbipAdmin/userView/:id',
				name: 'userView',
				component: () => import('@/views/admin/account/View.vue'),
				meta: {
					auth: true,
					gnb: '7',
					title: '계정관리보기',
				},
			},
			{
				path: '/pbipAdmin/userWrite',
				name: 'userWrite',
				component: () => import('@/views/admin/account/Write.vue'),
				meta: {
					auth: true,
					gnb: '7',
					title: '계정관리쓰기',
				},
			},
			{
				path: '/pbipAdmin/userEdit/:id',
				name: 'userEdit',
				component: () => import('@/views/admin/account/Edit.vue'),
				meta: {
					auth: true,
					gnb: '7',
					title: '계정관리수장',
				},
			},
			{
				path: '/pbipAdmin/myinfo',
				name: 'myInfo',
				component: () => import('@/views/admin/myInfo/Edit.vue'),
				meta: {
					auth: true,
					gnb: '8',
					title: '개인정보관리',
				},
			},
			{
				path: '/pbipAdmin/excel',
				name: 'excelList',
				component: () => import('@/views/admin/ksic/List.vue'),
				meta: {
					auth: true,
					gnb: '9',
					title: 'IPC/CPC 엑셀 관리',
				},
			},
			{
				path: '/pbipAdmin/excelView/:id',
				name: 'excelView',
				component: () => import('@/views/admin/ksic/View.vue'),
				meta: {
					auth: true,
					gnb: '9',
					title: 'IPC/CPC 엑셀 관리',
				},
			},
			{
				path: '/pbipAdmin/excelWrite',
				name: 'excelcWrite',
				component: () => import('@/views/admin/ksic/Write.vue'),
				meta: {
					auth: true,
					gnb: '9',
					title: 'IPC/CPC 엑셀 관리',
				},
			},
			{
				path: '/pbipAdmin/excelEdit/:id',
				name: 'excelEdit',
				component: () => import('@/views/admin/ksic/Edit.vue'),
				meta: {
					auth: true,
					gnb: '9',
					title: 'IPC/CPC 엑셀 관리',
				},
			},
		],
	},
	{
		path: '*',
		name: 'NotFound',
		component: () => import('@/views/NotFound.vue'),
	},
];
routes.push(frontRouter);
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior(to) {
		if (to.meta.gnbNo == 1) {
			return { x: 0, y: 0 };
		}
	},
});

router.beforeEach((to, from, next) => {
	if (to.meta.auth && !store.getters['login/isLogin']) {
		next('/pbipAdmin/login');
		return;
	}
	if (to.meta.gnb == '분석보고서') {
		to.meta.titles = to.params.id;
	}
	next();
});

export default router;
