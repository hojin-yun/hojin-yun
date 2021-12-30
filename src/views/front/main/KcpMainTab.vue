<template>
	<div class="kcpMainTab typeTab01" id="kcpMainTab">
		<div class="mainTab">
			<ul class="kcpMainTabArea typeTabArea">
				<li>
					<a
						href="#"
						:class="{ active: kcpMainTabArea }"
						@click.prevent="kcpMainTabArea = true"
						title="연평균 성장률 보기"
						>연평균 성장률</a
					>
				</li>
				<li>
					<a
						href="#"
						:class="{ active: !kcpMainTabArea }"
						@click.prevent="kcpMainTabArea = false"
						title="기술 부상도 보기"
						>기술 부상도</a
					>
				</li>
			</ul>
			<span class="gtext">KSIC 산업분류의 중분류별 기준 테이터 입니다.</span>
		</div>

		<div class="tab_view" v-if="kcpMainTabArea">
			<div class="mainGraphArea">
				<iframe
					v-if="mstrLogin"
					width="100%"
					height="100%"
					id="ChartAddOne"
					:src="`${ifrurl}?reportId=583621C8B249AA61485E088D9540BADF`"
					title=""
					frameborder="0"
				></iframe>
			</div>
		</div>
		<div class="tab_view" v-if="!kcpMainTabArea">
			<div class="mainGraphArea">
				<iframe
					v-if="mstrLogin"
					width="100%"
					height="100%"
					id="ChartAddOne"
					:src="`${ifrurl}?reportId=5519B03B794F99577D664DAE75BA00CD`"
					title=""
					frameborder="0"
				></iframe>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'KcpMainTab',
	props: ['ifrurl', 'mstrLogin'],
	data() {
		return {
			kcpMainTabArea: false,
		};
	},
};
</script>

<style></style>
