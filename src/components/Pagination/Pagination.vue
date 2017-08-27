<template lang="pug">

    include ../../layout/mixins
    
    ul.pagination
        li.pagination__item.pagination__item_prev.pagination__item_inactive
            +svgIcon(25, 15, '', '#pagination__arrow')
        li.pagination__item.pagination__item_active: a.pagination__link(href='javascript:void(0)') 1
        li.pagination__item: a.pagination__link(href='javascript:void(0)') 2
        li.pagination__item: a.pagination__link(href='javascript:void(0)') 3
        li.pagination__item: a.pagination__link(href='javascript:void(0)') 4
        li.pagination__item: a.pagination__link(href='javascript:void(0)') 5
        li.pagination__item.pagination__item_next
            +svgIcon(25, 15, '', '#pagination__arrow')

</template>

<script src='./Pagination'></script>


