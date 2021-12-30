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

							<ChartAddOne :reportId="reportId" />
							<TableAddOne :tableId="tableId" />
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
//import CheckKsic from '@/components/front/analysis/CheckKsic';
import ChartAddOne from '@/components/front/analysis/ChartAddOne';
import TableAddOne from '@/components/front/analysis/TableAddOne';
import analysisNotice from '@/views/front/analysis/analysisNotice';
import analysisLoad from '@/components/front/mixin/analysisLoad';
import KsicList from '@/components/front/analysis/KsicList';
export default {
	mixins: [analysisLoad],
	name: 'barrier',
	components: {
		SubTitle,
		analysisLnb,
		analysisSltOptions,
		TagKsic,
		analysisRange,
		analysisNotice,
		//CheckKsic,
		ChartAddOne,
		TableAddOne,
		KsicList,
	},
	data() {
		return {
			isActive: false,
			pageName: 'barrier',
			reportId: '58DCB21FF24452068B7E299B1B6F39F3',
			tableId: '5F1828545345D9FCDB0BBF93F9CB6E46',
		};
	},
	methods: {
		clickOptions() {
			this.isActive = !this.isActive;
		},
	},
};
</script>
