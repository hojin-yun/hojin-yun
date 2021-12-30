<template>
	<div class="tab_view faqTabView">
		<p class="kcpMainTab_noticeMore">
			<router-link title="faq 더보기" to="/front/intro/faq">
				faq 더보기
			</router-link>
		</p>
		<div class="kcpMainTab_noticeList02">
			<div class="kcpMainTab_mainNoticeList">
				<ul>
					<li v-for="list in mainFaq" :key="list.regNo">
						<router-link :to="`/front/intro/faq/`">
							<dl>
								<dt v-html="list.infrmNm"></dt>
								<dd>{{ list.regDt | yyyyMMdd }}</dd>
							</dl>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { hyphenDate } from '@/utils/index';

export default {
	name: 'faqArea',
	props: ['mainFaq'],

	data() {
		return {
			listSize: 4,
		};
	},
	filters: {
		yyyyMMdd: function (value) {
			return hyphenDate(value);
		},
	},
};
</script>
