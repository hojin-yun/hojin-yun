import axios from 'axios';
function addAccess(addData) {
	console.log(addData);
	return axios.post(`/admin/statistics/newone`, addData, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
export { addAccess };
