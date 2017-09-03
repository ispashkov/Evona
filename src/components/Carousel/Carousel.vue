<template lang="pug">
	include ../../layout/mixins

	div(:class='[ vertical ? "carousel carousel_vertical" : "carousel" ]')
		button(type='button' class='carousel__navigation carousel__navigation_prev' @click='carouselPrev()')
			+svgIcon(24, 13, 'icon', '#arrow-slider')

		div.carousel-slides(v-if='vertical' :style='{ height: carouselWidth + "px" }')
				div.carousel-inner(:style='{ height: carouselInnerWidth + "px", marginTop: dataStep + "px" }')
						div(
								v-for='(item, key) in images'
								ref='carouselItem'
								:class='[dataIndex == key ? "carousel-item carousel-item_active" : "carousel-item"]'
								:key='key'
								style='margin: 0.25rem 0'
								@click='itemClick(key)'
								)

							img.carousel-item__photo(:src='item' alt='Evona&Nysense')

		div.carousel-slides(v-else :style='{ width: carouselWidth + "px" }')
				div.carousel-inner(:style='{ width: carouselInnerWidth + "px", marginLeft: dataStep + "px" }')
						div(
							:class='[dataIndex == key ? "carousel-item carousel-item_active" : "carousel-item"]'
							ref='carouselItem'
							:key='key'
							style='margin: 0 0.25rem'
							v-for='(item, key) in images'
							@click='itemClick(key)'
						)
							img.carousel-item__photo(:src='item' alt='Evona&Nysense')

		button(type='button' class='carousel__navigation carousel__navigation_next' @click='carouselNext()')
				+svgIcon(24, 13, 'icon', '#arrow-slider')

</template>

<script src='./Carousel'></script>

