<template>
	<div>
		<div class="analysis-icon-wrap pR30 mB10">
			<div class="analysis-icon-area">
				<div class="analysis-icon-img"></div>
			</div>
			<div class="analysis-icon-text">
				<!-- <h3 class="analysis-icon_title">Notice</h3> -->
				<div
					class="analysis-icon-txt active"
					v-for="(texts, i) in notiTxt"
					:key="i"
				>
					<span
						v-if="$route.meta.titles == texts.name"
						v-html="texts.text1"
					></span>
				</div>
			</div>
		</div>
		<div
			class="analysis-icon-wrap pR30 mB20"
			v-if="
				$route.meta.titles != 'TOP10 출원인 분석' &&
				$route.meta.titles != '위기신호 분석'
			"
		>
			<div class="analysis-icon-area">
				<div class="analysis-icon-img"></div>
			</div>
			<div class="analysis-icon-text">
				<!-- <h3 class="analysis-icon_title">Notice</h3> -->
				<div
					class="analysis-icon-txt active"
					v-for="(texts, i) in notiTxt"
					:key="i"
				>
					<span
						v-if="$route.meta.titles == texts.name"
						class="analysis-notice"
						v-html="texts.text2"
					>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'analysisNotice',
	data() {
		return {
			notiTxt: [
				{
					name: '특허청별 출원동향',
					text1:
						'속지주의를 가지는 특허 제도의 특성상 발명의 권리를 자국 외의 지역으로 확대하기 위해서는 해당지역의 관할 특허청에 특허를 출원하여 등록받아야 하는데,  이를 기초로 특허청별 분석을 통해 해당 산업 또는 주체가 어떤 시장을 타겟으로 진출하고자 하는지 그 경향을 파악할 수 있습니다.',
					text2: '※ 그래프 산식 : 각 특허청별 및 연도별 출원 건수의 합',
				},
				{
					name: '산업별 출원동향',
					text1:
						'‘산업의 기술혁신 활동의 현황’을 양적으로 파악하려는 목적의 지표이며, 해당 산업의 출원 건수가 많을수록 대상 산업의 기술혁신(발명) 활동이 활발하다고 해석할 수 있습니다.',
					text2: '※ 그래프 산식 : 각 산업별 및 연도별 출원 건수의 합',
				},
				{
					name: '국적별 출원동향',
					text1:
						'각 특허마다의 출원인이 속한 본래의 국적을 기준으로 출원 동향을 분석함으로써 분석 대상 분야에 대한 국가별 양적 경쟁력을 파악할 수 있습니다.',
					text2: '※ 그래프 산식 : 출원인 국적별 및 연도별 출원 건수의 합',
				},
				{
					name: '산업성장주기',
					text1:
						'특허 출원건수 및 출원인의 수의 증감량을 통하여 해당 산업 분야의 도입기/성장기/성숙기/쇠퇴기/회복기로 구분하여 산업의 성장단계를 파악할 수 있습니다.',
					text2:
						'※ 그래프 표시 : 2년, 3년, 4년, 5년단위는 각 년도의 합산하여 그래프에 표시함',
				},
				{
					name: '국적간 공동출원',
					text1:
						'서로 다른 국적의 출원인이 공동 연구개발을 통해 출원한 특허의 수를 나타내는 것으로,  국가간 국제 공동 연구의 활성도를 파악할 수 있습니다.',
					text2:
						'※ 그래프 산식 : 공동출원인 중 출원 국적이 다른 출원 건수의 합',
				},
				{
					name: '해외출원비율',
					text1:
						'자국 특허 출원에 대하여 타국 출원 여부를 통해 국가별 기업의 글로벌 전략을 파악할 수 있습니다. 기술에 대한 해외시장에서의 권리확보 뿐만 아니라, 해외 판로 개척과 글로벌 시장 선점에 대한 의지를 확인할 수 있습니다.',
					text2:
						'※ 그래프 산식 : 해외출원비율 = <span class="fraction"><span>해외 출원 패밀리 확보 건수</span><span>전체구간 특허 출원건수</span></span><br />기술별 분석 = 패밀리국가수의 합 / 해당특허청 출원건수<br />국적별 분석 = 패밀리국가수의 합 / 특정 특허청에서 해당 국적의 특허 출원건수',
				},
				{
					name: '주요시장 확보율',
					text1:
						'주요 출원국인 IP5(한국, 미국, 일본, 유럽, 중국)에 출원한 비율을 나타내며,  주요시장 확보율이 높은 분석 대상 분야일수록 주요 해외시장 진출 및 권리 확보를 위한 특허 활동이 활발한 분야인 것으로 파악할 수 있습니다.',
					text2:
						'※ 그래프 산식 : 주요시장 확보율 = <span class="fraction"><span>미국, 일본, 유럽, 중국 중 3개 이상 출원한 특허 건수</span><span>전체구간 특허 출원건수</span></span>',
				},
				{
					name: '해외시장 확보율',
					text1:
						'동일한 기술 사상에 대하여 여러 국가에서 권리를 가지고자 할 때,  각국에 출원된 해당 특허들의 군집을 ‘특허패밀리’라고 하며,  여기에 소속된 특허를 ‘패밀리특허’라고 하는데,  이를 통해 해당 발명에 대해 해외 시장에 진출(자국 외 패밀리 특허 출원을 통한 권리확보)하려는 의지를 측정함으로써 시장성을 간접적으로 판단할 수 있습니다.',
					text2:
						'※ 그래프 산식 : 시장확보율 = <span class="fraction"><span>(패밀리국가수의합/출원건수)</span><span>(전체구간 패밀리국가수의합/전체구간특허출원건수)</span></span>',
				},
				{
					name: '연평균 성장률',
					text1:
						'분석 대상 분야별 연평균 특허 출원의 증가율을 살펴볼 수 있으며,  과거에서 최근까지의 성장 정도에 따라,  분석 대상 분야의 향후 예측이 간접적으로 이루어질 수 있습니다.',
					text2:
						'※ 그래프 산식 : 연평균 성장률 = (<span class="fraction"><span>최초년도 출원건수</span><span>최종년도 출원건수</span> </span>) <span class="square">(<span class="fraction"><span>1</span><span>경과년수</span></span>) <em>- 1</em></span>',
				},
				{
					name: '기술 부상도',
					text1:
						'최근년도를 기준으로 최근의 특허출원 활동량 변화를 통해 기술부상도 측정하여 최근 부상하고 있는 기술 동향을 파악할 수 있습니다. 국가별 기술 부상도를 통해 국가별로 분석 대상 분야에 대한 최근의 개발 활성도를 분석할 수 있습니다.',
					text2:
						'※ 그래프 산식 : 특허증가율 = <span class="fraction"><span>(4구간 특허건수−3구간 특허건수)</span><span>3구간 특허건수</span></span>',
				},
				{
					name: '특허점유율',
					text1:
						'기술별 출원건수에 따른 점유율로,  기술 전체에서 세부기술이 차지하는 비중을 나타냅니다. 국적별 특허 점유율은 분석 대상 분야의 국가별 특허 현황을 나타낸 것으로,  분석 대상 분야에 대한 각 국가별 집중 정도를 파악할 수 있습니다.',
					text2:
						'※ 그래프 산식 : 점유율 = <span class="fraction"><span>특정구간 특허 출원건수</span><span>전체구간 특허 출원건수</span></span>',
				},
				{
					name: '특허 장벽도',
					text1:
						'상위 1~5위 주요 출원인이 차지하고 있는 특허 비율을 산출하여 해당 산업 분야의 독과점 정도를 파악하여 관심 산업에 대한 진입 장벽도를 판단할 수 있습니다.',
					text2:
						'※ 그래프 산식 : 특허장벽도 = <span class="fraction"><span>(특정 산업 분야의 상위 출원인 5개가 보유하고 있는 특허건수)</span><span>(특정 산업 분야의 전체 특허 건수 )</span></span>',
				},
				{
					name: 'TOP10 출원인 분석',
					text1:
						'산업별 출원 상위 10개의 출원인별 1.출원 건수, 2.연도별 출원 현황, 3. 산업별 출원 건수, 4.기술 부상도, 5.주요시장 확보율을 제공합니다.',
					text2: '',
				},
				{
					name: '위기신호 분석',
					text1:
						'※ 참고 : 위기신호 분석은 산업 분류 코드 세세분류에서 하나씩 선택해서 확인하세요.',
					text2:
						'※ 참고 : 특허가 다수의 하위분류에 속하거나 공개, 등록, 정정 등으로 수차례 공보데이터로 발행되는 경우 해당 특허는 1건으로 처리하여, 보고서와의 차이가 발생할 수 있음.',
				},
			],
		};
	},
};
</script>
