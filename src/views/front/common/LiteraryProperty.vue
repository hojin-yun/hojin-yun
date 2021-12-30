<template>
	<div
		class="modal inmodal fade"
		id="literaryProperty"
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
					<h4 class="modal-title">저작권정책</h4>
				</div>

				<div class="modal-body">
					<div class="copy_wrap">
						<p class="copy_txt">
							본 서비스를 통하여 제공하는 정보 중 특허 빅데이터 포털에서 제작한
							정보에 대한 저작권과 판권은 특허 빅데이터 포털의 소유이며
							저작권법의 보호를 받습니다. 따라서 본 서비스의 사용자는 아래
							사항을 준수해야 합니다.
						</p>
						<p class="copy_txt mT20">
							특허 빅데이터 포털의 사전허가 없이 어떠한 매체에도 직·간접적으로
							복사, 배포, 판매하거나 인터넷, 모바일 및 데이터베이스를 비롯한
							각종 정보서비스 등에 사용하는 것을 금합니다.
						</p>
						<p class="copy_txt mT20">
							특히, 기업이나 기관단체에서 사내 사용을 위해 데이터베이스를
							구축하거나 이에 해당하는 정보서비스를 하는 것은 사용처가 사내에
							한정되고 비영리 목적이라도 저작권법에 위배됩니다.
						</p>
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
	name: 'literaryProperty',
};
</script>
