<template>
	<div class="subContent">
		<div class="subConView">
			<div class="subConDetail">
				<div id="realContents">
					<SubTitle />
					<div class="faqDetail">
						<p>
							특허빅데이터센터에서 제공하는 서비스에 대해 보다 자세한 내용을
							알고 싶으시거나 문의하실 내용이 있으시면 아래의 담당자에게
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
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SubTitle from '@/views/front/common/SubTitle';
export default {
	name: 'inquiry',
	components: {
		SubTitle,
	},
};
</script>
