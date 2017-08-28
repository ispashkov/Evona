export const Product = {
	state: {
		show: false,
	},
	actions: {
		showPopupWrapper({ commit }) {
			commit('SHOW_POPUP_WRAPPER')
		},
		
		closePopupWRAPPER({ commit }) {
			commit('CLOSE_POPUP_WRAPPER')
		}
	},
	mutations: {
		SHOW_POPUP_WRAPPER(state) {
			state.show = true;
		},
		
		CLOSE_POPUP_WRAPPER(state) {
			state.show = false;
		}
	},
	getters: {
		getShowPopupWrapper(state) {
			return state.show
		},
	}
};