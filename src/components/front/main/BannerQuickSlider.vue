<template>
	<div class="swiper-container" id="bannerQuickSlider">
		<swiper class="swiper-container" :options="bannerQuickSliderOption">
			<swiper-slide
				class="bannerList"
				v-for="list in mainBannerSlider"
				:v-show="list.pstgYn == 'y' ? showBanner : !showBanner"
				:key="list.regNo"
			>
				<div class="bannerCardCon">
					<a
						:href="list.urlAddr"
						:title="`${list.urlAddr}로 링크이동하기`"
						target="_blank"
					>
						<img :src="list.imgUrl" alt="메인배너" />
					</a>
				</div>
			</swiper-slide>
		</swiper>
		<div class="swiper-buttonArea">
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
		</div>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
	name: 'bannerArea',
	props: ['mainBannerSlider'],
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			listSize: 2,
			showBanner: true,
			bannerQuickSliderOption: {
				spaceBetween: 0,
				loop: true,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: '#bannerQuickSlider .swiper-button-next',
					prevEl: '#bannerQuickSlider .swiper-button-prev',
				},
			},
		};
	},
};
</script>
