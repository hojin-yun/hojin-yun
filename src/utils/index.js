import router from '@/router/index';
import store from '@/store/index';
import { deleteCookieToken } from '@/utils/cookies';
//게시판 날짜의 콤마 작업
function dayReset(day) {
	let daya = '' + day;
	let dayarr =
		daya.substr(0, 4) + '.' + daya.substr(4, 2) + '.' + daya.substr(6);
	return dayarr;
}
function convertDateFormat(date) {
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	month = month >= 10 ? month : '0' + month;
	var day = date.getDate();
	day = day >= 10 ? day : '0' + day;
	return [year, month, day].join('');
}

function formatDate(date) {
	let date1 = date.slice(0, 10).replace('-', '.');
	let formatted_date = date1.replace('-', '.');
	return formatted_date;
}

function commaDate(value) {
	if (value == '') return '';
	var unformatDate = '' + value;
	var year = unformatDate.substr(0, 4);
	var month = unformatDate.substr(4, 2);
	var day = unformatDate.substr(6);
	let comDate = year + '.' + month + '.' + day;
	return comDate;
}
function hyphenDate(value) {
	if (value == '') return '';
	var unformatDate = '' + value;
	var year = unformatDate.substr(0, 4);
	var month = unformatDate.substr(4, 2);
	var day = unformatDate.substr(6);
	let comDate = year + '.' + month + '.' + day;
	return comDate;
}

function numberCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function hyphenDateYm(value) {
	if (value == '') return '';
	var unformatDate = '' + value;
	var year = unformatDate.substr(0, 4);
	var month = unformatDate.substr(4, 2);
	let comDate = year + '-' + month;
	return comDate;
}

function onlyDate(value) {
	if (value == '') return '';
	var unformatDate = '' + value;
	var day = unformatDate.substr(6);
	let comDate = day;
	return comDate;
}

function loginError(error) {
	if (error.status === 401) {
		alert(error.data.statusMessage);
		return;
	}
}

function loginOut() {
	alert('로그인 세션이 끊어졌습니다.');
	store.commit('login/updateState', { myToken: '' });
	deleteCookieToken();
	router.push({ name: 'adminLogin' });
}

function chkPwd(str) {
	var pw = str;
	var num = pw.search(/[0-9]/g);
	var eng = pw.search(/[a-z]/gi);
	var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
	if (pw.length < 10 || pw.length > 15) {
		alert('10자리 ~ 15자리 이내로 입력해주세요.');
		return false;
	}
	if (pw.search(/₩s/) != -1) {
		alert('비밀번호는 공백업이 입력해주세요.');
		return false;
	}
	if ((num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)) {
		alert('영문,숫자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.');
		return false;
	}
	return true;
}

function isValidHttpUrl(str) {
	let url;
	try {
		url = new URL(str);
	} catch (_) {
		return false;
	}
	return url.protocol === 'http:' || url.protocol === 'https:';
}

function decodeHTMLEntities(str) {
	if (str !== undefined && str !== null && str !== '') {
		str = String(str);
		str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '');
		str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
		var element = document.createElement('div');
		element.innerHTML = str;
		str = element.textContent;
		element.textContent = '';
	}
	return str;
}

function unescapeHtml(str) {
	if (str == null) {
		return '';
	}
	return str
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#039;/g, "'")
		.replace(/&#39;/g, "'");
}

export {
	dayReset,
	convertDateFormat,
	formatDate,
	commaDate,
	hyphenDate,
	hyphenDateYm,
	onlyDate,
	loginError,
	loginOut,
	chkPwd,
	isValidHttpUrl,
	numberCommas,
	decodeHTMLEntities,
	unescapeHtml,
};
