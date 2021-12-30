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
					<div v-if="loading" class="loading"></div>
					<ViewBoard :dbName="dbName" :viewData="viewData" :dayData="toDay" />
					<ButtonRead :dbName="dbName" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import ButtonBx from '@/components/admin/ButtonBx.vue';
import AsideMenu from '@/components/admin/AsideMenu.vue';
import ButtonRead from '@/components/admin/ButtonRead.vue';
import ViewBoard from '@/components/admin/BoardView.vue';
import boardView from '@/components/admin/mixin/boardView';
import { formatDate } from '@/utils/index';
export default {
	mixins: [boardView],
	components: {
		ButtonBx,
		AsideMenu,
		ButtonRead,
		ViewBoard,
	},
	data() {
		return {
			dbName: 'excel',
			pageName: 'view',
		};
	},
	computed: {
		toDay() {
			return formatDate(this.dayData);
		},
	},
};
</script>
