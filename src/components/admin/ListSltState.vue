<template lang="">
	<select v-model="sortState">
		<option v-for="op in sortStateOptions" :value="op.value" :key="op.text">
			{{ op.text }}
		</option>
	</select>
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
		};
	},
};
</script>
