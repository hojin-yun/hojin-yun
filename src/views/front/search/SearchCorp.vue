<template>
	<div class="subContent">
		<div class="subConView">
			<div class="subConDetail">
				<div id="realContents">
					<SubTitle />

					<div class="searchTotalArea">
						<div class="result-wrap">
							<SearchForm
								searchType="corp"
								:totalNo="Corporation.CorpTotalDocumentCount"
							/>

							<!-- list -->
							<div class="result-box">
								<div class="resultTitleArea">
									<p class="result-tit">
										<strong>출원인</strong>
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
								<div
									class="search_load"
									v-if="Corporation.CorpDocumentCount != 0"
								>
									<SearchListCorp
										:listData="Corporation.CorpDocumentList"
										v-if="Corporation.CorpDocumentCount != 0"
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
									출원인이 없습니다.
								</div>
							</div>
							<SearchPaging
								v-if="Corporation.CorpDocumentCount != 0"
								:totalNo="Corporation.CorpTotalDocumentCount"
								:page="Corporation.CorpDocumentPage"
							/>
						</div>
					</div>

					<!-- 출원인 상세보기 -->
					<div
						class="modal inmodal fade"
						id="corpViewPop"
						tabindex="-1"
						role="dialog"
						aria-hidden="true"
					>
						<searchViewCorp :CorpView="CorpView" />
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
import SearchListCorp from '@/components/front/search/searchListCorp';
import SearchPaging from '@/components/front/search/searchPaging';
import searchViewCorp from '@/components/front/search/searchViewCorp';
import searchMmixin from '@/components/front/mixin/search';
export default {
	mixins: [searchMmixin],
	name: 'search',
	components: {
		SubTitle,
		SearchForm,
		SearchListCorp,
		SearchPaging,
		HalfCircleSpinner,
		searchViewCorp,
	},
	data() {
		return {
			type: 'CORP',
			Corporation: [],
			listCount: 10,
			PageNumber: 1,
			pageNum: 1,
			searchLoad: false,
		};
	},
	computed: {
		pageNumGet: {
			get() {
				return this.$route.query.pageNum || 1;
			},
		},
	},
};
</script>
