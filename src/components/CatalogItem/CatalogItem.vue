<template lang="pug">

    include ../../layout/mixins

    router-link.catalog-item(to='/product')
        div(:class='[ active ? "catalog-item-action catalog-item-action_active" : "catalog-item-action" ]')
            button(type='button' @click='inCart()' :class='[ cart ? "catalog-item__cart catalog-item__cart_active" : "catalog-item__cart" ]')
                +svgIcon(22, 20, '', '#cart')
            button(type='button' @click='inBookmark()' :class='[ bookmark ? "catalog-item__bookmark catalog-item__bookmark_active" : "catalog-item__bookmark" ]')
                +svgIcon(22, 20, '', '#bookmark')

        button.catalog-item__fast-view(type='button')
            +svgIcon(24, 16, 'icon', '#eye')
            | Быстрый просмотр

        div.catalog-item-image
            img.catalog-item__photo(src='./catalog-image2.png')
        div.catalog-item-content
            span.catalog-item__title Пальто Evona
            span.catalog-item__description 100% шерсть
            span.catalog-item__price 225 $

</template>

<script src='./CatalogItem'></script>

