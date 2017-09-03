import Field from '../Field.vue';

export default {
	name: 'PopupCallback',
	components: {Field},
	data() {
		return {
			name: '',
			phone: '',
			message: ''
		};
	}
};