<template lang="">
	<select name="sortTypeOption" id="sortTypeOption">
		<option
			v-for="type in sortTypeOptions"
			:value="type.value"
			:key="type.value"
		>
			{{ type.value }}
		</option>
	</select>
</template>
<script>
export default {
	data() {
		return {
			sortTypeOptions: [
				{ value: '보고서분류' },
				{ value: '위기 신호 탐지' },
				{ value: '유망 기술 탐지' },
				{ value: '외부 보고서' },
			],
		};
	},
};
</script>
