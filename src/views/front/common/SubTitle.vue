<template>
	<div class="titleArea">
		<h3>{{ $route.meta.titles }}</h3>
		<p v-if="$route.meta.gnbNo != 1" v-html="$route.meta.text"></p>
	</div>
</template>

<script>
export default {
	name: 'subTitle',
};
</script>
