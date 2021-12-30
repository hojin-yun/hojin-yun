<template>
	<div class="subContent">
		<div class="subConView">
			<div class="subConDetail">
				<div id="realContents">
					<SubTitle />
					<!-- <div class="mappingBtn btnArea text-center">
						<a
							href="https://www.kotra.or.kr/kh/common/getHSCodeList.do"
							target="_blank"
							title="새창으로"
							class="btn btn-primary"
						>
							{{ $route.meta.titles }} 분류체계 확인하기
						</a>
					</div> -->
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
						※ 검색 HSK코드 예시 - 020450 띄어쓰기 없이 작성
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
									{{ $route.meta.titles }}의 {{ SearchText }}코드
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
	name: 'cpc',
	components: {
		SubTitle,
		MappingSearch,
		MappingCpc,
		Paging,
	},
	data() {
		return {
			dbName: 'hsk',
		};
	},
	methods: {
		analysisPush() {
			this.$router.push({ name: 'patent', params: { name: 'dog', age: 4 } });
		},
		async keywordSearch() {
			if (!this.SearchText) {
				alert(`${this.dbName}코드를 입력하세요`);
				return;
			}
			if (this.SearchText.length < 6) {
				alert(`코드 앞 6자리 이상을 입력하세요`);
				return;
			}
			this.$router.push('?').catch(() => {}); //파라미터 초기화
			this.$store.commit('fboardList/updateState', { pageNum: 1 });
			this.ksicSearch({
				pageName: this.dbName, //DB 이름
				pageNum: this.$route.query.pageNum || this.pageNum,
				searchText: `${this.dbName}Cd=${this.SearchText.split(' ').join('')}`,
			});
		},
	},
};
</script>
