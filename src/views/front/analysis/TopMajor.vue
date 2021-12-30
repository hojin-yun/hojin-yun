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

										<toptab :pageName="pageName" />
									</div>
								</div>
							</section>
							<ChartAdd :reportId="reportId" />
							<TableAdd :tableId="tableId" />
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
import CheckKsic from '@/components/front/analysis/CheckKsic';
import ChartAdd from '@/components/front/analysis/ChartAdd';
import TableAdd from '@/components/front/analysis/TableAdd';
import analysisNotice from '@/views/front/analysis/analysisNotice';
import toptab from '@/views/front/analysis/toptab';
import analysisLoad from '@/components/front/mixin/analysisLoad';
import KsicList from '@/components/front/analysis/KsicList';
export default {
	mixins: [analysisLoad],
	name: 'TopMajor',
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
		toptab,
		KsicList,
	},
	data() {
		return {
			isActive: false,
			pageName: 'topmajor',
			reportId: '513BC5A1B7459E50F44184AFC09D9D11',
			tableId: '42F6912BE94F05BFD836B3BD064A3A7B',
		};
	},
	methods: {
		clickOptions() {
			this.isActive = !this.isActive;
		},
	},
};
</script>
