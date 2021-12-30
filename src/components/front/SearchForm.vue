<template>
	<form
		id="boardSearchForm"
		name="boardSearchForm"
		@submit.prevent="onSubmitSearch"
		:class="dbName == 'report' ? 'srcform' : ''"
	>
		<div class="srch-area" :class="dbName == 'report' ? 'srch-report' : ''">
			<select
				v-model="categoryGet"
				@change="listPstg($event)"
				v-if="dbName == 'report'"
			>
				<option value="">분류 전체</option>
				<option value="위기신호탐지">위기신호탐지</option>
				<option value="유망기술발굴">유망기술발굴</option>
				<option value="외부보고서">외부보고서</option>
			</select>
			<div class="inp-txt" :class="searchTrue ? 'searchTrue' : ''">
				<div class="inp-txtArea">
					<input
						type="text"
						name="searchText"
						class=""
						v-model="searchTextGet"
						placeholder="검색어를 입력해주세요"
						value=""
					/>
					<button type="submit" class="btn-srch"></button>
				</div>
			</div>
			<span
				v-if="searchTrue"
				@click="searchHide"
				class="link mL10 pT15"
				style="display: inline-block"
			>
				검색 초기화
			</span>
		</div>
	</form>
</template>

<script>
import boardList from '@/components/front/mixin/boardList';
export default {
	mixins: [boardList],
	props: ['dbName', 'yearSelected'],
	data() {
		return {
			//category: '',
		};
	},
	computed: {
		categoryGet: {
			get() {
				return this.category;
			},
			set(value) {
				this.$store.commit('fboardList/updateState', { category: value });
			},
		},
		searchTextGet: {
			get() {
				return this.searchText;
			},
			set(value) {
				this.$store.commit('fboardList/updateState', { searchText: value });
			},
		},
	},
	methods: {
		listPstg(event) {
			this.$store.commit('fboardList/updateState', {
				category: event.target.value,
			});
		},
		searchHide() {
			this.$router.push('?').catch(() => {}); //파라미터 초기화
			this.$store.commit('fboardList/updateState', { searchText: null });
			this.$store.commit('fboardList/updateState', { searchTrue: false });
			this.$store.commit('fboardList/updateState', { category: '' });
			this.PagingClick(1);
		},
		async PagingClick(event) {
			await this.getList({
				pageName: this.dbName, //DB 이름
				pageNum: event,
				searchText: this.searchText,
				searchCategory: this.$route.params.id,
				searchStartDate: this.yearSelected,
			});
			this.lagnLoad();
		},
		onSubmitSearch(event) {
			event.preventDefault();
			if (this.searchText) {
				this.$router.push('?').catch(() => {}); //파라미터 초기화
				this.$store.commit('fboardList/updateState', { searchTrue: true });
				this.getList({
					pageName: this.dbName, //DB 이름
					pageNum: 1,
					searchText: this.searchText,
					// searchCategory: this.$route.params.id,
					searchCategory: this.$store.state.fboardList.category,
					searchStartDate: this.yearSelected,
				});
			} else {
				alert('검색어를 입력하세요');
			}
		},
	},
};
</script>
