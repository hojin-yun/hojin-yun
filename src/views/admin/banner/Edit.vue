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
					<form id="formData" @submit.prevent="boardEdit">
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
												v-model="viewData.infrmNm"
												ref="infrmNm"
											/>
										</td>
									</tr>
									<tr>
										<th>상태</th>
										<td>
											<select v-model="viewData.pstgYn">
												<option value="n">미출력</option>
												<option value="y">출력</option>
											</select>
										</td>
									</tr>
									<tr>
										<th class="vtop">
											<span class="star">배너 이미지</span>
											<br />(408x305)
										</th>
										<td>
											<div v-if="vatchFileNmIs()">
												<input
													type="file"
													@change="onFileChange"
													accept="image/x-png,image/gif,image/jpeg"
													ref="file"
												/><br />
											</div>
											<ul v-else class="attach_list">
												<li>
													<img :src="viewData.imgUrl" />
													<span @click="fileDelete(0)">
														<i class="icon icon_x"></i>
													</span>
												</li>
											</ul>
											<div v-if="imgUrl" style="margin-top: 10px">
												<img :src="imgUrl" style="max-width: 480px" />
											</div>
										</td>
									</tr>
									<tr>
										<th class="vtop"><span class="star">링크주소</span></th>
										<td>
											<input
												type="text"
												id="urlAddr"
												v-model="viewData.urlAddr"
												ref="urlAddr"
												placeholder="http://xxx.xxx 로 풀 주소로 기입해주세요"
											/>
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
import boardView from '@/components/admin/mixin/boardView';
import { loginOut, isValidHttpUrl } from '@/utils/index';

export default {
	mixins: [boardView],
	name: 'notice',
	components: {
		ButtonBx,
		AsideMenu,
		ButtonEdit,
	},
	data() {
		return {
			dbName: 'banner',
			pageName: 'edit',
			imgUrl: null,
			maxSize: 2000000,
			isImg: false,
		};
	},
	methods: {
		vatchFileNmIs() {
			if (this.fileNm) {
				return this.fileNm[0] ? false : true;
			}
		},
		fileDelete(event) {
			this.fileNm.splice(event, 1);
			this.vstrgAtchFileNm.splice(event, 1);
			this.isImg = true;
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
		async boardEdit() {
			if (!this.viewData.infrmNm) {
				alert('제목을 입력하세요.');
				this.$refs.infrmNm.focus();
				return false;
			} else if (this.viewData.infrmNm.length > 100) {
				alert('제목은 100자리 이내로 입력해주세요.');
				this.$refs.infrmNm.focus();
				return false;
			} else if (!this.viewData.urlAddr) {
				alert('링크주소를 입력하세요.');
				this.$refs.urlAddr.focus();
				return;
			} else if (this.viewData.urlAddr) {
				if (!isValidHttpUrl(this.viewData.urlAddr)) {
					alert('링크주소를 확인 해주세요');
					this.$refs.urlAddr.focus();
					return false;
				}
			}

			if (this.isImg) {
				if (this.$refs.file.files.length == 0) {
					alert('배너 이미지를 입력하세요');
					return false;
				}
			}

			let editData = new FormData();
			editData.append('regNo', this.$route.params.id);
			editData.append('infrmNm', this.viewData.infrmNm);
			if (this.fileNm[0]) {
				editData.append('fileNms', this.fileNm);
				editData.append('strgAtchFileNms', this.vstrgAtchFileNm);
			} else {
				editData.append('atchFile', this.$refs.file.files[0]);
			}
			editData.append('pstgYn', this.viewData.pstgYn);
			editData.append('urlAddr', this.viewData.urlAddr);
			await editDoard(
				this.dbName, //db api 이름
				editData,
			)
				.then(() => {
					this.$router.push({
						name: this.dbName + 'View',
						query: { pageNum: this.$route.query.pageNum },
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
