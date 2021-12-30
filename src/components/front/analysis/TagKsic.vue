<template>
	<div class="analysis-search-list bo">
		<div
			class="subjectvf"
			@click="clickOptions"
			:class="{ active: isActive }"
		></div>
		<div class="analysis-search-label">
			<span class="analysis-search-btn">
				<span class="btn" @click="clickOptions"> 산업 선택</span>
				<span class="codeAllDel">
					<span @click="codeAllDel()"><i class="ti-reload"></i>전체해제 </span>
				</span>
			</span>
		</div>
		<div class="analysis-search-item">
			<div class="subject-selected pL0">
				<ul>
					<li v-for="(item, j) in ksicArr" :key="j">
						<span v-html="item.name"></span>
						<i class="ti-close" @click="tagDel(item.code)"></i>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import { ksicNameDel, ksicAllDel } from '@/utils/storage';
export default {
	props: ['isActive'],
	computed: {
		...mapState('analysis', ['ksicArr', 'ksicCds']),
	},
	methods: {
		tagDel(event) {
			ksicNameDel(this.ksicArr, event, 'code', this.ksicCds);
		},
		codeAllDel() {
			ksicAllDel();
		},
		clickOptions() {
			this.$emit('clickOptions');
		},
	},
};
</script>
<style>
.analysis-search-list.bo {
	border: 2px solid #3498db !important;
}
.analysis-search-btn .btn {
	display: inline-block;
	border: 1px solid #2582c0;
	height: 30px;
	line-height: 30px;
	width: 100px;
	text-align: center;
	padding: 0;
	cursor: pointer;
	background: #3498db;
	color: #fff;
	margin-top: -10px;
}
.analysis-search-btn .btn::after {
	content: '▼';
	display: inline-block;
	font-size: 8px;
	transform: scale(0.5);
	margin-left: 5px;
	margin-right: -5px;
	position: relative;
	top: -1px;
}
.analysis-search-btn .btn:hover {
	background: #2479b3;
}
.codeAllDel {
	display: block;
	padding: 10px 0 0 16px;
	font-size: 12px;
	cursor: pointer;
}
.codeAllDel i {
	margin-right: 5px;
}
.subject-selected {
	font-size: 12px;
}
</style>
