<template lang="">
	<div class="list_btm mt30">
		<button type="submit" class="b_med b_blue b_round" v-if="dbName != 'user'">
			글쓰기
		</button>
		<button type="submit" class="b_med b_blue b_round" v-else>계정등록</button>
		<router-link :to="`/pbipAdmin/${dbName}`" class="b_med b_gray b_round ml10">
			취소
		</router-link>
	</div>
</template>
<script>
export default {
	props: ['dbName'],
};
</script>
