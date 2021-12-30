<template>
	<nav id="nav">
		<ul class="gnb">
			<li
				v-for="(text, i) in gnbMenu"
				:key="i"
				@mouseover="navMouseOver"
				:class="{
					on: $route.meta.gnbNo - 1 == i,
				}"
			>
				<router-link
					:to="text.link"
					:title="text.name + '이동하기'"
					@click.native="gnbClick"
				>
					<span>{{ text.name }}</span>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
let timer;
export default {
	name: 'pcnav',
	props: ['gnbMenu', 'menuTimer'],
	data() {
		return {
			GlobalData: {
				isMain: $('body').hasClass('main'),
			},
		};
	},
	mounted() {
		if (this.menuTimer) {
			clearTimeout(timer);
		}
		if (!$('body').hasClass('main')) $('#footer .anim-group').addClass('in');
	},
	methods: {
		gnbClick() {
			$('#header #gnbSubMenus').removeClass('active');
			$('#nav .gnb li').addClass('active').siblings().removeClass('active');
		},
		navMouseOver(event) {
			$(event.target)
				.closest('li')
				.removeClass('inactive')
				.addClass('active')
				.siblings()
				.removeClass('active')
				.addClass('inactive');
			this.hideSearch();
			if ($('body').hasClass('main')) {
				timer = setTimeout(function () {
					$('#header #gnbSubMenus').addClass('active');
				}, 200);
			} else {
				$('#header #gnbSubMenus').addClass('active');
			}
		},
		hideSearch() {
			$('#header #search').removeClass('active');
			$('#header .search .btn-close').hide();
			$('#header .search .btn-search').show();
			$('form[name="search_form"] input[name="query"]').val('');
		},
	},
};
</script>
