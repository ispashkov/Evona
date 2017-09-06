import Vue from 'vue';
import * as firebase from 'firebase';
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
	render: h => h(App),
	created() {
		firebase.initializeApp({
			apiKey: 'AIzaSyAO6mUuDwwF9pVt42X4LWcSWgNqd1lUqVA',
			authDomain: 'evonanysense-bced1.firebaseapp.com',
			databaseURL: 'https://evonanysense-bced1.firebaseio.com',
			projectId: 'evonanysense-bced1',
			storageBucket: ''
		});
	}
});
