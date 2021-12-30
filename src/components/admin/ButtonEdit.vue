<template lang="">
	<div class="list_btm mt30">
		<button type="submit" class="b_med b_blue b_round">수정하기</button>
		<router-link
			v-if="dbName == 'main'"
			:to="{
				name: 'adminMain',
			}"
			class="b_med b_gray b_round ml10"
		>
			취소
		</router-link>
		<router-link
			v-else
			:to="{
				name: dbName + 'List',
				query: { pageNum: $route.query.pageNum },
			}"
			class="b_med b_gray b_round ml10"
		>
			취소
		</router-link>
	</div>
</template>
<script>
export default {
	props: ['dbName'],
};
</script>
