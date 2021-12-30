import axios from 'axios';
function fetchNotice() {
	return axios.get(`/admin/notice/6/info`);
}
export { fetchNotice };
