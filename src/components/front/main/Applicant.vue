<template>
	<div class="rateWrap01Detail rateSlide01">
		<h3>출원인별 증감률 <span>TOP 5</span></h3>
		<swiper
			class="swiper-container"
			id="rateSlider01"
			:options="rateSlider01Option"
		>
			<swiper-slide
				class="rateSlideList"
				v-for="itme in mainanalysisTopNList"
				:key="itme.aplcnRk"
			>
				<h4 v-html="itme.aplcnNm"></h4>
				<p
					class="kpbIndicator"
					:class="itme.data[0].totalRate >= 0 ? 'upIndi' : 'downIndi'"
				>
					{{ itme.data[0].totalRate.toFixed(0) }}<span>%</span>
				</p>
				<p class="rateNum">0{{ itme.aplcnRk }}</p>
				<div class="rateDl">
					<dl v-for="(itmes, j) in itme.data" :key="j">
						<dt
							@click="
								analysisPush(itmes.ksicNm3, itmes.ksicCd3, itmes.ksicLrgCd)
							"
						>
							{{ itmes.ksicNm3 }}
						</dt>
						<dd>
							<p
								class="kpbIndicator"
								:class="itmes.ksicRate >= 0 ? 'upIndi' : 'downIndi'"
							>
								{{ itmes.ksicRate.toFixed(0) }}%
							</p>
						</dd>
						<dd></dd>
					</dl>
				</div>
			</swiper-slide>
		</swiper>
		<div class="swiper-buttonArea">
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { pushArr } from '@/utils/storage';
export default {
	props: ['mainanalysisTopNList'],
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			app: 5,
			rateSlider01Option: {
				slidesPerView: 2,
				clickable: false,
				spaceBetween: 0,
				navigation: {
					nextEl: '.rateSlide01 .swiper-button-next',
					prevEl: '.rateSlide01 .swiper-button-prev',
				},
			},
		};
	},
	methods: {
		analysisPush(name, code, lagcode) {
			pushArr(name, code, lagcode);
		},
	},
};
</script>
