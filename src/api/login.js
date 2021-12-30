import axios from 'axios';
//import { getCookieToken } from '@/utils/cookies';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

function authLogin(payload) {
	return instance.post(`/user/authenticate`, payload, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
export { authLogin };
