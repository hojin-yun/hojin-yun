<template lang="">
	<div class="list_btm mt30">
		<button
			class="b_med b_white b_round"
			v-if="dbName != 'statistics' && dbName != 'user'"
			@click="deleteCheck"
		>
			선택삭제
		</button>
		<div class="paging">
			<button
				class="first"
				v-if="listPagination.prev"
				@click="
					$router.push({
						name: dbName + 'List',
						query: { pageNum: 1 },
					})
				"
			>
				<i class="icon icon_first"></i>
			</button>
			<button
				class="prev"
				v-if="listPagination.prev"
				@click="
					$router.push({
						name: dbName + 'List',
						query: { pageNum: listPagination.startPage - 1 },
					})
				"
			>
				<i class="icon icon_prev"></i>
			</button>
			<router-link
				v-for="(page, i) in lagn"
				:key="i"
				:class="{
					active: listPagination.startPage + i == pageNumGet,
				}"
				:to="{
					name: dbName + 'List',
					query: { pageNum: listPagination.startPage + i },
				}"
			>
				{{ listPagination.startPage + i }}
			</router-link>

			<button
				class="next"
				v-if="listPagination.next"
				@click="
					$router.push({
						name: dbName + 'List',
						query: { pageNum: listPagination.endPage + 1 },
					})
				"
			>
				<i class="icon icon_next"></i>
			</button>
			<button
				v-if="listPagination.next"
				class="last"
				@click="
					$router.push({
						name: dbName + 'List',
						query: { pageNum: listPagination.pageCnt },
					})
				"
			>
				<i class="icon icon_last"></i>
			</button>
		</div>
		<router-link
			:to="`/pbipAdmin/${dbName}Write`"
			v-if="dbName != 'statistics'"
			class="b_med b_blue b_round"
		>
			<span v-if="dbName == 'user'">계정 등록</span>
			<span v-else>글쓰기</span>
		</router-link>
		<button
			v-if="searchTrue"
			@click="searchHide"
			class="b_med b_black b_round ml10"
		>
			목록으로
		</button>
	</div>
</template>
<script>
import { convertDateFormat, loginOut } from '@/utils/index';
import boardList from '@/components/admin/mixin/boardList';
export default {
	mixins: [boardList],
	props: ['dbName'],
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
			this.$store.commit('boardList/updateState', { searchText: null });
			this.$store.commit('boardList/updateState', { searchTrue: false });
			this.$router.push('?').catch(() => {}); //파라미터 초기화
			this.PagingClick(1);
		},
		async PagingClick(event) {
			await this.getList({
				pageName: this.dbName, //DB 이름
				pageNum: event,
				sortNumber: this.sortCount,
				searchText: this.searchText,
				searchCategory: this.isCategoryGet,
				seachStartDate: this.startDay ? convertDateFormat(this.startDay) : '',
				seachEndDate: this.endDay ? convertDateFormat(this.endDay) : '',
			});
			this.lagnLoad();
		},
		async deleteCheck() {
			if (this.$store.state.boardList.deleteId.length != 0) {
				if (confirm('정말로 삭제하시겠습니까?')) {
					await this.deleteData({
						pageName: this.dbName, //DB 이름
						pageNum: this.$route.query.pageNum || this.pageNum,
						sortNumber: this.sortCount,
						searchText: this.searchText,
						searchCategory: this.isCategoryGet,
					}).catch(() => {
						loginOut();
					});
				}
			} else {
				alert('선택된 게시물이 없습니다.');
			}
		},
		lagnLoad() {
			this.lagn =
				this.listPagination.endPage - this.listPagination.startPage + 1;
		},
	},
};
</script>
