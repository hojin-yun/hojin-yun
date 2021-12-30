<template>
	<div class="wrap">
		<AsideMenu />
		<div id="contents" class="contents">
			<div class="top">
				<div class="tit_box">
					<strong>정보 관리</strong>
					<span>본인 정보의 부서명 변경 또는 패스워드 변경 가능합니다.</span>
				</div>
				<ButtonBx />
			</div>
			<div class="center">
				<div class="inner">
					<form id="formData" @submit.prevent="boardEdit">
						<div class="write_table">
							<table>
								<colgroup>
									<col width="200px" />
									<col />
								</colgroup>
								<tbody>
									<tr>
										<th>아이디</th>
										<td>{{ viewData.userId }}</td>
									</tr>
									<tr>
										<th>
											<label for="newPw">새로운 패스워드</label>
										</th>
										<td>
											<input
												type="password"
												id="newPw"
												v-model="newPw"
												placeholder="영문,숫자, 특수문자 10자리 ~ 15자리 입력"
											/>
										</td>
									</tr>
									<tr>
										<th>
											<label for="newAPw">새로운 패스워드 확인</label>
										</th>
										<td>
											<input
												type="password"
												id="newAPw"
												v-model="newAPw"
												placeholder="새로운 패스워드 동일하게 입력"
											/>
										</td>
									</tr>
									<tr>
										<th><span class="star">이름</span></th>
										<td>{{ viewData.userNm }}</td>
									</tr>
									<tr>
										<th><label for="accountTeam">부서명</label></th>
										<td>
											<input
												type="text"
												id="accountTeam"
												v-model="viewData.ogdpInstNm"
												placeholder="부서명"
											/>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<ButtonEdit dbName="main" />
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { editDoard, viewUser } from '@/api/boardList'; //db api
import ButtonBx from '@/components/admin/ButtonBx.vue';
import AsideMenu from '@/components/admin/AsideMenu.vue';
import ButtonEdit from '@/components/admin/ButtonEdit.vue';
import { getInfoCookie } from '@/utils/cookies';
import { chkPwd, loginOut } from '@/utils/index';
// import { passCrypto } from '@/utils/pwCrypto';
export default {
	name: 'myInfo',
	components: {
		ButtonBx,
		AsideMenu,
		ButtonEdit,
	},
	data() {
		return {
			dbName: 'user',
			viewData: [],
			newPw: '',
			newAPw: '',
			npw: '',
			apw: '',
		};
	},
	created() {
		this.infoView();
	},
	methods: {
		async infoView() {
			let viewData = {};
			viewData.userId = getInfoCookie().userId;
			viewData.useYn = getInfoCookie().useYn;
			const { data } = await viewUser(
				this.dbName, //db api 이름
				viewData,
			);
			this.viewData = data.result.data;
		},
		boardEdit() {
			if (this.newPw) {
				if (chkPwd(this.newPw)) {
					if (this.newAPw === this.newPw) {
						this.npw = this.newPw;
						this.apw = this.newAPw;
						this.editDat();
						// passCrypto(this.newPw).then(npw => {
						// 	this.npw = npw;
						// });
						// passCrypto(this.newAPw).then(apw => {
						// 	this.apw = apw;
						// 	this.editDat();
						// });
					} else {
						alert('새로운 패스워드는 동일하게 입력하세요');
						return false;
					}
				} else {
					return false;
				}
			} else {
				this.editDat();
			}
		},
		async editDat() {
			let editData = {};
			editData.regNo = this.viewData.regNo;
			editData.userId = this.viewData.userId;
			if (this.newPw) {
				editData.pwNo = this.npw;
				editData.pwNoCheck = this.apw;
			}
			editData.ogdpInstNm = this.viewData.ogdpInstNm;
			await editDoard(
				this.dbName, //db api 이름
				editData,
			)
				.then(() => {
					alert('수정되었습니다.');
					this.$router.push({ name: 'adminMain' });
				})
				.catch(error => {
					if (error.response.data.statusMessage == '허가받지 않은 요청') {
						loginOut();
					} else {
						alert(error.response.data.statusMessage);
					}
				});
		},
	},
};
</script>
