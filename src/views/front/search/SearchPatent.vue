<template>
	<div class="subContent">
		<div class="subConView">
			<div class="subConDetail">
				<div id="realContents">
					<SubTitle />

					<div class="searchTotalArea">
						<div class="result-wrap">
							<SearchForm
								searchType="patent"
								:totalNo="Patent.PatentTotalDocumentCount"
							/>

							<!-- list -->
							<div class="result-box">
								<div class="resultTitleArea">
									<p class="result-tit">
										<strong>특허</strong>
									</p>
									<div class="srchBtnArea">
										<router-link
											class="btnType01"
											:to="{
												path: '/front/search/all/' + wnSearch,
											}"
										>
											<span>전체 검색 보기</span>
										</router-link>
									</div>
								</div>
								<div class="search_load" v-if="Patent.PatentDocumentCount != 0">
									<SearchListPatent
										:listData="Patent.PatentDocumentList"
										v-if="Patent.PatentDocumentCount != 0"
										@patentPop="patentPop"
									/>
									<div class="half" v-if="searchLoad">
										<half-circle-spinner
											:animation-duration="1000"
											:size="40"
											color="#007dcd"
										/>
									</div>
								</div>
								<div v-else class="search_nodata">
									검색하신
									<strong class="num">"{{ wnSearch }}"</strong> 키워드에 해당한
									특허가 없습니다.
								</div>
							</div>
							<SearchPaging
								v-if="Patent.PatentDocumentCount != 0"
								:totalNo="Patent.PatentTotalDocumentCount"
								:page="Patent.PatentDocumentPage"
							/>
						</div>
					</div>

					<!-- 특허상세 보기 -->
					<div
						class="modal inmodal fade"
						id="patentViewPop"
						tabindex="-1"
						role="dialog"
						aria-hidden="true"
					>
						<searchViewPatent :PatentView="PatentView" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners';
import SubTitle from '@/views/front/common/SubTitle';
import SearchForm from '@/components/front/search/searchForm';
import SearchListPatent from '@/components/front/search/searchListPatent';
import searchViewPatent from '@/components/front/search/searchViewPatent';
import SearchPaging from '@/components/front/search/searchPaging';
import searchMmixin from '@/components/front/mixin/search';
export default {
	mixins: [searchMmixin],
	name: 'search',
	components: {
		SubTitle,
		SearchForm,
		SearchListPatent,
		SearchPaging,
		HalfCircleSpinner,
		searchViewPatent,
	},
	data() {
		return {
			type: 'PATENT',
			listCount: 10,
		};
	},
};
</script>
