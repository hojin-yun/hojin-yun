<template>
	<div class="bannerAll">
		<div class="bannerAllWrap">
			<div class="bannerAllQuick">
				<swiper
					class="swiper-container bannerSlide"
					:options="bannerSwiperOption"
				>
					<swiper-slide v-for="(banner, i) in bannerSwiper" :key="i">
						<div class="bannerCardCon">
							<a
								:href="banner.href"
								:target="banner.target"
								:title="banner.alt + ' 새창으로 이동'"
							>
								<img :src="banner.src" :alt="banner.alt" />
							</a>
						</div>
					</swiper-slide>
				</swiper>
				<div class="swiper-buttonArea">
					<div class="swiper-button-prev" slot="button-prev"></div>
					<div class="swiper-button-next" slot="button-next"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { mapState } from 'vuex';
export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	computed: {
		...mapState('bannerAll', ['bannerSwiper', 'bannerSwiperOption']),
	},
};
</script>
