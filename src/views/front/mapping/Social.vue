<template>
	<div class="subContent">
		<div class="subConView">
			<div class="subConDetail">
				<div id="realContents">
					<SubTitle />
					<!-- <button @click="analysisPush">데이터 넘기기 테스트</button> -->

					<div class="mappingBtn btnArea text-center">
						<a
							href="https://www.nrf.re.kr/biz/doc/class/view?menu_no=322"
							target="_blank"
							title="새창으로"
							class="btn btn-primary"
						>
							{{ $route.meta.titles }} 분류체계 확인하기
						</a>
					</div>

					<section class="conSection industry_hearder_wrap">
						<div class="category_wrap">
							<CategoryList
								:category="category1"
								:categoryName="'대분류'"
								:categoryOn="categoryOn1"
								:isNo="2"
								:categoryLoad="categoryLoad1"
								@categoryClick="categoryClick"
								@categorySelect="categorySelect"
							/>
							<CategoryList
								:category="category2"
								:categoryName="'중분류'"
								:categoryOn="categoryOn2"
								:isNo="3"
								:categoryLoad="categoryLoad2"
								@categoryClick="categoryClick"
								@categorySelect="categorySelect"
							/>
							<CategoryList
								:category="category3"
								:categoryName="'소분류'"
								:categoryOn="categoryOn3"
								:isNo="4"
								:categoryLoad="categoryLoad3"
								@categoryClick="categoryClick"
								@categorySelect="categorySelect"
							/>
							<CategoryList
								:category="category4"
								:categoryName="'세분류'"
								:categoryOn="categoryOn4"
								:categoryLoad="categoryLoad4"
								@categoryClick="categoryClick"
								@categorySelect="categorySelect"
							/>
						</div>
					</section>
					<section class="conSection" v-if="totalCount">
						<div class="mapping-info">
							<p class="txt">
								<strong v-html="categorySelectName" class="mR5"> </strong>
								<strong class="num">특허 출원 {{ totalCount }}개</strong>입니다.
							</p>
						</div>
					</section>
					<section class="conSection" v-else>
						<div class="mapping-info">
							<p class="txt">
								과학기술표준 세분류에서
								<span class="num">분류를 선택해</span> 주세요.
							</p>
						</div>
					</section>
					<!-- <div class="gridSum" v-if="totalCount != 0">
						분류코드 : <span> {{ listPagination.listCnt }} </span>건
					</div> -->
					<div class="txt_title01" v-if="totalCount != 0">
						KSIC 비중 확인
						<span
							>(산업명을 클릭 또는 분류코드를 체크 하고 버튼을 클릯시 분석
							서비스로 이동됩니다.)</span
						>
					</div>
					<MappingCpc :fetchData="listData" />
					<Paging
						:dbName="dbName"
						:SearchText="SearchText"
						@PagingClick="PagingClick"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SubTitle from '@/views/front/common/SubTitle';
import CategoryList from '@/components/front/mapping/CategorySocial';
import MappingCpc from '@/components/front/mapping/MappingCpc';
import Paging from '@/components/front/mapping/Paging';
//import { numberCommas } from '@/utils/index';
import mappingList from '@/components/front/mixin/mappingList';
export default {
	mixins: [mappingList],
	name: 'social',
	components: {
		SubTitle,
		CategoryList,
		MappingCpc,
		Paging,
	},
	data() {
		return {
			dbName: 'knscc',
			categorySelectName: '',
			categorySelectCode: '',
		};
	},
	created() {
		this.categoryColl(1, '');
	},
	methods: {
		async categorySelect(event) {
			// this.$store.commit('fboardList/updateState', { loading: true });
			this.categorySelectCode = event.target.id;
			this.categorySelectName = event.target.value;
			// const code = `${this.dbName}Cd=` + this.categorySelectCode;
			// const { data } = await fetchSearch(
			// 	this.dbName, //DB 이름
			// 	code,
			// 	this.$route.query.pageNum || this.pageNum,
			// 	10,
			// );
			// this.totalCount = numberCommas(data.result.totalCount);
			// this.fetchData = data.result.data;
			// this.$store.commit('fboardList/updateState', { loading: false });
			this.$router.push('?').catch(() => {}); //파라미터 초기화
			this.ksicSearch({
				pageName: this.dbName, //DB 이름
				pageNum: this.$route.query.pageNum || this.pageNum,
				searchText: `${this.dbName}Cd=${this.categorySelectCode}`,
			});
		},
		PagingClick(event) {
			// let stext = this.SearchText.substring(0, 4);
			// let etext = this.SearchText.substring(4, this.SearchText.length);
			// let sectext = stext + ' ' + etext;
			this.ksicSearch({
				pageName: this.dbName, //DB 이름
				pageNum: event,
				searchText: `${this.dbName}Cd=${this.categorySelectCode}`,
			});
		},
		categoryClick(event, no) {
			this.categoryColl(no, event);
		},
	},
};
</script>
