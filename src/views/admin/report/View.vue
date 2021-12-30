<template>
	<div class="wrap">
		<AsideMenu />
		<div id="contents" class="contents">
			<div class="top">
				<div class="tit_box">
					<strong>분석 보고서</strong>
					<span>분서 보고서의 편집 및 추가하는 페이지입니다. </span>
				</div>
				<ButtonBx />
			</div>
			<div class="center">
				<div class="inner">
					<div v-if="loading" class="loading"></div>
					<div
						class="view_table report"
						:dbName="dbName"
						:viewData="viewData"
						:dayData="toDay"
					>
						<table>
							<colgroup>
								<col width="220px" />
								<col />
							</colgroup>
							<tbody>
								<tr>
									<th>분류/ 년도</th>
									<td>{{ viewData.rptChgNm }} - {{ viewData.regYr }}년</td>
								</tr>
								<tr>
									<th>제목</th>
									<td v-html="viewData.infrmNm"></td>
								</tr>
								<tr>
									<th>
										다운로드 첨부파일
										<p class="txt_help">다운로드 하는 파일</p>
									</th>
									<td>
										<div v-for="(items, i) in viewData.strgAtchFileNm" :key="i">
											<a
												:href="`${apiUrl}/report/download?regNo=${viewData.regNo}&strgAtchFileNm=${viewData.strgAtchFileNm[i]}`"
												v-html="viewData.atchFileNm[i]"
											>
												{{ viewData.atchFileNm[i] }}
											</a>
											<span
												class="txt_help dib ml10"
												v-if="viewData.atchYn == 'n'"
											>
												다운로드 불가능
											</span>
											<span class="txt_help dib ml10" v-else
												>다운로드 가능</span
											>
										</div>
										<div class="txt_help dib" style="color: #007dcd">
											다운로드 횟수 {{ viewData.dwnldCnt }}
										</div>
									</td>
								</tr>
								<tr>
									<th>
										이미지파일
										<p class="txt_help">보여지는 이미지</p>
									</th>
									<td>
										<img v-if="viewData.imgUrl" :src="viewData.imgUrl" alt="" />
									</td>
								</tr>
								<tr>
									<th>
										링크주소
										<p class="txt_help">외부 주소 링크</p>
									</th>
									<td>{{ viewData.urlAddr }}</td>
									<!-- <td>
										<a
											:href="`${viewData.urlAddr}`"
											target="_blank"
											class="golink"
										>
											{{ viewData.urlAddr }}
										</a>
									</td> -->
								</tr>
								<tr>
									<th>설명글</th>
									<td
										v-html="viewData.infrmDtlCn"
										style="white-space: pre-line"
									></td>
								</tr>
							</tbody>
						</table>
					</div>
					<ButtonRead :dbName="dbName" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import ButtonBx from '@/components/admin/ButtonBx.vue';
import AsideMenu from '@/components/admin/AsideMenu.vue';
import ButtonRead from '@/components/admin/ButtonRead.vue';
import boardView from '@/components/admin/mixin/boardView';
import { dayReset } from '@/utils/index';
import { commaDate } from '@/utils/index';

export default {
	mixins: [boardView],
	components: {
		ButtonBx,
		AsideMenu,
		ButtonRead,
	},

	data() {
		return {
			dbName: 'report',
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
	filters: {
		yyyyMMdd: function (value) {
			return commaDate(value);
		},
	},
	updated() {
		if (this.dbName == 'report') {
			if (this.viewData.atchFileNm[0] != '') {
				this.FileNm = true;
			}
		}
	},
};
</script>
