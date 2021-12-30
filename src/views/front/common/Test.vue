<template>
	<div>
		<ul>
			<li v-for="(items, i) in 10" :key="i">
				<div class="radios">
					<input type="radio" :value="i" :id="i" />
					<label class="radio" :for="i">수학</label>
				</div>
				<span class="category_list_txt"> <a href="#">수학</a></span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
