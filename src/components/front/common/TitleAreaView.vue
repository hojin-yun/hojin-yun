<template>
	<div class="titleAreaView">
		<div class="mainLocation">
			<div class="cont">
				<ul class="mainLocation_area">
					<li class="li home">
						<router-link to="/" title="메인으로 이동"> HOME </router-link>
					</li>
					<li class="li">
						<a
							href="#none"
							class="link"
							:title="$route.meta.gnb + '메뉴열기'"
							@click="locationLink"
						>
							{{ $route.meta.gnb }}<em>메뉴열기</em>
						</a>
						<div class="dep" @mouseleave="leaveDep">
							<ul>
								<li
									v-for="(text, i) in gnbMenu"
									:key="i"
									:class="{ on: $route.meta.gnb == text.name }"
								>
									<router-link :to="text.link" :title="text.name + ' 이동하기'">
										<span>{{ text.name }}</span>
									</router-link>
								</li>
							</ul>
						</div>
					</li>
					<li class="li" v-if="$route.meta.gnbNo != 5">
						<a
							href="#none"
							class="link"
							:title="$route.meta.titles + '메뉴열기'"
							@click="locationLink"
							@focus="focusLink"
						>
							{{ $route.meta.titles }}<em>메뉴열기</em>
						</a>
						<div class="dep" @mouseleave="leaveDep">
							<ul>
								<li
									v-for="(text, i) in gnbMenu[numberLength].sub"
									:key="i"
									:class="{ on: $route.meta.titles == text.name }"
								>
									<router-link
										:to="text.link"
										:title="text.name + ' 이동하기'"
										@focus="focusDep"
									>
										<span>{{ text.name }}</span>
									</router-link>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	computed: {
		...mapState('gnb', ['gnbMenu']),
		numberLength() {
			return this.$route.meta.gnbNo - 1;
		},
	},
	methods: {
		focusDep(event) {
			$(event.target).closest('.li').addClass('act');
			$(event.target)
				.closest('.li')
				.find('.dep ul')
				.css(
					'min-width',
					$(event.target).closest('.li').find('.link').innerWidth(),
				);
			$(event.target).closest('.li').find('.link em').text('메뉴닫기');
		},
		focusLink() {
			$('.mainLocation .li').removeClass('act');
			$('.mainLocation .link em').text('메뉴열기');
		},
		leaveDep() {
			$('.mainLocation .li').removeClass('act');
			$('.mainLocation .link em').text('메뉴열기');
		},
		locationLink(event) {
			if ($(event.target).closest('.li').hasClass('act')) {
				$(event.target).closest('.li').removeClass('act');
				$(event.target).closest('.li').find('.link em').text('메뉴열기');
			} else {
				$('.mainLocation .li').removeClass('act');
				$(event.target).closest('.li').addClass('act');
				$(event.target)
					.closest('.li')
					.find('.dep ul')
					.css(
						'min-width',
						$(event.target).closest('.li').find('.link').innerWidth(),
					);
				$(event.target).closest('.li').find('.link em').text('메뉴닫기');
			}
		},
	},
};
</script>
