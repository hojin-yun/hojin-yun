<template>
	<div class="board_bottom">
		<div class="paging" id="pager">
			<router-link
				class="go first"
				v-if="listPagination.page > 1"
				:to="{
					query: { pageNum: 1 },
				}"
			>
				<i class="ti-angle-double-left"></i>
			</router-link>
			<router-link
				class="go prev"
				v-if="listPagination.page > 1"
				:to="{
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
					query: { pageNum: listPagination.startPage + i },
				}"
			>
				{{ listPagination.startPage + i }}
			</router-link>

			<!-- 마지막 번호 -->
			<router-link
				class="lastNum"
				:to="{
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
					query: { pageNum: listPagination.page + 1 },
				}"
			>
				<i class="ti-angle-right"></i>
			</router-link>
			<router-link
				class="go last"
				v-if="listPagination.page < listPagination.pageCnt"
				:to="{
					query: { pageNum: listPagination.pageCnt },
				}"
			>
				<i class="ti-angle-double-right"></i>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	props: ['modalCode', 'listPagination'],
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
			if (this.$route.query.pageNum != 1) {
				this.PagingClick(this.$route.query.pageNum || 1);
			}
		},
	},
	methods: {
		PagingClick(event) {
			this.$emit('Paging', event);
			this.lagnLoad();
		},
		lagnLoad() {
			this.lagn =
				this.listPagination.endPage - this.listPagination.startPage + 1;
		},
	},
};
</script>
