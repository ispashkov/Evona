export default {
	state: {
		item: {}
	},

	actions: {
		fetchProduct({ commit }, payload) {
			fetch(`/api/products/?id=${payload}`)
				.then(res => res.json())
				// .then(data => console.log(...data));
				.then(data => commit('GET_ITEM', ...data))
				.catch(err => console.log(err.message));
		}
	},

	mutations: {
		GET_ITEM(state, payload) {
			state.item = payload;
		}
	},

	getters: {
		productItem(state) {
			return state.item;
		}
	}
};
