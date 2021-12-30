<template>
	<div class="wrap">
		<AsideMenu />
		<div id="contents" class="contents">
			<div class="top">
				<div class="tit_box">
					<strong>계정 관리</strong>
					<span>계정관리 편집 및 추가하는 페이지입니다 </span>
				</div>
				<ButtonBx />
			</div>
			<div class="center">
				<div class="inner">
					<div class="view_table accout">
						<table>
							<colgroup>
								<col width="160px;" />
								<col />
							</colgroup>
							<tbody>
								<tr>
									<th>아이디</th>
									<td v-html="viewData.userId"></td>
								</tr>
								<tr>
									<th>이름</th>
									<td>{{ viewData.userNm }}</td>
								</tr>
								<tr>
									<th>부서명</th>
									<td v-html="viewData.ogdpInstNm"></td>
								</tr>
							</tbody>
						</table>
					</div>

					<ButtonRead
						:dbName="dbName"
						:regNo="viewData.regNo"
						:ogdpInstNm="viewData.ogdpInstNm"
						:userNm="viewData.userNm"
						:useYn="viewData.useYn"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { viewUser } from '@/api/boardList'; //db api
import ButtonBx from '@/components/admin/ButtonBx.vue';
import AsideMenu from '@/components/admin/AsideMenu.vue';
import ButtonRead from '@/components/admin/ButtonRead.vue';
export default {
	components: {
		ButtonBx,
		AsideMenu,
		ButtonRead,
	},
	data() {
		return {
			dbName: 'user',
			viewData: [],
			viewId: '',
		};
	},
	created() {
		this.viewload();
	},
	methods: {
		async viewload() {
			let viewData = {};
			viewData.userId = this.$route.params.id;
			viewData.useYn = this.$route.query.useYn;
			const { data } = await viewUser(
				this.dbName, //db api 이름
				viewData,
			);
			this.viewData = data.result.data;
		},
	},
};
</script>
