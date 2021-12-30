import Vue from 'vue';
import Vuex from 'vuex';
import gnb from './front/gnb'; //메뉴
import bannerAll from './front/bannerAll'; //하단 배너
import fluctuations from './front/fluctuations'; //메인 변동률 TOP 8
import fboardList from './front/boardList'; //사용자 게시판
import analysis from './front/analysis'; //분석 서비스
import mstr from './front/mstr'; //분석 서비스
import search from './front/search'; //통합 검색
import boardList from './boardList'; //게시판
import login from './login'; //로그인

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		login,
		gnb,
		fluctuations,
		bannerAll,
		boardList,
		fboardList,
		analysis,
		mstr,
		search,
	},
});
