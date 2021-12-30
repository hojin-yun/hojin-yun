<template>
	<div class="allMenu">
		<div class="siteMap">
			<div class="sitemapCloseBtn">
				<span title="사이트맵 닫기" @click="sitemapCloseBtn">
					사이트맵 닫기
				</span>
			</div>
			<div class="menuD">
				<div class="list" v-for="(text, i) in gnbMenu" :key="i">
					<div class="oneD">{{ text.name }}</div>
					<div class="menuD">
						<div class="menu" v-for="(texts, j) in text.sub" :key="j">
							<router-link
								class="twoD"
								:to="texts.link"
								:title="texts.name + '이동하기'"
								@click.native="sitemapCloseBtn"
							>
								{{ texts.name }}
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AllMenu',
	props: ['gnbMenu'],
	methods: {
		sitemapCloseBtn() {
			$('.allMenu').slideUp('fast');
		},
	},
};
</script>

<style></style>
