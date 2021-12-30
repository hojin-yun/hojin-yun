import { instance } from '../index';
function fetchNotice() {
	return instance.get(`/admin/notice/6/info`);
}
export { fetchNotice };
