<template>
	<div class="board_bottom">
		<div class="paging" id="pager" v-if="startPage">
			<router-link
				class="go first"
				v-if="page != 1"
				:to="{
					query: { pageNum: 1 },
				}"
			>
				<i class="ti-angle-double-left"></i>
			</router-link>

			<router-link
				class="go prev"
				v-if="page != 1"
				:to="{
					query: { pageNum: page - 1 },
				}"
			>
				<i class="ti-angle-left"></i>
			</router-link>
			<router-link
				v-for="(page, i) in pageNub"
				:key="i"
				:class="i + startPage == pageNumGet ? 'numActive' : 'num'"
				:to="{
					query: { pageNum: i + startPage },
				}"
			>
				{{ i + startPage }}
			</router-link>

			<!-- 마지막 번호 -->
			<a class="lastNum" href="#10">{{ endtPage }}</a>
			<!-- 마지막 번호 -->

			<router-link
				class="go next"
				v-if="page != totalPage"
				:to="{
					query: { pageNum: page + 1 },
				}"
			>
				<i class="ti-angle-right"></i>
			</router-link>
			<router-link
				class="go last"
				v-if="page != totalPage"
				:to="{
					query: { pageNum: totalPage },
				}"
			>
				<i class="ti-angle-double-right"></i>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	props: ['totalNo', 'page'],
	computed: {
		pageNumGet: {
			get() {
				return this.$route.query.pageNum || 1;
			},
		},
		totalPage() {
			return Math.ceil(this.totalNo / 10);
		},
		ingPage() {
			return Math.ceil(this.page / 10);
		},
		totalPagea() {
			return Math.ceil(this.totalPage / 10);
		},
		startPage() {
			return (this.ingPage - 1) * 10 + 1;
		},
		endtPage() {
			return this.ingPage * 10;
		},
		pageNub() {
			if (this.ingPage == this.totalPagea) {
				return this.totalPage - (this.ingPage - 1) * 10;
			} else {
				return 10;
			}
		},
	},
};
</script>
