import { mapGetters } from 'vuex';

import Carousel from '../components/Carousel/Carousel.vue';

export default {
	name: 'ProductPage',
	components: {
		Carousel
	},
	data() {
		return {
			currentPhoto: 0,
			readonly: false,
			disabled: false,
			sizes: [
				{
					name: 'xs',
					value: ''
				},
				{
					name: 's',
					value: ''
				},
				{
					name: 'm',
					value: ''
				},
				{
					name: 'l',
					value: ''
				},
				{
					name: 'xl',
					value: ''
				}
			]
		};
	},
	computed: {
		...mapGetters(['products']),

		left() {
			if (this.imagesLength <= 5) {
				return 'left: 0';
			}
		},

		item() {
			var el;

			this.products.filter(item => {
				if (item['_id'] === this.$route.params.id) el = item;
			});

			return el;
		},

		images() {
			return this.item.photos;
		},

		imagesLength() {
			return this.item.photos.length >= 5 ? 5 : this.item.photos.length;
		},

		priceOpt() {
			return new Intl.NumberFormat('ru-IN', {
				style: 'currency',
				currency: 'EUR'
			}).format(parseInt(this.item.price.opt));
		},

		priceRecommended() {
			return new Intl.NumberFormat('ru-IN', {
				style: 'currency',
				currency: 'RUB'
			}).format(parseInt(this.item.price.recommended));
		},

		result() {
			var total = 0;

			this.sizes.forEach(size => {
				if (!size.value.length) {
					return;
				}

				total += parseInt(size.value);
			});

			return total;
		},

		sum() {
			return new Intl.NumberFormat('ru-IN', {
				style: 'currency',
				currency: 'EUR'
			}).format(parseInt(this.item.price.opt) * this.result);
		}
	},
	methods: {
		isNumber(event) {
			const charCode = event.which ? event.which : event.keyCode;

			if (charCode < 48 || charCode > 57) {
				event.preventDefault();
			} else {
				return true;
			}
		},

		currentSlide(val) {
			this.currentPhoto = val;
		}
	}
};
