<template>
	<div class="tabs-container guide-tab">
		<ul class="nav nav-tabs">
			<li :class="{ active: pageName == 'guide' }">
				<router-link to="/front/intro/guide" title="분석 서비스">
					<span>분석 서비스</span>
				</router-link>
			</li>
			<li :class="{ active: pageName == 'GuideMapping' }">
				<router-link to="/front/intro/guideMapping" title="분류별 연계맵핑">
					<span>분류별 연계맵핑</span>
				</router-link>
			</li>
			<li :class="{ active: pageName == 'GuideReport' }">
				<router-link to="/front/intro/guideReport" title="분석보고서">
					<span>분석보고서</span>
				</router-link>
			</li>
			<li :class="{ active: pageName == 'GuideIntro' }">
				<router-link to="/front/intro/guideIntro" title="플랫폼소개">
					<span>플랫폼소개</span>
				</router-link>
			</li>
			<li :class="{ active: pageName == 'GuideSearch' }">
				<router-link to="/front/intro/guideSearch" title="통합검색">
					<span>통합검색</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['pageName'],
};
</script>

<style></style>
