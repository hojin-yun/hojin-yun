<template>
	<div class="log_wrap">
		<div class="log_box">
			<div class="login_tit">
				<span class="kpb_logo"
					><img src="@/assets/css/admin/img/logo_KPB.png" alt="KPBCenter"
				/></span>
				<p>특허 빅데이터 포털 <br />관리자 로그인</p>
			</div>
			<form @submit.prevent="loginSubmit">
				<div class="log_input">
					<input
						type="text"
						v-model="loginId"
						placeholder="아이디"
						ref="loginId"
					/>
					<input
						type="password"
						v-model="loginPw"
						placeholder="패스워드"
						ref="loginPw"
					/>
				</div>
				<button type="submit" class="b_lg b_blue">로그인</button>
			</form>
		</div>
	</div>
</template>
<script>
// import { passCrypto } from '@/utils/pwCrypto';
export default {
	data() {
		return {
			loginId: '',
			loginPw: '',
			isPage: false,
		};
	},
	methods: {
		loginSubmit() {
			if (!this.loginId) {
				alert('아이디을 넣어주세요');
				this.$refs.loginId.focus();
				return;
			}
			if (!this.loginPw) {
				alert('패스워드을 넣어주세요');
				this.$refs.loginPw.focus();
				return;
			}
			let editstate = {};
			editstate.userId = this.loginId;
			editstate.pwNo = this.loginPw;
			this.$store.commit('login/updateState', {
				uesrPw: this.loginPw,
			});
			this.$store.dispatch('login/LOGIN', editstate);
			// passCrypto(this.loginPw).then(pw => {
			// 	let editstate = {};
			// 	editstate.userId = this.loginId;
			// 	editstate.pwNo = pw;
			// 	this.$store.commit('login/updateState', {
			// 		uesrPw: this.loginPw,
			// 	});
			// 	this.$store.dispatch('login/LOGIN', editstate);
			// });
		},
	},
	beforeCreate() {
		if (this.$store.getters['login/isPwAgain']) {
			this.$router.push({ name: 'pwagain' });
		} else {
			if (this.$store.getters['login/isLogin']) {
				this.$router.push('/pbipAdmin/main');
			}
		}
	},
};
</script>
