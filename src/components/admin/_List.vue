<template>
	<div class="center">
		{{ listPagination }}
		<div class="inner">
			<div class="list_wrap">
				<div class="list_title mb10">
					<div class="list_slt">
						<select v-model="listPagination.listSize">
							<option
								v-for="count in sortCountOptions"
								:value="count.value"
								:key="count.value"
							>
								{{ count.value }}개 보기
							</option>
						</select>
					</div>
				</div>

				<div class="list_table">
					<table>
						<colgroup>
							<col width="80px" />
							<col width="120px" />
							<col />
							<col width="230px" />
						</colgroup>
						<thead>
							<tr>
								<th class="chk">
									<label><input type="checkbox" /></label>
								</th>
								<th class="num">번호</th>
								<th class="title">제목</th>
								<th class="date">날짜</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(items, i) in listData" :key="items.regNo">
								<td class="chk">
									<label><input type="checkbox" /></label>
								</td>
								<td class="num">{{ i }}</td>
								<td class="title">
									<router-link
										:to="'/pbipAdmin/noticeView/' + items.regNo"
										class="ellipsis"
										>{{ items.infrmNm }}</router-link
									>
								</td>
								<td class="date">{{ items.pstgYmd }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="list_btm mt30">
				<button class="b_med b_blue b_round">선택삭제</button>
				<div class="paging">
					<button class="first"><i class="icon icon_first"></i></button>
					<button class="prev"><i class="icon icon_prev"></i></button>
					<router-link
						v-for="(page, i) in listPagination.pageCnt"
						:key="i"
						:class="{
							active: listPagination.startPage + i == listPagination.page,
						}"
						:to="dbName"
						@click.native="getList(listPagination.startPage + i)"
					>
						{{ listPagination.startPage + i }}
					</router-link>
					<button class="next"><i class="icon icon_next"></i></button>
					<button class="last"><i class="icon icon_last"></i></button>
				</div>
				<router-link to="/" class="b_med b_blue b_round">글쓰기</router-link>
			</div>
			<div class="search mt40">
				<div class="search_wrap">
					<input type="text" id="search" placeholder="검색" />
					<label for="search" class="hidden">검색</label>
					<button class=""><i class="icon icon_search"></i></button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	props: ['dbName'],
	data() {
		return {
			sortCount: '10',
			sortCountOptions: [
				{ value: '10', text: '10' },
				{ value: '20', text: '20' },
				{ value: '30', text: '30' },
			],
			listData: [],
			listPagination: {},
			totalCnt: '',
			pageNum: 1,
		};
	},
	created() {
		this.getList(this.pageNum);
	},
	methods: {
		async getList(pageNm) {
			await axios
				.get(`/admin/notice/list?page=${pageNm}&listSize=${this.sortCount}`)
				.then(res => {
					this.listData = res.data.result.data;
					this.listPagination = res.data.result.pagination;
					this.totalCnt = res.data.result.pagination.pageCnt;
					console.log('corsRequest res', res);
				})
				.catch(error => {
					console.log('corsRequest error', error);
				});
		},
		pagingLink(e) {
			alert(e);
		},
	},
};
</script>

<style></style>
