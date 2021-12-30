<template>
	<section class="conSection industry_hearder_wrap">
		<div class="category_wrap">
			<div
				:class="` category_list col-w${col}`"
				v-for="(items, i) in dataCol"
				:key="i"
			>
				<div class="industry_title" @click="cateClick(i)">
					{{ items.name }}
				</div>
				<div class="category_list-wrap">
					<div class="scrollWrap">
						<ul>
							<li v-for="(item, j) in datalist" :key="j">
								<div class="radios">
									<input type="radio" :value="`${j}`" :id="`r${j}`" /><label
										class="radio"
										:for="`r${j}`"
										>수학</label
									>
								</div>
								<span class="category_list_txt"><a href="#">수학</a></span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: ['dataCol', 'datalist', 'cate', 'col'],
	methods: {
		cateClick(event) {
			this.$emit('cateClick', event);
		},
	},
};
</script>
