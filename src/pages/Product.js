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

		item() {
			var el;

			if (this.products.length) {
				this.products.filter(item => {
					if (item['id'] === this.$route.params.id) el = item;
				});
			}

			return !this.products.length ? this.$store.getters.productItem : el;
		},

		imagesLength() {
			return this.item.photos.length >= 5 ? 5 : this.item.photos.length;
		},

		carouselItems() {
			return this.item.photos.length >= 5 ? 5 : this.item.photos.length;
		},

		left() {
			return this.imagesLength <= 5 ? 'left: 0' : '';
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
	created() {
		!this.products.length
			? this.$store.dispatch('fetchProduct', this.$route.params.id)
			: null;
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
