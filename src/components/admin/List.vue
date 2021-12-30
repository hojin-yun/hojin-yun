<template>
	<tr>
		<td class="chk">
			<label>
				<input
					type="checkbox"
					v-model="deleteIdGet"
					:value="items.regNo"
					@click="listCheck"
				/>
			</label>
		</td>
		<td class="num">
			{{ listPagination.listCnt - listPagination.startList - i }}
		</td>
		<td class="title">
			<router-link
				:to="
					'/pbipAdmin/' +
					dbName +
					'View/' +
					items.regNo +
					'?pageNum=' +
					($route.query.pageNum ? $route.query.pageNum : 1)
				"
				class="ellipsis"
				>{{ items.infrmNm }}</router-link
			>
		</td>
		<td class="hit" v-if="dbName == 'notice'">{{ items.vstrCnt }}</td>
		<td class="date">
			{{ toDay }}
		</td>
	</tr>
</template>

<script>
import { mapState } from 'vuex';
import { dayReset } from '@/utils/index';
export default {
	props: ['listData', 'listPagination', 'i', 'items', 'dbName'],
	computed: {
		...mapState('boardList', ['deleteId']),
		toDay() {
			if (this.dbName == 'notice') {
				return dayReset(this.items.pstgYmd);
			} else {
				return dayReset(this.items.regDt);
			}
		},
		deleteIdGet: {
			get() {
				return this.deleteId;
			},
			set(value) {
				this.$store.commit('boardList/updateState', { deleteId: value });
			},
		},
	},
	methods: {
		listCheck() {
			this.$emit('allSelectedFalse', false);
		},
	},
};
</script>

<style></style>
