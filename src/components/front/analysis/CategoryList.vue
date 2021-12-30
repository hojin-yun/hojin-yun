<template>
	<div class="category_list col-w20">
		<div class="industry_title">{{ categoryName }}</div>
		<div class="category_list-wrap">
			<div class="scrollWrap">
				<ul>
					<li
						v-for="item in ksicCategory"
						:key="item.ksicCd"
						:class="{ on: categoryOn == item.ksicCd }"
					>
						<div
							v-if="
								item.ksicCd != 'B' &&
								item.ksicCd != 'G' &&
								item.ksicCd != 'H' &&
								item.ksicCd != 'I' &&
								item.ksicCd != 'K' &&
								item.ksicCd != 'L' &&
								item.ksicCd != 'M' &&
								item.ksicCd != 'N' &&
								item.ksicCd != 'O' &&
								item.ksicCd != 'P' &&
								item.ksicCd != 'Q' &&
								item.ksicCd != 'R' &&
								item.ksicCd != 'S' &&
								item.ksicCd != 'T' &&
								item.ksicCd != 'U'
							"
						>
							<div class="checkbox-out" v-if="item.ksicNm">
								<input
									type="checkbox"
									:id="item.ksicCd"
									:name="item.ksicNm"
									:value="item.ksicCd"
									v-model="ksicCdsGet"
									@change="ksicCdEv($event, item.ksicLrgCd)"
								/>
								<label :for="item.ksicCd" class="checkbox" v-html="item.ksicNm">
								</label>
							</div>
							<span
								v-if="item.ksicNm"
								class="category_list_txt"
								v-html="item.ksicNm"
								@click="categoryClick(item.ksicCd)"
							></span>
							<div class="checkbox-out" v-if="item.ksicNm5">
								<input
									type="checkbox"
									:id="item.ksicCd5"
									:name="item.ksicNm5"
									:value="item.ksicCd5"
									v-model="ksicCdsGet"
									@change="ksicCdEv($event, item.ksicLrgCd)"
								/>
								<label
									v-if="item.ksicNm5"
									:for="item.ksicCd5"
									class="checkbox"
									v-html="item.ksicNm5"
								>
								</label>
							</div>
							<span
								v-if="item.ksicNm5"
								class="category_list_txt"
								v-html="item.ksicNm5"
								@click="ictClick"
							></span>
						</div>
					</li>
					<template v-if="ictCategory">
						<li
							v-for="item in ictCategory"
							:key="item.ictCd"
							:class="{ on: categoryOn == item.ictCd }"
						>
							<div v-if="item.ictCd != '3440'">
								<div class="checkbox-out">
									<input type="checkbox" :id="item.ictCd" disabled />
									<label :for="item.ictCd" class="checkbox" v-html="item.ictNm">
									</label>
								</div>
								<span
									class="category_list_txt"
									v-html="item.ictNm"
									@click="categoryIctClick(item.ictCd)"
								></span>
							</div>
						</li>
					</template>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
//let ksicCdsArr = [];
import { mapState } from 'vuex';
import { ksicNameSet, ksicNameDel } from '@/utils/storage';
import { pushArr } from '@/utils/storage';
export default {
	props: [
		'ksicCategory',
		'categoryName',
		'categoryOn',
		'pageName',
		'ictCategory',
	],
	computed: {
		...mapState('analysis', ['ksicCds', 'ksicName', 'ksicArr']),
		ksicCdsGet: {
			get() {
				return this.ksicCds;
			},
			set(value) {
				this.$store.commit('analysis/updateState', { ksicCds: value });
			},
		},
	},
	created() {
		if (this.ksicArr.length == 0) {
			pushArr('농업, 임업 및 어업&#40;01~03&#41;', 'A');
		}
	},
	methods: {
		ictClick() {
			alert('하위 분류가 없습니다.');
		},
		categoryClick(event) {
			if (this.categoryName != '세세분류') this.$emit('categoryClick', event);
		},
		categoryIctClick(event) {
			this.$emit('categoryIctClick', event);
		},
		removeItems(arr, value) {
			var i = 0;
			while (i < arr.length) {
				if (arr[i] === value) {
					arr.splice(i, 1);
				} else {
					++i;
				}
			}
			return arr;
		},
		ksicCdEv(event, lagcode) {
			if (this.ksicArr.length >= 10) {
				if (event.target.checked) {
					alert('10개 이하만 선택해주세요.');
				}
				event.target.checked = false;
			}
			const checked = event.target.checked;
			let evname = event.target.name;
			let evcode = event.target.value;
			if (checked) {
				ksicNameSet(this.ksicArr, evname, evcode, this.ksicCds, lagcode);
			} else {
				ksicNameDel(this.ksicArr, evcode, 'code', this.ksicCds, lagcode);
			}
		},
	},
};
</script>
