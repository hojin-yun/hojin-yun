<template>
	<div>
		<div class="kpb-card-list">
			<div
				v-if="listData.length == 0"
				style="text-align: center; padding: 250px 0px"
			>
				<span>검색하신 </span>데이터가 없습니다.
			</div>
			<ul v-else class="kpb-card-list_items">
				<li
					class="kpb-card-list_item"
					v-for="items in listData"
					:key="items.regNo"
				>
					<div class="kpb-card-list_item-inner">
						<div class="kpb-home-article-card kpb-article-card">
							<div class="kpb-home-article-card_container">
								<div class="kpb-home-article-card_content">
									<div class="kpb-meta-eyebrow">
										<strong
											v-if="$store.state.fboardList.searchTrue"
											class="mR10"
										>
											{{ items.rptChgNm }}
										</strong>
										<span
											style="
												display: inline-block;
												font-size: 11px;
												color: #777;
											"
											>{{ items.regDt | yyyyMMdd }}</span
										>
									</div>
									<div class="kpb-article-card_title">
										<strong v-html="items.infrmNm"></strong>
										<div v-html="items.infrmDtlCn"></div>
									</div>
									<div class="kpb-cta_area">
										<!-- 보고서 페이지 바로가기 -->
										<a
											:href="items.urlAddr ? items.urlAddr : '#none'"
											:target="items.urlAddr ? '_blank' : null"
											class="btn btn-outline"
											v-if="items.urlAddr"
											@click="items.urlAddr ? null : modalOpen(items.regNo)"
											title="외부 페이지로 이동"
										>
											<span v-if="items.urlAddr"
												><i class="kpbi i-link"></i
											></span>
										</a>

										<!-- 보고서 이미지 보기 -->
										<span
											class="btn btn-outline"
											v-if="items.fileYn == 'y'"
											@click="modalOpen(items.regNo)"
											title="보고서 이미지로 보기"
										>
											<i class="kpbi i-report"></i>
										</span>

										<!-- 다운로드 -->
										<a
											:href="`${downurl}/report/download?regNo=${items.regNo}&strgAtchFileNm=${items.strgAtchFileNm[0]}`"
											v-if="items.atchYn == 'y' && items.atchFileYn == 'y'"
											class="btn"
											title="보고서 파일로 다운받기"
											><i class="kpbi i-download"></i
										></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>

		<!-- 리포트 상세보기 -->
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
							<span v-html="viewData.infrmNm"></span>
							<span class="reportDate">- {{ dayData }}</span>
						</h4>
					</div>

					<div class="modal-body">
						<div class="reportView">
							<div class="faqDetail">
								<p>
									해당 보고서는 다운로드 되지 않습니다.<br />
									보고서를 다운받아 사용하시고 싶으신 분은 아래의 담당자로
									연락주시기 바랍니다.
								</p>
							</div>

							<div class="inforLy01">
								<div class="inforList">
									<dl class="support01">
										<dt>담당부서</dt>
										<dd>특허빅데이터센터</dd>
									</dl>
								</div>
								<div class="inforList">
									<dl class="support03">
										<dt>담당자</dt>
										<dd>김태환 연구원</dd>
									</dl>
								</div>
								<div class="inforList">
									<dl class="support02">
										<dt>전화번호</dt>
										<dd>02-3475-1350</dd>
									</dl>
								</div>
								<div class="inforList">
									<dl class="support04">
										<dt>이메일</dt>
										<dd>pbcenter@kista.re.kr</dd>
									</dl>
								</div>
							</div>

							<div class="reportImgArea center">
								<img
									:src="viewData.imgUrl"
									class="responsiveImg"
									alt="샘플이미지"
								/>
							</div>
						</div>
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
import { viewDoard } from '@/api/boardList';
import { commaDate, formatDate } from '@/utils/index';
export default {
	props: ['listData', 'dbName'],
	data() {
		return {
			viewData: [],
			dayData: '',
		};
	},
	computed: {
		downurl() {
			return process.env.VUE_APP_API_DOWNURL;
		},
	},
	methods: {
		async modalOpen(id) {
			const { data } = await viewDoard(
				this.dbName, //db api 이름
				id,
			);
			this.viewData = data.result.data;
			this.dayData = formatDate(data.result.data.regDt);
			$('#reportViewPop').modal();
			$('.modal-backdrop').appendTo('#realContents');
			//$('body').removeClass();
		},
	},
	filters: {
		yyyyMMdd(value) {
			return commaDate(value);
		},
	},
};
</script>
