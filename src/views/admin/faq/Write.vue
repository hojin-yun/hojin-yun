<template>
	<div class="wrap">
		<AsideMenu />
		<div id="contents" class="contents">
			<div class="top">
				<div class="tit_box">
					<strong>FAQ</strong>
					<span>FAQ 내용을 편집 및 추가하는 페이지입니다. </span>
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
										<th><label for="faqTit" class="star">제목</label></th>
										<td>
											<input
												type="text"
												id="faqTit"
												v-model="infrmNm"
												ref="infrmNm"
											/>
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
import { loginOut } from '@/utils/index';
export default {
	components: {
		ButtonBx,
		AsideMenu,
		ButtonWrite,
	},
	data() {
		return {
			dbName: 'faq',
			infrmNm: '',
			infrmDtlCn: '',
		};
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
			let formData = {};
			formData.regNo = this.$route.params.id;
			formData.infrmNm = this.infrmNm;
			formData.infrmDtlCn = this.infrmDtlCn;
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
