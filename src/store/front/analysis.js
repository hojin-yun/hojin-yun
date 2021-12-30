export default {
	namespaced: true, // 네임스페이스 // 메인 변동률
	state: () => ({
		section: [
			{
				name: '1구간',
				id: 'section1',
			},
			{
				name: '2구간',
				id: 'section2',
			},
			{
				name: '3구간',
				id: 'section3',
			},
			{
				name: '4구간',
				id: 'section4',
			},
			{
				name: '미공개',
				id: 'section5',
			},
		],
		yarsChange: 5,
		ksicCds: JSON.parse(localStorage.getItem('ksicCds')) || [],
		ksicArr: JSON.parse(localStorage.getItem('ksicArr')) || [],
		ksicSohw: JSON.parse(localStorage.getItem('ksicArr')) || [],
		picked: '',
		anac: [],
		sectionYearData: [],
		//yearSection: JSON.parse(localStorage.getItem('YEARDATA-S')) || '',
		//yearData: JSON.parse(localStorage.getItem('YEARDATA')) || '',
		yearSection: [],
		yearData: [],
		nation: [
			{ name: '대한민국', code: 'KR', is: true },
			{ name: '미국', code: 'US', is: true },
			{ name: '일본', code: 'JP', is: true },
			{ name: '중국', code: 'CH', is: true },
			{ name: '유럽', code: 'EP', is: true },
		],
		nationCode: ['KR', 'US', 'JP', 'CH', 'EP'],
	}),
	mutations: {
		updateState(state, payload) {
			Object.keys(payload).forEach(key => {
				state[key] = payload[key]; //state 값을 변경
			});
		},
	},
	actions: {},
};
