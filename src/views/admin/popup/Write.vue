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
												v-model="infrmNm"
												ref="infrmNm"
											/>
										</td>
									</tr>
									<tr>
										<th><span class="">상태</span></th>
										<td colspan="3">
											<select
												v-model="pstgYn"
												@change="pstgChange($event)"
												ref="pstgYn"
											>
												<option value="n">미출력</option>
												<option value="y">출력</option>
											</select>
										</td>
									</tr>
									<tr>
										<th class="vtop"><span class="">시작 날짜</span></th>
										<td>
											<VDatePicker
												locale="ko"
												v-model="startData"
												ref="startData"
												color="blue"
												:max-date="endData"
											>
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
										<th class="vtop"><span class="">종료 날짜</span></th>
										<td>
											<VDatePicker
												locale="ko"
												v-model="endData"
												ref="endData"
												color="blue"
												:min-date="startData"
											>
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
												v-model="popupW"
												ref="popupW"
												style="width: 200px"
												onKeyup="this.value=this.value.replace(/[^0-9]/g,'');"
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
												v-model="popupH"
												ref="popupH"
												style="width: 200px"
												onKeyup="this.value=this.value.replace(/[^0-9]/g,'');"
											/>
											px
										</td>
									</tr>
									<tr>
										<th class="vtop">
											<span class="star">팝업 위치 (x)</span><br />
											<span class="txt_help"> 숫자만 가능 </span>
										</th>
										<td>
											<input
												type="text"
												id="noticeTit"
												v-model="popupLot"
												ref="popupLot"
												style="width: 200px"
												onKeyup="this.value=this.value.replace(/[^0-9]/g,'');"
											/>
										</td>
										<th class="vtop">
											<span class="star">팝업위치(y)</span><br />
											<span class="txt_help"> 숫자만 가능 </span>
										</th>
										<td>
											<input
												type="text"
												id="noticeTit"
												v-model="popupLat"
												ref="popupLat"
												style="width: 200px"
												onKeyup="this.value=this.value.replace(/[^0-9]/g,'');"
											/>
										</td>
									</tr>
									<tr>
										<th class="vtop"><span class="">팝업 내용</span></th>
										<td colspan="3">
											<textarea
												name="popContents"
												id="popContents"
												cols="50"
												rows="20"
												v-model="infrmDtlCn"
												ref="infrmDtlCn"
											></textarea>
										</td>
									</tr>
									<tr>
										<th class="vtop">팝업 이미지</th>
										<td colspan="3">
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
import VDatePicker from 'v-calendar/lib/components/date-picker.umd';
import { convertDateFormat, loginOut, isValidHttpUrl } from '@/utils/index';
export default {
	name: 'notice',
	components: {
		ButtonBx,
		AsideMenu,
		ButtonWrite,
		VDatePicker,
	},
	data() {
		return {
			dbName: 'popup',
			startData: new Date(),
			endData: new Date(),
			infrmNm: '',
			infrmDtlCn: '',
			urlAddr: '', //링크주소
			popupW: '',
			popupH: '',
			popupLot: '',
			popupLat: '',
			pstgYn: 'y',
			imgUrl: null,
			maxSize: 2000000,
		};
	},
	computed: {
		startDataGet() {
			return convertDateFormat(this.startData);
		},
		endDayGet() {
			return convertDateFormat(this.endData);
		},
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
		// async boardEdit1() {
		// 	for (var i = 0; i < this.$refs.file.files.length; i++) {
		// 		let file = this.$refs.file.files[i];
		// 	}
		// },
		async boardEdit() {
			if (!this.infrmNm) {
				alert('제목을 입력하세요.');
				this.$refs.infrmNm.focus();
				return false;
			} else if (this.infrmNm.length > 100) {
				alert('제목은 100자리 이내로 입력해주세요.');
				this.$refs.infrmNm.focus();
				return false;
			} else if (!this.startData) {
				alert('시작날짜를 입력하세요.');
				this.$refs.startData.focus();
				return false;
			} else if (!this.endData) {
				alert('종료날짜를 입력하세요.');
				this.$refs.endData.focus();
				return false;
			} else if (!this.popupW) {
				alert('팝업 넓이을 입력하세요.');
				this.$refs.popupW.focus();
				return false;
			} else if (!this.popupH) {
				alert('팝업  높이을 입력하세요.');
				this.$refs.popupH.focus();
				return false;
			} else if (!this.popupLot) {
				alert('팝업 위치 (x)을 입력하세요.');
				this.$refs.popupLot.focus();
				return false;
			} else if (!this.popupLat) {
				alert('팝업 위치 (y)을 입력하세요.');
				this.$refs.popupLat.focus();
				return false;
			} else if (!this.infrmDtlCn && this.$refs.file.files.length == 0) {
				alert('내용 또는 이미지를 입력하세요');
				this.$refs.infrmDtlCn.focus();
				return false;
			} else if (this.infrmDtlCn.length > 4000) {
				alert('내용은 4000자 이내로 입력해주세요.');
				this.$refs.infrmDtlCn.focus();
				return false;
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
			formData.append('infrmDtlCn', this.infrmDtlCn);
			if (this.$refs.file.files.length != 0) {
				for (var i = 0; i < this.$refs.file.files.length; i++) {
					let file = this.$refs.file.files[i];
					formData.append('atchFile', file);
				}
			}
			formData.append('pstgYn', this.pstgYn);
			formData.append('urlAddr', this.urlAddr);
			formData.append('pstgBgngYmd', this.startDataGet);
			formData.append('pstgEndYmd', this.endDayGet);
			formData.append('popupW', this.popupW);
			formData.append('popupH', this.popupH);
			formData.append('popupLot', this.popupLot);
			formData.append('popupLat', this.popupLat);
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
