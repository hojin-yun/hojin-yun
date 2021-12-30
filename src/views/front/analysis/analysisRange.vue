<template>
	<div class="rangeSlider">
		<div style="width: 100%">
			<vue-slider
				v-model="value2"
				:data="data"
				:marks="true"
				:min-range="1"
				@change="iframeLord"
			></vue-slider>
		</div>
	</div>
</template>

<script>
import VueSlider from 'vue-slider-component';

export default {
	name: 'analysisRange',
	components: {
		VueSlider,
	},
	data() {
		return {
			value2: ['1999', '2021'],
			data: [
				'1999',
				'2000',
				'2001',
				'2002',
				'2003',
				'2004',
				'2005',
				'2006',
				'2007',
				'2008',
				'2009',
				'2010',
				'2011',
				'2012',
				'2013',
				'2014',
				'2015',
				'2016',
				'2017',
				'2018',
				'2019',
				'2020',
				'2021',
			],
			checkedValues: [],
			caname: '',
			ifrurl:
				'/mstr/_custom/jsp/report.jsp?reportId=8D4471608C461A6B3AF1239C186A36CD',
			iframeData: [],
		};
	},
	methods: {
		check() {
			let cv = '';
			this.iframeData = [];
			this.checkedValues.forEach((value, index) => {
				if (index > 0) {
					cv += ', ' + value;
				} else {
					cv += value;
				}
				this.iframeData.push({ id: 'chart' + (index + 1), caname: value });
			});
			this.caname = cv;
			this.iframeLord();
		},
		iframeLord() {
			//console.log(this.caname);
		},
	},
};
</script>
