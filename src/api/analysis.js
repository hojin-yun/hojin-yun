import axios from 'axios';
const instance = axios.create({
	baseURL: process.env.VUE_APP_API_PATENT,
});
function fetchAnalysis(level, cd) {
	return instance.get(
		`classification/list?ksicLevel=${level}&ksicTopCd=${cd}`,
		{
			headers: {
				'Content-Type': 'application/json',
			},
		},
	);
}
function fetchCrisis(cd) {
	return instance.get(`crisis/list?ksicCd=${cd}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
function fetchPatent(cd, size, page, lrgCd) {
	return instance.get(
		`classification/patent-list?ksicCd=${cd}&listSize=${size}&page=${page}&ksicLrgCd=${lrgCd}`,
		{
			headers: {
				'Content-Type': 'application/json',
			},
		},
	);
}
export { fetchAnalysis, fetchCrisis, fetchPatent };
