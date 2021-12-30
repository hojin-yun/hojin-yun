<template>
	<div class="subContent">
		<div class="subConView">
			<div class="subConDetail">
				<div id="realContents">
					<SubTitle />
					<div class="mappingBtn btnArea text-center">
						<a
							href="https://dart.fss.or.kr/"
							target="_blank"
							title="새창으로"
							class="btn btn-primary"
						>
							{{ $route.meta.titles }} 분류체계 확인하기
						</a>
					</div>
					<div
						class="analysis-icon-wrap center"
						style="
							background: #fbf2f0;
							color: rgb(124, 33, 33);
							font-size: 13px;
							max-width: 680px;
							width: 100%;
							margin: 20px auto 0;
						"
					>
						※ 비슷한 회사명이 많으므로 정확한 회사명으로 검색하세요. (주)는 제외
					</div>
					<MappingSearch
						:SearchText="SearchText"
						@keywordSearch="keywordSearch"
						@SearchTextSet="SearchTextSet"
					/>

					<div class="cpcbox">
						<section class="conSection" v-if="totalCount">
							<div class="mapping-info">
								<p class="txt">
									{{ SearchText }}가 속한 산업군의
									<span class="num">특허 출원 {{ totalCount }}개 </span>입니다.
								</p>
							</div>
						</section>

						<div class="txt_title01" v-if="totalCount != 0">
							KSIC 비중 확인
							<span
								>(산업명을 클릭 또는 분류코드를 체크 하고 버튼을 클릯시 분석
								서비스로 이동됩니다.)</span
							>
						</div>
						<MappingCpc :fetchData="listData" />
						<Paging :dbName="dbName" :SearchText="SearchText" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SubTitle from '@/views/front/common/SubTitle';
import MappingSearch from '@/components/front/mapping/MappingSearch';
import MappingCpc from '@/components/front/mapping/MappingCpc';
import Paging from '@/components/front/mapping/Paging';
import mappingList from '@/components/front/mixin/mappingList';
export default {
	mixins: [mappingList],
	name: 'dart',
	components: {
		SubTitle,
		MappingCpc,
		MappingSearch,
		Paging,
	},
	data() {
		return {
			dbName: 'dart',
		};
	},
	methods: {
		async keywordSearch() {
			if (!this.SearchText) {
				alert(`회사명 또는 회사코드를 입력하세요`);
				return;
			}
			this.$router.push('?').catch(() => {}); //파라미터 초기화
			this.$store.commit('fboardList/updateState', { pageNum: 1 });
			this.ksicSearch({
				pageName: this.dbName, //DB 이름
				pageNum: this.$route.query.pageNum || this.pageNum,
				searchText: `searchKeyword=${this.SearchText}`,
			});
		},
	},
};
</script>
