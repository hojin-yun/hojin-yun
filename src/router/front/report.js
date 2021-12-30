const gnbNoVar = '3';
const gnbText = '분석보고서';
const report = [
	{
		path: '/front/report/:id',
		name: 'report',
		component: () => import('@/views/front/report/Report.vue'),
		meta: {
			gnbNo: gnbNoVar,
			gnb: gnbText,
			titles: '',
		},
	},
];
export { report };
