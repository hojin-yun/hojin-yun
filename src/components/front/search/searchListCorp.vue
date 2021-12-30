<template>
	<div class="result-list">
		<div class="searchResultDetail" v-for="(count, i) in listData" :key="i">
			<div class="inbox">
				<div class="searchResultList01">
					<div class="searchResultListTxt">
						<h3>
							<a
								href="#none"
								@click="patentView(count.applicantCode)"
								v-html="count.corpName"
							></a>
						</h3>
						<ul class="patentinfo">
							<li>
								<dl>
									<dt>출원인코드</dt>
									<dd>{{ count.applicantCode }}</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>법인구분</dt>
									<dd>{{ count.corpType }}</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>회사코드</dt>
									<dd>{{ count.corpNo }}</dd>
								</dl>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { commaDate } from '@/utils/index';
export default {
	props: ['listData'],
	filters: {
		yyyyMMdd: function (value) {
			return commaDate(value);
		},
	},
	methods: {
		patentView(event) {
			this.$emit('patentPop', [event, 'corp']);
		},
	},
};
</script>

<style></style>
