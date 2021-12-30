<template>
	<div class="analysis-search-list bg">
		<div class="analysis-search-label">
			<span class="analysis-search-label-title">
				<span> 특허 목록 </span>
			</span>
		</div>
		<div class="analysis-search-item">
			<p class="ksicbtntx">
				버튼을 클릭시 산업별 특허 목록을 확인 할 수 있습니다.
			</p>
			<div class="checkbox-out">
				<span v-for="(item, j) in ksicArrGet" :key="j">
					<em
						class="ksicbtn"
						@click="modalOpen(item.code, item.name, 1, item.lagcode)"
						v-html="item.name"
					>
						특허 리스트 보기</em
					>
				</span>
			</div>
		</div>

		<div
			class="modal inmodal fade"
			id="reportViewPop"
			tabindex="1000"
			role="dialog"
			aria-hidden="true"
		>
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">
							<span aria-hidden="true" class="ti-close"></span
							><span class="sr-only">Close</span>
						</button>
						<h4 class="modal-title">
							<span v-html="modalTitile"></span>
							<!-- <span class="reportDate">- {{ dayData }}</span> -->
						</h4>
					</div>

					<div class="modal-body">
						<div class="mapping-info mB20">
							<p class="txt mT10">
								<strong class="mR5" v-html="modalTitile"></strong
								><strong class="num">특허 출원 {{ totalCount }}개</strong
								>입니다.
							</p>
						</div>
						<PatentList :modalList="modalList" />
						<Paging
							:listPagination="modalPagination"
							@Paging="Paging"
							:dbname="$route.name"
						/>
					</div>

					<div class="modal-footer">
						<a
							href="#none"
							class="button btn_type01 btn-outline"
							data-dismiss="modal"
							>창닫기</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { fetchPatent } from '@/api/analysis'; //db api
import { mapState } from 'vuex';
import { numberCommas } from '@/utils/index';
import PatentList from './PatentList';
import Paging from './Paging';
export default {
	components: {
		PatentList,
		Paging,
	},
	data() {
		return {
			modalTitile: '',
			modalCode: '',
			modalList: [],
			modalPagination: [],
			modalTotal: '',
			modalLrgCd: '',
		};
	},
	computed: {
		...mapState('analysis', ['ksicArr', 'ksicSohw']),
		ksicArrGet: {
			get() {
				return this.ksicArr;
			},
			set(value) {
				this.$store.commit('analysis/updateState', { ksicArr: value });
			},
		},
		totalCount() {
			return numberCommas(this.modalTotal);
		},
	},
	methods: {
		Paging(event) {
			this.modalOpen(this.modalCode, this.modalTitile, event, this.modalLrgCd);
		},
		async modalOpen(code, name, page, lrgCd) {
			this.$store.commit('fboardList/updateState', {
				loading: true,
				SearchLoading: true,
			});
			this.$router.push({ query: { pageNum: page } }).catch(() => {});
			if (lrgCd == undefined) {
				lrgCd = '';
			}
			const { data } = await fetchPatent(code, 5, page, lrgCd);
			this.modalTotal = data.result.totalCount;
			this.modalList = data.result.data;
			this.modalPagination = data.result.pagination;
			this.modalCode = code;
			this.modalTitile = name;
			this.modalLrgCd = lrgCd;
			$('#reportViewPop').modal();
			$('.modal-backdrop').appendTo('#realContents');
			//$('body').removeClass();
			this.$store.commit('fboardList/updateState', {
				loading: false,
				SearchLoading: false,
			});
		},
	},
};
</script>

<style></style>
