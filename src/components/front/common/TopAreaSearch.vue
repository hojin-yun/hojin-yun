<template>
	<div class="topAreaSearch">
		<form class="topAreaSearch" @submit.prevent="onTopSearch">
			<input
				type="text"
				name="query"
				placeholder="검색어를 입력해 주세요"
				title="특허 빅데이터 포털 검색"
				id="query"
				v-model="topSearch"
			/>
			<div class="topSearchBtn">
				<input type="submit" value="검색" title="검색하기" />
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			topSearch: '',
		};
	},
	methods: {
		onTopSearch() {
			if (!this.topSearch) {
				alert('검색어를 입력하세요.');
				return;
			}
			this.$store.commit('search/updateState', {
				wnSearch: this.topSearch,
			});
			this.$router.push({
				path: '/front/search/all/' + this.topSearch,
			});
			this.topSearch = '';
		},
	},
};
</script>
