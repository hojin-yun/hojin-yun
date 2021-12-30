<template>
	<div>
		<section
			class="conSection"
			style="padding-bottom: 50px"
			v-if="ksicCds.length > 0"
		>
			<div class="txt_title01" v-if="pageTi">{{ pageTi }}</div>
			<div class="tbl_type mobile_table" :style="`height:${tableHeight}px`">
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
					id="TableAddOne"
					:src="`${ifrurl}?reportId=${tableId}&start=${yearSection[0]}&end=${yearSection[1]}&nation=&ind=${ksicCds}`"
					title=""
					frameborder="0"
				></iframe>
			</div>
		</section>
	</div>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners';
import { mapState } from 'vuex';
export default {
	props: ['tableId', 'pageTi', 'tableHeight'],
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
		...mapState('analysis', ['yearSection', 'ksicCds']),
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
