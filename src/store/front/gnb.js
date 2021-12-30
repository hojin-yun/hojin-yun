export default {
	namespaced: true, // 네임스페이스
	state: () => ({
		gnbMenu: [
			{
				name: '분석 서비스',
				link: '/front/analysis/patent',
				sub: [
					{ name: '특허청별 출원동향', link: '/front/analysis/patent' },
					{ name: '산업별 출원동향', link: '/front/analysis/industry' },
					{ name: '국적별 출원동향', link: '/front/analysis/nationality' },
					{ name: '산업성장주기', link: '/front/analysis/growth' },
					{ name: '국적간 공동출원', link: '/front/analysis/association' },
					{ name: '해외출원비율', link: '/front/analysis/overseas' },
					{ name: '주요시장 확보율', link: '/front/analysis/major' },
					{ name: '해외시장 확보율', link: '/front/analysis/foreign' },
					{ name: '연평균 성장률', link: '/front/analysis/average' },
					{ name: '기술 부상도', link: '/front/analysis/injury' },
					{ name: '특허점유율', link: '/front/analysis/share' },
					{ name: '특허 장벽도', link: '/front/analysis/barrier' },
					{ name: 'TOP10 출원인 분석', link: '/front/analysis/top' },
					{ name: '위기신호 분석', link: '/front/analysis/crisis' },
				],
			},
			{
				name: '분류별 연계맵핑',
				link: '/front/mapping/social',
				sub: [
					{ name: '과학기술표준분류', link: '/front/mapping/social' },
					{ name: '전후방산업관계도', link: '/front/mapping/kmpas' },
					{ name: 'ISTANS', link: '/front/mapping/istans' },
					{ name: 'CPC', link: '/front/mapping/cpc' },
					{ name: 'IPC', link: '/front/mapping/ipc' },
					{ name: 'DART', link: '/front/mapping/dart' },
					{ name: 'ITSTAT', link: '/front/mapping/itstat' },
					{ name: 'HSK', link: '/front/mapping/hsk' },
					{ name: 'KSIC → IPC/CPC', link: '/front/mapping/ksic' },
				],
			},
			{
				name: '분석보고서',
				link: '/front/report/위기신호탐지',
				sub: [
					{ name: '위기신호탐지', link: '/front/report/위기신호탐지' },
					{ name: '유망기술발굴', link: '/front/report/유망기술발굴' },
					{ name: '외부보고서', link: '/front/report/외부보고서' },
				],
			},
			{
				name: '플랫폼 소개',
				link: '/front/intro/vision',
				sub: [
					{ name: '비전 및 목표', link: '/front/intro/vision' },
					{ name: '이용방법', link: '/front/intro/guide' },
					{ name: '공지사항', link: '/front/intro/notice' },
					{ name: '문의안내', link: '/front/intro/inquiry' },
					{ name: 'FAQ', link: '/front/intro/faq' },
				],
			},
		],
	}),
};
