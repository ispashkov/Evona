<template lang="pug">
    include ../../layout/mixins

    div.catalog
        div.container
            div.row.mb-5
                div.col-4.d-flex.align-items-center
                    router-link(to='/' class='link-back')
                        +svgIcon(12, 12, 'link-back__icon', '#two-arrow')
                        span.link-back__text Вернуться к каталогам
                div.col-4
                    h1.heading.heading_page Заказная сессия осень-зима 2017
            
            
            div.row.justify-content-between.mb-5
                div.col-4.d-flex.align-items-center 
                    span.label Фильтр:
                    
                    selectbox(placeholder='Бренд')

                    selectbox(placeholder='Товарная группа')

                div.col-4.d-flex.align-items-center
                    pagination
                div.col-3
                    search

            div.row.mb-5
                div.col.col-lg-4.col-xl-3.col-hd-2.catalog-item-wrapper(v-for='item in 12')
                    catalog-item

            div.row.justify-content-center.mb-5
                div.col-4
                    pagination


</template>

<script src='./Catalog'></script>

