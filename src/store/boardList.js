import { fetchDoard, deleteDoard } from '@/api/boardList'; //db api
const SORT_LS = 'sortNumber'; //보여지는 갯수 스토리지 변수
export default {
	namespaced: true, // 네임스페이스
	state: () => ({
		sortCount: localStorage.getItem(SORT_LS) || '10', // 보여지는 갯수
		sortCountOptions: [
			//보여지는 갯수 설정
			{ value: '1', text: '1개' },
			{ value: '5', text: '5개' },
			{ value: '10', text: '10개' },
			{ value: '20', text: '20개' },
			{ value: '30', text: '30개' },
			{ value: '50', text: '50개' },
		],
		loading: false, //로딩
		listData: [],
		listPagination: {},
		totalCnt: '',
		pageNum: 1,
		searchTrue: false, //검색했을 때,
		searchText: null,
		deleteId: [],
		isCategory: '',
		startDay: '',
		endDay: new Date(),
	}),
	mutations: {
		updateState(state, payload) {
			Object.keys(payload).forEach(key => {
				state[key] = payload[key]; //state 값을 변경
			});
		},
	},
	actions: {
		deleteAllCheck({ commit }, payload) {
			commit('updateState', {
				deleteId: payload,
			});
		},
		async deleteData({ state, commit, dispatch }, payload) {
			await deleteDoard(
				payload.pageName, //db api 이름
				state.deleteId,
			);
			dispatch('getList', payload);
			commit('updateState', {
				deleteId: [],
			});
		},
		async getList({ state, commit }, payload) {
			commit('updateState', {
				deleteId: [],
			});
			commit('updateState', {
				loading: true, // 로딩시 딤처리 활성화
			});
			const searchName = payload.searchText
				? `&searchKeyword=${payload.searchText}`
				: ''; //검색 단어가 있을 경우 활성화
			const searchYn = payload.searchCategory
				? `&searchCategory=${payload.searchCategory}`
				: `&searchCategory=${state.isCategory}`; //상태값이 있을 경우
			const seachStartDate = payload.seachStartDate
				? `&searchStartDate=${payload.seachStartDate}`
				: commit('updateState', {
						startDay: '',
				  });
			const seachEndDate = payload.seachEndDate
				? `&searchEndDate=${payload.seachEndDate}`
				: '';

			const { data } = await fetchDoard(
				payload.pageName, //db api 이름
				payload.pageNum, //페이지 넘버
				payload.sortNumber, //페이지 정렬 갯수
				searchName,
				searchYn,
				seachStartDate, //검색시작일자
				seachEndDate, //검색종료일자
			);
			localStorage.setItem(SORT_LS, payload.sortNumber);
			commit('updateState', {
				listData: data.result.data,
				listPagination: data.result.pagination,
				sortCount: payload.sortNumber,
				pageNum: data.result.pagination.page,
			});
			setTimeout(() => {
				commit('updateState', {
					loading: false, // 로딩시 딤처리 비활성화
				});
			}, 100);
		},
	},
};
