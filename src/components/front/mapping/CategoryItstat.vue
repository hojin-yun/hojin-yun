<template>
	<div class="category_list col-w30">
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
						:class="{ on: categoryOn == item.ictCd }"
					>
						<div>
							<div class="radios" v-if="!isNo">
								<input
									type="radio"
									name="category"
									:value="item.ictNm"
									:id="item.ictCd"
									@change="categorySelect"
								/><label
									class="radio"
									:for="item.ictCd"
									v-html="item.ictNm"
								></label>
							</div>
							<span
								class="category_list_txt"
								v-html="item.ictNm"
								@click="categoryClick(item.ictCd, isNo)"
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
	props: ['category', 'categoryName', 'isNo', 'categoryOn', 'categoryLoad'],
	components: {
		HalfCircleSpinner,
	},
	data() {
		return {
			newPortalSelect: '',
		};
	},
	methods: {
		categoryClick(event, no) {
			if (no) this.$emit('categoryClick', event, no);
		},
		categorySelect(event) {
			this.$emit('categorySelect', event);
		},
	},
};
</script>
