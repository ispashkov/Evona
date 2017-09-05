import { mapActions, mapGetters } from 'vuex';

import Pagination from '../Pagination/Pagination.vue';
import CatalogItem from '../CatalogItem/CatalogItem.vue';
import Search from '../Search/Search.vue';
import Selectbox from '../Selectbox/Selectbox.vue';

import './icons/two-arrow.svg';

export default {
	name: 'Catalog',
	components: {
		Pagination,
		Search,
		CatalogItem,
		Selectbox
	},
	created() {
		!this.products.length ? this.getProducts() : false;
	},
	computed: {
		...mapGetters(['products'])
	},
	methods: {
		...mapActions(['getProducts'])
	}
};
