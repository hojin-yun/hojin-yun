import '@babel/polyfill';
import Vue from 'vue';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import VueSlimScroll from 'vue-slimscroll';
import router from './router';
import store from './store';
import 'bootstrap';
Vue.use(VueSlimScroll);
Vue.use(VueCookies);
Vue.config.productionTip = false;
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
