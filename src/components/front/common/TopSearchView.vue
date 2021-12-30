<template>
	<div class="topSearchView">
		<div class="topSearchDetail">
			<a
				href="#"
				title="검색창 닫기"
				class="keywordSearchClose"
				@click="keywordSearchClose"
			>
				<i class="ti-close"></i>
			</a>
			<h3>찾으시려는 검색어를 입력해 주세요</h3>

			<form @submit.prevent="onTopSearch">
				<div class="keywordSearch">
					<div class="keywordSearchInput">
						<input type="text" class="searchKeyword" v-model="topSearch" />
					</div>
					<div class="keywordSearchBtn">
						<input type="submit" value="검색" title="검색하기" />
					</div>
				</div>
			</form>
		</div>
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
			this.keywordSearchClose();
		},
		keywordSearchClose() {
			$('.topSearchView').fadeOut('fast');
		},
	},
};
</script>
