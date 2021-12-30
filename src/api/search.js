import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_SEARCH,
});

function fetchSearch(searchkeyword, category, listCount, PageNumber) {
	return instance.get(
		`dic/search/search?keyword=${searchkeyword}&category=${category}&listCount=${listCount}&PageNumber=${PageNumber}`,
		{
			headers: {
				'Content-Type': 'application/json',
			},
		},
	);
}

function fetchSearchView(searchkeyword, category) {
	return instance.get(
		`dic/search/search?keyword=${searchkeyword}&category=${category}`,
		{
			headers: {
				'Content-Type': 'application/json',
			},
		},
	);
}

function fetchIp() {
	return instance.get(`main/serverCheck`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}

export { fetchSearch, fetchSearchView, fetchIp };
