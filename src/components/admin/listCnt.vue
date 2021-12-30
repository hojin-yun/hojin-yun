<template>
	<span class="tit">
		전체게시물
		<em>{{ listPagination.listCnt }}</em>
		개
	</span>
</template>

<script>
export default {
	props: ['listPagination'],
};
</script>
