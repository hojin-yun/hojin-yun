import { viewDoard } from '@/api/boardList'; //db api
import { dayReset } from '@/utils/index';
let boardViewMixin = {
	data() {
		return {
			viewData: [],
			dayData: '',
			startData: '',
			endData: '',
			loading: false, //로딩
			fileNm: [],
			vatchFileNm: [],
			vstrgAtchFileNm: [],
		};
	},
	created() {
		this.viewload();
	},
	methods: {
		async viewload() {
			this.loading = true;
			const { data } = await viewDoard(
				this.dbName, //db api 이름
				this.$route.params.id,
			);
			this.viewData = data.result.data;
			this.fileNm = data.result.data.fileNm;
			this.vatchFileNm = data.result.data.atchFileNm;
			this.vstrgAtchFileNm = data.result.data.strgAtchFileNm;
			if (this.pageName == 'view') {
				if (this.dbName == 'notice') {
					this.dayData = data.result.data.pstgYmd;
				} else if (this.dbName == 'popup') {
					this.startData = data.result.data.pstgBgngYmd;
					this.endData = data.result.data.pstgEndYmd;
					this.dayData = data.result.data.regDt;
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
			} else if (this.pageName == 'edit' && this.dbName == 'popup') {
				const dataStart = dayReset(data.result.data.pstgBgngYmd);
				this.startData = new Date(
					dataStart.substr(0, 4),
					dataStart.substr(5, 2) - 1,
					dataStart.substr(8),
				);
				const dataEan = dayReset(data.result.data.pstgEndYmd);
				this.endData = new Date(
					dataEan.substr(0, 4),
					dataEan.substr(5, 2) - 1,
					dataEan.substr(8),
				);
			} else if (this.pageName == 'edit' && this.dbName == 'report') {
				this.atchFileNms = data.result.data.atchFileNm;
			}
			setTimeout(() => {
				this.loading = false;
			}, 100);
		},
	},
};
export default boardViewMixin;
