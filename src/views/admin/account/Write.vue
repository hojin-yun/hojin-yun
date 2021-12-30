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
					<form id="formData" @submit.prevent="boardWrite">
						<div class="write_table">
							<table>
								<colgroup>
									<col width="160px" />
									<col />
									<col width="140px" />
								</colgroup>
								<tbody>
									<tr>
										<th><label for="accoutId" class="star">아이디</label></th>
										<td>
											<input
												type="text"
												id="accoutId"
												v-model="userId"
												ref="userId"
											/>
										</td>
										<td>
											<a
												href="#none"
												@click="idckek"
												class="b_med b_gray b_round"
												style="
													font-size: 14px;
													height: 35px;
													line-height: 35px;
													display: inline-block;
													width: 100px;
												"
											>
												중복 체크
											</a>
										</td>
									</tr>
									<tr>
										<th><label for="pwNo" class="star">패스워드</label></th>
										<td colspan="2">
											<input
												type="password"
												id="pwNo"
												v-model="pwNo"
												ref="pwNo"
											/>
										</td>
									</tr>
									<tr>
										<th><label for="userNm" class="star">이름</label></th>
										<td colspan="2">
											<input
												type="text"
												id="userNm"
												v-model="userNm"
												ref="userNm"
											/>
										</td>
									</tr>
									<tr>
										<th><label for="ogdpInstNm">부서명</label></th>
										<td colspan="2">
											<input type="text" id="ogdpInstNm" v-model="ogdpInstNm" />
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<ButtonWrite :dbName="dbName" />
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { addDoard, existence } from '@/api/boardList'; //db api
import ButtonBx from '@/components/admin/ButtonBx.vue';
import AsideMenu from '@/components/admin/AsideMenu.vue';
import ButtonWrite from '@/components/admin/ButtonWrite.vue';
import { loginOut } from '@/utils/index';
// import { passCrypto } from '@/utils/pwCrypto';
export default {
	components: {
		ButtonBx,
		AsideMenu,
		ButtonWrite,
	},
	data() {
		return {
			dbName: 'user',
			userId: '',
			userNm: '',
			pwNo: '',
			ogdpInstNm: '',
			idCkek: false,
			idCkekVal: '',
		};
	},
	methods: {
		async idckek() {
			if (!this.userId) {
				alert('아이디을 입력하세요.');
				this.$refs.userId.focus();
				return false;
			}
			await existence(this.userId)
				.then(() => {
					alert('사용가능한 아이디입니다.');
					this.idCkekVal = this.userId;
					this.idCkek = true;
				})
				.catch(error => {
					alert(error.response.data.statusMessage + '입니다.');
				});
		},
		boardWrite() {
			if (!this.userId) {
				alert('아이디을 입력하세요.');
				this.$refs.userId.focus();
				return false;
			}
			if (!this.idCkek || this.idCkekVal != this.userId) {
				alert('아이디 중복 체크해주세요.');
				return false;
			}
			if (!this.pwNo) {
				alert('패스워드을 입력하세요.');
				this.$refs.pwNo.focus();
				return;
			}
			if (!this.userNm) {
				alert('이름을 입력하세요.');
				this.$refs.userNm.focus();
				return;
			}
			let formData = {};
			formData.userId = this.userId;
			formData.userNm = this.userNm;
			formData.pwNo = this.pwNo;
			formData.ogdpInstNm = this.ogdpInstNm;
			addDoard(
				this.dbName, //db api 이름
				formData,
			)
				.then(() => {
					this.$router.push({
						name: this.dbName + 'List',
						query: { pageNum: 1 },
					});
				})
				.catch(error => {
					if (error.response.data.statusMessage == '허가받지 않은 요청') {
						loginOut();
					} else {
						alert(error.response.data.statusMessage);
					}
				});
			// passCrypto(this.pwNo).then(pw => {
			// 	let formData = {};
			// 	formData.userId = this.userId;
			// 	formData.userNm = this.userNm;
			// 	formData.pwNo = pw;
			// 	formData.ogdpInstNm = this.ogdpInstNm;
			// 	addDoard(
			// 		this.dbName, //db api 이름
			// 		formData,
			// 	)
			// 		.then(() => {
			// 			this.$router.push({
			// 				name: this.dbName + 'List',
			// 				query: { pageNum: 1 },
			// 			});
			// 		})
			// 		.catch(() => {
			// 			loginOut();
			// 		});
			// });
		},
	},
};
</script>
