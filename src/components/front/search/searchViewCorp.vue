<template>
	<div class="modal-dialog modal-lg">
		<div class="modal-content" v-if="CorpView">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">
					<span aria-hidden="true" class="ti-close"></span
					><span class="sr-only">Close</span>
				</button>
				<h4 class="modal-title">{{ CorpView.corpName }}</h4>
			</div>

			<div class="modal-body">
				<div class="patentView">
					<div class="patentSearchResult">
						<ul>
							<li>
								<dl>
									<dt>법인구분</dt>
									<dd>{{ CorpView.corpType }}</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>회사코드</dt>
									<dd>{{ CorpView.corpNo }}</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>출원건수</dt>
									<dd>
										{{
											CorpView.corpPatentList.ApplicantTotalDocumentCount
												| number
										}}건
									</dd>
								</dl>
							</li>
							<li v-if="CorpView.corpPatentList.ApplicantDocumentList[0]">
								<dl>
									<dt>출원리스트</dt>
									<dd>
										<div class="applyWrap applyScroll">
											<div class="scrollwrap">
												<div
													class="apply-list"
													v-for="(texts, i) in CorpView.corpPatentList
														.ApplicantDocumentList"
													:key="i"
												>
													<p>{{ texts.koreanInventionTitle }}</p>
													<div class="">
														<span
															class="ksicBtn"
															v-for="(itme, j) in texts.ksicList"
															:key="j"
															@click="
																analysisPush(
																	itme.ksicName,
																	itme.ksicCode,
																	itme.ksicLrgCode,
																)
															"
														>
															{{ itme.ksicName }}
														</span>
													</div>
												</div>
											</div>
										</div>
									</dd>
								</dl>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="modal-footer">
				<a href="#" class="button btn_type01 btn-outline" data-dismiss="modal"
					>창닫기</a
				>
			</div>
		</div>
	</div>
</template>

<script>
import { pushArr } from '@/utils/storage';
import { commaDate, numberCommas } from '@/utils/index';
export default {
	props: ['CorpView'],
	filters: {
		yyyyMMdd: function (value) {
			return commaDate(value);
		},
		number: function (value) {
			return numberCommas(value);
		},
	},
	methods: {
		analysisPush(name, code, lagcode) {
			pushArr(name, code, lagcode);
		},
	},
};
</script>
