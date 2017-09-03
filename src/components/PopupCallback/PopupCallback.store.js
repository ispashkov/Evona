export const PopupCallback = {
	state: {
		show: false,
	},
	actions: {
		showPopupCallback({ commit }) {
			commit('SHOW_POPUP_CALLBACK');
		},
		
		closePopupCallback({ commit }) {
			commit('CLOSE_POPUP_CALLBACK');
		}
	},
	mutations: {
		SHOW_POPUP_CALLBACK(state) {
			state.show = true;
		},
		
		CLOSE_POPUP_CALLBACK(state) {
			state.show = false;
		}
	},
	getters: {
		getShowPopupCallback(state) {
			return state.show;
		},
	}
};