<template>
	<section class="conSection" style="width: 100%; min-height: 150px">
		<div class="half" v-if="$store.state.fboardList.SearchLoading">
			<half-circle-spinner
				:animation-duration="1000"
				:size="40"
				color="#007dcd"
			/>
		</div>
		<div class="grid-wrap gridType01" v-if="fetchData.length">
			<div class="mB10">
				<span class="btn btn-primary" @click="ksicCheckGo"
					>체크 항목 분석 보고서 보기</span
				>
			</div>
			<!-- gr-header -->
			<div class="gr-header">
				<div class="gridRow">
					<div class="col-group3">
						<div class="cols col_xs-3">
							<span class="tit">KSIC 소분류코드</span>
						</div>
						<div class="cols col_xs-3">
							<span class="tit">KSIC 소분류</span>
						</div>
						<div class="cols col_xs-3">
							<span class="tit">비중</span>
						</div>
						<div class="cols col_xs-3">
							<span class="tit">출원건수</span>
						</div>
					</div>
				</div>
			</div>
			<!-- gr-body -->
			<div class="gr-body">
				<div class="gridRow" v-for="(itme, i) in fetchData" :key="i">
					<div class="col-group3">
						<div class="cols col_xs-3 gridTitleM">
							<span class="tit">KSIC 소분류코드</span>
							<span class="checkbox-out">
								<input
									type="checkbox"
									:id="itme.ksicNm5"
									name="KSIC"
									:value="itme.ksicCd5"
									v-model="ksicCds"
									@change="ksicCdEv($event, itme.ksicLrgCd)"
								/>
								<label
									:for="itme.ksicNm5"
									class="checkbox"
									style="margin: -4px 0 0px 0"
								>
									{{ itme.ksicCd5 }}
								</label>
							</span>
							<!-- <span class="txt">
								<span
									class="link"
									@click="
										analysisPush(itme.ksicNm5, itme.ksicCd5, itme.ksicLrgCd)
									"
								>
									{{ itme.ksicCd5 }}
								</span>
							</span> -->
						</div>
						<div class="cols col_xs-3 gridSubM">
							<span class="tit">KSIC 소분류</span>
							<span
								class="link"
								@click="
									analysisPush(itme.ksicNm5, itme.ksicCd5, itme.ksicLrgCd)
								"
								v-html="itme.ksicNm5"
							>
							</span>
						</div>
						<div class="cols col_xs-3 gridSubM">
							<span class="tit">비중</span>
							<span class="txt">{{ itme.percent }} %</span>
						</div>
						<div class="cols col_xs-3 gridSubM">
							<span class="tit">출원건수</span>
							<span class="txt">{{ itme.cnt | commas }} 건</span>
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
import { numberCommas } from '@/utils/index';
import { pushArr } from '@/utils/storage';
export default {
	props: ['fetchData'],
	components: {
		HalfCircleSpinner,
	},
	data() {
		return {
			ksicCds: [],
			ksicArrCheck: [],
		};
	},
	filters: {
		commas: function (value) {
			return numberCommas(value);
		},
	},
	methods: {
		analysisPush(name, code, lagcode) {
			pushArr(name, code, lagcode);
		},
		ksicCdEv(event, lagcode) {
			if (this.ksicArrCheck.length >= 10) {
				if (event.target.checked) {
					alert('10개 이하만 선택해주세요.');
					this.ksicCds.splice(-1, 1);
				}
				event.target.checked = false;
			}
			const checked = event.target.checked;
			let evname = event.target.id;
			let evcode = event.target.value;
			let kiarr = {
				name: evname,
				code: evcode,
				lagcode: lagcode,
				isShow: true,
			};
			if (checked) {
				this.ksicArrCheck.push(kiarr);
			} else {
				var newArray = this.ksicArrCheck.filter(item => item.code !== evcode);
				this.ksicArrCheck = newArray;
			}
		},
		ksicCheckGo() {
			if (this.ksicCds.length > 0) {
				localStorage.setItem('ksicArr', JSON.stringify(this.ksicArrCheck));
				localStorage.setItem('ksicCds', JSON.stringify(this.ksicCds));
				this.$store.commit('analysis/updateState', {
					ksicArr: this.ksicArrCheck,
				});
				this.$store.commit('analysis/updateState', {
					ksicCds: this.ksicCds,
				});
				this.$router.push({ name: 'patent' });
			} else {
				alert('분석 서비스를 볼 KSIC 코드를 체크해주세요.');
			}
		},
	},
};
</script>
