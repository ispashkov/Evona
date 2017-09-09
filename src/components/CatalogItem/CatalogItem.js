import './icons/bookmark.svg';
import './icons/cart.svg';
import './icons/eye.svg';

export default {
	name: 'CatalogItem',
	data() {
		return {
			cart: false,
			bookmark: false,
			active: false
		};
	},
	props: {
		id: {
			type: Number,
			require: true
		},
		title: {
			type: String,
			require: true,
			default: 'Название товара'
		},
		description: {
			type: String,
			require: true,
			default: 'Описание товара'
		},
		price: {
			type: Number,
			require: true,
			default: '0'
		},
		image: {
			type: String,
			require: false,
			default: 'http://via.placeholder.com/285x520'
		}
	},
	computed: {
		priceFormat() {
			return new Intl.NumberFormat('ru-IN', {
				style: 'currency',
				currency: 'EUR'
			}).format(parseInt(this.price));
		}
	},
	methods: {
		inCart() {
			this.cart = !this.cart;
		},

		inBookmark() {
			this.bookmark = !this.bookmark;
			this.active = !this.active;
		}
	}
};
