<template>
	<div class="subContent">
		<div class="subConView">
			<div class="subConDetail">
				<div id="realContents">
					<SubTitle />
					<div class="vision-goal">
						<div class="vision">
							<strong class="visionTitle">비전</strong>
							<p class="desc">특허 빅데이터를 활용한 인공지능 기반 혁신 리더</p>
						</div>
					</div>

					<div class="companySec03">
						<div class="center">
							<h3 class="companySectitle01">목표</h3>
						</div>

						<div class="circle_cont">
							<div class="cir">
								<div class="bg bgColor01 scrollMotion_bs1">
									<div class="cir_scale">&nbsp;</div>
									<span>혁신플랫폼 구축 <em>Platform</em></span>
								</div>
							</div>

							<div class="cir">
								<div class="bg bgColor02 scrollMotion_bs1">
									<div class="cir_scale">&nbsp;</div>
									<span>산업분야 확대 연구 <em>Industry</em></span>
								</div>
							</div>

							<div class="cir">
								<div class="bg bgColor03 scrollMotion_bs1">
									<div class="cir_scale">&nbsp;</div>
									<span>특허 장벽도 완화 <em>Relax</em></span>
								</div>
							</div>
						</div>

						<div class="company_txt_list">
							<dl class="">
								<dt>국가 전반의 R&amp;D 지원을 위한 혁신플랫폼 구축</dt>
								<dd>
									<p>특허 데이터 및 ICT 신기술 융합을 통한 시스템 제공</p>
									<p>
										새로운 관점의 실시간 분석을 통한 신개념 특허 서비스 제공
									</p>
									<p>유관 데이터 수집·분석을 통한 새로운 특허 연계도 창출</p>
								</dd>
							</dl>
							<dl class="">
								<dt>혁신플랫폼의 글로벌화를 위한 산업분야 확대 연구</dt>
								<dd>
									<p>글로벌 혁신을 위한 IP5국의 특허 데이터 확대 적용</p>
									<p>산업혁명과의 융합을 위한 신개념 서비스 구축</p>
									<p>지속적인 연구를 통한 시스템 알고리즘 성능 고도화</p>
								</dd>
							</dl>
							<dl class="">
								<dt>특허산업의 지속적인 확대 발전을 위한 특허 장벽도 완화</dt>
								<dd>
									<p>민간 부처와의 협업을 통한 데이터 유통</p>
									<p>
										특허 데이터 활용성 강화를 위한 유관 데이터 수집범위 확대
									</p>
									<p>혁신플랫폼 서비스 고도화를 통한 특허 가치 확대</p>
								</dd>
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
	name: 'vision',
	components: {
		SubTitle,
	},
};
</script>
