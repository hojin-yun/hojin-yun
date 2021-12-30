import router from '@/router/index';
import store from '@/store/index';
let ksicArr = [];
function ksicNameSet(Arr, evname, evcode, ksicCds, lagcode) {
	ksicArr = Arr;
	ksicArr.push({ name: evname, code: evcode, lagcode: lagcode, isShow: true });
	localStorage.setItem('ksicArr', JSON.stringify(ksicArr));
	localStorage.setItem('ksicCds', JSON.stringify(ksicCds));
}

function ksicNameDel(Arr, evname, name, ksicCds) {
	const itemToFind = Arr.find(function (item) {
		return item[name] === evname;
	});
	const idx = Arr.indexOf(itemToFind);
	if (idx > -1) Arr.splice(idx, 1);
	localStorage.setItem('ksicArr', JSON.stringify(Arr));
	const ksicCdsArr = ksicCds;
	for (let i = 0; i < ksicCdsArr.length; i++) {
		if (ksicCdsArr[i] === evname) {
			ksicCdsArr.splice(i, 1);
			i--;
		}
	}
	localStorage.setItem('ksicCds', JSON.stringify(ksicCdsArr));
}

function ksicAllDel() {
	store.commit('analysis/updateState', { ksicCds: [] });
	store.commit('analysis/updateState', { ksicArr: [] });
	localStorage.removeItem('ksicArr');
	localStorage.removeItem('ksicCds');
}

function pushArr(namePush, codePush, lagcode) {
	ksicNameSet([], namePush, codePush, [codePush], lagcode);
	$('body').removeClass('modal-open');
	store.commit('analysis/updateState', {
		ksicArr: [
			{
				name: namePush,
				code: codePush,
				lagcode: lagcode,
				isShow: true,
			},
		],
	});
	store.commit('analysis/updateState', {
		ksicCds: [codePush],
	});
	router.push({ name: 'patent' });
}

export { ksicNameSet, ksicNameDel, ksicAllDel, pushArr };
