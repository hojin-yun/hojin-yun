<template>
	<div>
		<div id="WRAP">
			<Header />
			<div
				class="contentWrap"
				:class="{ mainContentWrap: $route.meta.titles === '메인' }"
			>
				<div class="pageLoading" v-if="$store.state.fboardList.loading">
					<half-circle-spinner
						:animation-duration="1000"
						:size="60"
						color="#007dcd"
					/>
				</div>
				<MainTitle />
				<TitleAreaView v-if="$route.meta.gnbNo" />
				<router-view></router-view>
			</div>
			<MainFooter />
		</div>
		<!-- toTop start -->
		<div id="gototop">
			<div class="gototopWrap">
				<a href="#WRAP" class="gotoTop" @click="gotoTop"><span>TOP</span></a>
			</div>
		</div>
		<LiteraryProperty /><!-- 저작권정책 -->
		<RefuseEmail /><!-- 이메일 무단수집 거부 -->
	</div>
</template>
<script>
import { mstrLoginIfm } from '@/api/mstrLogin'; //db api
import { HalfCircleSpinner } from 'epic-spinners';
import Header from '@/components/front/common/Header';
import TitleAreaView from '@/components/front/common/TitleAreaView';
import MainTitle from '@/views/front/common/MainTitle';
import MainFooter from '@/views/front/common/MainFooter';
import LiteraryProperty from '@/views/front/common/LiteraryProperty';
import RefuseEmail from '@/views/front/common/RefuseEmail';
import accessDataMinxin from '@/components/front/mixin/accessData';
export default {
	mixins: [accessDataMinxin],
	name: 'layout',
	components: {
		Header,
		TitleAreaView,
		MainTitle,
		MainFooter,
		LiteraryProperty,
		RefuseEmail,
		HalfCircleSpinner,
	},
	created() {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#gototop').fadeIn();
			} else {
				$('#gototop').fadeOut();
			}
		});
		if (!this.$store.state.mstr.mstrLogin) {
			this.mstrLogin();
		}
	},
	mounted() {
		if (!this.$store.state.mstr.mstrLogin) {
			this.mstrLogin();
		}
		$('iframe').bind('load', function () {
			let head = $(this).contents().find('head');
			let css =
				'<style>.workstation .mstrmojo-UnitContainer .hover-menu-btn{top:-50px;}</style>';
			$(head).append(css);
		});
	},
	methods: {
		getClientAddress(req) {
			return (
				(req.headers['x-forwarded-for'] || '').split(',')[0] ||
				req.connection.remoteAddress
			);
		},
		gotoTop(e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, 400);
		},
		async mstrLogin() {
			const { data } = await mstrLoginIfm();
			if (data.return == 'ok') {
				setTimeout(() => {
					this.$store.commit('mstr/updateState', { mstrLogin: true });
					$('iframe').bind('load', function () {
						let head = $(this).contents().find('head');
						let css =
							'<style>.workstation .mstrmojo-UnitContainer .hover-menu-btn{top:-50px;}</style>';
						$(head).append(css);
					});
				}, 1000);
			}
		},
	},
};
</script>

<style lang="css">
@import '~@/assets/css/layout.css';
</style>
