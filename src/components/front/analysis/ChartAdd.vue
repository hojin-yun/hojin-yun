<template>
	<div>
		<div v-for="(item, i) in ksicArr" :key="i">
			<section
				class="conSection"
				v-if="item.isShow"
				style="padding-bottom: 50px"
			>
				<div class="txt_title01">
					<strong v-html="item.name"></strong>
					<strong v-if="pageTi">{{ pageTi }}</strong>
				</div>
				<div class="analysis-chartarea">
					<div class="half" v-if="iframeLoad">
						<half-circle-spinner
							:animation-duration="1000"
							:size="40"
							color="#007dcd"
						/>
					</div>
					<iframe
						v-if="mstrLogin"
						width="100%"
						height="100%"
						:id="item.code"
						:src="`${ifrurl}?reportId=${reportId}&start=${yearSection[0]}&end=${yearSection[1]}&nation=${nationCode}&ind=${ksicCds[i]}&aterm=${yarsChange}`"
						title=""
						frameborder="0"
					></iframe>
					<p class="chat_txt">
						*이곳을 손으로 넘기면 그래프 확인이 가능합니다*
					</p>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners';
import { mapState } from 'vuex';
export default {
	props: ['reportId', 'pageTi'],
	components: {
		HalfCircleSpinner,
	},
	data() {
		return {
			nationKey: [],
			iframeLoad: false,
		};
	},
	computed: {
		...mapState('analysis', [
			'ksicArr',
			'yearSection',
			'ksicCds',
			'nationCode',
			'yarsChange',
		]),
		ifrurl() {
			return process.env.VUE_APP_MSTR;
		},
		mstrLogin() {
			return this.$store.state.mstr.mstrLogin;
		},
	},
	mounted() {
		//this.iframeLoad = true;
		const _this = this;
		$('iframe').bind('load', function () {
			_this.iframeLoad = false;
			let head = $(this).contents().find('head');
			let css =
				'<style>.workstation .mstrmojo-UnitContainer .hover-menu-btn{top:-50px;}</style>';
			$(head).append(css);
		});
	},
};
</script>
