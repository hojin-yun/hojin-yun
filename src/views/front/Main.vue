<template>
	<div>
		<div class="mainWrapArea">
			<div class="indexCon01">
				<div class="indexWrap01">
					<FluctuationsArea
						:maintrendTopNList="maintrendTopNList"
						:mainTTMList="mainTTMList"
					/>
				</div>
				<div class="indexWrap02">
					<div class="mainDataArea">
						<div class="mainDataDetail mainRound">
							<div class="kcpMainTab_noticeArea">
								<KcpMainTab :ifrurl="ifrurl" :mstrLogin="mstrLogin" />
							</div>
						</div>
						<div class="rateWrap">
							<div class="rateWrap01 mainRound">
								<Applicant :mainanalysisTopNList="mainanalysisTopNList" />
							</div>
							<div class="rateWrap02">
								<div class="rateWrap02Detail mainRound">
									<div class="rateWrap01Detail">
										<h3>최대 증감률 <span>키워드</span></h3>
										<div class="wordCloudWrap">
											<p class="wordCloudTxt">
												증감률이 높은 특허의 키워드별을 나타내는 워드
												크라우드입니다.
											</p>
											<div class="wordCloud">
												<wordcloud
													:data="defaultWords"
													nameKey="name"
													valueKey="value"
													:showTooltip="false"
													:rotate="{ from: 0, to: 0, numOfOrientation: 0 }"
													:margin="{ top: 0, right: 0, bottom: 0, left: 0 }"
													fontScale="log"
												>
												</wordcloud>
												<!-- <iframe
													v-if="mstrLogin"
													width="100%"
													height="100%"
													id="ChartAddOne"
													style="transform: scale(1.2); margin-top: 5px"
													:src="`${ifrurl}?reportId=F4B9F8F5B747A57FF5042A8C8CC8568D`"
													title=""
													frameborder="0"
												></iframe>-->
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- {{ mainReportDanger }} -->
			<div class="indexCon02">
				<div class="indexWrap03 mainRound">
					<NoticeArea :mainnNotice="mainnNotice" :mainFaq="mainFaq" />
				</div>
				<div class="indexWrap04">
					<div class="reportArea">
						<div class="reportWrap">
							<div class="reportWrap01 mainRound">
								<div class="reportWrap01Detail">
									<div class="reportListMain reportIco01">
										<h4>위기신호 보고서</h4>
										<ul>
											<li v-for="list in mainReportDanger" :key="list.regNo">
												<router-link
													:to="`/front/report/위기신호탐지`"
													v-html="list.infrmNm"
												></router-link>
											</li>
										</ul>
									</div>
									<div class="reportListMain reportIco02">
										<h4>유망 기술 보고서</h4>
										<ul>
											<li v-for="list in mainReportPromising" :key="list.regNo">
												<router-link
													:to="`/front/report/유망기술발굴`"
													v-html="list.infrmNm"
												></router-link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="reportWrap02">
								<div class="mainRound">
									<BannerQuickSlider :mainBannerSlider="mainBannerSlider" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<BannerAll />
		<MainPopup :mainPopup="mainPopup" />
	</div>
</template>

<script>
import { fetchMain } from '@/api/front/frontMain'; //db api
import FluctuationsArea from '@/components/front/main/FluctuationsArea';
import KcpMainTab from '@/views/front/main/KcpMainTab';
import NoticeArea from '@/views/front/main/NoticeArea';
import Applicant from '@/components/front/main/Applicant';
import BannerQuickSlider from '@/components/front/main/BannerQuickSlider';
import BannerAll from '@/views/front/main/BannerAll';
import MainPopup from '@/components/front/main/MainPopup';
import wordcloud from 'vue-wordcloud';
export default {
	name: 'frontMain',
	components: {
		FluctuationsArea,
		KcpMainTab,
		NoticeArea,
		Applicant,
		BannerQuickSlider,
		BannerAll,
		MainPopup,
		wordcloud,
	},
	data() {
		return {
			aaa: 1,
			listSize: 5,
			dayBefore: 7,
			mainPopup: [], //팝업
			mainReportDanger: [], //위기신호탐지
			mainReportExternal: [], //외부보고서
			mainReportPromising: [], //유망기술발굴
			mainStatistics: [],
			mainTotal: '',
			mainBannerSlider: [], //배너슬라이드
			mainnNotice: [], //공지사항
			mainFaq: [], //faq
			maintrendTopNList: [], //전분기대비변동률
			mainanalysisTopNList: [],
			mainTTMList: [],
			myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
			defaultWords: [
				{
					name: '화학',
					value: 26,
				},
				{
					name: '의료용',
					value: 19,
				},
				{
					name: '금속',
					value: 18,
				},
				{
					name: '기타',
					value: 16,
				},
				{
					name: '제조업',
					value: 15,
				},
				{
					name: '물질',
					value: 90,
				},
				{
					name: '의약품',
					value: 9,
				},
				{
					name: '제품',
					value: 9,
				},
				{
					name: '가공',
					value: 6,
				},
			],
		};
	},
	computed: {
		ifrurl() {
			return process.env.VUE_APP_MSTR;
		},
		mstrLogin() {
			return this.$store.state.mstr.mstrLogin;
		},
	},
	created() {
		this.mainLoad();
	},
	methods: {
		async mainLoad() {
			const listSize = `?listSize=${this.listSize}`;
			const dayBefore = `&dayBefore=${this.dayBefore}`;
			const { data } = await fetchMain(listSize, dayBefore);
			//this.mainTotal = data.result.statistics.listCnt;
			this.mainReportDanger = data.result.reportDanger;
			this.mainReportExternal = data.result.reportExternal;
			this.mainReportPromising = data.result.reportPromising;
			this.mainPopup = data.result.popup;
			this.mainnNotice = data.result.notice;
			this.mainFaq = data.result.faq;
			this.mainBannerSlider = data.result.banner;
			this.maintrendTopNList = data.result.trendTopNList;
			this.mainanalysisTopNList = data.result.analysisTopNList;
			for (let index = 0; index < this.maintrendTopNList.length; index++) {
				const element = this.maintrendTopNList[index];
				var arrElement = [
					element.bfrBfrQtrApplCnt,
					element.bfrQtrApplCnt,
					element.qtrApplCnt,
				];
				this.mainTTMList[index] = arrElement;
			}
		},
	},
};
</script>
