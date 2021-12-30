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
												src="@/assets/img/guideMapping01.png"
												alt="step1  분류열 연계맵핑 선택 → 분류별 연계맵핑 중 원하는 메뉴 클릭"
											/>
											<div class="stepBox">
												<span class="step">STEP 1</span>
												<span class="stepTxt"
													>분류별 연계맵핑 선택 → 분류별 연계맵핑 중 원하는 메뉴
													클릭</span
												>
											</div>
										</li>
										<li>
											<img
												src="@/assets/img/guideMapping021.png"
												alt="step2-1 각 메뉴 분류체계 확인버튼으로 분류 체계를 확인 → 분류 체계를 선택하여 세분류값을 선택"
											/>
											<div class="stepBox">
												<span class="step">STEP 2-1</span>
												<span class="stepTxt"
													>각 메뉴 분류체계 확인 버튼으로 분류 체계를 확인 →
													분류 체계를 선택하여 세분류값을 선택
													<span
														>(과학 기술표준 분류, Kmaps, ISTANS, ITSTAT동일
														)</span
													></span
												>
											</div>
										</li>
										<li>
											<img
												src="@/assets/img/guideMapping031.png"
												alt="step3-1 선택한 분류값의 출원수 확인 및 산업 분류의 비중을 확인 → 산업 분류 코드 및 분류명을 클릭하여 분석 서비스 확인"
											/>
											<div class="stepBox">
												<span class="step">STEP 3-1</span>
												<span class="stepTxt"
													>선택한 분류값의 출원수 확인 및 산업 분류의 비중을
													확인 → 산업 분류 코드 및 분류명을 클릭하여 분석 서비스
													확인
												</span>
											</div>
										</li>
										<li>
											<img
												src="@/assets/img/guideMapping022.png"
												alt="step2-2 각 메뉴 분류체계 확인 버튼으로 분류 체계를 확인 → 검색 입력폼에 원하는 코드 입력"
											/>
											<div class="stepBox">
												<span class="step">STEP 2-2</span>
												<span class="stepTxt"
													>각 메뉴 분류체계 확인 버튼으로 분류 체계를 확인 →
													검색 입력폼에 원하는 코드 입력
													<span>(CPC, IPC, DART, HSK동일)</span></span
												>
											</div>
										</li>
										<li>
											<img
												src="@/assets/img/guideMapping032.png"
												alt="step3-2 산업 분류 코드 및 분류명을 클릭하여 분석 서비스 확인"
											/>
											<div class="stepBox">
												<span class="step">STEP 3-2</span>
												<span class="stepTxt"
													>산업 분류 코드 및 분류명을 클릭하여 분석 서비스
													확인</span
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
	name: 'GuideMapping',
	components: {
		SubTitle,
		GuideTab,
	},
	data() {
		return {
			pageName: 'GuideMapping',
		};
	},
};
</script>
