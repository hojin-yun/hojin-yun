<template lang="">
	<div class="button_box">
		<router-link to="/pbipAdmin/myinfo">
			<span>정보관리</span>
			<i class="icon icon_setting"></i>
		</router-link>
		<button @click="iconOut">
			<span>로그아웃</span>
			<i class="icon icon_out"></i>
		</button>
	</div>
</template>
<script>
export default {
	methods: {
		iconOut() {
			this.$store.dispatch('login/LOGOUT');
		},
	},
};
</script>
