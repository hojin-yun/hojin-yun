<template>
	<div>
		<header
			id="header"
			class="opaque fixed sub_header"
			@mouseleave="navMouseLeave"
		>
			<div class="header-anim">
				<div class="header-container">
					<div class="headerQuick">
						<ul>
							<li>
								<a
									href="/MicroStrategy/servlet/mstrWeb?evt=3010&src=mstrWeb.3010&Server=211.109.9.106&Project=Patant&Port=0"
									title="데이터 분석시스템 바로가기 새창"
									target="_blank"
								>
									데이터 분석시스템 바로가기
								</a>
							</li>
						</ul>
					</div>
					<div class="header-inner">
						<h1 class="brand">
							<router-link to="/" title="특허 빅데이터 포털 메인으로">
								<span>특허 빅데이터 포털</span>
							</router-link>
						</h1>
						<div class="utils">
							<span class="mSearchBtn" title="검색창 열기" @click="mSearchBtn">
								<i class="ti-search"></i>
							</span>
							<ul class="menu">
								<li class="toggle-menu">
									<a
										href="#none"
										class="btn-toggle-menu"
										@click="btnToggleMenu"
										title="메뉴 열기"
									>
										<span>메뉴 열기</span>
									</a>
								</li>
							</ul>
						</div>
						<div class="topRightArea">
							<TopAreaSearch />
							<div class="topSiteBtnArea">
								<a
									href="#"
									class="topSiteBtn"
									@click="topSiteBtn"
									title="사이트맵 보기"
								>
									사이트맵
								</a>
							</div>
						</div>
					</div>
					<PcNav :gnbMenu="gnbMenu" :menuTimer="menuTimer" />
				</div>
			</div>
			<PcNavMenu :gnbMenu="gnbMenu" />
		</header>
		<!-- mobile nav -->
		<MobileNav :gnbMenu="gnbMenu" :pausedScrollTop="pausedScrollTop" />
		<!-- mobile nav -->
		<!-- mobile search -->
		<TopSearchView />
		<!-- mobile search -->
		<!-- 사이트맵-->
		<AllMenu :gnbMenu="gnbMenu" v-slimscroll="amoptions" />
		<!-- 사이트맵 -->
	</div>
</template>

<script>
import PcNav from './PcNav';
import PcNavMenu from './PcNavMenu';
import MobileNav from './MobileNav';
import TopAreaSearch from './TopAreaSearch';
import AllMenu from './AllMenu';
import TopSearchView from './TopSearchView';
import { mapState } from 'vuex';

export default {
	name: 'Header',
	components: {
		PcNav,
		PcNavMenu,
		MobileNav,
		TopAreaSearch,
		AllMenu,
		TopSearchView,
	},
	data() {
		return {
			amoptions: {
				height: '100%',
			},
			pausedScrollTop: 0,
			menuTimer: false,
		};
	},
	computed: {
		...mapState('gnb', ['gnbMenu']),
	},
	methods: {
		navMouseLeave() {
			$('#header').removeClass('gnb-sub-menu-opened');
			$('#header #nav .gnb li').removeClass('active inactive');
			$('#header .gnb-sub-menus .gnb-sub-menu').removeClass('active');
			$('#header #gnbSubMenus').removeClass('active');
			$('#nav .gnb li').addClass('active').siblings().removeClass('active');
			this.menuTimer = true;
		},
		topSiteBtn() {
			if ($('.allMenu').css('display') == 'none') {
				$('.allMenu').slideDown('fast');
			} else {
				$('.allMenu').slideUp('fast');
			}
		},
		mSearchBtn() {
			$('.topSearchView').fadeIn('fast');
		},
		btnToggleMenu(e) {
			e.preventDefault();
			this.showMobileNav();
		},
		showMobileNav() {
			this.pausedScrollTop = $(window).scrollTop();
			$('body').addClass('mobile-nav-opened');
			$('body').css({ top: -this.pausedScrollTop });
			if (
				this.pausedScrollTop >
				$(window).innerHeight() - $('#header .header-container').innerHeight()
			) {
				$('body').addClass('header-fixed-at-mobile-nav-opened');
			} else {
				$('body').removeClass('header-fixed-at-mobile-nav-opened');
			}
		},
	},
};
</script>

<style></style>
