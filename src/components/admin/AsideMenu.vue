<template>
	<div class="aside_menu">
		<span class="kpb_logo"
			><router-link to="/pbipAdmin/main"
				><img
					src="@/assets/css/admin/img/logo_KPB.png"
					alt="KPBCenter" /></router-link
		></span>
		<div class="aside_menu_list">
			<ul>
				<li :class="{ active: 1 == activeMenu }">
					<router-link to="/pbipAdmin/notice/">공지사항</router-link>
				</li>
				<li :class="{ active: 2 == activeMenu }">
					<router-link to="/pbipAdmin/report/">분석보고서</router-link>
				</li>
				<li :class="{ active: 3 == activeMenu }">
					<router-link to="/pbipAdmin/faq/">FAQ</router-link>
				</li>
				<li :class="{ active: 4 == activeMenu }">
					<router-link to="/pbipAdmin/visitor/">방문자 통계</router-link>
				</li>
				<li :class="{ active: 5 == activeMenu }">
					<router-link to="/pbipAdmin/banner/">메인배너</router-link>
				</li>
				<li :class="{ active: 6 == activeMenu }">
					<router-link to="/pbipAdmin/popup/">팝업관리</router-link>
				</li>
				<li :class="{ active: 7 == activeMenu }">
					<router-link to="/pbipAdmin/user/">계정관리</router-link>
				</li>
				<li :class="{ active: 9 == activeMenu }">
					<router-link to="/pbipAdmin/excel/">IPC/CPC 엑셀 관리</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: 'asideMenu',
	computed: {
		activeMenu() {
			return this.$route.meta.gnb;
		},
	},
};
</script>
