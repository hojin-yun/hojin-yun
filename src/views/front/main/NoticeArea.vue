<template>
	<div class="kcpMainTab_noticeArea">
		<div class="kcpMainTab typeTab02" id="kcpMainTab">
			<div class="mainTab">
				<ul class="kcpMainTabArea typeTabArea">
					<li>
						<a
							href="#"
							:class="{ active: notice }"
							@click.prevent="notice = true"
							title="공지사항 리스트 보기"
						>
							공지사항
						</a>
					</li>
					<li>
						<a
							href="#"
							:class="{ active: !notice }"
							@click.prevent="notice = false"
							title="faq 리스트 보기"
						>
							FAQ
						</a>
					</li>
				</ul>
			</div>
			<NoticeArea v-if="notice" :mainnNotice="mainnNotice" />
			<FaqArea v-if="!notice" :mainFaq="mainFaq" />
		</div>
	</div>
</template>

<script>
import NoticeArea from '@/components/front/main/NoticeArea';
import FaqArea from '@/components/front/main/FaqArea';
export default {
	name: 'noticeArea',
	props: ['mainnNotice', 'mainFaq'],
	components: {
		NoticeArea,
		FaqArea,
	},
	data() {
		return {
			notice: true,
		};
	},
};
</script>

<style></style>
