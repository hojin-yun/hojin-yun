<template>
	<div class="subContent">
		<div class="subConView">
			<div class="subConDetail">
				<div id="realContents">
					<SubTitle />
					<div class="clear ipccpc">
						<div class="fl">
							<div class="txt_title01">
								IPC 비중 엑셀
								<span>(년도를 클릭해서 다운 받으세요.)</span>
							</div>
							<!-- <span
							@click="excelIpc"
							class="btn btn-primary fr"
							style="margin-top: -49px"
						>
							IPC 엑셀 다운로드
						</span>-->
							<div class="ipcYear">
								<ul class="clear">
									<li v-for="(item, i) in dataIpc" :key="i">
										<div class="checkbox-out">
											<!-- <input
											type="checkbox"
											:id="'ipcYear' + item"
											:name="item"
											:value="item"
											v-model="ipccheck"
										/>
										<label :for="'ipcYear' + item" class="checkbox"
											>{{ item }}년</label
										> -->
											<a
												:href="`${apiUrl}/excel/download?regNo=${item.regNo}&strgAtchFileNm=${item.strgAtchFileNm}`"
												class="btn btn-primary"
											>
												{{ item.regYr }}년 IPC <i class="kpbi i-download"></i>
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="fr">
							<div class="txt_title01">
								CPC 비중 엑셀
								<span>(년도를 클릭해서 다운 받으세요.)</span>
							</div>
							<!-- <span
							@click="excelCpc"
							class="btn btn-primary fr"
							style="margin-top: -49px"
						>
							CPC 엑셀 다운로드
						</span> -->
							<div class="ipcYear">
								<ul class="clear">
									<li v-for="(item, i) in dataCpc" :key="i">
										<div class="checkbox-out">
											<!-- <input
											type="checkbox"
											:id="'cpcYear' + item"
											:name="item"
											:value="item"
											v-model="cpccheck"
										/>
										<label :for="'cpcYear' + item" class="checkbox"
											>{{ item }}년</label
										> -->

											<a
												:href="`${apiUrl}/excel/download?regNo=${item.regNo}&strgAtchFileNm=${item.strgAtchFileNm}`"
												class="btn btn-primary"
											>
												{{ item.regYr }}년 CPC <i class="kpbi i-download"></i>
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import 'vue-slider-component/theme/default.css';
import SubTitle from '@/views/front/common/SubTitle';
import { fetchExcel } from '@/api/boardList'; //db api
export default {
	name: 'ksic',
	components: {
		SubTitle,
	},
	data() {
		return {
			isActive: false,
			pageName: 'excel',
			ipcYear: ['2020', '2021'],
			ipccheck: [],
			cpcYear: ['2020', '2021'],
			cpccheck: [],
			dataIpc: [],
			dataCpc: [],
		};
	},
	computed: {
		apiUrl() {
			return process.env.VUE_APP_API_DOWNURL;
		},
	},
	created() {
		this.excelload();
	},
	methods: {
		async excelload() {
			const { data } = await fetchExcel();
			this.dataIpc = data.result.data.ipc;
			this.dataCpc = data.result.data.cpc;
		},
		async excelIpc() {
			for (let i = 0; i < this.ipccheck.length; i++) {
				await this.delay(this.ipccheck[i], 'ipc');
			}
		},
		async excelCpc() {
			for (let i = 0; i < this.cpccheck.length; i++) {
				await this.delay(this.cpccheck[i], 'cpc');
			}
		},
		delay(item, name) {
			return new Promise(function (resolve) {
				setTimeout(function () {
					const a = document.createElement('a');
					a.href = `${process.env.VUE_APP_EXCEL}/${name}/ksic_${name}_${item}.xlsx`;
					a.click();
					a.remove();
					resolve();
				}, 100);
			});
		},
	},
};
</script>
<style>
.btn {
	cursor: pointer;
}
.ipcYear {
	background: #f1f1f1;
	padding: 20px 20px 10px 10px;
	border-radius: 10px;
}
.ipcYear ul li {
	float: left;
	margin-left: 10px;
	margin-bottom: 10px;
}
.ipcYear ul li .btn {
	font-size: 14px;
}
.ipcYear ul li .checkbox-out .checkbox {
	cursor: pointer;
	background-position: 0px 2px;
	height: 23px;
}
.ipcYear ul li .i-download {
	display: inline-block;
	vertical-align: middle;
	position: relative;
	top: -3px;
	background-image: url('~@/assets/img/icon_download_wht.png');
	margin-left: 5px;
}

.ipccpc .fl {
	width: 49%;
}
.ipccpc .fr {
	width: 49%;
}

@media screen and (max-width: 640px) {
	.ipccpc .fl {
		width: 100%;
		float: none !important;
	}
	.ipccpc .fr {
		width: 100%;
		float: none !important;
		margin-top: 20px;
	}
	.btn.fr {
		float: none;
		margin-top: 0 !important;
	}
	.ipcYear {
		margin-top: 10px;
	}
	.ipcYear ul li {
		width: 100%;
	}
	.ipcYear ul li .btn {
		width: 100%;
	}
}
</style>
