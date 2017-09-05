import '../../fakedata/products.json';

export default {
	state: {
		products: []
	},

	actions: {
		getProducts({ commit }) {
			fetch('/api/products')
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
