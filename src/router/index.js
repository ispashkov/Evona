import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Auth from '../components/Auth/Auth.vue';
import Shops from '../components/Shops/Shops.vue';
import Catalog from '../components/Catalog/Catalog.vue';

import ProductPage from '../pages/Product.vue';

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/btb',
			component: Shops
		},

		{
			path: '/auth',
			component: Auth
		},

		{
			path: '/catalog',
			component: Catalog
		},

		{
			name: 'product',
			path: '/product/:id',
			component: ProductPage
		}
	]
});
