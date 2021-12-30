<template>
	<div class="log_wrap">
		<div class="log_box">
			<strong class="login_tit">
				<span class="kpb_logo"
					><img src="@/assets/css/admin/img/logo_KPB.png" alt="KPBCenter"
				/></span>
				<p>특허 빅데이터 포털 <br />관리자 로그인</p>
			</strong>
			<p
				style="
					text-align: center;
					color: red;
					margin-bottom: 10px;
					font-size: 16px;
					margin-top: -20px;
				"
			>
				영문,숫자, 특수문자 혼합하여<br />10자리 ~ 15자리 입력해 주세요
			</p>
			<form @submit.prevent="pwAgainSubmit">
				<div class="log_input">
					<input
						type="password"
						v-model="oldPw"
						placeholder="기존 패스워드"
						ref="oldPw"
					/>
					<input
						type="password"
						v-model="newPw"
						placeholder="패스워드"
						ref="newPw"
					/>
					<input
						type="password"
						v-model="newAPw"
						placeholder="패스워드 확인"
						ref="newAPw"
					/>
				</div>
				<button class="b_lg b_blue">비밀 번호 변경</button>
			</form>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex';
import { chkPwd, loginOut } from '@/utils/index';
// import { passCrypto } from '@/utils/pwCrypto';
import { pwAgain } from '@/api/boardList'; //db api
import { deleteCookieToken, getInfoCookie } from '@/utils/cookies';
export default {
	data() {
		return {
			oldPw: '',
			newPw: '',
			newAPw: '',
			npw: '',
			apw: '',
		};
	},
	computed: {
		...mapState('login', ['uesrNo', 'fistLogin', 'uesrPw']),
	},
	created() {
		if (this.fistLogin == 'n') {
			this.$router.push({ name: 'adminMain' });
		}
		if (!this.uesrNo) {
			alert('다시 로그인해주세요');
			this.$store.commit('login/updateState', { myToken: '' });
			deleteCookieToken();
			this.$router.push({ name: 'adminLogin' });
		}
	},
	methods: {
		pwAgainSubmit() {
			if (this.oldPw != this.uesrPw) {
				alert('기존 패스워드을 확인 하세요');
				this.$refs.oldPw.focus();
				return false;
			} else if (chkPwd(this.newPw)) {
				if (this.newAPw === this.newPw) {
					this.npw = this.newPw;
					this.apw = this.newAPw;
					this.pwAgain();
					// passCrypto(this.newPw).then(npw => {
					// 	this.npw = npw;
					// });
					// passCrypto(this.newAPw).then(apw => {
					// 	this.apw = apw;
					// 	this.pwAgain();
					// });
				} else {
					alert('새로운 패스워드는 동일하게 입력하세요');
					this.$refs.newAPw.focus();
					return false;
				}
			} else {
				this.$refs.newPw.focus();
				return false;
			}
		},
		async pwAgain() {
			let pwData = {};
			pwData.regNo = this.uesrNo;
			pwData.userId = getInfoCookie().userId;
			pwData.pwNo = this.npw;
			pwData.pwNoCheck = this.apw;
			await pwAgain(pwData)
				.then(() => {
					this.$store.commit('login/updateState', { uesrPw: '' });
					this.$router.push({ name: 'adminMain' });
				})
				.catch(() => {
					loginOut();
				});
		},
	},
};
</script>
