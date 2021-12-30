<template>
	<div>
		<div class="analysis-search-list mT10">
			<div class="analysis-search-label">
				<span class="analysis-search-label-title"> 출원구간 </span>
			</div>
			<div class="analysis-search-item">
				<div class="radiobox" v-if="pageName == 'growth'">
					<!-- <span class="mR10" v-for="(item, index) in section" :key="index">
						<input
							type="radio"
							name="section"
							:id="item.id"
							:value="index"
							v-model="pickedGet"
							@change="sectionChange($event)"
						/>
						<label :for="item.id"> {{ item.name }} </label>
					</span> -->
					<span class="mR10" v-for="(item, index) in yars" :key="index">
						<input
							type="radio"
							name="section"
							:id="item"
							:value="item"
							v-model="yarsChangeGet"
						/>
						<label :for="item"> {{ item }}년 단위 </label>
					</span>
				</div>
				<!-- 년도선택 -->
				<div class="rangeSlider" :class="pageName == 'growth' ? '' : 'pT0'">
					<div style="width: 100%">
						<div
							style="
								text-align: right;
								font-size: 11px;
								line-height: 1.2;
								color: #666;
							"
						>
							{{ sectionYearData[4][0] }}
							~
							{{ sectionYearData[4][1] }}
							<br />미공개 구간
						</div>
						<vue-slider
							v-model="yearSectionGet"
							:data="yearData"
							:marks="yearMarks"
							:min-range="1"
							@change="yearChange"
							:tooltip="'always'"
							:tooltip-placement="['top', 'bottom']"
							@drag-start="yearDrag"
						>
						</vue-slider>
					</div>
				</div>
				<!-- //년도선택 -->
			</div>
		</div>
		<div class="analysis-search-list" v-if="$route.name == 'patent'">
			<div class="analysis-search-label">
				<span class="analysis-search-label-title">특허청</span>
			</div>
			<div class="analysis-search-item">
				<div class="checkbox-out">
					<span v-for="(item, index) in nation" :key="index">
						<input
							type="checkbox"
							:id="item.code"
							:value="item.code"
							v-model="item.is"
							@change="nationChange($event)"
						/>
						<label :for="item.code" class="checkbox">{{ item.name }}</label>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import { mapState } from 'vuex';
export default {
	props: ['pageName'],
	name: 'analysisRange',
	data() {
		return {
			sectionYearData: [],
			checkedValues: [],
			yars: [2, 3, 4, 5],
		};
	},
	components: {
		VueSlider,
	},
	computed: {
		...mapState('analysis', [
			'yearSection',
			'yearData',
			'yearMarks',
			'section',
			'picked',
			'nation',
			'nationCode',
			'yarsChange',
		]),
		pickedGet: {
			get() {
				return this.picked;
			},
			set(value) {
				this.$store.commit('analysis/updateState', { picked: value });
			},
		},
		yarsChangeGet: {
			get() {
				return this.yarsChange;
			},
			set(value) {
				this.$store.commit('analysis/updateState', { yarsChange: value });
			},
		},
		yearSectionGet: {
			get() {
				return this.yearSection;
			},
			set(value) {
				this.$store.commit('analysis/updateState', { yearSection: value });
			},
		},
	},
	created() {
		let arrYearData = [];
		let arrYearMarks = [];
		let date = new Date();
		let newYear = date.getFullYear();
		date.setMonth(date.getMonth() - 18);
		let year = date.getFullYear();
		let startYear = year - 21;
		//if (!localStorage.getItem('YEARDATA-S')) {
		if (this.yearSection == '') {
			let year_section = new Array();
			year_section.push(startYear, year - 1);
			arrYearMarks.push(startYear, newYear);
			//localStorage.setItem('YEARDATA-S', JSON.stringify(year_section));
			this.$store.commit('analysis/updateState', { yearSection: year_section });
		}
		for (let index = newYear; index >= startYear; index--) {
			arrYearData.unshift(index);
			if (index % 2 === 0) {
				arrYearMarks.unshift(index);
			}
		}
		arrYearMarks.unshift(newYear);
		this.$store.commit('analysis/updateState', { yearMarks: arrYearMarks });
		this.$store.commit('analysis/updateState', { yearData: arrYearData });
		let sectionYear = [];
		sectionYear[0] = startYear;
		for (let index = 1; index < 16; index++) {
			var p = index % 4;
			if (index == 3) {
				sectionYear[index % 3] = [startYear, startYear + index];
			} else {
				if (p == 0) {
					sectionYear[index / 4] = [startYear + index, startYear + index + 3];
				}
			}
		}
		sectionYear[4] = [year, newYear];
		this.sectionYearData = sectionYear;
		localStorage.setItem('sectionYearData', JSON.stringify(sectionYear[3]));
	},
	methods: {
		nationChange(event) {
			let nationArr = this.nation;
			let nationCodeArr = this.nationCode;
			if (event.target.checked) {
				const itemToFind = nationArr.find(function (item) {
					return item['code'] === event.target.value;
				});
				itemToFind.is = true;
				nationCodeArr.push(itemToFind.code);
				this.$store.commit('analysis/updateState', {
					nation: nationArr,
				});
				this.$store.commit('analysis/updateState', {
					nationCode: nationCodeArr,
				});
			} else {
				const itemToFind = nationArr.find(function (item) {
					return item['code'] === event.target.value;
				});
				itemToFind.is = false;
				for (let i = 0; i < nationCodeArr.length; i++) {
					if (nationCodeArr[i] === itemToFind.code) {
						nationCodeArr.splice(i, 1);
						i--;
					}
				}
				this.$store.commit('analysis/updateState', {
					nation: nationArr,
				});
				this.$store.commit('analysis/updateState', {
					nationCode: nationCodeArr,
				});
			}
		},
		sectionChange(event) {
			const index = event.target.value;
			this.$store.commit('analysis/updateState', {
				yearSection: this.sectionYearData[index],
			});
			this.iframeLord();
		},
		yearDrag() {
			this.$store.commit('analysis/updateState', { picked: '' });
			$("input:checkbox[name='section']").prop('checked', false);
		},
		yearChange() {
			this.yearDrag();
			this.iframeLord();
		},
		check() {
			let cv = '';
			this.iframeData = [];
			this.checkedValues.forEach((value, index) => {
				if (index > 0) {
					cv += ', ' + value;
				} else {
					cv += value;
				}
				this.iframeData.push({ id: 'chart' + (index + 1), caname: value });
			});
			this.caname = cv;
			this.iframeLord();
		},
		iframeLord() {
			//.log(this.yearSection[0]);
			//console.log(this.caname);
		},
	},
};
</script>
