<template lang="">
	<div class="list_btm mt30">
		<button class="b_med b_white b_round" @click="deleteView">삭제</button>
		<router-link
			:to="{
				name: dbName + 'Edit',
				query: {
					pageNum: $route.query.pageNum,
					useYn,
					ogdpInstNm,
					userNm,
					regNo,
				},
				params: { id: $route.params.id },
			}"
			class="b_med b_blue b_round mlauto"
		>
			수정하기
		</router-link>
		<router-link
			:to="{
				name: dbName + 'List',
				query: { pageNum: $route.query.pageNum },
			}"
			class="b_med b_black b_round ml10"
			>목록으로</router-link
		>
	</div>
</template>
<script>
import { deleteDoard } from '@/api/boardList'; //db api
import { loginOut } from '@/utils/index';
export default {
	props: ['dbName', 'useYn', 'regNo', 'userNm', 'ogdpInstNm'],
	methods: {
		async deleteView() {
			if (confirm('정말로 삭제하시겠습니까?')) {
				try {
					let deleteOj;
					if (this.dbName == 'user') {
						deleteOj = [{ regNo: this.regNo, userId: this.$route.params.id }];
					} else {
						deleteOj = [this.$route.params.id];
					}
					await deleteDoard(
						this.dbName, //db api 이름
						deleteOj,
					).then(() => {
						this.$router.push({
							name: this.dbName + 'List',
							query: { pageNum: this.$route.query.pageNum },
						});
					});
				} catch (error) {
					loginOut();
				}
			}
		},
	},
};
</script>
