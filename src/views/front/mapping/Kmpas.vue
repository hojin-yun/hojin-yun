<template>
	<div class="subContent">
		<div class="subConView">
			<div class="subConDetail">
				<div id="realContents">
					<SubTitle />
					<!-- <button @click="analysisPush">데이터 넘기기 테스트</button>

					<div class="mappingBtn btnArea text-center">
						<a href="#" class="btn btn-primary">
							{{ $route.meta.titles }} 분류체계 다운로드
						</a>
					</div> -->
					<section class="conSection industry_hearder_wrap">
						<div class="category_wrap">
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
					<div v-if="totalCount">
						<section class="conSection">
							<div class="mapping-info">
								<p class="txt">
									<strong v-html="categorySelectName" class="mR5"> </strong>
									<strong class="num">특허 출원 {{ totalCount }}개</strong
									>입니다.
								</p>
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
							<div class="txt_title01" v-if="totalCount != 0">
								Kmpas 비중 확인
								<span>(산업명을 클릭하시면 분석 서비스로 이동됩니다.)</span>
							</div>
							<div class="tbl_type mobile_table" v-if="totalCount != 0">
								<table summary="KSIC 산업분류">
									<caption>
										KSIC 산업분류
									</caption>
									<colgroup>
										<col />
										<col width="10%" />
										<col width="10%" />
										<col width="15%" />
										<col width="10%" />
										<col width="15%" />
										<col width="10%" />
										<col width="10%" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">전방산업명(공급자)</th>
											<th scope="col">코드 값</th>
											<th scope="col">전방거래비중</th>
											<th scope="col">기준산업명</th>
											<th scope="col">기준코드</th>
											<th scope="col">후방산업명(구매자)</th>
											<th scope="col">코드 값</th>
											<th scope="col">후방거래비중</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="pp0">
												<table>
													<tr v-for="(ime, i) in fetchData.upstrm" :key="i">
														<td>
															<span
																v-if="ime.upstrmKsicNm"
																v-html="ime.upstrmKsicNm"
																class="link"
																@click="
																	analysisPush(
																		ime.upstrmKsicNm,
																		ime.upstrmKsicCd,
																	)
																"
															>
															</span>
														</td>
													</tr>
												</table>
											</td>
											<td class="pp0">
												<table>
													<tr v-for="(ime, i) in fetchData.upstrm" :key="i">
														<td>
															<span v-if="ime.upstrmKsicNm">{{
																ime.upstrmKsicCd
															}}</span>
														</td>
													</tr>
												</table>
											</td>
											<td class="pp0">
												<table>
													<tr v-for="(ime, i) in fetchData.upstrm" :key="i">
														<td>
															<span v-if="ime.upstrmKsicNm"
																>{{
																	(ime.upstrmDlngRto * 100).toFixed(2)
																}}%</span
															>
														</td>
													</tr>
												</table>
											</td>
											<td>
												<span
													class="link"
													@click="
														analysisPush(
															fetchData.ksicInfo.ksicNm,
															fetchData.ksicInfo.ksicCd,
														)
													"
												>
													{{ fetchData.ksicInfo.ksicNm }}
												</span>
											</td>
											<td>
												{{ fetchData.ksicInfo.ksicCd }}
											</td>
											<td class="pp0">
												<table>
													<tr v-for="(ime, i) in fetchData.dwnstrm" :key="i">
														<td>
															<span
																v-if="ime.dwnstrmKsicNm"
																v-html="ime.dwnstrmKsicNm"
																class="link"
																@click="
																	analysisPush(
																		ime.dwnstrmKsicNm,
																		ime.dwnstrmKsicCd,
																	)
																"
															></span>
														</td>
													</tr>
												</table>
											</td>
											<td class="pp0">
												<table>
													<tr v-for="(ime, i) in fetchData.dwnstrm" :key="i">
														<td>
															<span v-if="ime.dwnstrmKsicNm">{{
																ime.dwnstrmKsicCd
															}}</span>
														</td>
													</tr>
												</table>
											</td>
											<td class="pp0">
												<table>
													<tr v-for="(ime, i) in fetchData.dwnstrm" :key="i">
														<td>
															<span v-if="ime.dwnstrmKsicNm">
																{{ (ime.dwnstrmDlngRto * 100).toFixed(2) }}%
															</span>
														</td>
													</tr>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</section>
					</div>
					<section class="conSection" v-else>
						<div class="mapping-info">
							<p class="txt">
								KISC 코드 분류 조회로
								<span class="num">세세 분류를 선택해</span> 주세요.
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners';
import { fetchAnalysis } from '@/api/analysis'; //db api
import { fetchMapping } from '@/api/mapping'; //db api
import SubTitle from '@/views/front/common/SubTitle';
import CategoryList from '@/components/front/mapping/CategoryKmaps';
import { numberCommas } from '@/utils/index';
import { pushArr } from '@/utils/storage';
export default {
	name: 'kmpas',
	components: {
		SubTitle,
		CategoryList,
		HalfCircleSpinner,
	},
	data() {
		return {
			dbName: 'kmaps',
			col: 20,
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
			fetchData: [],
			totalCount: '',
			categorySelectName: '',
			categorySelectCode: '',
			categoryLoad1: false,
			categoryLoad2: false,
			categoryLoad3: false,
			categoryLoad4: false,
			categoryLoad5: false,
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
			if (ksicTopCd.length < 3) {
				ksicLevel = ksicTopCd.length + 1;
			} else {
				ksicLevel = ksicTopCd.length;
			}
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
			this.$store.commit('fboardList/updateState', { SearchLoading: true });
			this.categorySelectCode = event.target.id;
			this.categorySelectName = event.target.value;
			const code = 'ksicCd=' + this.categorySelectCode.replace(/[^0-9]/g, '');
			const { data } = await fetchMapping(this.dbName, code);
			this.totalCount = numberCommas(data.result.totalCount);
			this.fetchData = data.result.data;
			this.$store.commit('fboardList/updateState', { SearchLoading: false });
		},
		analysisPush(name, code) {
			//pushArr(this.categorySelectName, this.categorySelectCode);
			pushArr(name, code);
		},
	},
};
</script>
