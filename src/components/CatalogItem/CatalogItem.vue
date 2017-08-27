<template lang="pug">

    include ../../layout/mixins

    a.catalog-item
        div.catalog-item-overlay
            button.catalog-item__cart(type='button')
                +svgIcon(22, 20, '', '#cart')
            button.catalog-item__bookmark(type='button')
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

