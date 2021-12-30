<template>
	<div class="search mt40">
		<form @submit="onSubmitSearch" class="search_wrap">
			<input
				type="text"
				id="search"
				v-model="searchTextGet"
				placeholder="검색"
			/>
			<label for="search" class="hidden">검색</label>
			<button type="submit" class="">
				<i class="icon icon_search"></i>
			</button>
		</form>
	</div>
</template>
<script>
import boardList from '@/components/admin/mixin/boardList';
export default {
	mixins: [boardList],
	props: ['dbName'],
	computed: {
		searchTextGet: {
			get() {
				return this.searchText;
			},
			set(value) {
				this.$store.commit('boardList/updateState', { searchText: value });
			},
		},
	},
	methods: {
		onSubmitSearch(event) {
			event.preventDefault();
			if (this.searchText) {
				this.$router.push('?').catch(() => {}); //파라미터 초기화
				this.$store.commit('boardList/updateState', { searchTrue: true });
				this.getList({
					pageName: this.dbName, //DB 이름
					pageNum: 1,
					sortNumber: this.sortCount, // 보여지는 갯수
					searchText: this.searchText,
				});
			} else {
				alert('검색어를 입력하세요');
			}
		},
	},
};
</script>
