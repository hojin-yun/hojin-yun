<template>
	<div class="wrap">
		<AsideMenu />
		<div id="contents" class="contents">
			<div class="top">
				<div class="tit_box">
					<strong>IPC/CPC 엑셀 관리</strong>
					<span>KSIC → IPC/CPC 엑셀 관리하는 페이지입니다. </span>
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
									<col style="width: 6%" />
									<col style="width: 10%" />
									<col style="width: 10%" />
									<col style="width: 10%" />
									<col style="width: auto" />
									<col style="width: 12%" />
								</colgroup>
								<thead>
									<tr>
										<th class="chk">
											<label
												><input
													type="checkbox"
													@click="checkAll"
													v-model="allSelected"
											/></label>
										</th>
										<th class="num">번호</th>
										<th class="date">보고분류명</th>
										<th class="date">등록년도</th>
										<th class="title">첨부파일명</th>
										<th class="date">다운로드수</th>
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
										<td colspan="6" style="padding: 200px 0">
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
			dbName: 'excel',
			allSelected: false,
		};
	},
	created() {
		this.$store.commit('boardList/updateState', {
			pageNum: 1,
			searchText: '',
			searchTrue: false,
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
