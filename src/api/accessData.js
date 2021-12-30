import axios from 'axios';
const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});
function addAccess(addData) {
	return instance.post(`statistics/newone`, addData, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
export { addAccess };
