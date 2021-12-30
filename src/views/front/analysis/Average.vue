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
			pageName: 'average',
			reportId: 'F342B8AC714A7F7F6BFA8EA1A8E38F37',
			reportId2: '1F58DA02ED43C1196E764EB6E85304E6',
			tableId: 'E47178F3744856EE7EDD92B16E78EAB4',
			tableId2: 'EEA95B220545C71C794C6591105EE11F',
		};
	},
	methods: {
		clickOptions() {
			this.isActive = !this.isActive;
		},
	},
};
</script>
