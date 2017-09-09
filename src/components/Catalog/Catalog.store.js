export default {
	state: {
		products: []
	},

	actions: {
		getProducts({ commit }, payload) {
			fetch('/api/products', {
				headers: { limit: payload }
			})
				.then(res => res.json())
				// .then(data => console.log(data))
				.then(data => commit('GET_PRODUCTS', data))
				.catch(err => console.log(err.message));
		}
	},

	mutations: {
		GET_PRODUCTS(state, payload) {
			state.products.push(...payload);
		}
	},

	getters: {
		products(state) {
			return state.products;
		}
	}
};
