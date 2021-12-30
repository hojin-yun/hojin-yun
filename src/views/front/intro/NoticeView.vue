<template>
	<div class="subContent">
		<div class="subConView">
			<div class="subConDetail">
				<div id="realContents">
					<SubTitle />
					<div class="noticeDetailView">
						<div class="noticeTitle">
							<h3 class="detailTitle" v-html="viewData.infrmNm"></h3>
							<div class="actions">
								<span
									>등록일:<em>{{ toDay }}</em></span
								>
								<span
									>조회:<em>{{ viewData.vstrCnt }}</em></span
								>
							</div>
						</div>

						<!-- 상세내용 -->
						<div class="viewTxt">
							<!-- 상세내용 시작 -->
							<div class="noticeViewArea" v-html="viewData.infrmDtlCn"></div>
							<!-- 상세내용 끝 -->
						</div>
						<!-- 상세내용 -->

						<!-- 첨부파일 -->
						<div class="attachArea" v-if="FileNm">
							<div class="panel-group">
								<div class="panel panel-default attachFileArea">
									<div class="panel-heading">
										<h5 class="panel-title">첨부파일</h5>
									</div>
									<div class="panel-collapse">
										<div class="panel-body">
											<ul class="dropdown-alerts">
												<li v-for="(items, i) in viewData.atchFileNm" :key="i">
													<div>
														<i class="ti-import"></i>
														<a
															:href="`${apiUrl}/notice/download?regNo=${viewData.regNo}&strgAtchFileNm=${viewData.strgAtchFileNm[i]}`"
															>{{ items }}</a
														>
														<span class="pull-right text-muted small"></span>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- 첨부파일 -->
						<ul class="about-view-neighbor m-t-xl">
							<li v-if="viewData.nextRegNo != 0">
								<router-link
									:to="`/front/intro/noticeView/${viewData.nextRegNo}?pageNum=${
										$route.query.pageNum ? $route.query.pageNum : 1
									}`"
								>
									<b><i class="ti-angle-up"></i>&nbsp;&nbsp;다음글</b>
									<div class="qnatitle" v-html="viewData.nextInfrmNm"></div>
								</router-link>
							</li>
							<li v-if="viewData.prevRegNo != 0">
								<router-link
									:to="`/front/intro/noticeView/${viewData.prevRegNo}?pageNum=${
										$route.query.pageNum ? $route.query.pageNum : 1
									}`"
								>
									<b><i class="ti-angle-down"></i>&nbsp;&nbsp;이전글</b>
									<div class="qnatitle" v-html="viewData.prevInfrmNm"></div>
								</router-link>
							</li>
						</ul>

						<div class="btnArea text-right">
							<router-link
								:to="{
									name: dbName,
									query: { pageNum: $route.query.pageNum },
								}"
								class="btn btn-primary"
							>
								목록
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SubTitle from '@/views/front/common/SubTitle';
import accessDataMinxin from '@/components/front/mixin/accessData';
import boardView from '@/components/front/mixin/boardView';
import { dayReset } from '@/utils/index';
export default {
	mixins: [accessDataMinxin, boardView],
	name: 'notice',
	components: {
		SubTitle,
	},
	data() {
		return {
			dbName: 'notice',
			pageName: 'view',
			FileNm: false,
		};
	},
	computed: {
		toDay() {
			return dayReset(this.dayData);
		},
		apiUrl() {
			return process.env.VUE_APP_API_DOWNURL;
		},
	},
	updated() {
		if (this.dbName == 'notice') {
			if (this.viewData.atchFileNm[0] != '') {
				this.FileNm = true;
			}
		}
	},
};
</script>
