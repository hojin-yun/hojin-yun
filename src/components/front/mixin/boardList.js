import { mapState, mapActions } from 'vuex';
let boardListMixin = {
	data() {
		return {
			allSelected: false,
			boardIds: [],
		};
	},
	computed: {
		...mapState('fboardList', [
			'listData',
			'listPagination',
			'pageNum',
			'sortCount',
			'loading',
			'searchTrue',
			'searchText',
			'category',
		]),
	},
	methods: {
		...mapActions('fboardList', ['getList']),
	},
};
export default boardListMixin;
