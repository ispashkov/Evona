import { mapActions, mapGetters } from 'vuex';

import Pagination from '../Pagination/Pagination.vue';
import CatalogItem from '../CatalogItem/CatalogItem.vue';
import Search from '../Search/Search.vue';
import Selectbox from '../Selectbox/Selectbox.vue';

import './icons/two-arrow.svg';

export default {
	name: 'Catalog',
	data() {
		return {
			perPage: 9,
			currentPage: 1
		};
	},
	components: {
		Pagination,
		Search,
		CatalogItem,
		Selectbox
	},
	created() {
		!this.products.length
			? this.getProducts({ limit: this.perPage, page: this.currentPage })
			: false;
	},
	computed: {
		...mapGetters(['products', 'totalProducts'])
	},
	methods: {
		...mapActions(['getProducts']),

		change(payload) {
			this.currentPage = payload;
			this.getProducts({ limit: this.perPage, page: payload });
		}
	}
};
