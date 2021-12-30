<template>
	<div class="pop">
		<div v-for="(item, i) in mainPopup" :key="item.regNo">
			<div
				class="layerBox"
				:class="'pop' + item.regNo"
				:style="`width: ${item.popupW}px;
					left: ${item.popupLot}px;
					top: ${item.popupLat}px;
					z-index: ${item.regNo}0;`"
				v-show="
					item.pstgYn == 'y' && $cookies.isKey('pop' + item.regNo) == false
						? showModal
						: !showModal
				"
			>
				<h1 class="poptitle" v-if="!item.imgUrl[0]">{{ item.infrmNm }}</h1>
				<div v-if="item.imgUrl[0]">
					<a v-if="item.urlAddr" :href="item.urlAddr" target="_blank">
						<img :src="item.imgUrl" alt="" />
					</a>
					<img v-else :src="item.imgUrl" alt="" />
				</div>
				<div
					v-else
					class="cont"
					:style="{
						height: `${item.popupH}px`,
					}"
				>
					<p v-html="item.infrmDtlCn"></p>
					<a v-if="item.urlAddr" :href="item.urlAddr" target="_blank">{{
						item.urlAddr
					}}</a>
				</div>
				<div class="closePop">
					<div class="btnTodayHide">
						<div class="checkbox-out">
							<input
								type="checkbox"
								name="chkbox"
								:id="`pop${item.regNo}`"
								:value="`${item.regNo}`"
							/><label :for="`pop${item.regNo}`" class="checkbox"
								>오늘 하루동안 보지 않기</label
							>
						</div>
					</div>
					<div
						:id="`close${i}`"
						class="btnClose"
						@click="closePopup('pop' + item.regNo)"
						:title="item.infrmNm + '팝업 닫기'"
						style="cursor: pointer"
					>
						<i class="ti-close"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'popupArea',
	props: ['mainPopup'],
	data() {
		return {
			showModal: true,
		};
	},
	methods: {
		closePopup(event) {
			if ($('#' + event).is(':checked')) {
				this.$cookies.set(event, true, '1d');
			}
			$('.' + event).hide();
		},
	},
};
</script>
