import { mapState } from 'vuex';
import { fetchSearch, fetchSearchView } from '@/api/search'; //db api
let boardListMixin = {
	data() {
		return {
			listCount: 10,
			pageNum: 1,
			searchLoad: false,
			Corporation: [],
			Patent: [],
			PatentView: '',
			CorpView: '',
		};
	},
	computed: {
		...mapState('search', ['wnSearch']),
	},
	created() {
		this.$store.commit('search/updateState', {
			wnSearch: this.$route.params.id,
		});
		this.pageNumCher();
		this.getSearch();
	},
	watch: {
		$route(to, from) {
			if (to.params.id != from.params.id) {
				this.pageNum = 1;
				this.getSearch();
			}
			if (to.query.pageNum != from.query.pageNum) {
				this.pageNumCher();
				this.getSearch();
			}
		},
	},
	methods: {
		async patentPop(event) {
			let name;
			if (event[1] == 'patent') {
				name = 'APPLICATION';
			} else {
				name = 'APPLICANT';
			}
			let { data } = await fetchSearchView(event[0], name);
			$('#' + event[1] + 'ViewPop').modal();
			$('.modal-backdrop').appendTo('#realContents');
			if (event[1] == 'patent') {
				this.PatentView = [];
				this.PatentView = data.returnObject.Patent.PatentDocumentList[0];
			}
			if (event[1] == 'corp') {
				this.CorpView = [];
				this.CorpView = data.returnObject.Corporation.CorpDocumentList[0];
			}
		},
		pageNumCher() {
			this.pageNum = this.$route.query.pageNum || 1;
		},
		async getSearch() {
			this.searchLoad = true;
			let { data } = await fetchSearch(
				this.wnSearch,
				this.type,
				this.listCount,
				this.pageNum,
			);
			this.Patent = data.returnObject.Patent;
			this.Corporation = data.returnObject.Corporation;
			this.searchLoad = false;
		},
	},
};
export default boardListMixin;
