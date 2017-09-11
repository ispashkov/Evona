export default {
	state: {
		item: {}
	},

	actions: {
		fetchProduct({ commit }, payload) {
			fetch('/api/product', {
				headers: {
					id: payload
				}
			})
				.then(res => res.json())
				// .then(data => console.log(...data));
				.then(data => commit('GET_ITEM', ...data))
				.catch(err => new Error(err));
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
