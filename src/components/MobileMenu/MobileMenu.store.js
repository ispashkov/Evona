export default {
	state: {
		show: false
	},

	actions: {
		showMenu({ commit }) {
			commit('SHOW_MENU');
		},

		closeMenu({ commit }) {
			commit('CLOSE_MENU');
		}
	},

	mutations: {
		SHOW_MENU(state) {
			state.show = true;
		},

		CLOSE_MENU(state) {
			state.show = false;
		}
	},

	getters: {
		getShowMenu(state) {
			return state.show;
		}
	}
};
