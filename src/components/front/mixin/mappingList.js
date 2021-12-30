import { mapState, mapActions } from 'vuex';
import { fetchCategory } from '@/api/mapping'; //db api
let mappingList = {
	data() {
		return {
			SearchText: '',
			category1: [],
			category2: [],
			category3: [],
			category4: [],
			categoryOn1: '',
			categoryOn2: '',
			categoryOn3: '',
			categoryOn4: '',
			categoryLoad1: false,
			categoryLoad2: false,
			categoryLoad3: false,
			categoryLoad4: false,
		};
	},
	computed: {
		...mapState('fboardList', [
			'listData',
			'listPagination',
			'pageNum',
			'sortCount',
			'SearchLoading',
			'totalCount',
		]),
	},
	created() {
		this.$store.commit('fboardList/updateState', {
			listData: '',
			listPagination: '',
			totalCount: '',
			SearchLoading: false,
		});
	},
	mounted() {
		this.eResize();
		window.addEventListener('resize', this.eResize);
	},
	methods: {
		eResize() {
			const category_list = $('.category_list');
			if (window.innerWidth < 769) {
				category_list.addClass('mb');
			} else {
				category_list.removeClass('mb');
			}
			$('.mb .industry_title').on('click', function () {
				if (window.innerWidth < 769) {
					$(this).parent().addClass('active').siblings().removeClass('active');
				}
			});
			$('.mb .category_list-wrap ul').on('click', function () {
				if (window.innerWidth < 769) {
					$(this)
						.parents('.category_list')
						.next()
						.addClass('active')
						.siblings()
						.removeClass('active');
				}
			});
		},
		...mapActions('fboardList', ['ksicSearch']),
		SearchTextSet(event) {
			this.SearchText = event;
		},
		async categoryColl(level, cd) {
			this[`categoryLoad${level}`] = true;
			for (let index = level; index < level + 3; index++) {
				this[`category${index}`] = [];
			}
			let version = '';
			if (this.dbName == 'itstat') {
				version = '&itstatVersion=2020';
			}
			const cname = `${this.dbName}Level=${level}${version}&${this.dbName}Cd=${cd}`;
			const { data } = await fetchCategory(this.dbName, cname);
			this[`category${level}`] = data.result.data;
			this[`categoryOn${level - 1}`] = cd;
			setTimeout(() => {
				this[`categoryLoad${level}`] = false;
			}, 100);
		},
	},
};
export default mappingList;
