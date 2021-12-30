<template>
	<div id="lnb">
		<h2 class="sub_title_1">분석서비스</h2>
		<div class="tabType01 tab_basic" id="respondSelect">
			<span
				class="sel_txt"
				v-for="(texts, i) in gnbMenu[0].sub"
				:key="i"
				:class="{ active: $route.meta.titles == texts.name }"
				@click="eShow()"
			>
				{{ texts.name }}
			</span>
			<ul class="tabArea" ref="tabUl">
				<li
					v-for="(texts, j) in gnbMenu[0].sub"
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
import { mapState } from 'vuex';
export default {
	name: 'analysisLnb',
	data() {
		return {};
	},
	computed: {
		...mapState('gnb', ['gnbMenu']),
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
