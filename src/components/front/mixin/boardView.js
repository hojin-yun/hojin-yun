import { viewDoard } from '@/api/boardList'; //db api
import { dayReset } from '@/utils/index';
let boardViewMixin = {
	data() {
		return {
			viewData: [],
			dayData: '',
			loading: false, //로딩
		};
	},
	created() {
		this.viewload();
	},
	watch: {
		$route(to, from) {
			if (to != from) this.viewload();
		},
	},
	methods: {
		async viewload() {
			this.loading = true;
			const { data } = await viewDoard(
				this.dbName, //db api 이름
				this.$route.params.id,
			);
			this.viewData = data.result.data;
			if (this.pageName == 'view') {
				if (this.dbName == 'notice') {
					this.dayData = data.result.data.pstgYmd;
				} else {
					this.dayData = data.result.data.regDt;
				}
			}
			if (this.pageName == 'edit' && this.dbName == 'notice') {
				this.atchFileNms = data.result.data.atchFileNm;
				const dataY = dayReset(data.result.data.pstgYmd);
				this.dayData = new Date(
					dataY.substr(0, 4),
					dataY.substr(5, 2) - 1,
					dataY.substr(8),
				);
			}
			setTimeout(() => {
				this.loading = false;
			}, 100);
		},
	},
};
export default boardViewMixin;
