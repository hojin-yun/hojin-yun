import axios from 'axios';
import { getCookieToken } from '@/utils/cookies';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

function fetchYear(pageName, category) {
	return instance.get(`${pageName}/year?category=${category}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}

function fetchExcel() {
	return instance.get(`excel/category-list`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}

function fetchDoard(
	pageName,
	pageNum,
	sortNumber,
	searchText,
	searchYn,
	seachStartDate,
	seachEndDate,
) {
	if (!seachEndDate) seachEndDate = '';
	if (!seachStartDate) seachStartDate = '';
	return instance.get(
		`${pageName}/list?page=${pageNum}&listSize=${sortNumber}${searchText}${searchYn}${seachStartDate}${seachEndDate}`,
		{
			headers: {
				'Content-Type': 'application/json',
			},
		},
	);
}
function viewDoard(pageName, regNo) {
	return instance.get(`${pageName}/${regNo}/info`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
function viewUser(pageName, viewUser) {
	return instance.post(`${pageName}/info`, viewUser, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}

function addDoard(pageName, addData) {
	let headType;
	if (pageName == 'faq' || pageName == 'user') {
		headType = 'application/json';
	} else {
		headType = 'multipart/form-data';
	}
	return instance.post(`${pageName}/newone`, addData, {
		headers: {
			'Content-Type': headType,
			Authorization: 'Bearer ' + getCookieToken(),
		},
	});
}

function editDoard(pageName, editData) {
	let headType;
	if (pageName == 'faq' || pageName == 'user') {
		headType = 'application/json';
	} else {
		headType = 'multipart/form-data';
	}
	return instance.post(`${pageName}/changeone`, editData, {
		headers: {
			'Content-Type': headType,
			Authorization: 'Bearer ' + getCookieToken(),
		},
	});
}

function editState(pageName, editState) {
	return instance.post(`${pageName}/changeone/pstg`, editState, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + getCookieToken(),
		},
	});
}

function deleteDoard(pageName, deleteId) {
	return instance.post(`${pageName}/removal`, deleteId, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + getCookieToken(),
		},
	});
}

function pwAgain(pwData) {
	return instance.post(`user/password`, pwData, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + getCookieToken(),
		},
	});
}
function existence(id) {
	return instance.post(`user/existence`, id, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + getCookieToken(),
		},
	});
}

export {
	fetchDoard,
	deleteDoard,
	viewDoard,
	addDoard,
	editDoard,
	editState,
	fetchYear,
	viewUser,
	pwAgain,
	existence,
	fetchExcel,
};
