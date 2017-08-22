import Vue from 'vue'
import * as firebase from 'firebase';
import { store } from './store/store.b2b';
import { router } from './router'

import './components/assets'
import './styles/b2b.scss'


import './components/Footer/Footer'

import App from './B2B.vue'


new Vue ({
    el: '#app',
    store,
    router,
    render: h => h(App),
    created() {
        firebase.initializeApp({
            apiKey: "AIzaSyAO6mUuDwwF9pVt42X4LWcSWgNqd1lUqVA",
            authDomain: "evonanysense-bced1.firebaseapp.com",
            databaseURL: "https://evonanysense-bced1.firebaseio.com",
            projectId: "evonanysense-bced1",
            storageBucket: "",
        })
    }
});