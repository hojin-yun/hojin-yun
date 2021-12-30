<template>
	<div class="wrap">
		<AsideMenu />
		<div id="contents" class="contents">
			<div class="top">
				<div class="tit_box">
					<strong>방문자 통계</strong>
					<span>방문자 통계 리스트입니다. </span>
				</div>
				<ButtonBx />
			</div>
			<div class="center">
				<div class="inner">
					<div class="list_wrap">
						<div class="list_title mb10">
							<div class="s_date">
								<strong>기간별 검색</strong>

								<VDatePicker
									locale="ko"
									v-model="startDayGet"
									color="blue"
									:max-date="endDay"
								>
									<template v-slot="{ inputValue, inputEvents }">
										<input
											type="text"
											:value="inputValue"
											v-on="inputEvents"
											style="width: 200px"
										/>
									</template>
								</VDatePicker>
								<span class="and">~</span>
								<VDatePicker
									locale="ko"
									v-model="endDayGet"
									color="blue"
									:min-date="startDay"
									:max-date="new Date()"
								>
									<template v-slot="{ inputValue, inputEvents }">
										<input
											type="text"
											:value="inputValue"
											v-on="inputEvents"
											style="width: 200px"
										/>
									</template>
								</VDatePicker>

								<button class="b_sml b_lightgray ml10" @click="searchDate">
									검색
								</button>
							</div>
							<div class="list_slt">
								<a
									:href="downloadUrl"
									class="b_med b_blue b_round"
									@click="excelDownload"
									>엑셀 다운로드</a
								>
							</div>
						</div>
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
									<col style="width: 8%" />
									<col style="width: 13%" />
									<col style="width: auto" />
									<col style="width: 15%" />
									<col style="width: 12%" />
									<col style="width: 17%" />
									<col style="width: 12%" />
								</colgroup>
								<thead>
									<tr>
										<th class="">번호</th>
										<th class="ip">IP</th>
										<th class="pagename">페이지명</th>
										<th class="brower">브라우저</th>
										<th class="os">OS</th>
										<th class="date">일시</th>
										<th class="time">체류시간</th>
									</tr>
								</thead>
								<tbody>
									<tr
										v-for="item in listData"
										:key="item.regNo"
										:listPagination="listPagination"
										:dbName="dbName"
									>
										<td class="">{{ item.regNo }}</td>
										<td class="ip">{{ item.ipAddr }}</td>
										<td class="pagename">{{ item.pgNm }}</td>
										<td class="brower">{{ item.brsNm }}</td>
										<td class="os">{{ item.osNm }}</td>
										<td class="date">{{ item.cntnDt }}</td>
										<td class="time">{{ item.cntnHr }}</td>
									</tr>
									<tr v-if="listPagination.listCnt == 0">
										<td colspan="7" style="padding: 200px 0">
											<span v-if="searchTrue">검색하신 </span>데이터가 없습니다.
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<Paging :dbName="dbName" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { convertDateFormat } from '@/utils/index';
import VDatePicker from 'v-calendar/lib/components/date-picker.umd';
import ButtonBx from '@/components/admin/ButtonBx.vue';
import AsideMenu from '@/components/admin/AsideMenu.vue';
import ListCnt from '@/components/admin/listCnt';
import ListSltCount from '@/components/admin/ListSltCount.vue';
import Paging from '@/components/admin/Paging';
import boardList from '@/components/admin/mixin/boardList';

export default {
	mixins: [boardList],
	components: {
		VDatePicker,
		ButtonBx,
		AsideMenu,
		ListCnt,
		ListSltCount,
		Paging,
	},
	data() {
		return {
			dbName: 'statistics',
			downloadUrl: '',
		};
	},
	computed: {
		startDayGet: {
			get() {
				return this.startDay;
			},
			set(n) {
				this.$store.commit('boardList/updateState', {
					startDay: n,
				});
			},
		},
		endDayGet: {
			get() {
				return this.endDay;
			},
			set(n) {
				this.$store.commit('boardList/updateState', {
					endDay: n,
				});
			},
		},
	},
	created() {
		const d = this.endDay;
		const year = d.getFullYear(); // 년
		const month = d.getMonth(); // 월
		const day = d.getDate(); // 일
		this.$store.commit('boardList/updateState', {
			startDay: new Date(year, month, day - 7),
		});
		this.$store.commit('boardList/updateState', {
			pageNum: 1,
			searchText: '',
			searchTrue: false,
		});
		this.getList({
			pageName: this.dbName, //DB 이름
			pageNum: this.$route.query.pageNum || this.pageNum,
			sortNumber: this.sortCount, // 보여지는 갯수
			seachStartDate: convertDateFormat(this.startDay),
			seachEndDate: convertDateFormat(this.endDay),
		});
	},

	methods: {
		searchDate() {
			this.getList({
				pageName: this.dbName, //DB 이름
				pageNum: this.$route.query.pageNum || this.pageNum,
				sortNumber: this.sortCount, // 보여지는 갯수
				seachStartDate: convertDateFormat(this.startDay),
				seachEndDate: convertDateFormat(this.endDay),
			});
		},
		excelDownload() {
			let DayStart = convertDateFormat(this.startDay);
			let DayEnd = convertDateFormat(this.endDay);
			let hreef = `${process.env.VUE_APP_API_DOWNURL}/statistics/excel-download?searchStartDate=${DayStart}&searchEndDate=${DayEnd}`;
			this.downloadUrl = hreef;
		},
	},
};
</script>
