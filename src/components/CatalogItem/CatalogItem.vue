<template lang="pug">

	include ../../layout/mixins

	router-link.catalog-item(:to='{ name: "product", params: { id: id } }')
			div(:class='[ active ? "catalog-item-action catalog-item-action_active" : "catalog-item-action" ]')
					button(type='button' @click='inCart()' :class='[ cart ? "catalog-item__cart catalog-item__cart_active" : "catalog-item__cart" ]')
							+svgIcon(22, 20, '', '#cart')
					button(type='button' @click='inBookmark()' :class='[ bookmark ? "catalog-item__bookmark catalog-item__bookmark_active" : "catalog-item__bookmark" ]')
							+svgIcon(22, 20, '', '#bookmark')

			button.catalog-item__fast-view(type='button')
					+svgIcon(24, 16, 'icon', '#eye')
					| Быстрый просмотр

			div.catalog-item-image
					img.catalog-item__photo(:src='image')
			div.catalog-item-content
					span.catalog-item__title {{ title }}
					span.catalog-item__description {{ description }}
					span.catalog-item__price {{ priceFormat }}

</template>

<script src='./CatalogItem'></script>

