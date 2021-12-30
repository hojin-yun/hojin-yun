<template>
	<div class="tabs-container analysis-tab">
		<ul class="nav nav-tabs">
			<li :class="{ active: pageName == 'top' }">
				<router-link to="/front/analysis/top" title="출원건별">
					<span>출원건별</span>
				</router-link>
			</li>
			<li :class="{ active: pageName == 'topyear' }">
				<router-link to="/front/analysis/topyear" title="연도별">
					<span>연도별</span>
				</router-link>
			</li>
			<li :class="{ active: pageName == 'topassociation' }">
				<router-link to="/front/analysis/topassociation" title="산업별">
					<span>산업별</span>
				</router-link>
			</li>
			<li :class="{ active: pageName == 'topinjury' }">
				<router-link to="/front/analysis/topindustry" title="기술부상도">
					<span>기술부상도</span>
				</router-link>
			</li>
			<li :class="{ active: pageName == 'topmajor' }">
				<router-link
					to="/front/analysis/topmajor"
					title="주요시장 확보율 이동하기"
				>
					<span>주요시장 확보율</span>
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
