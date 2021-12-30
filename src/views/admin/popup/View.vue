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
					<div v-if="loading" class="loading"></div>
					<ViewBoard
						:dbName="dbName"
						:viewData="viewData"
						:dayData="toDay"
						:startDay="startDay"
						:endDay="endDay"
					/>
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
import { dayReset, formatDate } from '@/utils/index';
export default {
	mixins: [boardView],
	components: {
		ButtonBx,
		AsideMenu,
		ViewBoard,
		ButtonRead,
	},
	data() {
		return {
			dbName: 'popup',
			pageName: 'view',
		};
	},
	computed: {
		toDay() {
			return formatDate(this.dayData);
		},
		startDay() {
			return dayReset(this.startData);
		},
		endDay() {
			return dayReset(this.endData);
		},
	},
};
</script>
