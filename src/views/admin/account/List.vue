<template>
	<div class="wrap">
		<AsideMenu />
		<div id="contents" class="contents">
			<div class="top">
				<div class="tit_box">
					<strong>계정 관리</strong>
					<span>계정관리 편집 및 추가하는 페이지입니다 </span>
				</div>
				<ButtonBx />
			</div>
			<div class="center">
				<div class="inner">
					<div class="list_wrap">
						<div class="list_title mb10">
							<ListCnt :listPagination="listPagination" />
							<div class="list_slt">
								<ListSltCount :dbName="dbName" />
							</div>
						</div>
						<div class="list_table">
							<div v-if="loading" class="loading"></div>
							<table>
								<colgroup>
									<col style="width: 10%" />
									<col style="width: auto" />
									<col style="width: 12%" />
									<col style="width: 12%" />
								</colgroup>
								<thead>
									<tr>
										<th class="num">번호</th>
										<th class="user_id">아이디</th>
										<th class="user_name">이름</th>
										<th class="date">날짜</th>
									</tr>
								</thead>
								<tbody>
									<ListBoard
										v-for="(items, i) in listData"
										:key="items.regNo"
										:listData="listData"
										:listPagination="listPagination"
										:i="i"
										:items="items"
										:dbName="dbName"
										@allSelectedFalse="allSelectedFalse"
									/>
									<tr v-if="listPagination.listCnt == 0">
										<td colspan="4" style="padding: 200px 0">
											<span v-if="searchTrue">검색하신 </span>데이터가 없습니다.
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<Paging :listPagination="listPagination" :dbName="dbName" />
					<Search :dbName="dbName" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import ButtonBx from '@/components/admin/ButtonBx';
import AsideMenu from '@/components/admin/AsideMenu';
import Search from '@/components/admin/Search';
import Paging from '@/components/admin/Paging';
import ListCnt from '@/components/admin/listCnt';
import ListSltCount from '@/components/admin/ListSltCount.vue';
import ListBoard from '@/components/admin/BoardList';
import boardList from '@/components/admin/mixin/boardList';
export default {
	mixins: [boardList],
	components: {
		ButtonBx,
		AsideMenu,
		Paging,
		Search,
		ListCnt,
		ListSltCount,
		ListBoard,
	},
	data() {
		return {
			dbName: 'user',
			allSelected: false,
		};
	},
	created() {
		this.$store.commit('boardList/updateState', {
			pageNum: 1,
			searchText: '',
			searchTrue: false,
			isCategory: '',
		});
		this.getList({
			pageName: this.dbName, //DB 이름
			pageNum: this.$route.query.pageNum || this.pageNum,
			sortNumber: this.sortCount, // 보여지는 갯수
			searchText: this.searchText,
		});
	},
	methods: {
		deleteCheck() {
			this.allSelected = false;
		},
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
		allSelectedFalse() {
			this.allSelected = false;
		},
	},
};
</script>
