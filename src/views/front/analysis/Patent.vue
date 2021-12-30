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
										<CheckKsic @clickOptions="clickOptions" />
										<KsicList />
										<!-- notice -->
										<analysisNotice />
										<!-- //notice -->
									</div>
								</div>
							</section>

							<ChartAdd :reportId="reportId" />
							<!-- <ChartAdd :reportId="reportId1" :pageTi="'/ 경제지표'" /> -->
							<TableAdd :tableId="tableId" />
							<!-- <TableAdd :tableId="tableId1" :pageTi="'/ 경제지표'" /> -->
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
import analysisRange from '@/components/front/analysis/analysisRange';
import KsicList from '@/components/front/analysis/KsicList';
import CheckKsic from '@/components/front/analysis/CheckKsic';
import ChartAdd from '@/components/front/analysis/ChartAdd';
import TableAdd from '@/components/front/analysis/TableAdd';
import analysisNotice from '@/views/front/analysis/analysisNotice';
import analysisLoad from '@/components/front/mixin/analysisLoad';
export default {
	mixins: [analysisLoad],
	name: 'patent',
	components: {
		SubTitle,
		analysisLnb,
		analysisSltOptions,
		TagKsic,
		analysisRange,
		analysisNotice,
		CheckKsic,
		ChartAdd,
		TableAdd,
		KsicList,
		// VueSlider,
	},
	data() {
		return {
			isActive: false,
			pageName: 'patent',
			reportId: '197E41A09E4A66F4BB6E79A9B5615834',
			reportId1: 'A51B39E1F34593B8291B0FA5617B944D',
			tableId: 'F4B61601834A4BE8251B82A434AB5C56',
			tableId1: '193676794241941F849571AB08EF312B',
		};
	},
	methods: {
		clickOptions() {
			this.isActive = !this.isActive;
		},
	},
};
</script>
