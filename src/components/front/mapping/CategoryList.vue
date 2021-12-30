<template>
	<div class="category_list col-w20">
		<div class="industry_title">{{ categoryName }}</div>
		<div class="category_list-wrap">
			<div class="scrollWrap">
				<ul>
					<li
						v-for="(item, j) in category"
						:key="j"
						:class="{ on: categoryOn == item.ksicCd }"
					>
						<div class="radios">
							<input
								type="radio"
								name="category"
								:value="item.ksicCd"
								:id="item.ksicCd"
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
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['category', 'categoryName', 'categoryOn'],
};
</script>
