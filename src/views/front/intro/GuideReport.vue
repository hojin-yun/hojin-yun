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
												src="@/assets/img/guideReport01.png"
												alt="STEP 1 분석 보고서 메뉴 클릭 → 보고서 형태 메뉴 선택"
											/>
											<div class="stepBox">
												<span class="step">STEP 1</span>
												<span class="stepTxt"
													>분석 보고서 메뉴 클릭 → 보고서 형태 메뉴 선택</span
												>
											</div>
										</li>
										<li>
											<img
												src="@/assets/img/guideReport02.png"
												alt="STEP 2 원하는 보고서 년도 선택 → 외부 페이지 링크·보고서
													이미지 보기·보고서 파일 다운받기 버튼 사용"
											/>
											<div class="stepBox">
												<span class="step">STEP 2</span>
												<span class="stepTxt"
													>원하는 보고서 년도 선택 → 외부 페이지 링크·보고서
													이미지 보기·보고서 파일 다운받기 버튼 사용</span
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
	name: 'GuideReport',
	components: {
		SubTitle,
		GuideTab,
	},
	data() {
		return {
			pageName: 'GuideReport',
		};
	},
};
</script>
