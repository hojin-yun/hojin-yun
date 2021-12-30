const setTime = '1d';
function getCookieToken() {
	return window.$cookies.get('MyToken');
}
function setCookieToken(value) {
	window.$cookies.set('MyToken', value, setTime);
}
function getInfoCookie() {
	return window.$cookies.get('UserInfo');
}
function setInfoCookie(value) {
	window.$cookies.set('UserInfo', value, setTime);
}
function deleteCookieToken() {
	window.$cookies.remove('MyToken');
	window.$cookies.remove('UserInfo');
}
function setCookiePopup(value) {
	window.$cookies.set('MainPopup', value, setTime);
}
export {
	setCookieToken,
	getCookieToken,
	deleteCookieToken,
	getInfoCookie,
	setInfoCookie,
	setCookiePopup,
};
