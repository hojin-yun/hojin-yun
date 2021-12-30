<template>
	<section class="conSection mT10" style="width: 100%; min-height: 150px">
		<div class="half" v-if="$store.state.fboardList.SearchLoading">
			<half-circle-spinner
				:animation-duration="1000"
				:size="40"
				color="#007dcd"
			/>
		</div>
		<div class="grid-wrap gridType01" v-if="modalList.length">
			<!-- gr-header -->
			<div class="gr-header">
				<div class="gridRow">
					<div class="col-group3">
						<div class="cols tctile">
							<span class="tit">출원번호/특허명</span>
						</div>
						<div class="cols tcsub">
							<span class="tit">등록사항/출원일자</span>
						</div>
						<div class="cols tcsub">
							<span class="tit">최종처분내용</span>
						</div>
					</div>
				</div>
			</div>
			<!-- gr-body -->
			<div class="gr-body">
				<div class="gridRow" v-for="(itme, i) in modalList" :key="i">
					<div class="col-group3">
						<div class="cols gridTitleM left tctile">
							<span class="tit">출원번호/특허명</span>
							<span class="txt left">
								<!-- :href="`https://doi.org/10.8080/${itme.applno}`" -->
								<span
									@click="
										openWindowPop(
											`https://doi.org/10.8080/${itme.applno}`,
											'popup',
										)
									"
									class="link"
								>
									({{ itme.applno }})<br />
									<span v-html="itme.kornInvntTtl">{{
										itme.kornInvntTtl
									}}</span>
								</span>
							</span>
						</div>
						<div class="cols gridSubM tcsub">
							<span class="tit">등록사항/출원일자</span>
							<span class="txt">
								{{ itme.regMtr }}<br />{{ itme.applYmd | yyyyMMdd }}</span
							>
						</div>
						<div class="cols gridSubM tcsub">
							<span class="tit">최종처분내용</span>
							<span class="txt" v-html="itme.lastDspsCn"
								>{{ itme.lastDspsCn }} </span
							><br />
						</div>
					</div>
				</div>
			</div>
			<!-- // gr-body -->
		</div>
	</section>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners';
import { commaDate } from '@/utils/index';
export default {
	props: ['modalList'],
	components: {
		HalfCircleSpinner,
	},
	filters: {
		yyyyMMdd: function (value) {
			return commaDate(value);
		},
	},
	methods: {
		openWindowPop(url, name) {
			var options =
				'top=10, left=10, width=1000, height=800, status=no, menubar=no, toolbar=no, resizable=no';
			window.open(url, name, options);
		},
	},
};
</script>

<style>
.tctile {
	width: 70%;
}
.tcsub {
	width: 15%;
}
@media screen and (max-width: 992px) {
	.tctile {
		width: 100%;
	}
	.tcsub {
		width: 50%;
	}
}
</style>
