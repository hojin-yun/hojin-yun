<template>
	<div class="subContent">
		<div class="subConView">
			<div class="subConDetail">
				<div id="realContents">
					<SubTitle />

					<div class="searchTotalArea">
						<div class="result-wrap">
							<SearchForm
								searchType="all"
								:totalNo="
									Corporation.CorpTotalDocumentCount +
									Patent.PatentTotalDocumentCount
								"
							/>

							<!-- list -->
							<div class="result-box">
								<div class="resultTitleArea">
									<p class="result-tit">
										<strong>특허</strong>
										<span>({{ Patent.PatentTotalDocumentCount }}건)</span>
									</p>
									<div class="srchBtnArea">
										<router-link
											class="btnType01"
											:to="{
												path: '/front/search/patent/' + wnSearch,
											}"
										>
											<span>특허 정보 더보기</span>
										</router-link>
									</div>
								</div>
								<SearchListPatent
									:listData="Patent.PatentDocumentList"
									v-if="Patent.PatentDocumentCount != 0"
									@patentPop="patentPop"
								/>
								<div v-else class="search_nodata">
									검색하신
									<strong class="num">"{{ wnSearch }}"</strong> 키워드에 해당한
									특허가 없습니다.
								</div>
							</div>

							<!-- list -->
							<div class="result-box">
								<div class="resultTitleArea">
									<p class="result-tit">
										<strong>출원인</strong
										><span>({{ Corporation.CorpTotalDocumentCount }}건)</span>
									</p>
									<div class="srchBtnArea">
										<router-link
											class="btnType01"
											:to="{
												path: '/front/search/corp/' + wnSearch,
											}"
										>
											<span>출원인 정보 더보기</span>
										</router-link>
									</div>
								</div>
								<SearchListCorp
									:listData="Corporation.CorpDocumentList"
									v-if="Corporation.CorpDocumentCount != 0"
									@patentPop="patentPop"
								/>
								<div v-else class="search_nodata">
									검색하신
									<strong class="num">"{{ wnSearch }}"</strong> 키워드에 해당한
									출원인이 없습니다.
								</div>
							</div>
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
import SubTitle from '@/views/front/common/SubTitle';
import SearchForm from '@/components/front/search/searchForm';
import SearchListPatent from '@/components/front/search/searchListPatent';
import SearchListCorp from '@/components/front/search/searchListCorp';
import searchViewPatent from '@/components/front/search/searchViewPatent';
import searchViewCorp from '@/components/front/search/searchViewCorp';
import searchMmixin from '@/components/front/mixin/search';
export default {
	mixins: [searchMmixin],
	name: 'search',
	components: {
		SubTitle,
		SearchForm,
		SearchListPatent,
		searchViewPatent,
		SearchListCorp,
		searchViewCorp,
	},
	data() {
		return {
			type: 'ALL',
			listCount: 3,
		};
	},
};
</script>
