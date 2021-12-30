<template>
	<div class="modal-dialog modal-lg">
		<div class="modal-content" v-if="PatentView">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">
					<span aria-hidden="true" class="ti-close"></span
					><span class="sr-only">Close</span>
				</button>
				<h4 class="modal-title">{{ PatentView.koreanInventionTitle }}</h4>
			</div>
			<div class="modal-body">
				<div class="patentView">
					<h3 class="patentTitle">
						{{ PatentView.englishInventionTitle }}
					</h3>
					<div class="patentSearchResult">
						<ul>
							<li>
								<dl>
									<dt>출원번호/일자</dt>
									<dd>
										{{ PatentView.applicationNo }}
										({{ PatentView.applicationDate | yyyyMMdd }})
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>출원인</dt>
									<dd>
										{{ PatentView.applicantName }}
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>KSIC</dt>
									<dd>
										<span
											class="ksicBtn"
											v-for="(texts, i) in PatentView.ksicList"
											:key="i"
											@click="
												analysisPush(
													texts.ksicName,
													texts.ksicCode,
													texts.ksicLrgCode,
												)
											"
											>{{ texts.ksicName }}</span
										>
									</dd>
								</dl>
							</li>
							<li v-if="PatentView.regstrationNo.length > 1">
								<dl>
									<dt>등록번호/일자</dt>
									<dd>
										{{ PatentView.regstrationNo }}
										({{ PatentView.regstrationDate | yyyyMMdd }})
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>법적상태</dt>
									<dd>{{ PatentView.legalStatus }}</dd>
								</dl>
							</li>
							<li v-if="PatentView.lastJudgmentStatus.length > 1">
								<dl>
									<dt>심사진행상태</dt>
									<dd>{{ PatentView.lastJudgmentStatus }}</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>심사청구여부/일자</dt>
									<dd>
										{{ PatentView.judgmentYn }}
										<span v-if="PatentView.judgmentDate.length > 1"
											>({{ PatentView.judgmentDate | yyyyMMdd }})</span
										>
									</dd>
								</dl>
							</li>
							<li v-if="PatentView.ipcList != null">
								<dl>
									<dt>IPC번호</dt>
									<dd>
										<span v-for="(texts, i) in PatentView.ipcList" :key="i">
											<span v-if="i != 0" style="margin: 0 5px">|</span
											>{{ texts.ipcCode }}</span
										>
									</dd>
								</dl>
							</li>
							<li v-if="PatentView.cpcList != null">
								<dl>
									<dt>CPC번호</dt>
									<dd>
										<span v-for="(texts, i) in PatentView.cpcList" :key="i">
											<span v-if="i != 0" style="margin: 0 5px">|</span>
											{{ texts.cpcCode }}</span
										>
									</dd>
								</dl>
							</li>
							<li v-if="PatentView.agentName">
								<dl>
									<dt>대표대리인</dt>
									<dd>{{ PatentView.agentName }}</dd>
								</dl>
							</li>
						</ul>
					</div>

					<div
						class="patentSearchResultTxt"
						v-html="PatentView.abstractText"
					></div>
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
import { commaDate } from '@/utils/index';
export default {
	props: ['PatentView'],
	filters: {
		yyyyMMdd: function (value) {
			return commaDate(value);
		},
		replace: function (value) {
			return value.replace('|', '<span>|</span>');
		},
	},
	methods: {
		analysisPush(name, code, lagcode) {
			pushArr(name, code, lagcode);
		},
	},
};
</script>
