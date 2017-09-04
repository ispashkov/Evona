import '../../fakedata/products.json';

export default {
	state: {
		products: []
	},

	actions: {
		getProducts({ commit }) {
			fetch('../fakedata/products.json')
				.then(res => res.json())
				.then(data => commit('GET_PRODUCTS', data));
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
