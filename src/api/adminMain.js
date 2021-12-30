import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});
function fetchMain(listSize, dayBefore) {
	return instance.get(`main/list${listSize}${dayBefore}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
export { fetchMain };
