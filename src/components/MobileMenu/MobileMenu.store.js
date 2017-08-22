export const MobileMenu = {
    state: {
        show: false
    },

    actions: {
        showMenu({commit}, payload) {
            commit('SHOW_MENU')
        },

        closeMenu({commit}, payload) {
            commit('CLOSE_MENU')
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
            return state.show
        }
    }
}