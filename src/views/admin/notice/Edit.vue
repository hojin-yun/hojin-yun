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
										<th>등록일</th>
										<td>
											<VDatePicker
												locale="ko"
												v-model="dayData"
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
											<div>
												<input
													type="file"
													name="file"
													multiple
													ref="file"
												/><span style="margin-top: 5px; font-size: 12px">
													Ctrl를 누르고 선택 하시면 여러개 첨부 파일을 선택 할
													수 있습니다.
												</span>
											</div>
											<ul class="attach_list">
												<li v-for="(items, i) in vatchFileNm" :key="i">
													<span v-html="items"></span>
													<span @click="fileDelete(i)">
														<i class="icon icon_x"></i>
													</span>
												</li>
											</ul>
										</td>
									</tr>
									<tr>
										<th class="vtop"><span class="star">내용</span></th>
										<td>
											<textarea
												name="noticeContents"
												id="noticeContents"
												cols="50"
												rows="30"
												v-model="viewData.infrmDtlCn"
												ref="infrmDtlCn"
											></textarea>
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
import { convertDateFormat, loginOut, unescapeHtml } from '@/utils/index';
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
			dbName: 'notice',
			pageName: 'edit',
		};
	},
	computed: {
		dateValGet() {
			return convertDateFormat(this.dayData);
		},
		infrmNm() {
			return unescapeHtml(this.viewData.infrmNm);
		},
		infrmDtlCn() {
			return unescapeHtml(this.viewData.infrmDtlCn);
		},
	},
	methods: {
		fileDelete(event) {
			this.vatchFileNm.splice(event, 1);
			this.vstrgAtchFileNm.splice(event, 1);
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
			if (!this.$refs.infrmDtlCn.value) {
				alert('내용을 입력하세요.');
				this.$refs.infrmDtlCn.focus();
				return false;
			}
			if (this.viewData.infrmDtlCn.length > 4000) {
				alert('내용은 4000자 이내로 입력해주세요.');
				this.$refs.infrmDtlCn.focus();
				return false;
			}
			this.$store.commit('boardList/updateState', { loading: true });
			let editData = new FormData();
			editData.append('regNo', this.$route.params.id);
			editData.append('infrmNm', this.$refs.infrmNm.value);
			editData.append('infrmDtlCn', this.$refs.infrmDtlCn.value);
			editData.append('pstgYmd', this.dateValGet);
			editData.append('atchFileNms', this.vatchFileNm);
			editData.append('strgAtchFileNms', this.vstrgAtchFileNm);
			for (var i = 0; i < this.$refs.file.files.length; i++) {
				let file = this.$refs.file.files[i];
				editData.append('atchFile', file);
			}
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
