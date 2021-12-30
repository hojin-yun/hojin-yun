<template>
	<div>
		<select
			v-model="isCategoryGet"
			@change="listPstg($event)"
			v-if="dbName == 'banner' || dbName == 'popup'"
		>
			<option value="">전체</option>
			<option value="n">미출력</option>
			<option value="y">출력</option>
		</select>
		<select
			v-model="isCategoryGet"
			@change="listPstg($event)"
			v-if="dbName == 'excel'"
		>
			<option value="">분류 전체</option>
			<option value="IPC">IPC</option>
			<option value="CPC">CPC</option>
		</select>
		<select
			v-model="isCategoryGet"
			@change="listPstg($event)"
			v-if="dbName == 'report'"
		>
			<option value="">분류 전체</option>
			<option value="위기신호탐지">위기신호탐지</option>
			<option value="유망기술발굴">유망기술발굴</option>
			<option value="외부보고서">외부보고서</option>
		</select>
		<select v-model="sortCountGet" @change="listChange($event)">
			<option
				v-for="count in sortCountOptions"
				:value="count.value"
				:key="count.value"
			>
				{{ count.value }}개 보기
			</option>
		</select>
	</div>
</template>
<script>
import { convertDateFormat } from '@/utils/index';
import boardList from '@/components/admin/mixin/boardList';
export default {
	mixins: [boardList],
	props: ['dbName'],
	computed: {
		sortCountGet: {
			get() {
				return this.sortCount;
			},
			set(value) {
				this.$store.commit('boardList/updateState', value);
			},
		},
		isCategoryGet: {
			get() {
				return this.isCategory;
			},
			set(value) {
				this.$store.commit('boardList/updateState', { isCategory: value });
			},
		},
	},
	methods: {
		listChange(event) {
			this.getList({
				pageName: this.dbName, //DB 이름
				pageNum: this.$route.query.pageNum || this.pageNum,
				sortNumber: event.target.value, // 보여지는 갯수
				searchText: this.searchText,
				searchCategory: this.isCategoryGet,
				seachStartDate: this.startDay ? convertDateFormat(this.startDay) : '',
				seachEndDate: this.endDay ? convertDateFormat(this.endDay) : '',
			});
		},
		listPstg() {
			this.$router.push('?').catch(() => {}); //파라미터 초기화
			this.getList({
				pageName: this.dbName, //DB 이름
				pageNum: this.$route.query.pageNum || this.pageNum,
				sortNumber: this.sortCount, // 보여지는 갯수
				searchText: this.searchText,
				searchCategory: this.isCategoryGet,
			});
		},
	},
};
</script>
