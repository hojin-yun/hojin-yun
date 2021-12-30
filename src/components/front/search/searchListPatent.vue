<template>
	<div class="result-list">
		<div class="searchResultDetail" v-for="(count, i) in listData" :key="i">
			<div class="inbox">
				<div class="searchResultList01">
					<div class="searchResultListTxt">
						<h3>
							<a href="#none" @click="patentView(count.applicationNo)"
								><div class="patentState">
									{{ count.legalStatus }}
								</div>
								<strong v-html="count.koreanInventionTitle"></strong>
							</a>
						</h3>
						<ul class="patentinfo">
							<li>
								<dl>
									<dt>출원번호(일자)</dt>
									<dd>
										{{ count.applicationNo }} ({{
											count.applicationDate | yyyyMMdd
										}})
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>출원인</dt>
									<dd>{{ count.applicantName }}</dd>
								</dl>
							</li>
							<li v-if="count.rightholderName">
								<dl>
									<dt>최종권리자</dt>
									<dd>{{ count.rightholderName }}</dd>
								</dl>
							</li>
						</ul>
						<p v-html="count.abstractText"></p>
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
			this.$emit('patentPop', [event, 'patent']);
		},
	},
};
</script>
