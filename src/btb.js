import Vue from 'vue';
import store from './store/store.btb';
import router from './router';

import './components/assets';
import './styles/btb.scss';

import './components/Footer/Footer';

import App from './Btb.vue';

new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
});
