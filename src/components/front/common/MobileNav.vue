<template>
	<aside id="mobileNav">
		<div class="mobile-nav">
			<div class="mobile-nav-header">
				<h1 class="brand">
					<a href="#"><span>특허 빅데이터 포털</span></a>
				</h1>
				<a
					href="#none"
					class="btn-toggle-menu active"
					title="메뉴 닫기"
					@click="btnToggleMenuCle"
				>
					<i class="ti-close"></i>
				</a>
			</div>
			<div class="mobile-nav-body">
				<ul class="gnb">
					<li
						v-for="(text, i) in gnbMenu"
						:key="i"
						:class="{ active: $route.meta.gnbNo - 1 == i }"
					>
						<div class="first-menu" @click="firstMenu">
							<span>{{ text.name }}</span>
						</div>
						<ul
							class="sub-menu"
							:style="$route.meta.gnbNo - 1 == i ? 'display: block' : null"
						>
							<li v-for="(texts, j) in text.sub" :key="j">
								<router-link
									class="twoD"
									:to="texts.link"
									:title="texts.name + '이동하기'"
									@click.native="btnToggleMenuCle"
									:class="{ on: $route.meta.titles == texts.name }"
								>
									{{ texts.name }}
								</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</aside>
</template>

<script>
export default {
	name: 'MobileNav',
	props: ['gnbMenu', 'pausedScrollTop'],
	methods: {
		btnToggleMenuCle(event) {
			$('body').removeClass('mobile-nav-opened');
			$('body').removeClass('header-fixed-at-mobile-nav-opened');
			if ($(event.target).attr('title') == '메뉴 닫기') {
				$(window).scrollTop(this.pausedScrollTop);
			}
		},
		firstMenu(event) {
			if ($(event.target).closest('li').hasClass('active')) {
				$(event.target).closest('.first-menu').next().stop().slideUp();
				$(event.target)
					.closest('li')
					.removeClass('active')
					.siblings()
					.removeClass('active');
			} else {
				$(event.target).closest('.first-menu').next().stop().slideDown();
				$(event.target)
					.closest('li')
					.addClass('active')
					.siblings()
					.removeClass('active');
			}
			$(event.target)
				.closest('li')
				.siblings()
				.find('.sub-menu')
				.stop()
				.slideUp();
		},
	},
};
</script>
