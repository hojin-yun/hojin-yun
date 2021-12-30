<template>
	<div
		class="modal inmodal fade"
		id="refuseEmail"
		tabindex="-1"
		role="dialog"
		aria-hidden="true"
	>
		<div class="modal-dialog modal-md">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span aria-hidden="true" class="ti-close"></span
						><span class="sr-only">Close</span>
					</button>
					<h4 class="modal-title">이메일 무단수집 거부</h4>
				</div>

				<div class="modal-body">
					<div class="copyright">
						<div class="copy_wrap">
							<p class="copy_txt">
								특허 빅데이터 포털은 무차별적으로 보내지는 타사의 메일을
								차단하기 위해, 본 웹사이트에 게시된 이메일 주소가 전자우편 수집
								프로그램이나 그 밖의 기술적 장치를 이용하여
								<em>무단으로 수집되는 것을 거부</em>하며,
							</p>
							<p class="copy_txt">&nbsp;</p>
							<p class="copy_txt">
								이를 위반시 <em>정보통신망법의해형사처벌됨을 유념</em>하시기
								바랍니다.
							</p>
						</div>
						<div class="stat_date_box">
							<p class="stat_date_tit mB10">
								정보통신망 이용촉진 및 정보보호 등에 관한 법률
							</p>
							<p>
								1. 누구든지 전자우편주소의 수집을 거부하는 의사가 명시된 인터넷
								홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램 그밖의
								기술적장치를 이용하여 전자우편주소를 수집하여서는 아니된다.
							</p>
							<p>
								2. 누구든지 제1항의 규정을 위반하여 수집된 전자우편주소를 판매 ·
								유통하여서는 아니 된다.
							</p>
							<p>
								3. 누구든지 제1항 및 제2항의 규정에 의하여 수집 · 판매 및 유통이
								금지된 전자우편주소임을 알고 이를 정보전송에 이용하여서는
								아니된다.
							</p>
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
	</div>
</template>

<script>
export default {
	name: 'refuseEmail',
};
</script>
