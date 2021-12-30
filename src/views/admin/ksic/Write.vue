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
												<option value="IPC">IPC</option>
												<option value="CPC">CPC</option>
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
										<th class="vtop">첨부파일</th>
										<td>
											<input
												type="file"
												ref="file"
												accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
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
import { loginOut } from '@/utils/index';

export default {
	components: {
		ButtonBx,
		AsideMenu,
		ButtonWrite,
	},
	data() {
		return {
			dbName: 'excel',
			rptChgNm: '', //분류명
			regYr: '', //년도
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
		async boardWrite() {
			if (!this.rptChgNm) {
				alert('분류를 선택하세요.');
				this.$refs.rptChgNm.focus();
				return false;
			} else if (!this.regYr) {
				alert('년도를 선택하세요.');
				this.$refs.regYr.focus();
				return false;
			} else if (!this.$refs.file.files[0]) {
				alert('첨부파일 입력하세요.');
				return false;
			}

			let formData = new FormData();
			formData.append('rptChgNm', this.rptChgNm);
			formData.append('regYr', this.regYr);
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
