<template lang="pug">
	include ../../layout/mixins

	div.catalog
			div.container
					div.row.mb-5
							div.col-4.d-flex.align-items-center
									router-link(to='/btb' class='link-back')
											+svgIcon(12, 12, 'link-back__icon', '#two-arrow')
											span.link-back__text Вернуться к каталогам
							div.col-4
									h1.heading.heading_page Заказная сессия осень-зима 2017


					div.row.mb-5
							div.col-4.d-flex.align-items-center
									span.label Фильтр:

									selectbox(placeholder='Бренд')

									selectbox(placeholder='Товарная группа')

							div.col-4.d-flex.align-items-center
									pagination
							div.col
							div.col-3
									search

					div.row.mb-5
							div.col.col-lg-4.col-xl-3.col-hd-2.catalog-item-wrapper(v-for='(item, index) in products' )
									catalog-item(:id='item._id' :title='item.title' :image='item.photos[0]' :description='item.composition' :price='item.price.opt' :key='index')

					div.row.justify-content-center.mb-5
							div.col-4
									pagination


</template>

<script src='./Catalog'></script>

