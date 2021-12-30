<template>
	<div class="cont-inner">
		<form
			id="boardSearchForm"
			name="boardSearchForm"
			method="post"
			@submit.prevent="onTopSearch"
		>
			<div class="srch-area">
				<select name="searchType" class="inp-slct" v-model="searchType">
					<option selected="" value="all">전체</option>
					<option value="patent">특허명</option>
					<option value="corp">출원인명</option>
				</select>
				<input
					type="text"
					name="searchText"
					class="inp-txt"
					placeholder="내용을 입력해 주세요"
					value=""
					v-model="wnSearchGet"
				/>
				<button type="submit" class="btn-srch">검색</button>
			</div>
		</form>
		<div class="list-info">
			<p class="txt" v-if="totalNo">
				<span class="num">‘{{ wnSearch }}’</span>에 대한 검색결과 {{ totalNo }}
				건 입니다.
			</p>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	props: ['totalNo', 'searchType'],
	computed: {
		...mapState('search', ['wnSearch']),
		searchTypeGet: {
			get() {
				return this.searchType;
			},
			set(value) {
				this.searchType = value;
			},
		},
		wnSearchGet: {
			get() {
				return this.wnSearch;
			},
			set(value) {
				this.$store.commit('search/updateState', { wnSearch: value });
			},
		},
	},
	methods: {
		onTopSearch() {
			if (!this.wnSearch) {
				alert('검색어를 입력하세요.');
				return;
			}
			this.$router.push('?').catch(() => {}); //파라미터 초기화
			this.$router.push({
				path: '/front/search/' + this.searchTypeGet + '/' + this.wnSearch,
			});
		},
	},
};
</script>

<style></style>
