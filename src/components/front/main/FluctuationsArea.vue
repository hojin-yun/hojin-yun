<template>
	<div class="fluctuationsArea rateSlide01">
		<div class="fluctuationsWrap fluctuationsListWrap">
			<h3>전 분기 대비 변동률 TOP 8</h3>
			<div v-if="isMobile">
				<swiper
					class="swiper-container"
					:options="fluctuationsOption"
					id="fluctuationsSlide"
				>
					<swiper-slide
						class="fluctuationsList"
						v-for="(fluctuations, i) in maintrendTopNList"
						:key="i"
					>
						<div
							class="fListWrap"
							@click="
								analysisPush(
									fluctuations.ksicNm3,
									fluctuations.ksicCd3,
									fluctuations.ksicLrgCd,
								)
							"
						>
							<h4>{{ fluctuations.ksicNm3 }}</h4>
							<div class="fListNum">
								<p
									class="kpbIndicator"
									:class="fluctuations.intvl > 0 ? 'upIndi' : 'downIndi'"
								>
									{{ Math.ceil(fluctuations.intvl) }}<span>%</span>
								</p>
							</div>
							<div class="fListgraphArea">
								<ul>
									<li v-for="(itme, j) in mainTTMList[i]" :key="j">
										<div
											:style="
												'height:' +
												Math.floor(
													(100 / Math.max.apply(null, mainTTMList[i])) * itme,
												) +
												'%'
											"
										>
											<span>{{ itme }}</span>
										</div>
									</li>
								</ul>
							</div>
							<div class="fListRemark">
								<dl>
									<dt>{{ fluctuations.bfrQtrApplCnt }}</dt>
									<dd>{{ fluctuations.qtrApplCnt }}</dd>
								</dl>
							</div>
						</div>
					</swiper-slide>
				</swiper>
				<div class="swiper-pagination"></div>
			</div>
			<div v-else>
				<div id="fluctuationsSlide">
					<div class="fluctuationsListWrap swiper-wrapper">
						<div
							class="fluctuationsList"
							v-for="(fluctuations, i) in maintrendTopNList"
							:key="i"
						>
							<div
								class="fListWrap"
								@click="
									analysisPush(
										fluctuations.ksicNm3,
										fluctuations.ksicCd3,
										fluctuations.ksicLrgCd,
									)
								"
							>
								<h4>{{ fluctuations.ksicNm3 }}</h4>
								<div class="fListNum">
									<p
										class="kpbIndicator"
										:class="fluctuations.intvl > 0 ? 'upIndi' : 'downIndi'"
									>
										{{ Math.ceil(fluctuations.intvl) }}<span>%</span>
									</p>
								</div>
								<div class="fListgraphArea">
									<ul>
										<li v-for="(itme, j) in mainTTMList[i]" :key="j">
											<div
												:style="
													'height:' +
													Math.floor(
														(100 / Math.max.apply(null, mainTTMList[i])) * itme,
													) +
													'%'
												"
											>
												<span>{{ itme }}</span>
											</div>
										</li>
									</ul>
								</div>
								<div class="fListRemark">
									<dl>
										<dt>{{ fluctuations.bfrQtrApplCnt }}</dt>
										<dd>{{ fluctuations.qtrApplCnt }}</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { pushArr } from '@/utils/storage';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
	props: ['maintrendTopNList', 'mainTTMList'],
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			isMobile: false,
			fluctuationsOption: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 0,
				pagination: {
					el: '.rateSlide01 .swiper-pagination',
					clickable: true,
				},
			},
		};
	},
	created() {
		this.handleResize();
	},
	mounted() {
		window.addEventListener('resize', this.handleResize);
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.handleResize);
	},
	methods: {
		analysisPush(name, code, lagcode) {
			pushArr(name, code, lagcode);
		},
		handleResize() {
			if (window.innerWidth > 760) {
				this.isMobile = false;
			} else {
				this.isMobile = true;
			}
		},
	},
};
</script>
