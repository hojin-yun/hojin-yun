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
					<div v-if="loading" class="loading"></div>
					<form id="formData" @submit.prevent="boardEdit">
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
												v-model="viewData.infrmNm"
												ref="infrmNm"
											/>
										</td>
									</tr>
									<tr>
										<th class="vtop"><span class="star">내용</span></th>
										<td>
											<textarea
												name="faqContents"
												id="faqContents"
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
import boardView from '@/components/admin/mixin/boardView';
import { loginOut } from '@/utils/index';
export default {
	mixins: [boardView],
	components: {
		ButtonBx,
		AsideMenu,
		ButtonEdit,
	},
	data() {
		return {
			dbName: 'faq',
			pageName: 'edit',
		};
	},
	methods: {
		async boardEdit() {
			// this.loading = true;
			if (!this.viewData.infrmNm) {
				alert('제목을 입력하세요.');
				this.$refs.infrmNm.focus();
				return false;
			}
			if (this.viewData.infrmNm.length > 100) {
				alert('제목은 100자 이내로 입력해주세요.');
				this.$refs.infrmNm.focus();
				return false;
			}
			if (!this.viewData.infrmDtlCn) {
				alert('내용을 입력하세요.');
				this.$refs.infrmDtlCn.focus();
				return false;
			}
			if (this.viewData.infrmDtlCn.length > 4000) {
				alert('내용은 4000자 이내로 입력해주세요.');
				this.$refs.infrmDtlCn.focus();
				return false;
			}

			// this.$store.commit('boardList/updateState', { loading: true });
			let editData = {};
			editData.regNo = this.$route.params.id;
			editData.infrmNm = this.viewData.infrmNm;
			editData.infrmDtlCn = this.viewData.infrmDtlCn;
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
			setTimeout(() => {
				this.loading = false;
			}, 100);
		},
	},
};
</script>
