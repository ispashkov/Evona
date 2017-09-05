<template lang="pug">
	include ./layout/mixins

	div.app
		Header-Component

		transition(name='slideInLeft')
			MobileMenu(v-if='getShowMenu')

		main(:class='[ main ]')
			router-view

		include ./components/Footer/Footer

		transition(name='fade')
			popup-wrapper(v-if="getShowPopupCallback")
				popup-callback

</template>

<script>

import { mapGetters, mapActions } from 'vuex';

import HeaderComponent from './components/HeaderB2B/HeaderB2B.vue'
import MobileMenu from './components/MobileMenu/MobileMenu.vue'
import Auth from './components/Auth/Auth.vue'

export default {
	name: 'Application',
	components: {
		HeaderComponent,
		MobileMenu,
		Auth,
		'popup-wrapper': () => import('./components/PopupWrapper/PopupWrapper.vue'),
		'popup-callback': () => import('./components/PopupCallback/PopupCallback.vue'),
	},
	computed: {

		...mapGetters(['getShowMenu', 'getShowPopupCallback', 'getUser']),

		main() {
			switch (this.$route.path) {
				case '/btb':
				case '/auth':
					return 'main main_center';
					break;
				case '/catalog':
					return 'main main_light';
					break;
				case '/product':
					return 'main main_white';
					break;
				default:
					return 'main';
			}
		},

		auth() {
			return this.$route.path == '/auth' || this.$route.path == '/btb' ? true : false
		},

		userIsAuthenticated() {
			return this.getUser !== null && this.getUser !== undefined
		},
	},
	created() {
		if (!this.getUser) {
			this.$router.push('/auth')
		}
	}
}
</script>


