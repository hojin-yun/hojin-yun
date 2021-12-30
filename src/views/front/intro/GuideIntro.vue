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
												src="@/assets/img/guideIntro01.png"
												alt="STEP 1 플랫폼 소개 선택 → 플랫폼 소개 중 원하는 메뉴 클릭"
											/>
											<div class="stepBox">
												<span class="step">STEP 1</span>
												<span class="stepTxt"
													>플랫폼 소개 선택 → 플랫폼 소개 중 원하는 메뉴
													클릭</span
												>
											</div>
										</li>
										<li>
											<img
												src="@/assets/img/guideIntro02.png"
												alt="STEP 2 특허 빅데이터포털에 관한 공지사항 확인"
											/>
											<div class="stepBox">
												<span class="step">STEP 2</span>
												<span class="stepTxt"
													>특허 빅데이터 포털에 관한 공지사항 확인</span
												>
											</div>
										</li>
										<li>
											<img
												src="@/assets/img/guideIntro03.png"
												alt="STEP 3 특허 빅데이터 포털에 관한 FAQ확인"
											/>
											<div class="stepBox">
												<span class="step">STEP 3</span>
												<span class="stepTxt"
													>특허 빅데이터 포털에 관한 FAQ확인</span
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
	name: 'GuideIntro',
	components: {
		SubTitle,
		GuideTab,
	},
	data() {
		return {
			pageName: 'GuideIntro',
		};
	},
};
</script>
