<template>
	<div
		v-if="$route.meta.gnbNo"
		class="subcontentMain01"
		:class="'visual0' + $route.meta.gnbNo"
	>
		<div class="mainTitle">
			<h2>{{ $route.meta.gnb }}</h2>
			<p v-if="$route.meta.gnbNo == 1">
				특허 빅테이터 분석 서비스 페이지입니다.
			</p>
			<p v-if="$route.meta.gnbNo == 2">
				특허 빅테이터 분류별 연계맵핑 페이지입니다.
			</p>
			<p v-if="$route.meta.gnbNo == 3">
				특허 빅테이터 분석 보고서 페이지입니다.
			</p>
			<p v-if="$route.meta.gnbNo == 4">
				특허 빅테이터 포털 소개 및 공지 페이지입니다.
			</p>
			<p v-if="$route.meta.gnbNo == 5">특허 빅테이터 포털 검색 페이지입니다.</p>
		</div>
		<div class="cover"></div>
	</div>
</template>

<script>
export default {
	name: 'mainTitle',
};
</script>
