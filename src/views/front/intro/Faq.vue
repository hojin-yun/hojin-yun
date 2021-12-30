<template>
	<div class="subContent">
		<div class="subConView">
			<div class="subConDetail">
				<div id="realContents">
					<SubTitle />
					<div class="faqWrap">
						<div class="p-noti-list01">
							<SearchForm :dbName="dbName" />
						</div>
						<ul class="accordion">
							<li
								v-for="(items, i) in listData"
								:key="items.regNo"
								:class="i == 0 ? 'active' : null"
							>
								<div class="accordionView" @click="faqClick">
									<div class="faqArea">
										<span class="faqIndex">Q</span>
										<span class="faqTitle01" v-html="items.infrmNm"></span>
									</div>
									<p class="accordionOpen">
										<span class="ico ico_open">열린 메뉴</span>
									</p>
								</div>
								<!-- detail -->
								<div class="accordionDetail">
									<div class="faqDetail">
										<span class="faqIndex">A</span>
										<span class="faqTitle01" v-html="items.infrmDtlCn"></span>
									</div>
								</div>
								<!-- detail -->
							</li>
							<li
								style="text-align: center; padding: 250px 0"
								v-if="listPagination.listCnt == 0"
							>
								<span v-if="searchTrue">검색하신 </span>데이터가 없습니다.
							</li>
						</ul>
					</div>
					<Paging :dbName="dbName" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SubTitle from '@/views/front/common/SubTitle';
import SearchForm from '@/components/front/SearchForm';
import Paging from '@/components/front/Paging';
import boardList from '@/components/front/mixin/boardList';
export default {
	mixins: [boardList],
	name: 'faq',
	components: {
		SubTitle,
		SearchForm,
		Paging,
	},
	data() {
		return {
			dbName: 'faq',
		};
	},
	created() {
		this.$store.commit('fboardList/updateState', { pageNum: 1 });
		this.getList({
			pageName: this.dbName, //DB 이름
			pageNum: this.$route.query.pageNum || this.pageNum,
			searchText: this.searchText,
		});
	},
	methods: {
		faqClick(event) {
			$(event.target)
				.parents('li')
				.toggleClass('active')
				.siblings()
				.removeClass('active');
		},
	},
};
</script>
