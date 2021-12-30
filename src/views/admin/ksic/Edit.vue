<template>
	<div class="wrap">
		<AsideMenu />
		<div id="contents" class="contents">
			<div class="top">
				<div class="tit_box">
					<strong>IPC/CPC 엑셀 관리</strong>
					<span>KSIC → IPC/CPC 엑셀 관리하는 페이지입니다. </span>
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
												<option value="IPC">IPC</option>
												<option value="CPC">CPC</option>
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
										<th class="vtop">첨부파일</th>
										<td>
											<input
												v-show="!vatchFileNm[0]"
												type="file"
												name="file"
												ref="file"
												accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
											/>
											<ul class="attach_list mt0">
												<li v-for="(items, i) in vatchFileNm" :key="i">
													<span v-html="items"></span>
													<span v-if="items" @click="fileDelete(i)">
														<i class="icon icon_x"></i>
													</span>
												</li>
											</ul>
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
import { loginOut } from '@/utils/index';

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
			dbName: 'excel',
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
	},
	updated() {
		this.vfileNm = this.viewData.fileNm;
		this.vstrgFileNm = this.viewData.strgFileNm;
	},
	methods: {
		fileDelete(event) {
			this.vatchFileNm.splice(event, 1);
			this.vstrgAtchFileNm.splice(event, 1);
		},
		async boardEdit() {
			this.$store.commit('boardList/updateState', { loading: true });
			let editData = new FormData();
			editData.append('regNo', this.$route.params.id);
			editData.append('regYr', this.viewData.regYr);
			editData.append('rptChgNm', this.viewData.rptChgNm);
			editData.append('atchFileNms', this.vatchFileNm);
			editData.append('strgAtchFileNms', this.vstrgAtchFileNm);
			if (!this.vatchFileNm[0]) {
				if (!this.$refs.file.files[0]) {
					alert('첨부파일 입력하세요.');
					return false;
				}
				for (var i = 0; i < this.$refs.file.files.length; i++) {
					let file = this.$refs.file.files[i];
					editData.append('atchFile', file);
				}
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
