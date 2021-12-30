<template>
	<select v-model="pstgYnGet" @change="pstgChange($event)">
		<option value="n">미출력</option>
		<option value="y">출력</option>
	</select>
</template>

<script>
import { editState } from '@/api/boardList'; //db api
export default {
	props: ['pstgYn', 'regNo', 'dbName', 'pstgEndYmd'],
	computed: {
		pstgYnGet: {
			get() {
				return this.pstgYn;
			},
			set(value) {
				return value;
			},
		},
	},
	methods: {
		async pstgChange(event) {
			const oday = new Date();
			var year = oday.getFullYear();
			var month = oday.getMonth() + 1;
			month = month >= 10 ? month : '0' + month;
			var day = oday.getDate();
			day = day >= 10 ? day : '0' + day;
			var today = [year, month, day].join('');
			if (today > this.pstgEndYmd && event.target.value == 'y') {
				alert('종료 날짜를 먼저 수정하셔야 합니다.');
			} else {
				if (confirm('변경하시겠습니까?')) {
					let editstate = {};
					editstate.regNo = this.regNo;
					editstate.pstgYn = event.target.value;
					await editState(
						this.dbName, //db api 이름
						editstate,
					);
				} else {
					if (event.target.value == 'y') {
						this.pstgYn = 'n';
					} else {
						this.pstgYn = 'y';
					}
				}
			}
		},
	},
};
</script>
