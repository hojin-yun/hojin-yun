<template>
	<div class="board_bottom">
		<div class="paging" id="pager" v-if="listPagination.listCnt > 10">
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
import { mapState, mapActions } from 'vuex';
export default {
	props: ['dbName', 'SearchText'],
	data() {
		return {
			lagn: '',
		};
	},
	updated() {
		this.lagnLoad();
	},
	computed: {
		...mapState('fboardList', [
			'listPagination',
			'pageNum',
			'sortCount',
			'SearchLoading',
		]),
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
		...mapActions('fboardList', ['ksicSearch']),
		PagingClick(event) {
			this.$emit('PagingClick', event);
			this.lagnLoad();
		},
		// async PagingClick(event) {
		// 	await this.ksicSearch({
		// 		pageName: this.dbName, //DB 이름
		// 		pageNum: event,
		// 		searchText: `${this.dbName}Cd=${this.SearchText}`,
		// 	});
		// 	this.lagnLoad();
		// },
		lagnLoad() {
			this.lagn =
				this.listPagination.endPage - this.listPagination.startPage + 1;
		},
	},
};
</script>
