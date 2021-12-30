<template>
	<tr>
		<td class="chk" v-if="dbName != 'user'">
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
		<td v-if="dbName == 'report' || dbName == 'excel'" class="category">
			{{ items.rptChgNm }}
		</td>
		<td v-if="dbName == 'excel'">
			{{ items.regYr }}
		</td>
		<td v-if="dbName == 'user'" class="title">
			<router-link
				:to="{
					path: '/pbipAdmin/' + dbName + 'View/' + items.userId,
					query: {
						pageNum: $route.query.pageNum ? $route.query.pageNum : 1,
						useYn: items.useYn,
					},
				}"
				class="ellipsis"
				><span v-html="items.userId"></span
			></router-link>
		</td>
		<td v-else-if="dbName == 'excel'" class="title">
			<div v-for="(link, t) in items.atchFileNm" :key="t">
				<router-link
					:to="{
						path: '/pbipAdmin/' + dbName + 'View/' + items.regNo,
						query: {
							pageNum: $route.query.pageNum ? $route.query.pageNum : 1,
							useYn: items.useYn,
						},
					}"
					class="ellipsis"
					><span v-html="link"></span
				></router-link>
			</div>
		</td>
		<td v-else class="title">
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
				><span v-html="items.infrmNm"></span>
			</router-link>
		</td>
		<td v-if="dbName == 'user'">
			<span v-html="items.userNm"></span>
		</td>
		<td v-if="dbName == 'notice' || dbName == 'report'">
			<span v-if="items.atchFileYn == 'y'" class="txt"
				><img src="@/assets/img/icon_file.gif"
			/></span>
		</td>
		<td class="hit" v-if="dbName == 'notice'">{{ items.vstrCnt }}</td>
		<td class="date" v-if="dbName == 'popup'">
			{{ items.pstgBgngYmd | yyyyMMdd }}
		</td>
		<td v-if="dbName == 'report' || dbName == 'excel'">
			{{ items.dwnldCnt }}
		</td>
		<td class="date" v-if="dbName == 'notice'">
			{{ items.pstgYmd | yyyyMMdd }}
		</td>
		<td class="date" v-else-if="dbName == 'popup'">
			{{ items.pstgEndYmd | yyyyMMdd }}
		</td>
		<td v-else-if="dbName != 'excel'">{{ items.regDt | yyyyMMdd }}</td>
		<td class="state" v-if="dbName == 'banner' || dbName == 'popup'">
			<pstgChange
				:dbName="dbName"
				:pstgEndYmd="items.pstgEndYmd"
				:pstgYn="items.pstgYn"
				:regNo="items.regNo"
			/>
		</td>
	</tr>
</template>

<script>
import pstgChange from '@/components/admin/pstgChange.vue';
import { mapState } from 'vuex';
import { commaDate } from '@/utils/index';
export default {
	props: ['listData', 'listPagination', 'i', 'items', 'dbName'],
	components: {
		pstgChange,
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
	filters: {
		yyyyMMdd: function (value) {
			return commaDate(value);
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
