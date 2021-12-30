import { fetchDoard } from '@/api/boardList'; //db api
import { fetchSearch } from '@/api/mapping'; //db api
import { numberCommas } from '@/utils/index';
export default {
	namespaced: true, // 네임스페이스
	state: () => ({
		listData: [],
		listPagination: {},
		sortCount: '15', // 보여지는 갯수
		loading: false, //로딩
		pageNum: 1,
		searchTrue: false, //검색했을 때,
		searchText: null,
		SearchLoading: false,
		totalCount: '',
		category: '',
	}),
	mutations: {
		updateState(state, payload) {
			Object.keys(payload).forEach(key => {
				state[key] = payload[key]; //state 값을 변경
			});
		},
	},
	actions: {
		async getList({ state, commit }, payload) {
			commit('updateState', {
				loading: true, // 로딩시 딤처리 활성화
			});
			const searchName = payload.searchText
				? `&searchKeyword=${payload.searchText}`
				: ''; //검색 단어가 있을 경우 활성화
			const searchYn = payload.searchCategory
				? `&searchCategory=${payload.searchCategory}`
				: ''; //상태값이 있을 경우
			// const searchStartDate = payload.searchStartDate
			// 	? `&searchStartDate=${payload.searchStartDate}`
			// 	: ''; //년도값이 있을 경우
			let { data } = await fetchDoard(
				payload.pageName, //db api 이름
				payload.pageNum, //페이지 넘버
				state.sortCount, //페이지 정렬 갯수
				searchName,
				searchYn,
				// searchStartDate,
			);
			commit('updateState', {
				listData: data.result.data,
				listPagination: data.result.pagination,
				pageNum: payload.pageNum,
				loading: false,
			});
		},
		async ksicSearch({ state, commit }, payload) {
			commit('updateState', {
				SearchLoading: true, // 로딩시 딤처리 활성화
			});
			let { data } = await fetchSearch(
				payload.pageName, //db api 이름
				payload.searchText,
				payload.pageNum, //페이지 넘버
				state.sortCount, //페이지 정렬 갯수
			);
			commit('updateState', {
				listData: data.result.data,
				listPagination: data.result.pagination,
				totalCount: numberCommas(data.result.totalCount),
				pageNum: payload.pageNum,
				SearchLoading: false,
			});
		},
	},
};
