<template>
	<div class="subContent">
		<div class="subConView">
			<div class="subConDetail">
				<div id="realContents">
					<div class="titleArea">
						<h3>{{ $route.params.id }}</h3>
						<p>{{ $route.params.id }} 분석보고서입니다.</p>
					</div>
					<section class="kpb-home-newsroom-lists">
						<div class="kpb_subContent">
							<div class="kpb-home-latest-news-filter">
								<!--<div class="kpb-report-filter-select">
									 <div class="selects selects_w">
										<select
											class="form-control"
											v-model="yearSelected"
											@change="yearChange"
										>
											<option
												v-for="(option, i) in yearList"
												:key="i"
												:value="option"
											>
												{{ $route.params.id }} {{ option }}년 보고서
											</option>
										</select>
									</div>
								</div> -->
								<div class="p-noti-list01">
									<SearchForm :dbName="dbName" :yearSelected="yearSelected" />
								</div>
								<ReportList :listData="listData" :dbName="dbName" />
							</div>

							<Paging :dbName="dbName" :yearSelected="yearSelected" />
							<!-- <div class="p-noti-list01 mT30">
								<SearchForm :dbName="dbName" :yearSelected="yearSelected" />
							</div> -->
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { fetchYear } from '@/api/boardList'; //db api
import SearchForm from '@/components/front/SearchForm';
import Paging from '@/components/front/Paging';
import boardList from '@/components/front/mixin/boardList';
import ReportList from '@/components/front/ReportList';
export default {
	mixins: [boardList],
	name: 'crisis',
	components: {
		SearchForm,
		Paging,
		ReportList,
	},
	data() {
		return {
			dbName: 'report',
			yearList: [],
			yearSelected: this.$route.query.year | null,
		};
	},
	created() {
		this.getYear({
			pageName: this.dbName,
			category: this.$route.params.id,
		});
	},
	watch: {
		$route(to, from) {
			if (to.params.id != from.params.id) {
				this.$store.commit('fboardList/updateState', {
					searchText: null,
					searchTrue: false,
					pageNum: 1,
				});
				this.getYear({
					pageName: this.dbName,
					category: this.$route.params.id,
				});
			}
		},
	},
	methods: {
		yearChange(event) {
			this.$router.push('?').catch(() => {}); //파라미터 초기화
			this.$router.push({
				query: { year: event.target.value },
			});
			this.yearSelected = event.target.value;
			this.getList({
				pageName: this.dbName, //DB 이름
				pageNum: 1,
				searchText: this.searchText,
				searchCategory: this.$route.params.id,
				searchStartDate: this.yearSelected,
			});
		},
		async getYear(payload) {
			try {
				let { data } = await fetchYear(
					payload.pageName, //db api 이름
					payload.category,
				);
				this.yearList = data.result.data;
				if (!this.$route.query.year) {
					this.yearSelected = data.result.data[0];
				}
				this.$store.commit('fboardList/updateState', { pageNum: 1 });
				this.getList({
					pageName: this.dbName, //DB 이름
					pageNum: this.$route.query.pageNum || this.pageNum,
					searchText: this.searchText,
					searchCategory: this.$route.params.id,
					searchStartDate: this.yearSelected,
				});
			} catch (e) {
				//console.log('실패: ' + e.message);
			}
		},
		modalOpen() {
			$('#reportViewPop').modal();
			$('.modal-backdrop').appendTo('#realContents');
			//$('body').removeClass();
		},
	},
};
</script>
