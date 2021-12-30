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
import { dayReset } from '@/utils/index';
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
			dbName: 'notice',
			pageName: 'view',
		};
	},
	computed: {
		toDay() {
			return dayReset(this.dayData);
		},
	},
};
</script>
