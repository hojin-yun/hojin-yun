import { mapState, mapActions } from 'vuex';
let boardListMixin = {
	data() {
		return {
			allSelected: false,
			boardIds: [],
		};
	},
	computed: {
		...mapState('boardList', [
			'listData',
			'listPagination',
			'totalCnt',
			'pageNum',
			'sortCount',
			'loading',
			'sortCountOptions',
			'searchTrue',
			'searchText',
			'deleteId',
			'isCategory',
			'seachStartDate',
			'seachEndDate',
			'startDay',
			'endDay',
		]),
	},
	methods: {
		...mapActions('boardList', ['getList', 'deleteData', 'deleteAllCheck']),
	},
};
export default boardListMixin;
