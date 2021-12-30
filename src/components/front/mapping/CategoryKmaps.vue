<template>
	<div class="category_list col-w20">
		<div class="industry_title">{{ categoryName }}</div>
		<div class="category_list-wrap">
			<div class="half" v-if="categoryLoad">
				<half-circle-spinner
					:animation-duration="1000"
					:size="40"
					color="#007dcd"
				/>
			</div>
			<div class="scrollWrap">
				<ul>
					<li
						v-for="(item, j) in category"
						:key="j"
						:class="{ on: categoryOn == item.ksicCd }"
					>
						<div>
							<div class="radios" v-if="!isClick">
								<input
									type="radio"
									name="category"
									:value="item.ksicNm"
									:id="item.ksicCd"
									@change="categorySelect"
								/><label
									class="radio"
									:for="item.ksicCd"
									v-html="item.ksicNm"
								></label>
							</div>
							<span
								class="category_list_txt"
								v-html="item.ksicNm"
								@click="categoryClick(item.ksicCd)"
							></span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners';
export default {
	props: ['category', 'categoryName', 'isClick', 'categoryOn', 'categoryLoad'],
	components: {
		HalfCircleSpinner,
	},
	data() {
		return {
			newPortalSelect: '',
		};
	},
	methods: {
		categoryClick(event) {
			this.$emit('categoryClick', event);
		},
		categorySelect(event) {
			this.$emit('categorySelect', event);
		},
	},
};
</script>
