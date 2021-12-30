<template>
	<div class="gnb-sub-menus" id="gnbSubMenus">
		<div class="backdrop" @mouseenter="hideGnbSubMenu"></div>
		<div class="gnb-sub-menus-container">
			<div class="menus">
				<ul>
					<li
						v-for="(text, i) in gnbMenu"
						:key="i"
						@mouseenter="enterMenus"
						@mouseleave="leaveMenus"
					>
						<ul class="sub-menu">
							<li
								v-for="(texts, j) in text.sub"
								:key="j"
								:class="
									$route.meta.gnb == '분석 보고서'
										? { on: $route.params.id == texts.name }
										: { on: $route.meta.titles == texts.name }
								"
							>
								<router-link
									class="twoD"
									:to="texts.link"
									:title="texts.name + '이동하기'"
									@click.native="hideGnbSubMenu"
								>
									<span>{{ texts.name }}</span>
								</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PcNavMenu',
	props: ['gnbMenu'],
	methods: {
		hideGnbSubMenu() {
			window.scrollTo(0, 0);
			$('#header #gnbSubMenus').removeClass('active');
			$('#nav .gnb li').addClass('active').siblings().removeClass('active');
		},
		enterMenus(event) {
			let index = $(event.target).index();
			$('#nav .gnb li:eq(' + index + ')')
				.addClass('active')
				.siblings()
				.removeClass('active')
				.addClass('inactive');
		},
		leaveMenus(event) {
			let index = $(event.target).index();
			$('#nav .gnb li:eq(' + index + ')')
				.removeClass('active')
				.siblings()
				.removeClass('inactive');
		},
	},
};
</script>
