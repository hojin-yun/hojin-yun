<template>
	<section class="conSection industry_hearder_wrap">
		<div class="category_wrap">
			<CategoryList
				:category="category0"
				:categoryName="dataCol[0].name"
				@categoryClick="categoryClick"
			/>
			<!-- <div
				v-for="(items, i) in dataCol"
				:key="i"
				:class="` category_list col-w${col}`"
			>
				<div class="industry_title" @click="cateClick(i)">{{ items.name }}</div>
				<div class="category_list-wrap">
					<div class="scrollWrap">
						<ul>
							<li v-for="(item, j) in datalist" :key="j">
								<div class="radios">
									<input
										type="radio"
										:value="`${j}`"
										:id="`r${j}`"
									/><label class="radio" :for="`r${j}`">수학</label>
								</div>
								<span class="category_list_txt"><a href="#">수학</a></span>
							</li>
						</ul>
					</div>
				</div>
			</div> -->
		</div>
	</section>
</template>

<script>
import { fetchAnalysis } from '@/api/analysis'; //db api
import CategoryList from './CategoryList';
export default {
	props: ['dataCol', 'col'],
	components: {
		CategoryList,
	},
	data() {
		return {
			datalist: 10,
			category0: [],
			category1: [],
			category2: [],
			category3: [],
			ctegory4: [],
		};
	},
	created() {
		this.categoryColl();
	},
	methods: {
		async categoryColl() {
			const { data } = await fetchAnalysis(1, '');
			this.category0 = data.result.data;
		},
		cateClick(event) {
			this.$emit('cateClick', event);
		},
	},
};
</script>
