import axios from 'axios';
const instance = axios.create({
	baseURL: process.env.VUE_APP_MSTR_LOGIN,
});
function mstrLoginIfm() {
	return instance.get('_custom/jsp/session.jsp');
}
export { mstrLoginIfm };
