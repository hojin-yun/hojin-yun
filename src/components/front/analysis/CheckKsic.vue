<template>
	<div class="analysis-search-list bg">
		<div class="analysis-search-label">
			<span class="analysis-search-label-title">
				<span> 산업 </span>
			</span>
		</div>
		<div class="analysis-search-item">
			<div class="checkbox-out">
				<span v-for="(item, j) in ksicArrGet" :key="j">
					<input
						type="checkbox"
						:id="'show' + item.code + j"
						v-model="item.isShow"
					/>
					<label
						:for="'show' + item.code + j"
						class="checkbox"
						v-html="item.name"
					>
						소재
					</label>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	props: ['isActive'],
	computed: {
		...mapState('analysis', ['ksicArr', 'ksicSohw']),
		ksicArrGet: {
			get() {
				return this.ksicArr;
			},
			set(value) {
				this.$store.commit('analysis/updateState', { ksicArr: value });
			},
		},
	},
	methods: {
		clickOptions() {
			this.$emit('clickOptions');
		},
	},
};
</script>

<style></style>
