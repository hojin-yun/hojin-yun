import axios from 'axios';
const instance = axios.create({
	baseURL: process.env.VUE_APP_API_PATENT,
});
function fetchMapping(name, code) {
	return instance.get(`mapping/${name}/ksic?${code}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
function fetchCategory(name, code) {
	return instance.get(`mapping/${name}/category?${code}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
function fetchSearch(name, code, pageNum, sortNumber) {
	return instance.get(
		`mapping/${name}/ksic?${code}&page=${pageNum}&listSize=${sortNumber}`,
		{
			headers: {
				'Content-Type': 'application/json',
			},
		},
	);
}
export { fetchMapping, fetchCategory, fetchSearch };
