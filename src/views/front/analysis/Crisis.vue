<template>
	<div class="subContent">
		<div class="subConView">
			<div class="subConDetail">
				<div id="realContents">
					<SubTitle />

					<!-- lnb -->
					<analysisLnb />
					<!-- //lnb -->

					<div class="subConDetail analysisConDetail">
						<div class="realContents">
							<section class="conSection industry_hearder_wrap ana">
								<div class="category_wrap mT0">
									<CategoryList
										:category="category0"
										:categoryName="categoryName[0]"
										:categoryOn="categoryOn0"
										:isClick="true"
										:categoryLoad="categoryLoad1"
										@categoryClick="categoryClick"
									/>
									<CategoryList
										:category="category1"
										:categoryName="categoryName[1]"
										:categoryOn="categoryOn1"
										:isClick="true"
										:categoryLoad="categoryLoad2"
										@categoryClick="categoryClick"
									/>
									<CategoryList
										:category="category2"
										:categoryName="categoryName[2]"
										:categoryOn="categoryOn2"
										:isClick="true"
										:categoryLoad="categoryLoad3"
										@categoryClick="categoryClick"
									/>
									<CategoryList
										:category="category3"
										:categoryName="categoryName[3]"
										:categoryOn="categoryOn3"
										:isClick="true"
										:categoryLoad="categoryLoad4"
										@categoryClick="categoryClick"
									/>
									<CategoryList
										:category="category4"
										:categoryName="categoryName[4]"
										:categoryOn="categoryOn4"
										:isClick="false"
										:categoryLoad="categoryLoad5"
										@categorySelect="categorySelect"
									/>
								</div>
							</section>

							<section class="conSection">
								<div class="half" v-if="$store.state.fboardList.SearchLoading">
									<half-circle-spinner
										:animation-duration="1000"
										:size="40"
										color="#007dcd"
									/>
								</div>
								<div class="analysis-search-wrap">
									<div class="analysis-search-area">
										<!-- notice -->
										<analysisNotice />
										<!-- //notice -->
										<div v-if="isError">서버 통신이 원할하지 않습니다.</div>
										<div v-if="dataa != null">
											<div
												class="analysis-icon-wrap center"
												style="font-size: 18px; font-weight: 700"
											>
												<span style="color: #ff7200">{{ ksicNm5 }}</span> 위기
												신호 분석
												<span v-if="!isCrisis">데이터가 없습니다.</span>
											</div>
											<!-- <p class="dnlbox_ti">
												경쟁국 대비 특허지표 비교
												<span>
													(지표명 - 위기 신호를 클릭하시면 경쟁력비교 상세 볼 수
													있습니다.)</span
												>
											</p>
											<div class="lecfixed tablevy">
												<div class="lecrow">
													<div
														class="leccell center"
														style="width: 50%; background: #eee"
													>
														국가
													</div>
													<div
														class="leccell center bl0 bb0 pp0"
														style="background: #eee"
													>
														<div class="lecfixed">
															<div class="lecrow over">
																<div class="leccell">지표명</div>
																<div class="leccell">위기신호</div>
															</div>
														</div>
													</div>
												</div>
												<div
													v-for="(texts, i) in dataa.경쟁력비교종합"
													:key="i"
													class="lecrow"
												>
													<div class="leccell center" style="width: 50%">
														<div style="margin-bottom: 10px">
															<img
																:src="`https://www.geonames.org/flags/x/${texts.대상국가.toLowerCase()}.gif`"
																width="100px"
																alt=""
															/>
														</div>
														열위지수 : {{ texts.열위지수 }}<br />
														위기지수 : {{ texts.위기지수 }}<br />
														개선지수 : {{ texts.개선지수 }}
													</div>
													<div class="leccell bl0 bb0 pp0">
														<div class="lecfixed">
															<div
																v-for="(itme, j) in texts.결과"
																:key="j"
																class="lecrow over"
																@click="dnlActive(itme.지표명, texts.대상국가)"
															>
																<div class="leccell">
																	{{ itme.지표명 }}
																</div>
																<div class="leccell">
																	{{ itme.위기신호 }}
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div
												v-for="(texts, i) in dataa.경쟁력비교상세"
												:key="i"
												class="clear"
											>
												<div
													v-if="
														indexActive == texts.지표명 &&
														nameActive == texts.대상국가
													"
												>
													<p class="dnlbox_ti">
														경쟁력비교상세 -
														{{ texts.지표명 }}
														연도별 점유율 기반
														<strong v-if="texts.대상국가 == 'CN'">중국</strong>
														<strong v-if="texts.대상국가 == 'JP'">일본</strong>
														<strong v-if="texts.대상국가 == 'US'">미국</strong>
														({{ texts.대상국가 }}) 대비 위기신호 -
														{{ texts.위기신호명칭 }}
													</p>
													<div
														class="contx"
														v-if="texts.위기신호설명 != '없음'"
													>
														{{ texts.위기신호설명 }}
													</div>
													<p class="dnlbox_tis">연도별지표값</p>
													<TrendChart
														:datasets="[
															{
																data: getFields(
																	texts.연도별지표값[texts.대상국가],
																	'값',
																),
																smooth: true,
																showPoints: true,
																className: 'kt',
															},
															{
																data: getFields(texts.연도별지표값['KR'], '값'),
																smooth: true,
																showPoints: true,
																className: 'kr',
															},
														]"
														:grid="{
															verticalLines: true,
															horizontalLines: true,
														}"
														:labels="{
															xLabels: getFields(
																texts.연도별지표값['KR'],
																'년도',
															),
															yLabels: 5,
															yLabelsTextFormatter: val =>
																Math.round(val * 100) / 100,
														}"
														:min="0"
													>
													</TrendChart>
													<p class="dnlbox_tis">누적지표값</p>
													<TrendChart
														:datasets="[
															{
																data: getFields(
																	texts.누적지표값[texts.대상국가],
																	'값',
																),
																smooth: true,
																showPoints: true,
																className: 'kt',
															},
															{
																data: getFields(texts.누적지표값['KR'], '값'),
																smooth: true,
																showPoints: true,
																className: 'kr',
															},
														]"
														:grid="{
															verticalLines: true,
															horizontalLines: true,
														}"
														:labels="{
															xLabels: getFields(
																texts.누적지표값['KR'],
																'년도',
															),
															yLabels: 5,
															yLabelsTextFormatter: val =>
																Math.round(val * 100) / 100,
														}"
														:min="0"
													>
													</TrendChart>
													<div class="dnlbox mT30">
														<div class="dnlbox_top">
															<div class="top">
																<div class="tx">누적 지표 기준</div>
																<div class="clear">
																	<div class="tx cel"><div>최근역전</div></div>
																	<div class="tx cel"><div>추적</div></div>
																	<div class="tx cel"><div>열위지속</div></div>
																	<div class="tx cel"><div>경합</div></div>
																	<div class="tx cel"><div>위기없음</div></div>
																</div>
															</div>
														</div>
														<div class="body">
															<div class="le clear">
																<div>연도별<br />지표<br />기준</div>
																<div>
																	<div>최근역전</div>
																	<div>추격</div>
																	<div>열위지속</div>
																	<div>경합</div>
																</div>
															</div>
															<div class="clear">
																<div
																	class="tx cel"
																	v-for="(dt, y) in dnlbox"
																	:key="y"
																	:class="{
																		active: texts.위기신호코드 == dt.no,
																	}"
																>
																	<div>
																		<strong>{{ dt.no }}</strong>
																		<span v-html="dt.text"></span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div>대상국가 : {{ texts.대상국가 }}</div>
													<div>위기신호명칭 :{{ texts.위기신호명칭 }}</div>
													<div>위기신호설명 :{{ texts.위기신호설명 }}</div>
													<div>위기신호코드: {{ texts.위기신호코드 }}</div>
													<div>위기인덱스: {{ texts.위기인덱스 }}</div>
													<div>지표명: {{ texts.지표명 }}</div>
												</div>
											</div> -->
											<div v-if="isCrisis">
												<p class="dnlbox_ti">
													특허-시장지표 연계분석
													<span>
														(지표명 - 위기신호명칭 를 클릭하시면 시장대비분석
														상세 볼 수 있습니다.)</span
													>
												</p>
												<div class="lecfixed tablevy">
													<div class="lecrow">
														<div
															class="leccell center"
															v-for="(texts, key, i) in dataa.시장대비분석종합"
															:key="i"
														>
															{{ key }} : {{ texts }}
														</div>
													</div>
												</div>
												<div class="lecfixed tablevy">
													<div class="lecrow">
														<div
															class="leccell center"
															style="width: 30%; background: #eee"
														>
															시장 지표
														</div>
														<div
															class="leccell center"
															style="width: 30%; background: #eee"
														>
															특허 지표
														</div>
														<div
															class="leccell center"
															style="width: 30%; background: #eee"
														>
															위기신호명칭
														</div>
													</div>
													<div
														class="lecrow over"
														v-for="(texts, i) in dataa.시장대비분석"
														:key="i"
														@click="dnlActive1(texts.시장인덱스)"
													>
														<div class="leccell center">
															{{ texts.시장지표 }}
														</div>
														<div class="leccell center">
															{{ texts.특허지표 }}
														</div>
														<div class="leccell center">
															{{ texts.위기신호명칭 }}
														</div>
													</div>
												</div>
												<div v-if="indexActive1 != null">
													<div
														v-for="(texts, i) in dataa.시장대비분석"
														:key="i"
														class="clear"
													>
														<div v-if="indexActive1 == texts.시장인덱스">
															<p class="dnlbox_ti">
																{{ texts.시장지표 }} - 시장대비분석
															</p>
															<!-- <div>선행년도: {{ texts.선행년도 }}</div>
															<div>시장지표: {{ texts.시장지표 }}</div>
															<div>위기신호명칭: {{ texts.위기신호명칭 }}</div>
															<div>위기신호설명: {{ texts.위기신호설명 }}</div>
															<div>위기신호코드: {{ texts.위기신호코드 }}</div>
															<div>특허지표: {{ texts.특허지표 }}</div>
															<br /> -->
															<div
																class="contx"
																v-if="texts.위기신호설명 != '없음'"
															>
																{{ texts.위기신호설명 }}
															</div>
															<div class="dnlbox">
																<div class="dnlbox_top">
																	<div class="top">
																		<div class="tx">누적 지표 기준</div>
																		<div class="clear">
																			<div class="tx cel w3">
																				<div>최근 출원 증가</div>
																			</div>
																			<div class="tx cel w3">
																				<div>최근 출원 보합</div>
																			</div>
																			<div class="tx cel w3">
																				<div>최근 출원 감소</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="body">
																	<div class="le clear">
																		<div>연도별<br />매출액</div>
																		<div>
																			<div class="w3">최근 매출 증가</div>
																			<div class="w3">추격 매출 보합</div>
																			<div class="w3">추격 매출 감소</div>
																		</div>
																	</div>
																	<div class="clear">
																		<div
																			class="tx cel w3"
																			v-for="(dt, y) in dnlbox1"
																			:key="y"
																			:class="{
																				active: texts.위기신호코드 == dt.no,
																			}"
																		>
																			<div>
																				<strong>{{ dt.no }}</strong>
																				<span v-html="dt.text"></span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners';
import { fetchAnalysis, fetchCrisis } from '@/api/analysis'; //db api
import 'vue-slider-component/theme/default.css';
import SubTitle from '@/views/front/common/SubTitle';
import analysisLnb from '@/components/front/analysis/analysisLnb';
import analysisNotice from '@/views/front/analysis/analysisNotice';
import CategoryList from '@/components/front/mapping/CategoryKmaps';
//import TrendChart from 'vue-trend-chart';
export default {
	name: 'crisis',
	components: {
		HalfCircleSpinner,
		SubTitle,
		analysisLnb,
		analysisNotice,
		CategoryList,
		//TrendChart,
	},
	data() {
		return {
			dnlbox1: [
				{
					no: '0',
					text: 'X',
				},
				{
					no: '1',
					text: 'X',
				},
				{
					no: '2',
					text: '산업 위기<br />예측',
				},
				{
					no: '3',
					text: 'X',
				},
				{
					no: '4',
					text: 'X',
				},
				{
					no: '5',
					text: '산업 위기<br />예측',
				},
				{
					no: '6',
					text: '산업 위기<br />진행중<br />(개선 가능)',
				},
				{
					no: '7',
					text: '산업 위기<br />예측<br />(심각)',
				},
				{
					no: '8',
					text: '산업 위기<br />예측<br />(심각)',
				},
			],
			dnlbox: [
				{
					no: '0',
					text: '경쟁력<br />역전됨',
				},
				{
					no: '1',
					text: '경쟁력<br />역전 임박',
				},
				{
					no: '2',
					text: '추격 동력<br />상실',
				},
				{
					no: '3',
					text: '경쟁력<br />역전 임박',
				},
				{
					no: '4',
					text: '미래 경쟁력<br />역전 가능',
				},
				{
					no: '5',
					text: '-',
				},
				{
					no: '6',
					text: '경쟁력<br />추격',
				},
				{
					no: '7',
					text: '추격 동력<br />저하',
				},
				{
					no: '8',
					text: '경쟁 심화',
				},
				{
					no: '9',
					text: '미래 경쟁력<br />역전 가능',
				},
				{
					no: '10',
					text: '열위 지속',
				},
				{
					no: '11',
					text: '경쟁력<br />추격',
				},
				{
					no: '12',
					text: '열위 지속',
				},
				{
					no: '13',
					text: '열위 지속',
				},
				{
					no: '14',
					text: '경쟁력<br />추격',
				},
				{
					no: '15',
					text: '-',
				},
				{
					no: '16',
					text: '-',
				},
				{
					no: '17',
					text: '열위 지속',
				},
				{
					no: '18',
					text: '경쟁 심화',
				},
				{
					no: '20',
					text: '경쟁 심화',
				},
			],
			nameActive: null,
			indexActive: null,
			indexActive1: null,
			isActive: false,
			pageName: 'crisis',
			crisisData: [],
			promisingData: [],
			dataa: null,
			categoryName: ['대분류', '중분류', '소분류', '세분류', '세세분류'],
			category0: [],
			category1: [],
			category2: [],
			category3: [],
			category4: [],
			categoryOn0: '',
			categoryOn1: '',
			categoryOn2: '',
			categoryOn3: '',
			categoryOn4: '',
			categoryLoad1: false,
			categoryLoad2: false,
			categoryLoad3: false,
			categoryLoad4: false,
			categoryLoad5: false,
			isError: false,
			ksicNm5: '',
			isCrisis: false,
		};
	},
	created() {
		this.categoryColl();
	},
	mounted() {
		this.eResize();
		window.addEventListener('resize', this.eResize);
	},
	methods: {
		eResize() {
			const category_list = $('.category_list');
			if (window.innerWidth < 769) {
				category_list.addClass('mb');
			} else {
				category_list.removeClass('mb');
			}
			$('.mb .industry_title').on('click', function () {
				if (window.innerWidth < 769) {
					$(this).parent().addClass('active').siblings().removeClass('active');
				}
			});
			$('.mb .category_list-wrap ul').on('click', function () {
				if (window.innerWidth < 769) {
					$(this)
						.parents('.category_list')
						.next()
						.addClass('active')
						.siblings()
						.removeClass('active');
				}
			});
		},
		dnlActive(index, name) {
			this.indexActive = index;
			this.nameActive = name;
		},
		dnlActive1(index) {
			this.indexActive1 = index;
		},
		clickOptions() {
			this.isActive = !this.isActive;
		},
		async categoryColl() {
			this[`categoryLoad1`] = true;
			const { data } = await fetchAnalysis(1, '');
			this.category0 = data.result.data;
			setTimeout(() => {
				this[`categoryLoad1`] = false;
			}, 100);
		},
		async OneKsicColl(ksicTopCd) {
			let ksicLevel;
			ksicLevel = ksicTopCd.length + 1;
			// if (ksicTopCd.length < 3) {
			// 	ksicLevel = ksicTopCd.length + 1;
			// } else {
			// 	ksicLevel = ksicTopCd.length;
			// }
			this[`categoryLoad${ksicLevel}`] = true;
			for (let index = ksicLevel; index < 6; index++) {
				this[`categoryOn${index - 2}`] = '';
				this[`category${index - 1}`] = [];
			}
			const { data } = await fetchAnalysis(ksicLevel, ksicTopCd);
			this[`categoryOn${ksicLevel - 2}`] = ksicTopCd;
			this[`category${ksicLevel - 1}`] = data.result.data;
			this[`categoryLoad${ksicLevel}`] = false;
		},
		categoryClick(event) {
			this.OneKsicColl(event);
		},
		async categorySelect(event) {
			// try {
			this.$store.commit('fboardList/updateState', {
				SearchLoading: true,
			});
			this.dataa = [];
			const res = await fetchCrisis(event.target.id);
			if (res.data.result.data.length > 0) {
				this.ksicNm5 = res.data.result.data[0].ksicNm5;
				const data = res.data.result.data[0].crisisData.replace(/&quot;/g, '"');
				this.dataa = JSON.parse(data);
				this.isError = false;
				this.isCrisis = true;
			} else {
				this.ksicNm5 = '';
				this.isCrisis = false;
			}
			this.$store.commit('fboardList/updateState', {
				SearchLoading: false,
			});
			// } catch (e) {
			// 	alert(1);
			// 	this.isError = true;
			// }
		},
		getFields(input, field) {
			var output = [];
			for (var i = 0; i < input.length; ++i) output.push(input[i][field]);
			return output;
		},
	},
};
</script>
<style>
.dnlbox_ti {
	font-weight: 700;
	font-size: 20px;
	margin-top: 40px;
	margin-bottom: 20px;
	border-bottom: 1px solid rgb(16, 8, 44);
	padding-bottom: 10px;
}
.dnlbox_ti span {
	font-weight: 400;
	font-size: 13px;
	color: #3498db;
}
.dnlbox_tis {
	font-weight: 500;
	font-size: 16px;
	margin-top: 10px;
	margin-bottom: 10px;
	border-bottom: 1px solid rgb(16, 8, 44);
	padding-bottom: 5px;
}
.tablevy {
	border-top: 2px solid #000;
	margin-top: 10px;
	border-right: 1px solid rgb(16, 8, 44);
}
.tablevy .leccell {
	border-bottom: 1px solid rgb(16, 8, 44);
	border-left: 1px solid rgb(16, 8, 44);
	padding: 8px 10px;
	text-align: center;
	word-break: break-all;
}
.tablevy .over:hover {
	background: #f1f1f1;
	cursor: pointer;
}
.kt path {
	stroke: rgb(223, 4, 4);
	stroke-width: 2px;
}
.kt circle {
	fill: rgb(255, 255, 255);
	stroke: rgb(223, 4, 4);
}
.kr path {
	stroke: rgb(52, 66, 253);
	stroke-width: 2px;
}
.kr circle {
	fill: rgb(255, 255, 255);
	stroke: rgb(52, 66, 253);
}
.ana .industry_title {
	margin-bottom: 3px;
}
.dnlbox {
	font-size: 13px;
}
.dnlbox .dnlbox_top {
	padding-left: 15%;
	text-align: center;
}
.dnlbox .dnlbox_top .tx {
	padding: 8px 0;
}
.dnlbox .dnlbox_top .top {
	background: rgb(35, 23, 78);
	color: #fff;
}
.dnlbox .dnlbox_top .cel {
	width: 20%;
	float: left;
	padding: 0;
}
.dnlbox .dnlbox_top .cel.w3 {
	width: 33.3333333%;
}
.dnlbox .dnlbox_top .cel > div {
	border-top: 1px solid rgb(16, 8, 44);
	border-left: 1px solid rgb(16, 8, 44);
	padding: 8px 0;
}
.dnlbox .dnlbox_top .cel:first-child > div {
	border-left: 0;
}
.dnlbox .body {
	padding-left: 15%;
	position: relative;
}
.dnlbox .body .le {
	left: 0;
	top: 0;
	width: 15%;
	height: 100%;
	position: absolute;
	background: rgb(35, 23, 78);
	color: #fff;
}
.dnlbox .body .le > div {
	float: left;
	width: 50%;
	height: 100%;
	border-left: 1px solid rgb(16, 8, 44);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.dnlbox .body .le > div:first-child {
	border-left: 0;
}
.dnlbox .body .le > div > div {
	height: 25%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-top: 1px solid rgb(16, 8, 44);
}
.dnlbox .body .le > div > div.w3 {
	height: 33.333333%;
	text-align: center;
}
.dnlbox .body .le > div > div:first-child {
	border-top: 0;
}
.dnlbox .body .cel {
	float: left;
	width: 20%;
	text-align: center;
}
.dnlbox .body .cel.w3 {
	width: 33.3333333%;
}
.dnlbox .body .cel > div {
	border-bottom: 1px solid #ddd;
	border-right: 1px solid #ddd;
	height: 80px;
	flex-direction: column;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 1.2;
}
.dnlbox .body .cel.active {
	background: red;
	color: #fff;
}
.contx {
	border: 1px solid #ddd;
	background: #f1f1f1;
	padding: 10px;
	margin-bottom: 10px;
}
</style>
