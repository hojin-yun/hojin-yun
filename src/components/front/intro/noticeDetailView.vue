<template>
	<div class="noticeDetailView">
		<div class="noticeTitle">
			<h3 class="detailTitle">{{ detailViewData.subject }}</h3>
			<div class="actions">
				<span>작성자:<em>홍길동</em></span>
				<span>등록일:<em>2021.05.12</em></span>
				<span>조회:<em>1,301</em></span>
			</div>
		</div>

		<!-- 상세내용 -->
		<div class="viewTxt">
			<!-- 상세내용 시작 -->
			<div class="noticeViewArea">
				내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
				내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
				내용입니다.
				<br /><br /><br /><br /><br /><br /><br /><br />
			</div>
			<!-- 상세내용 끝 -->
		</div>
		<!-- 상세내용 -->

		<!-- 첨부파일 -->
		<div class="attachArea">
			<div class="panel-group">
				<div class="panel panel-default attachFileArea">
					<div class="panel-heading">
						<h5 class="panel-title">첨부파일</h5>
					</div>
					<div class="panel-collapse">
						<div class="panel-body">
							<ul class="dropdown-alerts">
								<li>
									<div>
										<i class="ti-import"></i> <a href="#">file명</a>
										<span class="pull-right text-muted small"
											>444 Kbyte &nbsp;&nbsp;<a href="#"
												><i class="ti-trash"></i></a
										></span>
									</div>
								</li>
								<li class="divider"></li>
								<li>
									<div>
										<i class="ti-import"></i> <a href="#">file명</a>
										<span class="pull-right text-muted small"
											>444 Kbyte &nbsp;&nbsp;<a href="#"
												><i class="ti-trash"></i></a
										></span>
									</div>
								</li>
								<li class="divider"></li>
								<li>
									<div>
										<i class="ti-import"></i> <a href="#">file명</a>
										<span class="pull-right text-muted small"
											>444 Kbyte &nbsp;&nbsp;<a href="#"
												><i class="ti-trash"></i></a
										></span>
									</div>
								</li>
								<li class="divider"></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 첨부파일 -->

		<ul class="about-view-neighbor m-t-xl">
			<li>
				<a href="#">
					<b><i class="ti-angle-up"></i>&nbsp;&nbsp;다음글</b>
					<div class="qnatitle">다음글입니다.</div>
				</a>
			</li>
			<li>
				<a href="#">
					<b><i class="ti-angle-down"></i>&nbsp;&nbsp;이전글</b>
					<div class="qnatitle">이전글입니다.</div>
				</a>
			</li>
		</ul>

		<div class="btnArea text-right">
			<a href="#" class="btn btn-primary">목록</a>
		</div>
	</div>
</template>

<script>
//import { fetchNotice } from '@/api/front/intro/notice';
export default {
	name: 'noticeDetailView',
	data() {
		return {
			detailViewData: {
				subject: '',
			},
		};
	},
	created() {
		this.detailView();
	},
	methods: {
		// async detailView() {
		// 	this.detailViewData = {};
		// 	const { data } = await fetchNotice();
		// 	this.detailViewData.subject = data.result.data.infrmNm;
		// 	console.log(data.result.data);
		// },
	},
};
</script>
