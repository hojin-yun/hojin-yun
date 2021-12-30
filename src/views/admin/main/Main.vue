<template>
	<div class="wrap">
		<AsideMenu />
		<div id="contents" class="contents">
			<div class="top">
				<ButtonBx />
			</div>
			<div class="center">
				<div class="inner">
					<div class="txt_wrap mb50">
						<div class="txt_box">
							<strong class="tit">공지사항</strong>
							<ul class="mt10">
								<li v-for="list in mainnNotice" :key="list.regNo">
									<router-link
										:to="`/pbipAdmin/noticeView/${list.regNo}`"
										class="ellipsis"
										v-html="list.infrmNm"
									>
									</router-link>
								</li>
							</ul>
						</div>
						<div class="txt_box">
							<strong class="tit">위기신호 보고서</strong>
							<ul class="mt10">
								<li v-for="list in mainReportDanger" :key="list.regNo">
									<router-link
										:to="`/pbipAdmin/reportView/${list.regNo}`"
										class="ellipsis"
										v-html="list.infrmNm"
									>
									</router-link>
								</li>
							</ul>
						</div>
						<div class="txt_box">
							<strong class="tit">외부 보고서</strong>
							<ul class="mt10">
								<li v-for="list in mainReportExternal" :key="list.regNo">
									<router-link
										:to="`/pbipAdmin/reportView/${list.regNo}`"
										class="ellipsis"
										v-html="list.infrmNm"
									>
									</router-link>
								</li>
							</ul>
						</div>
						<div class="txt_box">
							<strong class="tit">FAQ</strong>
							<ul class="mt10">
								<li v-for="list in mainFaq" :key="list.regNo">
									<router-link
										:to="`/pbipAdmin/faqView/${list.regNo}`"
										class="ellipsis"
										v-html="list.infrmNm"
									>
									</router-link>
								</li>
							</ul>
						</div>
						<div class="txt_box">
							<strong class="tit">유망 기술 보고서</strong>
							<ul class="mt10">
								<li v-for="list in mainReportPromising" :key="list.regNo">
									<router-link
										:to="`/pbipAdmin/reportView/${list.regNo}`"
										class="ellipsis"
										v-html="list.infrmNm"
									>
									</router-link>
								</li>
							</ul>
						</div>
						<div class="txt_box">
							<strong class="tit">팝업</strong>
							<ul class="mt10">
								<li v-for="list in mainPopup" :key="list.regNo">
									<router-link
										:to="`/pbipAdmin/popupView/${list.regNo}`"
										class="ellipsis"
										v-html="list.infrmNm"
									>
									</router-link>
								</li>
							</ul>
						</div>
					</div>

					<div class="graph_wrap">
						<strong class="tit mb20"
							><i class="icon_people"></i>오늘 방문자 수 <em>{{ mainTotal }}</em
							>명</strong
						>
						<div class="graph_table">
							<table>
								<colgroup>
									<col width="270px" />
									<col />
									<col width="240px" />
									<col width="180px" />
								</colgroup>
								<thead>
									<tr>
										<th>날짜</th>
										<th>그래프</th>
										<th>접속자수</th>
										<th>비율(%)</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="visitor in mainStatistics" :key="visitor.vDate">
										<td>{{ day(visitor.cntnDt) }}</td>
										<td>
											<div class="graph">
												<div class="graph_bg">
													<div
														class="graph_up p10"
														:style="`width:${visitor.percent}%`"
													></div>
												</div>
											</div>
										</td>
										<td>{{ visitor.listCnt }}</td>
										<td>{{ visitor.percent }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { fetchMain } from '@/api/adminMain'; //db api
import ButtonBx from '@/components/admin/ButtonBx.vue';
import AsideMenu from '@/components/admin/AsideMenu.vue';
import { dayReset } from '@/utils/index';
export default {
	components: {
		AsideMenu,
		ButtonBx,
	},
	data() {
		return {
			listSize: 3,
			dayBefore: 7,
			mainnNotice: [],
			mainFaq: [],
			mainPopup: [],
			mainReportDanger: [], //위기신호탐지
			mainReportExternal: [], //외부보고서
			mainReportPromising: [], //유망기술발굴
			mainStatistics: [],
			mainTotal: '',
		};
	},
	created() {
		this.mainLoad();
	},
	filters: {
		reverse: function (array) {
			return array.slice().reverse();
		},
	},
	methods: {
		day(e) {
			return dayReset(e);
		},
		async mainLoad() {
			const listSize = `?listSize=${this.listSize}`;
			const dayBefore = `&dayBefore=${this.dayBefore}`;
			const { data } = await fetchMain(listSize, dayBefore);
			this.mainnNotice = data.result.notice;
			this.mainFaq = data.result.faq;
			this.mainTotal = data.result.statistics.listCnt;
			this.mainReportDanger = data.result.reportDanger;
			this.mainReportExternal = data.result.reportExternal;
			this.mainReportPromising = data.result.reportPromising;
			this.mainPopup = data.result.popup;
			let statistics = data.result.statistics.statistics;
			this.mainStatistics = statistics.reverse();
		},
	},
};
</script>
