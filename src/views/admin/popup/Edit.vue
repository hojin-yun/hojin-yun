<template>
	<div class="wrap">
		<AsideMenu />
		<div id="contents" class="contents">
			<div class="top">
				<div class="tit_box">
					<strong>팝업관리</strong>
					<span>초기화면 접속 시 자동으로 뜰 팝업레이어를 설정합니다. </span>
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
									<col width="160px" />
									<col />
								</colgroup>
								<tbody>
									<tr>
										<th><label for="noticeTit" class="star">제목</label></th>
										<td colspan="3">
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
										<td colspan="3">
											<select v-model="viewData.pstgYn">
												<option value="n">미출력</option>
												<option value="y">출력</option>
											</select>
										</td>
									</tr>
									<tr>
										<th class="vtop">시작 날짜</th>
										<td>
											<VDatePicker locale="ko" v-model="startData" color="blue">
												<template v-slot="{ inputValue, inputEvents }">
													<input
														type="text"
														:value="inputValue"
														v-on="inputEvents"
														style="width: 200px"
													/>
												</template>
											</VDatePicker>
										</td>
										<th class="vtop">종료 날짜</th>
										<td>
											<VDatePicker locale="ko" v-model="endData" color="blue">
												<template v-slot="{ inputValue, inputEvents }">
													<input
														type="text"
														:value="inputValue"
														v-on="inputEvents"
														style="width: 200px"
													/>
												</template>
											</VDatePicker>
										</td>
									</tr>
									<tr>
										<th class="vtop">
											<span class="star">팝업 넓이</span><br />
											<span class="txt_help"> 숫자만 가능 </span>
										</th>
										<td>
											<input
												type="text"
												id="noticeTit"
												v-model="viewData.popupW"
												style="width: 200px"
											/>
											px
										</td>
										<th class="vtop">
											<span class="star">팝업 높이</span><br />
											<span class="txt_help"> 숫자만 가능 </span>
										</th>
										<td>
											<input
												type="text"
												id="noticeTit"
												v-model="viewData.popupH"
												style="width: 200px"
											/>
											px
										</td>
									</tr>
									<tr>
										<th class="vtop">
											<span class="star">팝업 위치(x)</span><br />
											<span class="txt_help"> 숫자만 가능 </span>
										</th>
										<td>
											<input
												type="text"
												id="noticeTit"
												v-model="viewData.popupLot"
												style="width: 200px"
											/>
										</td>
										<th class="vtop">
											<span class="star">팝업 위치(y)</span><br />
											<span class="txt_help"> 숫자만 가능 </span>
										</th>
										<td>
											<input
												type="text"
												id="noticeTit"
												v-model="viewData.popupLat"
												style="width: 200px"
											/>
										</td>
									</tr>
									<tr>
										<th class="vtop">팝업 내용</th>
										<td colspan="3">
											<textarea
												name="popContents"
												id="popContents"
												cols="50"
												rows="20"
												v-model="viewData.infrmDtlCn"
												ref="infrmDtlCn"
											></textarea>
										</td>
									</tr>
									<tr>
										<th class="vtop">팝업 이미지</th>
										<td colspan="3">
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
												<img :src="imgUrl" />
											</div>
										</td>
									</tr>
									<tr>
										<th>
											링크주소
											<p class="txt_help">외부 주소 링크</p>
										</th>
										<td colspan="3">
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
import VDatePicker from 'v-calendar/lib/components/date-picker.umd';
import {
	convertDateFormat,
	loginOut,
	unescapeHtml,
	isValidHttpUrl,
} from '@/utils/index';
import boardView from '@/components/admin/mixin/boardView';
export default {
	mixins: [boardView],
	name: 'notice',
	components: {
		ButtonBx,
		AsideMenu,
		ButtonEdit,
		VDatePicker,
	},
	data() {
		return {
			dbName: 'popup',
			pageName: 'edit',
			imgUrl: null,
			maxSize: 2000000,
			isImg: false,
		};
	},
	computed: {
		startDataGet() {
			return convertDateFormat(this.startData);
		},
		endDayGet() {
			return convertDateFormat(this.endData);
		},
		infrmNm() {
			return unescapeHtml(this.viewData.infrmNm);
		},
		infrmDtlCn() {
			return unescapeHtml(this.viewData.infrmDtlCn);
		},
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
			const oday = new Date();
			var year = oday.getFullYear();
			var month = oday.getMonth() + 1;
			month = month >= 10 ? month : '0' + month;
			var day = oday.getDate();
			day = day >= 10 ? day : '0' + day;
			var today = [year, month, day].join('');
			if (!this.$refs.infrmNm.value) {
				alert('제목을 입력하세요.');
				this.$refs.infrmNm.focus();
				return;
			}
			if (today > this.endDayGet && this.viewData.pstgYn == 'y') {
				alert('종료 날짜를 먼저 수정하셔야 합니다.');
				return;
			}
			if (this.startDataGet > this.endDayGet) {
				alert('시작 날짜와 종료 날짜를 확인해주세요');
				return;
			}
			if (this.isImg) {
				if (!this.$refs.infrmDtlCn.value && this.$refs.file.files.length == 0) {
					alert('내용 또는 이미지를 입력하세요');
					return false;
				}
			}
			if (this.viewData.urlAddr) {
				if (!isValidHttpUrl(this.viewData.urlAddr)) {
					alert('링크주소를 확인 해주세요');
					this.$refs.urlAddr.focus();
					return false;
				}
			}
			let editData = new FormData();
			editData.append('regNo', this.$route.params.id);
			editData.append('infrmNm', this.$refs.infrmNm.value);
			editData.append('infrmDtlCn', this.$refs.infrmDtlCn.value);
			editData.append('pstgYn', this.viewData.pstgYn);
			if (this.fileNm[0]) {
				editData.append('fileNms', this.fileNm);
				editData.append('strgAtchFileNms', this.vstrgAtchFileNm);
			} else {
				editData.append('atchFile', this.$refs.file.files[0]);
			}
			editData.append('urlAddr', this.viewData.urlAddr);
			editData.append('pstgBgngYmd', this.startDataGet);
			editData.append('pstgEndYmd', this.endDayGet);
			editData.append('popupW', this.viewData.popupW);
			editData.append('popupH', this.viewData.popupH);
			editData.append('popupLot', this.viewData.popupLot);
			editData.append('popupLat', this.viewData.popupLat);
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
