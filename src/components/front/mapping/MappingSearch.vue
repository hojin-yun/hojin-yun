<template>
	<section class="conSection">
		<div class="KSIC_topSearchWrap mT10">
			<div class="KSIC_keywordSearch">
				<form
					id="boardSearchForm"
					name="boardSearchForm"
					@submit.prevent="searchClick"
				>
					<div class="KSIC_keywordSearchInput">
						<a href="#" class="KSIC_search_input_clear">keyword clear</a>
						<input
							id=""
							class="KSIC_searchKeyword"
							placeholder="검색어를 입력하세요"
							v-model="SearchTextGet"
						/>
					</div>
					<button class="KSIC_keywordSearchBtn" title="search" type="submit">
						<span></span>
					</button>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: ['SearchText'],
	computed: {
		SearchTextGet: {
			get() {
				return this.SearchText;
			},
			set(value) {
				this.$emit('SearchTextSet', value);
			},
		},
	},
	methods: {
		searchClick() {
			this.$emit('keywordSearch');
		},
	},
};
</script>
