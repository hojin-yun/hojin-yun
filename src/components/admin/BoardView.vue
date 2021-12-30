<template>
	<div class="view_table notice">
		<table>
			<colgroup>
				<col width="130px" />
				<col />
				<col width="130px" />
				<col />
				<col width="130px" />
				<col />
			</colgroup>
			<tbody>
				<tr v-if="dbName == 'excel'">
					<td class="title" colspan="6">
						<div v-for="(items, i) in viewData.atchFileNm" :key="i">
							<a
								:href="`${apiUrl}/excel/download?regNo=${viewData.regNo}&strgAtchFileNm=${viewData.strgAtchFileNm[i]}`"
								v-html="items"
							>
							</a>
						</div>
					</td>
				</tr>
				<tr v-else>
					<td class="title" colspan="6">
						<strong class="ellipsis" v-html="viewData.infrmNm"></strong>
					</td>
				</tr>
				<tr v-if="dbName == 'notice'">
					<th>등록자</th>
					<td>{{ viewData.rgtrId }}</td>
					<th>등록일</th>
					<td>{{ dayData }}</td>
					<th>조회수</th>
					<td>{{ viewData.vstrCnt }}</td>
				</tr>
				<tr v-else-if="dbName == 'faq'">
					<th>등록자</th>
					<td>{{ viewData.rgtrId }}</td>
					<th>등록일</th>
					<td colspan="3">{{ dayData }}</td>
				</tr>
				<tr v-else-if="dbName == 'excel'">
					<th>보고분류명</th>
					<td>{{ viewData.rptChgNm }}</td>
					<th>등록년도</th>
					<td>{{ viewData.regYr }}</td>
					<th>다운로드수</th>
					<td>{{ viewData.dwnldCnt }}</td>
				</tr>
				<tr v-else>
					<th>등록자</th>
					<td>{{ viewData.rgtrId }}</td>
					<th>등록일</th>
					<td>{{ dayData }}</td>
					<th>상태</th>
					<td>{{ viewData.pstgYn == 'n' ? '미출력' : '출력' }}</td>
				</tr>
				<tr v-if="FileNm">
					<th class="bob">첨부파일</th>
					<td class="bob" colspan="5">
						<div v-for="(items, i) in viewData.atchFileNm" :key="i">
							<a
								:href="`${apiUrl}/notice/download?regNo=${viewData.regNo}&strgAtchFileNm=${viewData.strgAtchFileNm[i]}`"
								v-html="items"
							>
							</a>
						</div>
					</td>
				</tr>
				<template v-if="dbName == 'banner'">
					<tr>
						<th>배너 이미지<br />(408x305)</th>
						<td colspan="5">
							<img :src="viewData.imgUrl" alt="" style="max-width: 408px" />
						</td>
					</tr>
					<tr>
						<th>링크주소</th>
						<td colspan="5">{{ viewData.urlAddr }}</td>
					</tr>
				</template>
				<template v-else-if="dbName == 'popup'">
					<tr>
						<th>시작 날짜</th>
						<td>{{ startDay }}</td>
						<th>종료 날짜</th>
						<td colspan="3">{{ endDay }}</td>
					</tr>
					<tr>
						<th>팝업 넓이</th>
						<td>{{ viewData.popupW }} px</td>
						<th>팝업 높이</th>
						<td colspan="3">{{ viewData.popupH }} px</td>
					</tr>
					<tr>
						<th>팝업 위치 (x)</th>
						<td>{{ viewData.popupLot }} px</td>
						<th>팝업 위치 (y)</th>
						<td colspan="3">{{ viewData.popupLat }} px</td>
					</tr>
					<tr>
						<th>팝업 내용</th>
						<td class="text" colspan="5">
							<div
								style="white-space: pre-line"
								v-html="viewData.infrmDtlCn"
							></div>
						</td>
					</tr>
					<tr>
						<th>팝업 이미지</th>
						<td colspan="5">
							<img v-if="viewData.imgUrl" :src="viewData.imgUrl" alt="" />
						</td>
					</tr>
					<tr>
						<th>링크주소</th>
						<td colspan="5">{{ viewData.urlAddr }}</td>
					</tr>
				</template>
				<template v-else-if="dbName != 'excel'">
					<tr>
						<td class="text" colspan="6">
							<div
								style="white-space: pre-line"
								v-html="viewData.infrmDtlCn"
							></div>
						</td>
					</tr>
				</template>
			</tbody>
		</table>
	</div>
</template>

<script>
import { commaDate } from '@/utils/index';
export default {
	props: ['viewData', 'dbName', 'dayData', 'startDay', 'endDay'],
	data() {
		return {
			FileNm: false,
		};
	},
	computed: {
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
		if (this.dbName == 'notice') {
			if (this.viewData.atchFileNm[0] != '') {
				this.FileNm = true;
			}
		}
	},
};
</script>

<style></style>
