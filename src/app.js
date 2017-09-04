import Vue from 'vue/dist/vue';
import store from './store';

import './components/assets';
import './styles/app.scss';

import './index.pug';
import './components/Header/Header';
import './components/Steps/Steps';
import './components/History/History';
import './components/Info/Info';
import './components/Profits/Profits';
import './components/InRussia/InRussia';
import './components/Cooperation/Cooperation';
import './components/Contacts/Contacts';
import './components/Footer/Footer';

import FormPartners from './components/FormPartners/FormPartners.vue';
import FormAccess from './components/FormAccess/FormAccess.vue';
import FormMeeting from './components/FormMeeting/FormMeeting.vue';

import MobileMenu from './components/MobileMenu/MobileMenu.vue';

import { mapGetters, mapActions } from 'vuex';

new Vue({
	el: '#app',
	name: 'Application',
	store,
	components: {
		'popup-wrapper': () => import('./components/PopupWrapper/PopupWrapper.vue'),
		'popup-callback': () =>
			import('./components/PopupCallback/PopupCallback.vue'),
		FormPartners,
		MobileMenu,
		FormAccess,
		FormMeeting
	},
	data() {
		return {
			active: false
		};
	},
	computed: {
		...mapGetters(['getShowMenu'])
	},
	mounted: function() {
		window.addEventListener('scroll', this.scroll);
	},
	methods: {
		...mapActions(['showPopupCallback', 'showMenu']),

		scroll() {
			window.scrollY > 100 ? (this.active = true) : (this.active = false);
		}
	}
});
