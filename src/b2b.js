import Vue from 'vue'
import { store } from './store/store.b2b';

import './components/assets'
import './styles/b2b.scss'


import './components/Footer/Footer'

import App from './B2B.vue'



new Vue ({
    el: '#app',
    store,
    render: h => h(App)
});