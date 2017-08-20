import '../../assets/icons/close.svg'

export default {
	name: 'PopupWrapper',
	mounted: function () {
		document.addEventListener('keydown', e => e.keyCode == 27 ? this.close() : false);
	},
	methods: {
		close() {
			this.$store.dispatch('closePopupCallback');
		}
	}
}