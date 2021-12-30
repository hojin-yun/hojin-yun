<template>
	<div class="wrap">
		<AsideMenu />
		<div id="contents" class="contents">
			<div class="top">
				<div class="tit_box">
					<strong>메인 배너</strong>
					<span>메인 배너 설정합니다. </span>
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
								</colgroup>
								<tbody>
									<tr>
										<th><label for="noticeTit" class="star">제목</label></th>
										<td>
											<input
												type="text"
												id="noticeTit"
												v-model="infrmNm"
												ref="infrmNm"
											/>
										</td>
									</tr>
									<tr>
										<th>상태</th>
										<td>
											<select v-model="pstgYn" @change="pstgChange($event)">
												<option value="n">미출력</option>
												<option value="y">출력</option>
											</select>
										</td>
									</tr>
									<tr>
										<th class="vtop">
											<span class="star">배너 이미지</span>
											<br />
											(408x305)
										</th>
										<td>
											<input
												type="file"
												@change="onFileChange"
												accept="image/x-png,image/gif,image/jpeg"
												ref="file"
											/><br />
											<div v-if="imgUrl" style="margin-top: 10px">
												<img :src="imgUrl" />
											</div>
										</td>
									</tr>
									<tr>
										<th class="vtop">
											<span class="star">링크주소</span><br />
											<span class="txt_help"> 풀 주소로 기입 </span>
										</th>
										<td>
											<input
												type="text"
												id="urlAddr"
												v-model="urlAddr"
												ref="urlAddr"
												placeholder="http://xxx.xxx 로 풀 주소로 기입해주세요"
											/>
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
import { addDoard } from '@/api/boardList'; //db api
import ButtonBx from '@/components/admin/ButtonBx.vue';
import AsideMenu from '@/components/admin/AsideMenu.vue';
import ButtonWrite from '@/components/admin/ButtonWrite.vue';
import { loginOut, isValidHttpUrl } from '@/utils/index';

export default {
	components: {
		ButtonBx,
		AsideMenu,
		ButtonWrite,
	},
	data() {
		return {
			dbName: 'banner',
			infrmNm: '',
			urlAddr: '',
			pstgYn: 'y',
			imgUrl: null,
			maxSize: 2000000,
		};
	},
	methods: {
		pstgChange(event) {
			this.pstgYn = event.target.value;
		},
		onFileChange(e) {
			const file = e.target.files[0];
			if (file == undefined) {
				this.imgUrl = '';
			} else {
				if (!file.type.includes('image')) {
					alert('이미지 파일만 업로드 가능');
					e.target.value = '';
					this.imgUrl = '';
					return;
				} else if (file.size >= this.maxSize) {
					alert('파일 사이즈는 2MB까지 가능');
					e.target.value = '';
					this.imgUrl = '';
					return;
				}
				this.imgUrl = URL.createObjectURL(file);
			}
		},
		async boardWrite() {
			if (!this.infrmNm) {
				alert('제목을 입력하세요.');
				this.$refs.infrmNm.focus();
				return false;
			}
			if (this.infrmNm.length > 100) {
				alert('제목은 100자리 이내로 입력해주세요.');
				this.$refs.infrmNm.focus();
				return false;
			}
			if (!this.$refs.file.files[0]) {
				this.imgUrl = '';
				alert('배너 이미지 입력하세요.');
				return;
			}
			if (!this.urlAddr) {
				alert('링크주소를 입력하세요.');
				this.$refs.urlAddr.focus();
				return;
			}
			if (this.urlAddr) {
				if (!isValidHttpUrl(this.urlAddr)) {
					alert('링크주소를 확인 해주세요');
					this.$refs.urlAddr.focus();
					return false;
				}
			}

			let formData = new FormData();
			formData.append('infrmNm', this.infrmNm);
			formData.append('atchFile', this.$refs.file.files[0]);
			formData.append('pstgYn', this.pstgYn);
			formData.append('urlAddr', this.urlAddr);
			await addDoard(
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
		},
	},
};
</script>
