<template>
	<div class="tab_view">
		<p class="kcpMainTab_noticeMore">
			<router-link title="공지사항 더보기" to="/front/intro/notice">
				공지사항 더보기
			</router-link>
		</p>
		<div class="kcpMainTab_noticeList01">
			<div class="kcpMainTab_notice_list">
				<span class="ymd_box" v-if="mainnNotice[0]"
					>{{ mainnNotice[0].pstgYmd | yyyyMM }} <br /><span>{{
						mainnNotice[0].pstgYmd | onlydd
					}}</span></span
				>
				<router-link
					v-if="mainnNotice[0]"
					:to="`/front/intro/noticeView/${mainnNotice[0].regNo}`"
				>
					<div class="text_box">
						<p class="n_title" v-html="mainnNotice[0].infrmNm"></p>
						<p class="n_detail" v-html="mainnNotice[0].infrmDtlCn"></p>
					</div>
				</router-link>
			</div>
		</div>

		<div class="kcpMainTab_noticeList02">
			<div class="kcpMainTab_mainNoticeList notice01">
				<ul>
					<li v-for="list in mainnNotice.slice(1, 5)" :key="list.regNo">
						<router-link :to="`/front/intro/noticeView/${list.regNo}`">
							<dl>
								<dt v-html="list.infrmNm"></dt>
								<dd></dd>
							</dl>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { hyphenDateYm, onlyDate } from '@/utils/index';
export default {
	name: 'noticeArea',
	props: ['mainnNotice'],
	data() {
		return {
			listSize: 5,
		};
	},
	filters: {
		yyyyMM: function (value) {
			return hyphenDateYm(value);
		},
		onlydd: function (value) {
			return onlyDate(value);
		},
	},
};
</script>
