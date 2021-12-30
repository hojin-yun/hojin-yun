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
												src="@/assets/img/guideSearch01.jpg"
												alt="STEP 1 우측 상단에 위치한 검색창에 원하는 키워드 입력 및 검색"
											/>
											<div class="stepBox">
												<span class="step">STEP 1</span>
												<span class="stepTxt"
													>우측 상단에 위치한 검색창에 원하는 키워드 입력 및
													검색</span
												>
											</div>
										</li>
										<li>
											<img
												src="@/assets/img/guideSearch02.jpg"
												alt="STEP 2 검색창에서 원하는 분류값 선택하여 검색 가능 (특허, 출원인) → 제목을 클릭하여 팝업창에서 상세 정보 확인 → 정보 더보기를 클릭하여 더 많은 데이터 조회"
											/>
											<div class="stepBox">
												<span class="step">STEP 2</span>
												<span class="stepTxt"
													>검색창에서 원하는 분류값 선택하여 검색 가능 (특허,
													출원인) → 제목을 클릭하여 팝업창에서 상세 정보 확인 →
													정보 더보기를 클릭하여 더 많은 데이터 조회</span
												>
											</div>
										</li>
										<li>
											<img
												src="@/assets/img/guideSearch03.jpg"
												alt="STEP 3-1 팝업창에서 각 특허에 대한 상세 정보 확인 → KSIC를 클릭하여 분석 보고서 확인"
											/>
											<div class="stepBox">
												<span class="step">STEP 3-1</span>
												<span class="stepTxt"
													>팝업창에서 각 특허에 대한 상세 정보 확인 → KSIC를
													클릭하여 분석 보고서 확인</span
												>
											</div>
										</li>
										<li>
											<img
												src="@/assets/img/guideSearch04.png"
												alt="STEP 3-2 팝업창에서 각 출원인에 대한 상세 정보 확인 → KSIC를 클릭하여 분석 보고서 확인"
											/>
											<div class="stepBox">
												<span class="step">STEP 3-2</span>
												<span class="stepTxt"
													>팝업창에서 각 출원인에 대한 상세 정보 확인 → KSIC를
													클릭하여 분석 보고서 확인</span
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
	name: 'GuideSearch',
	components: {
		SubTitle,
		GuideTab,
	},
	data() {
		return {
			pageName: 'GuideSearch',
		};
	},
};
</script>
