import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_PATENT,
});
function fetchMain(listSize) {
	return instance.get(`main/list${listSize}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
export { fetchMain };
