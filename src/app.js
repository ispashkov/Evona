import Vue from 'vue/dist/vue'
import { store } from './store';

import './components/assets'
import './styles/app.scss'


import './index.pug'
import './components/Header/Header'
import './components/Steps/Steps'
import './components/History/History'
import './components/Info/Info'
import './components/Profits/Profits'
import './components/InRussia/InRussia'
import './components/Cooperation/Cooperation'
import './components/Contacts/Contacts'
import './components/Footer/Footer'

import Loading from './components/Loading/Loading.vue'
import FormPartners from './components/FormPartners/FormPartners.vue'
import PopupWrapper from './components/PopupWrapper/PopupWrapper.vue'
import PopupCallback from './components/PopupCallback/PopupCallback.vue'
import MobileMenu from './components/MobileMenu/MobileMenu.vue'


new Vue ({
	el: '#app',
	name: 'Application',
	store,
	components: {
		PopupWrapper,
		PopupCallback,
		FormPartners,
		MobileMenu,
		'form-access': () => import('./components/FormAccess/FormAccess.vue'),
		'form-meeting': () => import('./components/FormMeeting/FormMeeting.vue')
	},
	data() {
		return {
			active: false,
		}
	},
	computed: {
		menu() {
			return this.$store.state.MobileMenu.show
		}
	},
	mounted: function () {
		window.addEventListener('scroll', this.scroll)
	},
	methods: {
		scroll() {
			window.scrollY > 100 ? this.active = true : this.active = false;
		},
		
		showPopupCallback() {
			this.$store.dispatch('showPopupCallback');
		},

		showMenu() {
			this.$store.dispatch('showMenu');
		}
	}
});
