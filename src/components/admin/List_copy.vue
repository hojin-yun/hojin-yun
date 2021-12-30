<template>
	<div class="list_table">
		<table>
			<colgroup>
				<col width="80px" />
				<col width="120px" />
				<col />
				<col width="130px" />
				<col width="200px" />
			</colgroup>
			<thead>
				<tr>
					<th class="chk">
						<label
							><input type="checkbox" @click="checkAll" v-model="allSelected"
						/></label>
					</th>
					<th class="num">번호</th>
					<th class="title">제목</th>
					<th class="hit">조회수</th>
					<th class="date">날짜</th>
				</tr>
			</thead>
			<tbody v-if="loading">
				<tr>
					<td colspan="5" style="height: 550px">
						<img src="@/assets/img/loading_img.gif" width="150" alt="" />
					</td>
				</tr>
			</tbody>
			<tbody v-else>
				<tr v-for="(items, i) in listData" :key="items.regNo">
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
								'/pbipAdmin/noticeView/' +
								items.regNo +
								'?pageNum=' +
								($route.query.pageNum ? $route.query.pageNum : 1)
							"
							class="ellipsis"
							>{{ items.infrmNm }}</router-link
						>
					</td>
					<td class="hit">{{ items.vstrCnt }}</td>
					<td class="date">
						{{
							items.pstgYmd.substr(0, 4) +
							'.' +
							items.pstgYmd.substr(4, 2) +
							'.' +
							items.pstgYmd.substr(6)
						}}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	props: ['listData', 'listPagination', 'loading'],
	data() {
		return {
			allSelected: false,
		};
	},
	computed: {
		...mapState('boardList', ['deleteId']),
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
		...mapActions('boardList', ['deleteAllCheck']),
		checkAll() {
			this.$store.commit('boardList/updateState', { deleteId: [] });
			if (!this.allSelected) {
				let boardIdsArr = [];
				for (const property in this.listData) {
					boardIdsArr.push(this.listData[property].regNo);
				}
				this.$store.commit('boardList/updateState', { deleteId: boardIdsArr });
			}
		},
		listCheck() {
			this.allSelected = false;
		},
	},
};
</script>

<style></style>
