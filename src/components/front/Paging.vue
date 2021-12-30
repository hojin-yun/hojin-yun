<template>
	<div class="board_bottom">
		<!-- <button
			v-if="searchTrue"
			@click="searchHide"
			class="b_med b_blue b_round ml10"
		>
			목록으로
		</button> -->
		<div class="paging" id="pager">
			<router-link
				class="go first"
				v-if="listPagination.page > 1"
				:to="{
					name: dbName,
					query: { pageNum: 1 },
				}"
			>
				<i class="ti-angle-double-left"></i>
			</router-link>
			<router-link
				class="go prev"
				v-if="listPagination.page > 1"
				:to="{
					name: dbName,
					query: { pageNum: listPagination.page - 1 },
				}"
			>
				<i class="ti-angle-left"></i>
			</router-link>
			<router-link
				v-for="(page, i) in lagn"
				:key="i"
				:class="
					listPagination.startPage + i == pageNumGet ? 'numActive' : 'num'
				"
				:to="{
					name: dbName,
					query: { pageNum: listPagination.startPage + i },
				}"
			>
				{{ listPagination.startPage + i }}
			</router-link>

			<!-- 마지막 번호 -->
			<router-link
				class="lastNum"
				:to="{
					name: dbName,
					query: { pageNum: listPagination.pageCnt },
				}"
				href="#10"
				>{{ listPagination.pageCnt }}</router-link
			>
			<!-- 마지막 번호 -->
			<router-link
				class="go next"
				v-if="listPagination.page < listPagination.pageCnt"
				:to="{
					name: dbName,
					query: { pageNum: listPagination.page + 1 },
				}"
			>
				<i class="ti-angle-right"></i>
			</router-link>
			<router-link
				class="go last"
				v-if="listPagination.page < listPagination.pageCnt"
				:to="{
					name: dbName,
					query: { pageNum: listPagination.pageCnt },
				}"
			>
				<i class="ti-angle-double-right"></i>
			</router-link>
		</div>
	</div>
</template>

<script>
import boardList from '@/components/front/mixin/boardList';
export default {
	mixins: [boardList],
	props: ['dbName', 'yearSelected'],
	data() {
		return {
			lagn: '',
		};
	},
	updated() {
		this.lagnLoad();
	},
	computed: {
		pageNumGet: {
			get() {
				return this.$route.query.pageNum || 1;
			},
		},
	},
	watch: {
		pageNumGet() {
			this.PagingClick(this.$route.query.pageNum || 1);
		},
	},
	methods: {
		searchHide() {
			this.$router.push('?').catch(() => {}); //파라미터 초기화
			this.$store.commit('fboardList/updateState', { searchText: null });
			this.$store.commit('fboardList/updateState', { searchTrue: false });
			this.$store.commit('fboardList/updateState', { category: '' });
			this.PagingClick(1);
		},
		async PagingClick(event) {
			let searchCategoryName;
			if (this.$store.state.fboardList.searchTrue) {
				searchCategoryName = this.$store.state.fboardList.category;
			} else {
				searchCategoryName = this.$route.params.id;
			}
			await this.getList({
				pageName: this.dbName, //DB 이름
				pageNum: event,
				searchText: this.searchText,
				searchCategory: searchCategoryName,
				searchStartDate: this.yearSelected,
			});
			this.lagnLoad();
		},
		lagnLoad() {
			this.lagn =
				this.listPagination.endPage - this.listPagination.startPage + 1;
		},
	},
};
</script>
