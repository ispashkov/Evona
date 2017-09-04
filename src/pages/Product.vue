<template lang='pug'>

	include ../layout/mixins

	div.container
		div.row.justify-content-center
			div.col-9.col-hd-7
				div.row
					div.col.d-flex.justify-content-between
						div.product-image
							img.product-image__photo(:src='images[currentPhoto]' alt='Evona & Nysense')

						carousel(:step='0' :images='images' :items='imageLength' @currentSlide='currentSlide' :vertical='true')

					div.col-1

					div.col
						router-link(to='/catalog' class='link-back product__back')
							+svgIcon(12, 12, 'link-back__icon', '#two-arrow')
							span.link-back__text Вернуться в каталог

						h1.heading.heading_h2.product__title {{ products[item].title }}

						div.product-properties
							div.product-properties-item
								span.label.product-properties__label Бренд:
								=" "
								span.product-properties__value {{ products[item].brand }}

							div.product-properties-item
								span.label.product-properties__label Коллекция:
								=" "
								span.product-properties__value {{ products[item].collection }}

							div.product-properties-item
								span.label.product-properties__label Состав:
								=" "
								span.product-properties__value {{ products[item].composition }}

							div.product-properties-item
								span.label.product-properties__label Цвет:
								=" "
								span.product-properties__value {{ products[item].color }}



							hr.hr.product__hr

							div.product-colors
								span.label.mb-2 Цвета:

								div.product-colors__slider
									carousel(:step='0' :images='images' :items='imageLength' @currentSlide='' :style='left')

							div.product-price
								div.row
									div.col-auto
										span.label.product-price__label Цена опт:
										span.product-price__value {{ priceOpt }}

									div.col-auto
										hr.hr.hr_vertical
									div.col-auto
										span.label.product-price__label Цена опт:
										span.product-price__value {{ priceRecommended }}



							div.product-sizes
								span.label.mb-1 Размеры и количество:

								div.product-sizes-row

									div.product-sizes-item(v-for='size in sizes')
										label.product-sizes__label {{ size.name }}
										input(
											type='text'
											:class='[ size.value ? "product-sizes__field product-sizes__field_active" : "product-sizes__field"]' v-model='size.value'
											:readonly="readonly"
											:disabled='disabled'
											@keypress='isNumber($event)'
										)

									div.product-sizes-result

										div.product-sizes-item
											label.product-sizes__label.product-sizes__label_auto Всего
											span.product-sizes__result {{ result }}

										div.product-sizes-item
											label.product-sizes__label.product-sizes__label_auto Сумма
											span.product-sizes__result.product-sizes__result_primary {{ sum }}

							div.row
								div.col-auto
									button.button.button_primary.button_lg(type='button') Перейти в корзину
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

import Carousel from '../components/Carousel/Carousel.vue';
import './images/product.jpg';
import './images/product-2.jpg';
import './images/product-3.jpg';
import './images/product-4.jpg';

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

		}
	},
	computed: {
		...mapGetters(['products']),

		left() {
			if (this.imageLength <= 5) {
				return 'left: 0'
			}
		},

		item() {
			return this.$route.params.id;
		},

		images() {
			return this.products[this.item].photos
		},

		imageLength() {
			return this.images.length
		},

		priceOpt() {
			return new Intl.NumberFormat('ru-IN', {
				style: 'currency',
				currency: 'EUR'
			}).format(parseInt(this.products[this.item].price.opt))
		},

		priceRecommended() {
			return new Intl.NumberFormat('ru-IN', {
				style: 'currency',
				currency: 'RUB'
			}).format(parseInt(this.products[this.item].price.recommended))
		},

		result() {
			var total = 0;

			this.sizes.forEach(size => {
				if (!size.value.length) {
					return
				}

				total += parseInt(size.value);

			})

			return total;
		},

		sum() {
			return new Intl.NumberFormat('ru-IN', {
				style: 'currency',
				currency: 'EUR'
			}).format(parseInt(this.products[this.item].price.opt) * this.result)
		}
	},
	methods: {
		isNumber(event) {
			const charCode = (event.which) ? event.which : event.keyCode;

			if (charCode < 48 || charCode > 57) {
				event.preventDefault();
			} else {
				return true;
			}
		},

		currentSlide(val) {
			this.currentPhoto = val
		}
	}
}
</script>


