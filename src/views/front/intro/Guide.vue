<template>
	<div class="subContent">
		<div class="subConView">
			<div class="subConDetail">
				<div id="realContents">
					<SubTitle />

					<div class="subConDetail">
						<div class="realContents">
							<div class="conSection">
								<GuideTab :pageName="pageName" />

								<div class="guideContents">
									<ol>
										<li>
											<img
												src="@/assets/img/guide01.png"
												alt="step1  분석서비스선택 → 분석 서비스중 원하는 메뉴 클릭"
											/>
											<div class="stepBox">
												<span class="step">STEP 1</span>
												<span class="stepTxt"
													>분석 서비스 선택 → 분석 서비스 중 원하는 메뉴
													클릭</span
												>
											</div>
										</li>
										<li>
											<img
												src="@/assets/img/guide02.png"
												alt="step2 산업선택 버튼 클릭 → KSIC 산업 분류 체게에서 원하는 산업을 복수로선택"
											/>
											<div class="stepBox">
												<span class="step">STEP 2</span>
												<span class="stepTxt"
													>산업 선택 버튼 클릭 → KSIC 산업 분류 체계에서 원하는
													산업를 복수로 선택</span
												>
											</div>
										</li>
										<li>
											<img
												src="@/assets/img/guide03.png"
												alt="step3 출원 구간을 슬라이드로 설정 → 각 메뉴에 맞는 옵션 값 설정→ 선택한 산업 중 원하는 산업만을 체크하여 그래프 조회"
											/>
											<div class="stepBox">
												<span class="step">STEP 3</span>
												<span class="stepTxt"
													>출원 구간을 슬라이드로 설정 → 각 메뉴에 맞는 옵셥 값
													설정 → 선택한 산업 중 원하는 산업만을 체크하여 그래프
													조회
												</span>
											</div>
										</li>
										<li>
											<img
												src="@/assets/img/guide04.png"
												alt="step4  선택한 옵션 값에 대한 그래프 및 데이터 확인"
											/>
											<div class="stepBox">
												<span class="step">STEP 4</span>
												<span class="stepTxt"
													>선택한 옵션 값에 대한 그래프 및 데이터</span
												>
											</div>
										</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SubTitle from '@/views/front/common/SubTitle';
import GuideTab from '@/views/front/intro/GuideTab';

export default {
	name: 'guide',
	components: {
		SubTitle,
		GuideTab,
	},
	data() {
		return {
			pageName: 'guide',
		};
	},
};
</script>
