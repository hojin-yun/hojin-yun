<template>
	<div class="subContent">
		<div class="subConView">
			<div class="subConDetail">
				<div id="realContents">
					<SubTitle />

					<div class="p-noti-list01">
						<SearchForm :dbName="dbName" />
						<div class="grid-wrap gridType01">
							<div class="gridSum">
								전체 :
								<span> {{ listPagination.listCnt }} </span>건
							</div>
							<!-- gr-header -->
							<div class="gr-header">
								<div class="gridRow">
									<div class="col-group3">
										<div class="cols col_xs-1">
											<span class="tit">번호</span>
										</div>
										<div class="cols col_xs-7">
											<span class="tit">제목</span>
										</div>
										<div class="cols col_xs-1">
											<span class="tit">첨부</span>
										</div>
										<div class="cols col_xs-2">
											<span class="tit">작성일</span>
										</div>
										<div class="cols col_xs-1">
											<span class="tit">조회수</span>
										</div>
									</div>
								</div>
							</div>

							<!-- gr-body -->
							<div class="gr-body">
								<div
									class="gridRow"
									v-for="(items, i) in listData"
									:key="items.regNo"
								>
									<div class="col-group3">
										<div class="cols col_xs-1 hideM">
											<span class="tit">번호</span>
											<span class="txt">{{
												listPagination.listCnt - listPagination.startList - i
											}}</span>
										</div>
										<div class="cols col_xs-7 gridTitleM">
											<span class="tit">제목</span>
											<span class="txt left"
												><router-link
													:to="`/front/intro/noticeView/${
														items.regNo
													}?pageNum=${
														$route.query.pageNum ? $route.query.pageNum : 1
													}`"
													title="이동하기"
													><span v-html="items.infrmNm"></span></router-link
											></span>
										</div>
										<div class="cols col_xs-1 gridSubM">
											<span class="tit">첨부</span>
											<span v-if="items.atchFileYn == 'y'" class="txt"
												><img src="@/assets/img/icon_file.gif"
											/></span>
										</div>
										<div class="cols col_xs-2 gridSubM">
											<span class="txt">{{ items.pstgYmd | yyyyMMdd }}</span>
										</div>
										<div class="cols col_xs-1 hideM">
											<span class="txt">{{ items.vstrCnt }}</span>
										</div>
									</div>
								</div>
								<div
									style="text-align: center; padding: 250px 0"
									v-if="listPagination.listCnt == 0"
								>
									<span v-if="searchTrue">검색하신 </span>데이터가 없습니다.
								</div>
							</div>
							<!-- // gr-body -->
						</div>

						<Paging :dbName="dbName" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import SubTitle from '@/views/front/common/SubTitle';
import { commaDate } from '@/utils/index';
import SearchForm from '@/components/front/SearchForm';
import Paging from '@/components/front/Paging';
import boardList from '@/components/front/mixin/boardList';
export default {
	mixins: [boardList],
	name: 'notice',
	components: {
		SubTitle,
		SearchForm,
		Paging,
	},
	data() {
		return {
			dbName: 'notice',
		};
	},
	created() {
		this.$store.commit('fboardList/updateState', { pageNum: 1 });
		this.getList({
			pageName: this.dbName, //DB 이름
			pageNum: this.$route.query.pageNum || this.pageNum,
			searchText: this.searchText,
		});
	},
	filters: {
		yyyyMMdd: function (value) {
			return commaDate(value);
		},
	},
};
</script>
