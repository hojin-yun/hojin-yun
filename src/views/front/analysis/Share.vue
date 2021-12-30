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
							<!-- 주요 산업 분석대상 선택 -->
							<analysisSltOptions
								:pageName="pageName"
								:isActive="isActive"
								@clickOptions="clickOptions"
							/>
							<!-- //주요 산업 분석대상 선택 -->

							<!-- <div class="mappingBtn btnArea text-right">
								<a href="#" class="btn btn-primary">전체 pdf 다운로드</a>
							</div> -->

							<section class="conSection">
								<div class="analysis-search-wrap">
									<div class="analysis-search-area">
										<TagKsic
											:isActive="isActive"
											@clickOptions="clickOptions"
										/>
										<analysisRange />
										<!-- <CheckKsic @clickOptions="clickOptions" /> -->
										<KsicList />

										<!-- notice -->
										<analysisNotice />
										<!-- //notice -->
									</div>
								</div>
							</section>

							<ChartAddOne :reportId="reportId" :pageTi="'국적별'" />
							<ChartAddOne :reportId="reportId2" :pageTi="'산업별'" />
							<!-- <ChartAddOne :reportId="reportId4" :pageTi="'산업별/경제지표'" /> -->
							<ChartAddOne :reportId="reportId3" :pageTi="'하위산업별'" />
							<!-- <ChartAddOne
								:reportId="reportId5"
								:pageTi="'하위산업별/경제지표'"
							/> -->
							<TableAddOne
								:tableId="tableId"
								:pageTi="'국적별'"
								:tableHeight="200"
							/>
							<TableAddOne :tableId="tableId2" :pageTi="'산업별'" />
							<!-- <TableAddOne :tableId="tableId4" :pageTi="'산업별/경제지표'" /> -->
							<TableAddOne :tableId="tableId3" :pageTi="'하위산업별'" />
							<!-- <TableAddOne
								:tableId="tableId5"
								:pageTi="'하위산업별/경제지표'"
							/> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import 'vue-slider-component/theme/default.css';
import SubTitle from '@/views/front/common/SubTitle';
import analysisLnb from '@/components/front/analysis/analysisLnb';
import analysisSltOptions from '@/components/front/analysis/analysisSltOptions';
import TagKsic from '@/components/front/analysis/TagKsic';
import analysisNotice from '@/views/front/analysis/analysisNotice';
import analysisRange from '@/components/front/analysis/analysisRange';
//import CheckKsic from '@/components/front/analysis/CheckKsic';
import ChartAddOne from '@/components/front/analysis/ChartAddOne';
import TableAddOne from '@/components/front/analysis/TableAddOne';
import analysisLoad from '@/components/front/mixin/analysisLoad';
import KsicList from '@/components/front/analysis/KsicList';
export default {
	mixins: [analysisLoad],
	name: 'injury',
	components: {
		SubTitle,
		analysisLnb,
		analysisSltOptions,
		TagKsic,
		analysisNotice,
		analysisRange,
		//CheckKsic,
		ChartAddOne,
		TableAddOne,
		KsicList,
	},
	data() {
		return {
			isActive: false,
			pageName: 'injury',
			reportId: 'F4BB09701448E97A0406DBB2FB113379',
			reportId2: '7C12ED67E94D0B4B3D8E3F9F8F103958',
			reportId3: 'C9D1026A854591E0A5E5ECBDCE0BACAF',
			reportId4: 'B95FE1F248CAA0F091FC63912A4DCE3E',
			reportId5: '7DEA3FAC44768B57DA2B438DDC8DF982',
			tableId: '458C887F25485AFD1844E493E3F2AFBB',
			tableId2: 'EA40F5883C471FEF5DFBBA9925E398D4',
			tableId3: 'E2BF923F2044DE9965A80487E6828B01',
			tableId4: '853DC7F04D813D7832814E924BF00129',
			tableId5: 'C77B70234012A57879B9B18E2CCFCD90',
		};
	},
	methods: {
		clickOptions() {
			this.isActive = !this.isActive;
		},
	},
};
</script>
