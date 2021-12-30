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
							<TableAddOne
								:tableId="tableId"
								:pageTi="'국적별'"
								:tableHeight="200"
							/>
							<TableAddOne :tableId="tableId2" :pageTi="'산업별'" />
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
	name: 'major',
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
			pageName: 'major',
			reportId: '7FAA70C0834D7B5D26206197C92F59EC',
			reportId2: '53D6DE36A54A87413468178B3B1C5A1C',
			tableId: 'C5CE28E7D4494D3DD57E40A7C8EA3F97',
			tableId2: '7F4400F7A443E9EC080D4AA1F5B4DFA6',
		};
	},
	methods: {
		clickOptions() {
			this.isActive = !this.isActive;
		},
	},
};
</script>
