<template>
	<div class="wrap">
		<AsideMenu />
		<div id="contents" class="contents">
			<div class="top">
				<div class="tit_box">
					<strong>공지사항</strong>
					<span
						>특허 빅데이터 포털의 공지사항을 편집 및 추가하는 페이지입니다.
					</span>
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
										<th>등록일</th>
										<td>
											<VDatePicker
												locale="ko"
												v-model="dateVal"
												color="blue"
												:max-date="new Date()"
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
										<th class="vtop">첨부파일</th>
										<td>
											<input type="file" name="file" multiple ref="file" />
											<span style="margin-top: 5px; font-size: 12px">
												Ctrl를 누르고 선택 하시면 여러개 첨부 파일을 선택 할 수
												있습니다.
											</span>
										</td>
									</tr>
									<tr>
										<th class="vtop"><span class="star">내용</span></th>
										<td>
											<textarea
												name="noticeContents"
												id="noticeContents"
												cols="50"
												v-model="infrmDtlCn"
												ref="infrmDtlCn"
												rows="30"
											></textarea>
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
import { convertDateFormat, loginOut } from '@/utils/index';
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
			dbName: 'notice',
			dateVal: new Date(),
			infrmNm: '',
			infrmDtlCn: '',
		};
	},
	computed: {
		dateValGet() {
			return convertDateFormat(this.dateVal);
		},
	},
	methods: {
		async boardWrite() {
			if (!this.infrmNm) {
				alert('제목을 입력하세요.');
				this.$refs.infrmNm.focus();
				return false;
			}
			if (this.infrmNm.length > 100) {
				alert('제목은 100자 이내로 입력해주세요.');
				this.$refs.infrmNm.focus();
				return false;
			}
			if (!this.infrmDtlCn) {
				alert('내용을 입력하세요.');
				this.$refs.infrmDtlCn.focus();
				return;
			}
			if (this.infrmDtlCn.length > 4000) {
				alert('내용은 4000자 이내로 입력해주세요.');
				this.$refs.infrmDtlCn.focus();
				return false;
			}
			let formData = new FormData();
			formData.append('infrmNm', this.infrmNm);
			formData.append('infrmDtlCn', this.infrmDtlCn);
			formData.append('pstgYmd', this.dateValGet);
			for (var i = 0; i < this.$refs.file.files.length; i++) {
				let file = this.$refs.file.files[i];
				formData.append('atchFile', file);
			}
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
