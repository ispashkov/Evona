import Vue from 'vue/dist/vue'
import { store } from './store';


import './components/fields'
import './components/assets'
import './styles/app.scss'


import './index.pug'
import './components/Header/Header'
import './components/Steps/Steps'
import './components/FormPartners/FormPartners'
import './components/History/History'
import './components/Info/Info'
import './components/Profits/Profits'
import './components/InRussia/InRussia'
import './components/FormAccess/FormAccess'
import './components/Cooperation/Cooperation'
import './components/FormMeeting/FormMeeting'
import './components/Contacts/Contacts'
import './components/Footer/Footer'

import PopupWrapper from './components/PopupWrapper/PopupWrapper.vue'
import PopupCallback from './components/PopupCallback/PopupCallback.vue'

new Vue ({
	el: '#app',
	name: 'Application',
	store,
	components: {
		PopupWrapper, PopupCallback
	},
	data() {
		return {
			active: false
		}
	},
	mounted: function () {
		window.addEventListener('scroll', this.scroll)
	},
	methods: {
		scroll() {
			window.scrollY > 0 ? this.active = true : this.active = false;
		},
		
		showPopupCallback() {
			this.$store.dispatch('showPopupCallback');
		}
	}
});
