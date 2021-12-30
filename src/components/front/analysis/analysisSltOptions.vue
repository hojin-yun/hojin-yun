<template>
	<div class="subject-select">
		<div class="subject-select-wrap" :class="{ active: isActive }">
			<div class="subject-select-area">
				<div class="subject-select-title">
					<span @click="clickOptions">주요 산업 분석대상 선택</span>
				</div>
				<!-- <div class="subject-selected">
					<ul>
						<li v-for="(item, j) in ksicArr" :key="j">
							<span v-html="item.name"></span>
							<i class="ti-close" @click="tagDel(item.code)"></i>
						</li>
					</ul>
				</div>
				<div class="subject-select-reset">
					<span @click="codeAllDel()"><i class="ti-reload"></i>전체해제 </span>
				</div> -->
			</div>
			<div class="subject-select-view">
				<h3 class="subject-select-view-title">주요 산업 분석 대상 선택하기</h3>
				<a
					href="#none"
					class="subject-select-close-mobile"
					@click="clickOptions"
				>
					<i class="ti-close"></i>
				</a>

				<div class="category_wrap industry_wrap">
					<CategoryList
						:ksicCategory="ksicCategory0"
						:categoryOn="categoryOn0"
						:categoryName="categoryName[0]"
						:pageName="pageName"
						:ictCategory="ictCategory"
						@categoryClick="categoryClick"
						@categoryIctClick="categoryIctClick"
					/>
					<CategoryList
						:ksicCategory="ksicCategory1"
						:categoryOn="categoryOn1"
						:categoryName="categoryName[1]"
						:pageName="pageName"
						@categoryClick="categoryClick"
					/>
					<CategoryList
						:ksicCategory="ksicCategory2"
						:categoryOn="categoryOn2"
						:categoryName="categoryName[2]"
						:pageName="pageName"
						@categoryClick="categoryClick"
					/>
					<CategoryList
						:ksicCategory="ksicCategory3"
						:categoryOn="categoryOn3"
						:categoryName="categoryName[3]"
						:pageName="pageName"
						@categoryClick="categoryClick"
					/>
					<CategoryList
						:ksicCategory="ksicCategory4"
						:categoryOn="categoryOn4"
						:categoryName="categoryName[4]"
						:pageName="pageName"
						@categoryClick="categoryClick"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { fetchAnalysis } from '@/api/analysis'; //db api
import { fetchCategory, fetchSearch } from '@/api/mapping'; //db api
import CategoryList from './CategoryList';
import { mapState } from 'vuex';
import { ksicNameDel, ksicAllDel } from '@/utils/storage';
//import { mapState } from 'vuex';
export default {
	props: ['pageName', 'isActive'],
	name: 'analysisSltOptions',
	components: {
		CategoryList,
	},
	data: function () {
		return {
			categoryName: ['대분류', '중분류', '소분류', '세분류', '세세분류'],
			ksicCategory0: [],
			ksicCategory1: [],
			ksicCategory2: [],
			ksicCategory3: [],
			ksicCategory4: [],
			ictCategory: [],
			categoryOn0: '',
			categoryOn1: '',
			categoryOn2: '',
			categoryOn3: '',
			categoryOn4: '',
		};
	},
	computed: {
		...mapState('analysis', ['ksicArr', 'ksicCds']),
	},
	created() {
		this.ksicColl();
		//this.allKsicColl('0111');
	},
	methods: {
		tagDel(event) {
			ksicNameDel(this.ksicArr, event, 'code', this.ksicCds);
		},
		codeAllDel() {
			ksicAllDel();
		},
		async ksicColl() {
			const { data } = await fetchAnalysis(1, '');
			this.ksicCategory0 = data.result.data;
			const ict = await fetchCategory(
				'itstat',
				'itstatLevel=3&itstatVersion=2020&itstatCd=3400',
			);
			this.ictCategory = ict.data.result.data;
		},
		async allKsicColl(ksicTopCd) {
			this.anac = [];
			let ksicLevel;
			ksicLevel = ksicTopCd.length + 1;
			// if (ksicTopCd.length < 3) {
			// 	ksicLevel = ksicTopCd.length + 1;
			// } else {
			// 	ksicLevel = ksicTopCd.length;
			// }
			for (let index = 2; index <= ksicLevel; index++) {
				let code = '';
				if (index == 2) {
					code = ksicTopCd.substring(0, 1);
				} else {
					code = ksicTopCd.substring(0, index);
				}
				this[`categoryOn${index - 2}`] = code;
				const { data } = await fetchAnalysis(index, code);
				this[`ksicCategory${index - 1}`] = data.result.data;
			}
		},
		async OneKsicColl(ksicTopCd) {
			let ksicLevel;
			ksicLevel = ksicTopCd.length + 1;
			// if (ksicTopCd.length < 3) {
			// 	ksicLevel = ksicTopCd.length + 1;
			// } else {
			// 	ksicLevel = ksicTopCd.length;
			// }
			for (let index = ksicLevel; index < 6; index++) {
				this[`categoryOn${index - 2}`] = '';
				this[`ksicCategory${index - 1}`] = [];
			}
			const { data } = await fetchAnalysis(ksicLevel, ksicTopCd);
			this[`categoryOn${ksicLevel - 2}`] = ksicTopCd;
			this[`ksicCategory${ksicLevel - 1}`] = data.result.data;
		},
		categoryClick(event) {
			this.OneKsicColl(event);
		},
		async categoryIctClick(event) {
			for (let index = 2; index < 6; index++) {
				this[`categoryOn${index - 2}`] = '';
				this[`ksicCategory${index - 1}`] = [];
			}
			const { data } = await fetchSearch('itstat', `itstatCd=${event}`, 1, 15);
			this.categoryOn0 = event;
			this.ksicCategory1 = data.result.data;
		},
		clickOptions() {
			this.$emit('clickOptions');
		},
	},
};
</script>
