import router from '@/router/index';
import { authLogin } from '@/api/login'; //db api
import {
	getCookieToken,
	setCookieToken,
	deleteCookieToken,
	setInfoCookie,
} from '@/utils/cookies';
import { loginError } from '@/utils/index';
export default {
	namespaced: true,
	state: () => ({
		myToken: getCookieToken() || '',
		uesrNo: '',
		uesrPw: '',
		firstLogin: 'y',
		loginModal: false,
	}),
	getters: {
		isLogin(state) {
			return state.myToken !== '';
		},
		isPwAgain(state) {
			return state.uesrPw !== '';
		},
	},
	mutations: {
		updateState(state, payload) {
			Object.keys(payload).forEach(key => {
				state[key] = payload[key]; //state 값을 변경
			});
		},
	},
	actions: {
		async LOGIN({ commit }, userData) {
			authLogin(userData)
				.then(r => {
					commit('updateState', {
						myToken: r.data.result.token,
						uesrNo: r.data.result.regNo,
						firstLogin: r.data.result.firstLogin,
					});
					setCookieToken(r.data.result.token);
					var userInfoVar = {
						userId: userData.userId,
						useYn: 'y',
					};
					setInfoCookie(userInfoVar);
					if (r.data.result.firstLogin == 'y') {
						router.push({ name: 'pwagain' });
					} else {
						this.uesrPw = '';
						router.push({ name: 'adminMain' });
					}
				})
				.catch(error => {
					loginError(error.response);
				});
		},
		LOGOUT({ commit }) {
			deleteCookieToken();
			commit('updateState', { myToken: '' });
			router.push({ name: 'adminLogin' });
		},
	},
};
