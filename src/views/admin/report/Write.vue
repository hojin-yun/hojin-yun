<template>
	<div class="wrap">
		<AsideMenu />
		<div id="contents" class="contents">
			<div class="top">
				<div class="tit_box">
					<strong>분석 보고서</strong>
					<span>분서 보고서의 편집 및 추가하는 페이지입니다. </span>
				</div>
				<ButtonBx />
			</div>
			<div class="center">
				<div class="inner">
					<form id="formData" @submit.prevent="boardWrite">
						<div class="write_table">
							<table>
								<colgroup>
									<col width="220px" />
									<col />
								</colgroup>
								<tbody>
									<tr>
										<th><span class="star">분류/ 년도</span></th>
										<td>
											<select v-model="rptChgNm" ref="rptChgNm">
												<option value="">분류 선택</option>
												<option value="위기신호탐지">위기신호탐지</option>
												<option value="유망기술발굴">유망기술발굴</option>
												<option value="외부보고서">외부보고서</option>
											</select>
											<select v-model="regYr" ref="regYr" class="ml10">
												<option value="">년도 선택</option>
												<option
													v-for="(year, i) in years.slice().reverse()"
													:key="i"
													:value="year"
												>
													{{ year }}
												</option>
											</select>
										</td>
									</tr>
									<tr>
										<th><label for="reportTit" class="star">제목</label></th>
										<td>
											<input
												type="text"
												id="reportTit"
												v-model="infrmNm"
												ref="infrmNm"
											/>
										</td>
									</tr>
									<tr>
										<th class="vtop">
											다운로드 첨부파일
											<p class="txt_help">다운로드 하는 파일</p>
										</th>
										<td>
											<input type="file" ref="file" />
											<label class="download_chk">
												<input type="checkbox" @change="downloadChk" />
												<span>다운로드가능함</span>
											</label>
										</td>
									</tr>
									<tr>
										<th class="vtop">
											이미지파일
											<p class="txt_help">보여지는 이미지</p>
										</th>
										<td>
											<input
												type="file"
												@change="onFileChange"
												accept="image/x-png,image/gif,image/jpeg"
												ref="fileimg"
											/>
											<div v-if="imgUrl" style="margin-top: 10px">
												<img :src="imgUrl" style="width: 400px" />
												<!-- {{ imgUrl }} -->
											</div>
										</td>
									</tr>
									<tr>
										<th>
											<label for="urlAddr">링크주소</label><br />
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
									<tr>
										<th class="vtop"><span class="">설명글</span></th>
										<td>
											<textarea
												name="noticeContents"
												id="noticeContents"
												cols="50"
												v-model="infrmDtlCn"
												ref="infrmDtlCn"
												rows="6"
											></textarea>
											<span class="txt_help">
												입력시에는 100자 이내로 입력해주세요.
											</span>
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
			dbName: 'report',
			rptChgNm: '', //분류명
			regYr: '', //년도
			// regYr: new Date().getFullYear(), //년도
			infrmNm: '', //제목
			urlAddr: '', //링크주소
			imgUrl: null, //이미지파일경로
			maxSize: 2000000, //이미지파일사이즈
			strgAtchFileNm: [],
			atchYn: 'n',
			infrmDtlCn: '',
		};
	},
	computed: {
		years() {
			const year = new Date().getFullYear();
			return Array.from(
				{ length: year - 1998 },
				(value, index) => 1999 + index,
			);
		},
	},
	methods: {
		downloadChk(e) {
			if (e.target.checked) {
				this.atchYn = 'y';
			} else {
				this.atchYn = 'n';
			}
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
			if (!this.rptChgNm) {
				alert('분류를 선택하세요.');
				this.$refs.rptChgNm.focus();
				return false;
			} else if (!this.regYr) {
				alert('년도를 선택하세요.');
				this.$refs.regYr.focus();
				return false;
			} else if (!this.infrmNm) {
				alert('제목을 입력하세요.');
				this.$refs.infrmNm.focus();
				return false;
			} else if (this.infrmNm.length > 100) {
				alert('제목은 100자 이내로 입력해주세요.');
				this.$refs.infrmNm.focus();
				return false;
			} else if (this.infrmDtlCn.length > 100) {
				alert('설명글은 100자 이내로 입력해주세요.');
				this.$refs.infrmDtlCn.focus();
				return false;
			}
			// else if (
			// 	!this.$refs.file.files[0] &&
			// 	!this.$refs.fileimg.files[0] &&
			// 	!this.urlAddr
			// ) {
			// 	alert('첨부파일 또는 이미지 또는 링크 주소 중 하나는 입력하세요.');
			// 	return false;
			// }

			if (this.urlAddr) {
				if (!isValidHttpUrl(this.urlAddr)) {
					alert('링크주소를 확인 해주세요');
					this.$refs.urlAddr.focus();
					return false;
				}
			}

			let formData = new FormData();
			formData.append('rptChgNm', this.rptChgNm);
			formData.append('regYr', this.regYr);
			formData.append('infrmNm', this.infrmNm);
			for (var i = 0; i < this.$refs.file.files.length; i++) {
				let file = this.$refs.file.files[i];
				formData.append('atchFile', file);
			}
			for (var j = 0; j < this.$refs.fileimg.files.length; j++) {
				let file = this.$refs.fileimg.files[j];
				formData.append('imgFile', file);
			}

			formData.append('infrmDtlCn', this.infrmDtlCn);
			formData.append('urlAddr', this.urlAddr);
			formData.append('atchYn', this.atchYn);
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
