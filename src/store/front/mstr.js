export default {
	namespaced: true, // 네임스페이스 // 메인 변동률
	state: () => ({
		mstrLogin: false,
	}),
	mutations: {
		updateState(state, payload) {
			Object.keys(payload).forEach(key => {
				state[key] = payload[key]; //state 값을 변경
			});
		},
	},
	actions: {},
};
