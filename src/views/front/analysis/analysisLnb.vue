<template>
	<div id="lnb">
		<h2 class="sub_title_1">분석서비스</h2>
		<div class="tabType01 tab_basic" id="respondSelect">
			<span
				class="sel_txt"
				v-for="(texts, i) in lnbMenu"
				:key="i"
				:class="{ active: $route.meta.titles == texts.name }"
				@click="eShow()"
			>
				{{ texts.name }}
			</span>
			<ul class="tabArea" ref="tabUl">
				<li
					v-for="(texts, j) in lnbMenu"
					:key="j"
					:class="{ active: $route.meta.titles == texts.name }"
				>
					<router-link
						class="deth1"
						:to="texts.link"
						:title="texts.name + '이동하기'"
					>
						<span>{{ texts.name }}</span>
					</router-link>
				</li>
			</ul>
			<!-- </div> -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'analysisLnb',
	data() {
		return {
			lnbMenu: [
				{
					name: '특허청별 출원동향',
					link: '/front/analysis/patent',
				},
				{
					name: '산업별 출원동향',
					link: '/front/analysis/industry',
				},
				{
					name: '국적별 출원동향',
					link: '/front/analysis/nationality',
				},
				{
					name: '산업성장주기',
					link: '/front/analysis/growth',
				},
				{
					name: '국적간 공동출원',
					link: '/front/analysis/association',
				},
				{
					name: '주요시장 확보율',
					link: '/front/analysis/major',
				},
				{
					name: '해외시장 확보율',
					link: '/front/analysis/foreign',
				},
				{
					name: '연평균 성장률',
					link: '/front/analysis/average',
				},
				{
					name: '기술 부상도',
					link: '/front/analysis/injury',
				},
				{
					name: '특허점유율',
					link: '/front/analysis/share',
				},
				{
					name: 'TOP10 출원인 분석',
					link: '/front/analysis/top',
				},
			],
		};
	},
	mounted() {
		window.addEventListener('resize', this.eResize);
	},
	methods: {
		eResize() {
			const tabArea = $('.tabArea');
			if (window.innerWidth < 992) {
				tabArea.removeClass('active');
			} else {
				tabArea.addClass('active');
			}
		},
		eShow() {
			$('.tabArea').toggleClass('active');
		},
	},
};
</script>
