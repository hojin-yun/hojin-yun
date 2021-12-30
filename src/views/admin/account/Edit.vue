<template>
	<div class="wrap">
		<AsideMenu />
		<div id="contents" class="contents">
			<div class="top">
				<div class="tit_box">
					<strong>계정 관리</strong>
					<span>계정관리 편집 및 추가하는 페이지입니다 </span>
				</div>
				<ButtonBx />
			</div>

			<div class="center">
				<div class="inner">
					<form id="formData" @submit.prevent="boardEdit">
						<div class="write_table">
							<table>
								<colgroup>
									<col width="160px" />
									<col />
								</colgroup>
								<tbody>
									<tr>
										<th>아이디</th>
										<td>
											{{ userId }}
										</td>
									</tr>
									<tr>
										<th>이름</th>
										<td>
											{{ userNm }}
										</td>
									</tr>
									<tr>
										<th><label for="newPw">패스워드</label></th>
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
										<th><label for="newAPw">패스워드 확인</label></th>
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
										<th>부서명</th>
										<td>
											<input
												type="text"
												id="accountTeam"
												v-model="ogdpInstNm"
											/>
											<label for="accountTeam" class="hidden">부서명</label>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<ButtonEdit :dbName="dbName" />
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { editDoard } from '@/api/boardList'; //db api
import ButtonBx from '@/components/admin/ButtonBx.vue';
import AsideMenu from '@/components/admin/AsideMenu.vue';
import ButtonEdit from '@/components/admin/ButtonEdit.vue';
import { chkPwd, loginOut, decodeHTMLEntities } from '@/utils/index';
//import { passCrypto } from '@/utils/pwCrypto';
export default {
	components: {
		ButtonBx,
		AsideMenu,
		ButtonEdit,
	},
	data() {
		return {
			dbName: 'user',
			regNo: '',
			userId: '',
			userNm: '',
			ogdpInstNm: '',
			useYn: '',
			newPw: '',
			newAPw: '',
			npw: '',
			apw: '',
		};
	},
	created() {
		this.regNo = this.$route.query.regNo;
		this.userId = this.$route.params.id;
		this.userNm = this.$route.query.userNm;
		this.ogdpInstNm = decodeHTMLEntities(this.$route.query.ogdpInstNm);
		this.useYn = this.$route.query.useYn;
	},
	methods: {
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
			editData.regNo = this.regNo;
			editData.userId = this.userId;
			if (this.newPw) {
				editData.pwNo = this.npw;
				editData.pwNoCheck = this.apw;
			}
			editData.ogdpInstNm = this.ogdpInstNm;
			await editDoard(
				this.dbName, //db api 이름
				editData,
			)
				.then(() => {
					this.$router.push({
						name: this.dbName + 'View',
						query: { pageNum: this.$route.query.pageNum, useYn: this.useYn },
					});
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
