import { mapGetters, mapActions } from 'vuex';

import Field from '../Field.vue';

export default {
	name: 'Auth',
	components: { Field },
	data() {
		return {
			email: '',
			password: '',
			emailAuth: '',
			passwordAuth: ''
		};
	},
	computed: {
		...mapGetters(['getUser'])
	},
	watch: {
		getUser(value) {
			if (value !== null && value !== undefined) {
				this.$router.push('/btb');
			}
		}
	},
	methods: {
		...mapActions(['singUp', 'singIn']),

		onSingup() {
			this.singUp({
				email: this.email,
				password: this.password
			});

			this.email = '';
			this.password = '';
		},

		onSingin() {
			this.singIn({
				email: this.emailAuth,
				password: this.passwordAuth
			});

			this.emailAuth = '';
			this.passwordAuth = '';
		}
	},
	created() {
		if (this.getUser) {
			this.$router.push('/btb');
		}
	}
};
