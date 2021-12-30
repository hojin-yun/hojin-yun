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
					<form id="formData" @submit.prevent="boardEdit">
						<div class="write_table">
							{{ viewData.atchFileNms }}
							<table>
								<colgroup>
									<col width="220px" />
									<col />
								</colgroup>
								<tbody>
									<tr>
										<th><span class="star">분류/ 년도</span></th>
										<td>
											<select v-model="viewData.rptChgNm">
												<option value="위기신호탐지">위기신호탐지</option>
												<option value="유망기술발굴">유망기술발굴</option>
												<option value="외부보고서">외부보고서</option>
											</select>

											<select v-model="viewData.regYr" class="ml10">
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
												v-model="viewData.infrmNm"
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
											<input
												v-show="!vatchFileNm[0]"
												type="file"
												name="file"
												ref="file"
											/>
											<ul class="attach_list mt0">
												<li v-for="(items, i) in vatchFileNm" :key="i">
													<span v-html="items"></span>
													<span v-if="items" @click="fileDelete(i)">
														<i class="icon icon_x"></i>
													</span>
												</li>
											</ul>
											<label class="download_chk">
												<input type="checkbox" v-model="atchYnGet" />
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
											<div v-show="!vfileNm[0]">
												<input
													type="file"
													@change="onFileChange"
													accept="image/x-png,image/gif,image/jpeg"
													ref="fileimg"
												/>
											</div>
											<ul class="attach_list">
												<li v-for="(items, i) in vfileNm" :key="i">
													<img :src="viewData.imgUrl" />
													<span v-if="items" @click="fileImgDelete(i)">
														<i class="icon icon_x"></i>
													</span>
												</li>
											</ul>
											<div v-if="imgUrl" style="margin-top: 10px">
												<img :src="imgUrl" />
											</div>
										</td>
									</tr>
									<tr>
										<th>
											링크주소
											<p class="txt_help">외부 주소 링크</p>
										</th>
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
									<tr>
										<th class="vtop"><span class="">설명글</span></th>
										<td>
											<textarea
												name="noticeContents"
												id="noticeContents"
												cols="50"
												v-model="viewData.infrmDtlCn"
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
						<!-- {{ dbName }} -->
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
import { loginOut, isValidHttpUrl, unescapeHtml } from '@/utils/index';

export default {
	mixins: [boardView],
	name: 'report',
	components: {
		ButtonBx,
		AsideMenu,
		ButtonEdit,
	},
	data() {
		return {
			dbName: 'report',
			pageName: 'edit',
			vfileNm: [],
			vstrgFileNm: [],
			imgUrl: '',
			maxSize: 2000000, //이미지파일사이즈
			atchYn: '',
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
		infrmNm() {
			return unescapeHtml(this.viewData.infrmNm);
		},
		atchYnGet: {
			get() {
				if (this.viewData.atchYn == 'y') {
					return true;
				} else {
					return false;
				}
			},
			set(value) {
				if (value) {
					this.atchYn = 'y';
				} else {
					this.atchYn = 'n';
				}
			},
		},
	},
	updated() {
		this.vfileNm = this.viewData.fileNm;
		this.vstrgFileNm = this.viewData.strgFileNm;
		this.atchYn = this.viewData.atchYn;
		this.urlAddr = this.viewData.urlAddr;
	},
	methods: {
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
		fileDelete(event) {
			this.vatchFileNm.splice(event, 1);
			this.vstrgAtchFileNm.splice(event, 1);
		},
		fileImgDelete(event) {
			this.vfileNm.splice(event, 1);
			this.vstrgFileNm.splice(event, 1);
		},
		async boardEdit() {
			if (!this.$refs.infrmNm.value) {
				alert('제목을 입력하세요.');
				this.$refs.infrmNm.focus();
				return false;
			}
			if (this.viewData.infrmNm.length > 100) {
				alert('제목은 100자 이내로 입력해주세요.');
				this.$refs.infrmNm.focus();
				return false;
			}
			if (this.viewData.infrmDtlCn.length > 100) {
				alert('설명글은 100자 이내로 입력해주세요.');
				this.$refs.infrmDtlCn.focus();
				return false;
			}
			// if (!this.vatchFileNm[0] && !this.vfileNm[0] && !this.viewData.urlAddr) {
			// 	if (
			// 		!this.$refs.file.files[0] &&
			// 		!this.$refs.fileimg.files[0] &&
			// 		!this.urlAddr
			// 	) {
			// 		alert('첨부파일 또는 이미지 또는 링크 주소 중 하나는 입력하세요.');
			// 		return false;
			// 	}
			// }
			if (this.viewData.urlAddr) {
				if (!isValidHttpUrl(this.viewData.urlAddr)) {
					alert('링크주소를 확인 해주세요');
					this.$refs.urlAddr.focus();
					return false;
				}
			}
			this.$store.commit('boardList/updateState', { loading: true });
			let editData = new FormData();
			editData.append('regNo', this.$route.params.id);
			editData.append('rptChgNm', this.viewData.rptChgNm);
			editData.append('regYr', this.viewData.regYr);
			editData.append('infrmNm', this.$refs.infrmNm.value);
			editData.append('atchFileNms', this.vatchFileNm);
			editData.append('strgAtchFileNms', this.vstrgAtchFileNm);
			editData.append('infrmDtlCn', this.viewData.infrmDtlCn);
			if (!this.vatchFileNm[0]) {
				for (var i = 0; i < this.$refs.file.files.length; i++) {
					let file = this.$refs.file.files[i];
					editData.append('atchFile', file);
				}
			}
			editData.append('fileNms', this.vfileNm);
			editData.append('strgFileNms', this.vstrgFileNm);
			if (!this.vfileNm[0]) {
				for (var j = 0; j < this.$refs.fileimg.files.length; j++) {
					let file = this.$refs.fileimg.files[j];
					editData.append('imgFile', file);
				}
			}
			editData.append('urlAddr', this.viewData.urlAddr);
			editData.append('atchYn', this.atchYn);
			await editDoard(
				this.dbName, //db api 이름
				editData,
			)
				.then(() => {
					this.$store.commit('boardList/updateState', { loading: false });
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
