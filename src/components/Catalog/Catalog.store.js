export default {
	state: {
		total: 0,
		products: []
	},

	actions: {
		getProducts({ commit }, payload) {
			fetch('/api/products', {
				headers: {
					limit: payload.limit,
					page: payload.page
				}
			})
				.then(res => res.json())
				// .then(data => console.log(data))
				.then(data => commit('GET_PRODUCTS', data))
				.catch(err => console.log(err.message));
		}
	},

	mutations: {
		GET_PRODUCTS(state, payload) {
			let total = payload[0];
			state.total = total[0].total;
			state.products = payload[1];
		}
	},

	getters: {
		products(state) {
			return state.products;
		},

		totalProducts(state) {
			return state.total;
		}
	}
};
