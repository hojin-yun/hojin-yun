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
//import CheckKsic from '@/components/front/analysis/CheckKsic';
import KsicList from '@/components/front/analysis/KsicList';
import ChartAddOne from '@/components/front/analysis/ChartAddOne';
import TableAddOne from '@/components/front/analysis/TableAddOne';
import analysisLoad from '@/components/front/mixin/analysisLoad';
export default {
	mixins: [analysisLoad],
	name: 'injury',
	components: {
		SubTitle,
		analysisLnb,
		analysisSltOptions,
		TagKsic,
		analysisNotice,
		//CheckKsic,
		ChartAddOne,
		TableAddOne,
		KsicList,
	},
	data() {
		return {
			y: JSON.parse(localStorage.getItem('sectionYearData')),
			isActive: false,
			pageName: 'injury',
			reportId: 'ED31258FB04689AF87E32B86C6CB2D00',
			reportId2: 'D1C89788CF44A2D621F805A7A0D15C3B',
			tableId: '46AFA6A30A4325BED7ED8BB446939C56',
			tableId2: 'ABAB493C83444EC25683BA90A07918E7',
		};
	},
	mounted() {
		$('.analysis-notice .y1').html(this.y[0]);
		$('.analysis-notice .y2').html(this.y[1]);
	},
	created() {
		$('.analysis-notice .y1').html(this.y[0]);
		$('.analysis-notice .y2').html(this.y[1]);
	},
	methods: {
		yload() {},
		clickOptions() {
			this.isActive = !this.isActive;
		},
	},
};
</script>
