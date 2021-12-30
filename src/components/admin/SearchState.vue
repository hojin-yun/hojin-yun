<template>
	<div class="search mt40">
		<select class="search_slt" v-model="sortState">
			<option v-for="op in sortStateOptions" :value="op.value" :key="op.value">
				{{ op.text }}
			</option>
		</select>
		<div class="search_wrap">
			<input type="text" id="search" placeholder="검색" />
			<label for="search" class="hidden">검색</label>
			<button class=""><i class="icon icon_search"></i></button>
		</div>
		{{ sortState }}
	</div>
</template>
<script>
export default {
	data() {
		return {
			sortState: null,
			sortStateOptions: [
				{ value: null, text: '상태' },
				{ value: '출력', text: '출력' },
				{ value: '미출력', text: '미출력' },
			],
			sortAccount: '',
			sortAccountOptions: [
				{ value: '아이디', text: '아이디' },
				{ value: '이름', text: '이름' },
			],
		};
	},
};
</script>
